---
slug: /module/builder/react
sidebar_position: 1
title: React模块
author: kaihu
---

# React 模块

在**Module Builder**设置界面，将模块类型切换为`interface`之后，模块的代码编辑器将会切换为`react`代码模式。下面是一个简单的示例：

```javascript
//entrypoint.js

import React, {useState} from 'react';

// main function
export default function CustomUI(props){
    const {input,config,setConfig,setOutput} = props; 
    return (
    <div style={{textAlign:"center"}}>
        <h3>{config?.name}</h3>
        <h6>{config?.author}</h6>
    </div>)
}
```

## 注意事项：

- 代码编辑器支持多文件，但是模块会强制将第一个文件作为主入口文件，并命名为`entrypoint.js`，同时主入口文件必须有一个默认导出。

- 每个代码文件的第一行，默认为该文件的文件名，**除主入口文件外，必须填写**，如`//helper.js`,其他文件中可通过相对路径，导入该文件，如 `import Helper from './helper'`（目前仅支持`.js`文件格式的导入，不支持`.css` 和 `.jsx`等其他格式。）。

- 代码主文件中必须导入`React`: `import React from "react"`

- 点击`+`按钮后提交代码至**CityFlow Runner**, 待编译完成后，点击运行界面，可在预览窗口看见代码渲染结果，同时可通过浏览器的开发者工具进行错误调试。


## 内置变量

模块构建器会自动将`input`,`config`两个变量,以及`setConfig`,`setOutput`两个函数注入主文件的默认导出函数。这些变量和函数的具体功能如下：

- **`input`**：获取从其他模块传入的输入，输入格式为`Object`，例如模块有`input1`,`input2`两个输入，可通过`input?.input1`和`input?.input2`直接调用。

⚠️注意：由于模块初始化时，`input`可能为`null`，因此尽量使用`input?.input1`替代`input.input`以防止出错。

- **`config`**：获取模块的设置参数，如模块的高度，宽度，名称等等。调用方式同`input`, 如获取模块的宽度：`config?.width`

- **`setConfig`**：更改模块的设置，如更新模块的宽度: 
    `setConfig({...config, width:500})`

- **`setOutput`**：设置模块的输出，如：
    `setOutput({outpu1:100, output2:200})`