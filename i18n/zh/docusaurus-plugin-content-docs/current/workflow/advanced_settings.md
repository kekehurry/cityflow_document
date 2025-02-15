---
slug: /workflow/advanced_settings
sidebar_position: 2
title: 高级设置
author: kaihu
---

# 高级设置

CityFlow Platform 默认不提供大语言模型以及地图服务的API KEY，您可以在**Advanced Settings**中设置自己的API KEY， 这些信息仅会保存在浏览器本地，不会上传至云端。下文是获取和设置大语言模型API的介绍。

## API密钥配置

### 获取API密钥

支持Openai API格式的服务都可以在CityFlow平台使用，此处以DeepSeek API的获取为例:

- 访问 [DeepSeek官网](https://platform.deepseek.com/)
- 登录后创建API密钥
- 复制生成的密钥
- 在Cityflow工作流界面，`INIT ENVIRONMENT` 下方的 `Advanced Settings` 下拉菜单中粘贴复制的密钥。注意：所有的密钥都只会保存在浏览器本地的 `localStorage`中。
- 点击主界面下方的`ASSISTANT`标签，然后点击聊天界面右上方的菜单按钮，进入大语言模型助手设置界面，配置好`BASE_URL` 和 `MODEL`。以DeepSeek为例，这里`BASE_URL`填入`https://api.deepseek.com`, `MODEL`填入`deepseek-chat`。 如其他模型则修改为对应链接和模型名称。在全局助手设置的`BASE_URL`和`MODEL`会与其他助手共享，以避免重复设置，但是支持其他助手单独修改。

设置完成之后，即可使用大语言模型助手辅助完成工作。

## 使用本地大语言模型

您也可以使用本地运行的大语言模型，推荐使用 Ollama。在官网下载并安装 Ollama 客户端后，在终端运行以下命令下载所需模型：

```
ollama pull deepseek-r1:latest
```

然后在CityFlow平台中将`BASE_URL`修改为 `http://localhost:11434/v1`,模型名称改为下载的模型，如`deepseek-r1:latest`即可。


## 代码自动补全(实验功能)

CityFlow支持在编辑器中自动补全代码，目前仍是实验功能，您可以在**Advanced Settings**选择开启或关闭功能。代码补全所需的大语言模型需要额外设置，以便使用与聊天模型不同的模型。设置方式与上文相同。。



