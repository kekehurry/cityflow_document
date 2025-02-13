---
slug: /architecture
sidebar_position: 1
title: System Architecture
author: kaihu
---

# System Architecture/系统架构

![system architecture](assets/architecture.png)

The system architecture of the CityFlow platform consists of three core components: **CityFlow Database**, **CityFlow Workstation**, and **CityFlow Executor**. The CityFlow Database is a graph-based database that stores workflow information as nodes and edges, while CityFlow Workstation serves as the main user interface, providing an intuitive, modular programming environment. CityFlow Executor is responsible for managing the execution containers of workflows.

CityFlow Platform 的系统架构由三个核心部分组成：**CityFlow Database**，**CityFlow Workstation** 和 **CityFlow Executor**。其中CityFlow Database是一个图结构数据库，以节点和边的方式存储工作流信息，CityFlow WorkStation是主要的用户界面，提供了易于使用的图形化、模块化编程界面，CityFlow Executor是负责管理工作流运行容器的组件。

## CityFlow Workstation

CityFlow Workstation is a node-based visual programming environment similar to `Grasshopper` and `ComfyUI`. Its main user interface is built on `react-flow`. The basic modules included in CityFlow Workstation can be categorized based on the type of code they execute:

CityFlow Workstation是一个类似于`Grasshopper`和`ComfyUI`的基于节点的可视化编程工作台，主要UI界面基于`react-flow`构建，CityFlow Workstation 所包含的基础模块根据根据其所运行的代码类型可以分为：

- **Annotation Module /注释模块** ：This module does not participate in the logic of the workflow but serves as an auxiliary tool for explanation and annotation. /注释模块不参与工作流的逻辑运行，仅作为辅助说明和标记的工具。

- **React Module /React模块** ：Users can write and execute React code here. Once the code is submitted, it is compiled by **CityFlow Executor** into browser-ready frontend code and can run independently./ 可以编写和执行前端React代码，React模块提交代码后，将由**CityFlow Executor**编译成浏览器可直接运行的前端代码，编译完成后便可独立运行。

- **Python Module /Python模块**：This module allows users to write Python code. The code is submitted to **CityFlow Executor** for execution, and the results are returned. Each execution requires a connection to CityFlow Executor. / 可以编写Python代码，Python模块提交代码后，代码由**CityFlow Executor**执行，并返回运行结果，因此每次运行Python模块都需与**CityFlow Executor**连接。

## CityFlow Database

CityFlow Database uses Neo4J, a graph database, to store workflow information. The main types of nodes and edges in the database are as follows:

CityFlow Database 采用Neo4J图数据库保存工作流信息，其主要节点与边的类型有以下几种：

**Nodes**：
- **Author**：Information about the module or workflow author. /模块或者工作流作者信息。
- **Workflow**：Main information about the workflow, including the name, author, description, type, node IDs, and connecting edges. /工作流主要信息，包括工作流的名称、作者、描述、类型、以及所包含的节点ID和连接的边等。
- **Module**：Main information about the module, including the name, author, description, and code. /模块的主要信息，包括模块的名称、作者、描述、代码等

Additionally, all nodes in the database are embedded using the all-MiniLM-L6-v2 model to convert them into vector representations, enabling semantic-based workflow search.

同时CityFlow Datase中所有节点的基本信息，都通过嵌入模型`all-MiniLM-L6-v2`转换为了向量存储，以方便基于语义信息进行工作流搜索。

**Edges**：
- **created_by**: Connects a `Module` and its `Author`, or a `Workflow` and its `Author`. /`Module`和`Author`或者`Worflow`和`Author`之间的连接。
- **part_of**: Connects a `Module` and a `Workflow`. /`Module`和`Workflow`之间的连接。
- **connected_to**: Connects one `Module` to another. /`Module`和`Module`之间的连接。
- **forked_from**: Connects a `Workflow` to another`Workflow` if it is derived from it, the system automatically adds reference information using 'forked_from'. / `Workflow`和`Workflow`之间的连接。如果一个`Worflow`是基于之前的`Worflow`构建的，系统会自动使用`forked_from`添加引用信息。

The graph-based database is highly compatible with the node-based UI in CityFlow Workstation. With the integration of large language models and GraphRAG technology, workflows can be searched more accurately based on semantic needs.

基于图结构的数据库与**CityFlow WorkStation**基于节点的UI界面适配度很高，并且结合大语言模型与GraphRAG技术，可以实现根据不同需求更准确地检索相关工作流。

## CityFlow Executor

To ensure flexibility and security during code execution, CityFlow Executor uses Docker containers to run workflows. Different modules within a workflow share a single **CityFlow Runner** container environment. Users can configure the environment for each workflow using YAML format, and each CityFlow Runner container includes a temporary database for module data sharing. The lifecycle of CityFlow Runner containers is managed by CityFlow Executor. If the user disconnects from the UI for a specified period, the corresponding container will be automatically destroyed. The containerized execution approach also allows for future expansion to support headless (non-GUI) workflow execution.

为了确保代码运行的灵活性与安全性，CityFlow Executor采用Docker容器运行不同的工作流，一个工作流的不同模块共用一个**CityFlow Runner**容器环境，用户可以在初始化工作流时，使用yml格式配置不同的代码环境，并且每个CityFlow Runner容器都内置了一个临时数据库，以方便不同模块之间共享数据。CityFlow Runner的生命周期由CityFlow Executor共同管理，当用户UI界面断开连接超过一段时间时，CityFlow Executor将会自动销毁相应的CityFlow Runner容器。同时基于容器化运行的方式也为之后实现无图形界面（headless mode）直接调用工作流预留了升级空间。

