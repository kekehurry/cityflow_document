---
slug: /workflow/assistant
sidebar_position: 3
title: AI Assistant
author: kaihu
---

# AI Assistant / AI 助手

CityFlow provides three types of large language model assistants: the **Global Assistant**, the **Module Assistant**, and the **Data Assistant**, each serving different scenarios. The Global Assistant handles general tasks such as general Q&A, workflow retrieval (WIP), tool usage (WIP), etc. The Module Assistant aids in writing code for computational modules, with each module's assistant parameters set independently, allowing for tailored behavior as needed. The Data Assistant uses large language MODELs for data processing, enabling natural language transformation of the Data Assistant into various processors.

CityFlow 提供三种大语言模型助手，全局助手、模块助手和数据助手，分别服务于不同场景。全局助手负责通用任务的处理，如通用问答、工作流检索（WIP）、工具使用（WIP）等等；模块助手辅助计算模块代码的编写，每一个模块的助手参数设置都互相独立，因此可以根据需要配置模块的不同行为；数据助手以大语言模型进行数据处理，可以用自然语言将数据助手化身不同的处理器。

All assistants share the same API key but support independent configuration of MODEL parameters for fine-grained control.

所有助手共享同一API密钥，但支持独立配置模型参数，实现精细化控制。


## Assistant Types / 助手类型详解

### Global Assistant / 全局助手

- General Q&A consultation / 通用问答咨询

- Workflow retrieval (WIP) / 工作流程检索（开发中）

- Tool use (WIP) / 工具调用（开发中）

![assistants](assets/llm_assistants.png)

### Module Assistant / 模块助手

- Computational modules can be configured independently / 计算模块可独立配置
- Automatically obtains module context information / 自动获取模块上下文信息
- Supports generating module code that meets the requirements of the cityflow platform / 支持生成符合cityflow platform平台要求的模块代码
- **⚠️ Note: If unsure, it is not recommended to modify the system prompts of the module assistant / 注意： 若无把握，不建议修改模块助手的系统提示词**

![module_ssistant](assets/module_assistant.gif)

### 数据助手

- Clearly define data structure in system prompts / 在系统提示中明确数据结构
- It is recommended to use json_object as the output structure for subsequent processing / 建议使用`json_object`作为输出结构以便后续处理

![data_ssistant](assets/data_assistant.gif)


## Detailed Parameters / 详细参数设置

In the upper right corner of the chat interface, there is a menu button. Clicking it will switch to the large language MODEL parameter settings interface.

在聊天界面右上角，有一个菜单按钮，点击之后会切换到，大语言模型参数设置界面

### Core Parameters

- system_prompt: Defines the assistant's identity and behavior with system-level prompts

- response_format: Return format (text/json_object, recommended for Data Assistant to use json). If the return format is json_object, the word json must appear in the system prompt.

- temperature: The higher the value, the more random the output (recommended 0.3-0.8)

- frequency_penalty: Suppresses repeated words (positive values penalize/negative values encourage)

- presence_penalty: Controls topic novelty (positive values explore new topics)

### 核心参数说明

- system_prompt: 定义助手身份和行为的系统级提示词
- response_format: 返回格式(text/json_object,推荐数据助手使用json),返回格式为`json_object`则在系统提示词中必须出现`json`字样。
- temperature: 值越高输出越随机（建议0.3-0.8）
- frequency_penalty: 抑制重复用词（正值惩罚/负值鼓励）
- presence_penalty: 控制话题新颖度（正值探索新主题）




