---
slug: /module
sidebar_position: 3
title: Module
author: kaihu
---


# Module

The modules of the CityFlow Platform consist of two parts: the **Node Container** and the **Module Function**. The node container handles connections and data transmission with other nodes and provides a basic UI framework, while the module function focuses on the implementation of the module's internal functionality. These two components are assembled through a wrapper, ensuring the independence of the module's internal logic. This architecture makes development and extension easier and allows for changing the basic UI by switching different containers without altering the internal logic (e.g., switching between the Expand Node and Pin Node containers to transition from the workflow interface to the publishing interface).

![wrap process](assets/wrapper.png)

The CityFlow Platform primarily includes the following four types of node containers:

- **Basic Node Container**

The Basic Node Container can receive input from other nodes and output processed data. Most of the system's core modules are built on the Basic Node Container, and users are not allowed to modify the module code. The Basic Node includes three buttons: `run`, `pin`, and `remove`. The `run` button executes the module code within the container; the `pin` button converts the container into a display node; and the `remove` button deletes the node.

![basic](assets/basic.png)


- **Expand Node Container**

The Expand Node Container adds a settings panel to the Basic Node, which can be opened by clicking the `expand` button. The Expand Node provides greater flexibility, and user-defined modules are built on the Expand Node Container, allowing users to customize module code and UI interfaces.

![expand](assets/expand.png)

- **Annotation Node Container**

The Annotation Node Container cannot receive input from other nodes and does not participate in the core logic of the workflow. It serves only for information annotation and display purposes.

![annotation](assets/annotation.png)

- **Pin Node Container**

The Pin Node Container can receive input from other nodes and output data, but it no longer explicitly displays the connections between different nodes, and the connections between nodes cannot be modified. It is used for displaying and publishing the workflow after it is built. The Pin Node Container can be resized freely using the mouse to adapt to different interface layout requirements. Additionally, **Basic Nodes** and **Expand Nodes** can be directly converted into Pin Nodes by clicking the `pin` button.

![pin](assets/pin.png)