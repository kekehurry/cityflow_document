---
slug: /
sidebar_position: 1
title: Introduction
author: kaihu
---

# CityFlow Platform 👋

CityFlow is a low-code, AI-enhanced platform designed to help urban analysts, city planners, and researchers develop, evaluate, and visualize urban solutions with minimal coding effort. By integrating an AI-powered module builder and a collaborative case-based system, CityFlow enables users to create custom workflows, generate code through natural language inputs, and access a growing repository of urban design knowledge. With built-in AI search capabilities, the platform fosters collaboration, making it easier to discover, share, and refine innovative approaches to urban planning and problem-solving.

CityFlow 是一个低代码、AI辅助的城市设计平台，旨在帮助城市分析师、城市规划者和研究人员以最少的编码工作开发、评估和可视化城市解决方案。通过集成AI驱动的模块构建器和基于案例的协作系统，CityFlow 使用户能够创建自定义专业工作流，通过自然语言输入生成代码，并访问不断增长的城市设计知识库。平台内置AI搜索功能，促进协作，使发现、分享和改进城市规划及问题解决的创新方法变得更加容易。

**[Demo website](https://cityflow.media.mit.edu/)**

## Key Features / 主要功能

### A Low-code Tool for Urban Analyst / 面向城市分析师的低代码工具

CityFlow provides a low-code environment that enables urban analysts to develop and test city models with minimal coding effort.

CityFlow 提供了一个低代码环境，使城市分析师能够以最少的编码工作开发和测试城市模型。

![low code](assets/low_code.gif)

### An AI Coder for Module Builder / 面向模块开发者的AI编码助手

CityFlow incorporates an AI-powered module builder that assists users in coding custom Python and JavaScript modules. Through natural language inputs, the system helps generate and optimize code, making it easier for users to create complex workflows and solutions for urban problems without extensive programming knowledge.

CityFlow 集成了AI驱动的模块构建器，帮助用户编写自定义的Python和JavaScript模块。通过自然语言输入，系统帮助生成和优化代码，使用户无需广泛的编程知识即可创建复杂的工作流和城市问题解决方案。

![ai coder](assets/ai_coder.gif)

### An Open Platform for Urban Scientists / 面向城市科学家的开放平台

CityFlow integrates AI-powered search engines into urban workflows, creating a platform that fosters collaboration among experts, city planners, and urban scientists. It enables users to search for and share research findings, workflows, and case studies, contributing to a continuously evolving database of urban design solutions. By facilitating the exchange of knowledge and best practices, CityFlow drives innovation in urban development, making it easier to replicate or adapt successful approaches for more effective city planning and management.

CityFlow 将AI搜索引擎集成到城市工作流中，创建了一个促进专家、城市规划者和城市科学家之间协作的平台。它使用户能够搜索和分享研究成果、工作流和案例研究，为不断发展的城市设计解决方案数据库做出贡献。通过促进知识和最佳实践的交流，CityFlow 推动了城市发展的创新，使复制或调整成功方法以进行更有效的城市规划和管理变得更加容易。

![community](assets/community.gif)


## Quick Start with Docker / 使用Docker快速搭建 🐳

```
docker run -d --name cityflow_platform -p 3000:3000 -v //var/run/docker.sock:/var/run/docker.sock -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code ghcr.io/kekehurry/cityflow_platform:latest
```

Cityflow plaform relies on [cityflow_runner](https://github.com/kekehurry/cityflow_runner.git) to execute python and react modules. The docker container will automatically pull the latest cityflow_runner image. You can also pull it manually before the init process:

Cityflow 平台依赖[cityflow_runner](https://github.com/kekehurry/cityflow_runner.git)来执行Python和React模块。Docker容器将自动拉取最新的cityflow_runner镜像。您也可以在初始化过程之前手动拉取

```
docker pull ghcr.io/kekehurry/cityflow_runner:latest
```

# Acknowledgement

CityFlow was first conceptualized and developed during my visiting period at MIT. I sincerely thank MIT City Science for their support and inspiration during my work on the CityFlow Platform. I’m also deeply grateful to my supervisor at SCUT Design Future Lab for their guidance and encouragement throughout this journey.

CityFlow 最初是在我访问MIT访问期间构思和开发的。衷心感谢 MIT City Science在我开发CityFlow平台期间的支持和启发。也深深感谢我的导师团队华南理工大学 Design Future Lab在整个过程中的指导和鼓励。

![cityscience](assets/CSxDFL.png)

