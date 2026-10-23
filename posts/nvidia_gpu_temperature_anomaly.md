---
date: 2022-12-18
title: Hyper-V 直通 T4 空闲高温：配置 NVIDIA 持久化服务
category: linux
tags:
- linxu
- gpu
description: Hyper-V 直通 T4 空闲高温：配置 NVIDIA 持久化服务
---
# Hyper-V 直通 T4 空闲高温：配置 NVIDIA 持久化服务

环境：Hyper-V 直通 Tesla T4，Debian 13，NVIDIA 驱动 `575.57.08`。

## 现象与判断

长时间未连接 SSH 后，首次运行 `nvidia-smi`，GPU 温度竟然达到 94℃。当时没有列出 GPU 业务进程，显存占用为 0 MiB，但显卡处于 P0，功耗约 40W。

随后几分钟温度逐渐下降，现场读数如下：

| 阶段 | 持久化 | 状态 | 温度 | 功耗 |
|---|---|---|---|---|
| 首次查询 | Off | P0 | 94℃ | 40W |
| 约两分钟后 | Off | P0 | 71℃ | 33W |
| 手动开启持久化数分钟后 | On | P8 | 43℃ | 14W |
| 安装服务后检查 | On | P8 | 36℃ | 约 10W |

P0 是最高性能档位，不代表满负载；P8 是本例中的低功耗档位。

检查发现，驱动已经加载，`nvidia-persistenced` 程序也已安装，但缺少开机服务。**降温在开启持久化前就已开始，因此尚不能断定整个现象都由缺少持久化导致。**

## 解决办法：让持久化服务随系统启动

没有 GPU 客户端且未开启持久化时，驱动可能释放设备状态。`nvidia-persistenced` 通过持续持有设备文件维持初始化状态，无须运行计算任务来“保活”。[NVIDIA 官方持久化说明](https://docs.nvidia.com/deploy/driver-persistence/persistence-daemon.html)

手动执行 `sudo nvidia-smi -pm 1` 可以立即开启持久化，但不会跨重启保存，所以还需要配置开机服务。[NVIDIA nvidia-smi 文档](https://docs.nvidia.com/deploy/nvidia-smi/index.html)

下面的脚本使用**已安装驱动自带的示例包**，适用于程序和示例包均存在、但尚未安装服务的机器。不同发行版路径可能不同；已有服务时，优先检查并启用现有配置。

在 root 终端执行：

```bash
(
  set -e
  nvpd_tmp=$(mktemp -d /tmp/nvpd-init.XXXXXX)

  tar -xjf \
    /usr/share/doc/NVIDIA_GLX-1.0/samples/nvidia-persistenced-init.tar.bz2 \
    -C "$nvpd_tmp"

  cd "$nvpd_tmp/nvidia-persistenced-init"
  sh ./install.sh -p /etc/systemd/system systemd
)
```

脚本会创建专用系统账号、安装 systemd 服务、设置开机启动并立即运行，无须重装驱动或重启系统。专用账号禁止登录，日常通过 systemd 管理即可。

## 验证结果

```bash
systemctl is-enabled nvidia-persistenced
systemctl status nvidia-persistenced --no-pager
nvidia-smi
```

应看到服务为 `enabled`、`active (running)`，GPU 的 `Persistence-M` 为 `On`。

另有一台双 T4 物理机，长期运行着 Python GPU 程序。安装后持久化成功开启，但仍为 P0、每张约 31W：**持久化服务不会强制进入 P8，也不会清空业务显存。**

截至记录时，服务已验证生效，重启后的长期效果仍待观察。计划重启后先无人登录空闲 10–20 分钟，再检查首次温度读数和本次启动日志：

```bash
journalctl -b -u nvidia-persistenced --no-pager
```

如果持久化正常后仍持续高温，还需要检查负载、风扇和风道，不能把持久化当成通用降温开关。
