---
date: 2017-03-31
title: PSD 文件减小体积
category: photoshop
tags:
- photoshop
description: 有时候一个 psd 文件有用的信息基本上没有，但是文件体积都到大几十M，搜了很多方法才找到这个神奇的函数
---
# PSD 文件减小体积
有时候一个psd文件有用的信息基本上没有，但是文件体积都到大几十M，搜了很多方法才找到这个神奇的函数
```jsx
function deleteDocumentAncestorsMetadata() {
    whatApp = String(app.name);//String version of the app name
    if(whatApp.search("Photoshop") > 0)  { //Check for photoshop specifically, or this will cause errors
        //Function Scrubs Document Ancestors from Files
        if(!documents.length) {
        alert("There are no open documents. Please open a file to run this script.")
        return;
        }
        if (ExternalObject.AdobeXMPScript == undefined) ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
        var xmp = new XMPMeta( activeDocument.xmpMetadata.rawData);
        // Begone foul Document Ancestors!
            xmp.deleteProperty(XMPConst.NS_PHOTOSHOP, "DocumentAncestors");
            app.activeDocument.xmpMetadata.rawData = xmp.serialize();
         }
}
//Now run the function to remove the document ancestors
deleteDocumentAncestorsMetadata();
```

<Comment />
