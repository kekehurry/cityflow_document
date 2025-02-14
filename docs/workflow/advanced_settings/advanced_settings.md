---
slug: /workflow/advanced_settings
sidebar_position: 2
title: Advanced Settings
author: kaihu
---

# Advanced Settings / 高级设置

The CityFlow Platform does not provide default API keys for large language models and map services. You can set your own API keys in the **Advanced Settings**. This information will only be stored locally in the browser and will not be uploaded to the cloud. Below is an introduction on how to obtain and set the large language model API.

CityFlow Platform 默认不提供大语言模型以及地图服务的API KEY，您可以在**Advanced Settings**中设置自己的API KEY， 这些信息仅会保存在浏览器本地，不会上传至云端。下文是获取和设置大语言模型API的介绍。

## API Key Configuration / API密钥配置

### Get API Key

Services supporting the Openai API format can be used on the CityFlow platform. Here, we take the acquisition of the DeepSeek API as an example:

支持Openai API格式的服务都可以在CityFlow平台使用，此处以DeepSeek API的获取为例:

- Visit the [DeepSeek official website](https://platform.deepseek.com/)

- Log in and create an API key

- Copy the generated key

- Paste the copied key in the Advanced Settings dropdown menu under INIT ENVIRONMENT on the Cityflow workflow interface. Note: All keys are only saved in the browser's local localStorage.

- Click the ASSISTANT tab at the bottom of the main interface, then click the menu button in the upper right corner of the chat interface to enter the large language MODEL assistant settings interface, and configure the BASE_URL and MODEL. For DeepSeek, fill in x for BASE_URL and deepseek-chat for MODEL. For other MODELs, modify to the corresponding link and MODEL name. The BASE_URL and MODEL set in the global assistant settings will be shared with other assistants to avoid repeated settings, but other assistants support individual modifications.

### 获取API密钥

- 访问 [DeepSeek官网](https://platform.deepseek.com/)
- 登录后创建API密钥
- 复制生成的密钥
- 在Cityflow工作流界面，`INIT ENVIRONMENT` 下方的 `Advanced Settings` 下拉菜单中粘贴复制的密钥。注意：所有的密钥都只会保存在浏览器本地的 `localStorage`中。
- 点击主界面下方的`ASSISTANT`标签，然后点击聊天界面右上方的菜单按钮，进入大语言模型助手设置界面，配置好`BASE_URL` 和 `MODEL`。以DeepSeek为例，这里`BASE_URL`填入`https://api.deepseek.com`, `MODEL`填入`deepseek-chat`。 如其他模型则修改为对应链接和模型名称。在全局助手设置的`BASE_URL`和`MODEL`会与其他助手共享，以避免重复设置，但是支持其他助手单独修改。

After completing the setup, you can use the large language MODEL assistant to assist in completing tasks.

设置完成之后，即可使用大语言模型助手辅助完成工作。

## Using a Local Large Language Model / 使用本地大语言模型

You can also use a locally running large language model. We recommend Ollama. After installing the Ollama client from the official website, run the following command in the terminal to download the required model:

你也可以使用本地运行的大语言模型，推荐使用 Ollama。在官网下载并安装 Ollama 客户端后，在终端运行以下命令下载所需模型：

```
ollama pull deepseek-r1:latest
```
Then, in the CityFlow platform, update `BASE_URL` to `http://localhost:11434/v1` and set the model name to the one you downloaded, such as `deepseek-r1:latest`.

然后在CityFlow平台中将`BASE_URL`修改为 `http://localhost:11434/v1`,模型名称改为下载的模型，如`deepseek-r1:latest`即可。


##  Code Auto-Completion (Experimental Feature) /代码自动补全(实验功能)

CityFlow supports code auto-completion in the editor, though this feature is still experimental. You can enable or disable it in **Advanced Settings**.

CityFlow支持在编辑器中自动补全代码，目前仍是实验功能，你可以在**Advanced Settings**选择开启或关闭功能。代码补全所需的大语言模型需要额外设置，以便使用与聊天模型不同的模型。设置方式与上文相同。。



