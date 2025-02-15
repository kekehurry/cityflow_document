---
slug: /workflow/advanced_settings
sidebar_position: 2
title: Advanced Settings
author: kaihu
---

# Advanced Settings

The CityFlow Platform does not provide default API keys for large language models and map services. You can set your own API keys in the **Advanced Settings**. This information will only be stored locally in the browser and will not be uploaded to the cloud. Below is an introduction on how to obtain and set the large language model API.

## API Key Configuration 

### Get API Key

Services supporting the Openai API format can be used on the CityFlow platform. Here, we take the acquisition of the DeepSeek API as an example:

- Visit the [DeepSeek official website](https://platform.deepseek.com/)

- Log in and create an API key

- Copy the generated key

- Paste the copied key in the Advanced Settings dropdown menu under INIT ENVIRONMENT on the Cityflow workflow interface. Note: All keys are only saved in the browser's local localStorage.

- Click the ASSISTANT tab at the bottom of the main interface, then click the menu button in the upper right corner of the chat interface to enter the large language MODEL assistant settings interface, and configure the BASE_URL and MODEL. For DeepSeek, fill in x for BASE_URL and deepseek-chat for MODEL. For other MODELs, modify to the corresponding link and MODEL name. The BASE_URL and MODEL set in the global assistant settings will be shared with other assistants to avoid repeated settings, but other assistants support individual modifications.


After completing the setup, you can use the large language MODEL assistant to assist in completing tasks.


## Using a Local Large Language Model

You can also use a locally running large language model. We recommend Ollama. After installing the Ollama client from the official website, run the following command in the terminal to download the required model:

```
ollama pull deepseek-r1:latest
```
Then, in the CityFlow platform, update `BASE_URL` to `http://localhost:11434/v1` and set the model name to the one you downloaded, such as `deepseek-r1:latest`.


##  Code Auto-Completion (Experimental Feature)

CityFlow supports code auto-completion in the editor, though this feature is still experimental. You can enable or disable it in **Advanced Settings**.



