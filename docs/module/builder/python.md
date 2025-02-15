---
slug: /module/builder/python
sidebar_position: 1
title: Python Module
author: kaihu
---

# Python Module

In the **Module Builder** settings interface, after switching the module type to `module`, the code editor will switch to `python` mode. The Python code is written in the same format as general Python code. Below is a simple example:

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

## Notes:

- The code editor supports multiple files, but the module will enforce the first file as the main entry file and name it `entrypoint.py`.

- The first line of each code file defaults to the file name, which **must be filled in except for the entry file**, such as `#helper.py`. Variables in other files can be imported via relative paths, such as `from .helper import main`.

- The **DEPENDENCY** panel supports file uploads, but the file must be read by obtaining the main folder path + file name via `os.getcwd()`. For example, after uploading the `data.json` file, the file's reading path is `os.path.join(os.getcwd(),'data.json')`.

- Terminal outputs during code execution will be displayed in `logs`, including `print` statement outputs.

## Built-in Modules

The `Module Builder` has two built-in cityflow modules to obtain inputs from other modules, output the module's running data, and call a mini-database shared by all modules in the workflow.

### cityflow.module

- **`cityflow.module.input`** : Obtain outputs from other modules. The value type is a dictionary, with dictionary keys corresponding to the module `input` variable names. For example, for a module with two input variables `input1` and `input2`, their values can be obtained in Python code as follows:

    ```python
    import cityflow.module as cm

    try:
        input1 = cm.input['input1']
        input2 = cm.input['input2']
    except Exception as e:
        print(e)
    ```
    ⚠️Note：During module initialization, `cm.input` may be `None`, causing `cm.input['input1']` to throw an error. Therefore, it is better to add error handling during actual operation.

- **`cityflow.module.config`** : Obtain the module's configuration information, such as width, height, name, and some preset variable values.

- **`cityflow.module.output`** : Set the module's output. Similar to the module input, the output can be set via a dictionary corresponding to the module output variable names, or directly via chained calls:

    ```python
    import cityflow.module as cm
    # Method One： output via a dictionary

    cm.output = {
        "output1" : 100,
        "output2" : 200,
    }

    # Method Two： output via chained calls

    cm.output.output1 = 100
    cm.output.output2 = 200

    ```
    
### cityflow.database


`cityflow.database` is a simple database based on `sqlite`, designed to facilitate data sharing among different modules in complex scenarios. For example, in simulation scenarios, large geographic information data can be directly saved in the shared database to avoid continuous transfer in the data flow, which may affect the workflow's efficiency. A simple example of using `cityflow.database` is as follows:

Save data in Module 1

```python
import cityflow.database as cdb
cdb.add_data("json_data1" , json_data)
```
Retrieve data in Module 2

```python
import cityflow.database as cdb
json_data = cdb.get_data("json_data1")
```
The default functions of `cityflow.database` are as follows:

- **`cityflow.database.add_data(key, value)`**: Save data to the database. If the data already exists, it will be updated.

- **`cityflow.database.get_data(key)`**: Retrieve data from the database.

- **`cityflow.database.key_exists(key)`**: Check if a key exists in the database.

- **`cityflow.database.clear_data()`**: Clear all data.


