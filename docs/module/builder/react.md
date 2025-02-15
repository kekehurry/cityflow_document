---
slug: /module/builder/react
sidebar_position: 1
title: React Module
author: kaihu
---

# React Module

In the **Module Builder** settings interface, after switching the module type to `interface`, the code editor will switch to `react` code mode. Below is a simple example:

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

## Notes:

- The code editor supports multiple files, but the module will force the first file to be the main entry file and name it `entrypoint.js`. The main entry file must have a default export.

- The first line of each code file is the file name by default. **Except for the main entry file, it must be filled in**, such as `//helper.js`. Other files can import this file via relative paths, such as `import Helper from './helper'` (Currently, only `.js` file formats are supported for import, and formats like `.css` and `.jsx` are not supported.).

- The main code file must import `React`: `import React from "react"`

- After clicking the `+` button, submit the code to **CityFlow Runner**. Once the compilation is complete, click the run interface to see the rendering result of the code in the preview window. You can also debug errors using the browser's developer tools.

## Built-in Variables & Functions

The module builder automatically injects the `input`, `config` variables, and the `setConfig`, `setOutput` functions into the default export function of the main file. The specific functions of these variables and functions are as follows:

- **`input`**: Gets the input passed from other modules. The input format is `Object`. For example, if the module has two inputs, `input1` and `input2`, they can be directly called via `input?.input1` and `input?.input2`.

    ⚠️Note: Since `input` may be `null` during module initialization, it is recommended to use `input?.input1` instead of `input.input` to prevent errors.

- **`config`**: Gets the module's configuration parameters, such as the module's height, width, name, etc. The calling method is the same as `input`, such as getting the module's width: `config?.width`

- **`setConfig`**: Changes the module's settings, such as updating the module's width:
    `setConfig({...config, width:500})`

- **`setOutput`**: Sets the module's output, such as:
    `setOutput({outpu1:100, output2:200})`