---
slug: /module/builder/python
sidebar_position: 1
title: Python模块
author: kaihu
---


# Python 模块


在**Module Builder**设置界面，将模块类型切换为`module`之后，模块的代码编辑器将会切换为`python`代码模式。python代码的编写与一般python代码格式无二，下面是一个简单的示例：

```python
#entrypoint.py

import cityflow.module as cm

# main function
def main():
    return {
    "output": cm.config["name"]
    }

#Set the output
cm.output = main()
print(cm.output)
```

## 注意事项：

- 代码编辑器支持多文件，但是模块会强制将第一个文件作为主入口文件，并命名为`entrypoint.py`。

- 每个代码文件的第一行，默认为该文件的文件名，**除主入口文件外，必须填写**，如`#helper.py`,其他文件中可通过相对路径，导入该文件内变量，如 `from .helper import main`。

- 在**DEPENDENCY**面板支持文件上传，但在读取是需通过`os.getcwd()`获取前主文件夹路径+文件名读取。如上传`data.json`文件后，该文件的读取路径为`os.path.join(os.getcwd(),'data.json')`。

- 代码运行中的终端输出会显示在`logs`中，包括`print`语句的打印信息。


## 内置模块

模块构造器中内置两个cityflow模块，以获取来自其他模块的输入、输出本模块运行数据，以及调用工作流所有模块共享的迷你数据库。

### cityflow.module

- **`cityflow.module.input`** : 获取来自其他模块的输出，数值类型为一个字典，字典键值对应，模块`input`的变量名，如对于一个拥有`input1`,`input2`两个输入变量的模块，在python代码中可通过如下方式获取其数值：

    ```python
    import cityflow.module as cm

    try:
        input1 = cm.input['input1']
        input2 = cm.input['input2']
    except Exception as e:
        print(e)
    ```
    ⚠️注意：在模块初始化是`cm.input`可能为`None`，会造成`cm.input['input1']`报错，因此在实际运行中添加错误处理更佳。

- **`cityflow.module.config`** : 获取模块的配置信息，如宽度，高度，名称，以及一些预设的变量取值等等。


- **`cityflow.module.output`** : 设置模型的输出，同模型输入一样，输出可以通过字典方式输出与模块`output`变量名对应的取值，也可以直接通过链式调用的方式输出：
    ```python
    import cityflow.module as cm
    # 方法一： 通过字典输出

    cm.output = {
        "output1" : 100,
        "output2" : 200,
    }

    # 方法二： 通过链式调用输出 (若代码中已采用方法一设置输出，则方法二不再支持)

    cm.output.output1 = 100
    cm.output.output2 = 200

    ```
    
### cityflow.database


`cityflow.database`是基于`sqlite`构建的一个简单的数据库，方便在一些复杂场景中不同模块共享数据，比如在仿真模拟中，对于一些数据量大的地理信息数据，可以直接保存在共享数据中，避免在数据流中不断转换传输影响工作流运行效率。`cityflow.database`一个简单的使用示例如下：

在模块一中保存数据

```python
import cityflow.database as cdb
cdb.add_data("json_data1" , json_data)
```
在模块二中调用数据

```python
import cityflow.database as cdb
json_data = cdb.get_data("json_data1")
```

`cityflow.database`的默认功能函数如下：

- **`cityflow.database.add_data(key, value)`**： 保存数值至数据库，如数据已存在，则会更新该数据。

- **`cityflow.database.get_data(key)`**： 从数据库中获取数据。

- **`cityflow.database.key_exists(key)`**： 检查数据库中是否存在某个键。

- **`cityflow.database.clear_data()`**： 清除所有数据。



