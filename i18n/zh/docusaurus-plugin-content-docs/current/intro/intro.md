---
slug: /
sidebar_position: 1
title: 简介
author: kaihu
---

# CityFlow Platform 👋 

**创造更智能、更可持续的城市**

CityFlow 是一个AI辅助的低代码城市设计平台，旨在帮助城市分析师和研究人员创建用于数据分析、城市评估和城市模拟的工作流程。通过集成AI驱动的模块构建器和基于案例的协作系统，
CityFlow 使用户能够通过自然语言输入搜索和创建工作流程，从而更轻松地发现、分享和创造数据驱动的城市问题解决方案。


**🔥 更新: [CityFlow Launcher Released!](https://github.com/kekehurry/cityflow_platform/releases)** 

相关链接: [Demo Website](https://cityflow.cn/), [Documents](https://doc.cityflow.cn), [Community Workflows](https://community.cityflow.cn)

## 主要功能

### 面向城市分析师的低代码工具

CityFlow 提供了一个低代码环境，使城市分析师能够以最少的编码工作开发和测试城市模型。

![low code](assets/low_code.gif)

### 面向模块开发者的AI编码助手

CityFlow 集成了AI驱动的模块构建器，帮助用户编写自定义的Python和JavaScript模块。通过自然语言输入，系统帮助生成和优化代码，使用户无需广泛的编程知识即可创建复杂的工作流和城市问题解决方案。

![ai coder](assets/ai_coder.gif)

### 面向城市科学家的开放平台

CityFlow 将AI搜索引擎集成到城市工作流中，创建了一个促进专家、城市规划者和城市科学家之间协作的平台。它使用户能够搜索和分享研究成果、工作流和案例研究，为不断发展的城市设计解决方案数据库做出贡献。通过促进知识和最佳实践的交流，CityFlow使学习和应用成功规划经验变得更加容易，从而辅助推动城市规划方法的可持续发展与创新。

![community](assets/community.gif)


## 使用CityFlow启动器快速安装

CityFlow启动器已经在[release](https://github.com/kekehurry/cityflow_platform/releases)页面发布，您可以直接下载对应平台的安装包进行安装。CityFlow启动器提供了一个易于使用的界面对CityFlow平台的安装、升级进行管理。

## 使用Docker安装 🐳

您也可以使用docker命令直接安装：

```
docker run -d --name cityflow_platform -p 3000:3000 -v //var/run/docker.sock:/var/run/docker.sock -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code ghcr.io/kekehurry/cityflow_platform:latest
```

Cityflow 平台依赖[cityflow_runner](https://github.com/kekehurry/cityflow_runner.git)来执行Python和React模块。Docker容器将自动拉取最新的cityflow_runner镜像。您也可以在初始化过程之前手动拉取

```
docker pull ghcr.io/kekehurry/cityflow_runner:latest
```

# 致谢

感谢 MIT City Science在开发CityFlow平台期间的支持和启发，以及华南理工大学Design Future Lab的指导和鼓励。