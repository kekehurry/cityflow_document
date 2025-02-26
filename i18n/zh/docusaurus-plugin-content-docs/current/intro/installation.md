---
slug: /install
sidebar_position: 2
title: 安装指南
author: kaihu
---

# 安装指南

## 1. 环境准备

### 1. 安装Docker

**Windows/macOS**:  
  
  - 从[Docker Desktop](https://www.docker.com/products/docker-desktop/)官网下载安装包安装

**Linux**:  
  ```bash
  sudo apt-get update && sudo apt-get install docker.io
  sudo systemctl enable --now docker
  sudo usermod -aG docker $USER
  newgrp docker
  ```

### 2. 确认安装

```bash
docker --version
```

## 2. 使用CityFlow启动器快速安装

安装完成Docker之后，对于`Windows`和 `MacOS(苹果芯片)`的用户，可以直接使用CityFlow启动器安装CityFlow平台。安装步骤：

- 在[release](https://github.com/kekehurry/cityflow_platform/releases)下载对应平台的安装包进行安装。

- 打开CityFlow启动器，选择`CityFlow Runner`和`CityFlow Platform`镜像, 不同镜像版本如下：
  - **CityFlow Runner**: 
    - `cityflow_runner:latest`: 包含CityFlow平台所需的最小依赖项，可在使用时自行安装不同的`python`和`npm`包。
    - `cityflow_runner:full`: 包含城市研究中常用的软件包。**(推荐安装)**
    - `cityflow_runner:dev`: 开发版本，更新频繁，开发者可安装此版本，以体验最新的功能。
  - **CityFlow Platform**:
    - `cityflow_platform:latest`: CityFlow平台最新的镜像。**(推荐安装)**
    - `cityflow_platform:dev`: 开发版本，更新频繁，开发者可安装此版本，以体验最新的功能。
  - **南京大学加速镜像**:
    中国大陆用户可以选择对应版本南京大学加速镜像，以加快下载速度。

- 点击`Start`按钮，等待下载安装完成，拉取镜像视网络环境可能需要较长时间，请耐心等待。

## 3. 使用Docker安装

您也可以直接使用Docker命令安装：

### 1. 启动命令
**Windows (PowerShell)**
```bash
# Linux/macOS
docker run -d --name cityflow_platform \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code \
  ghcr.io/kekehurry/cityflow_platform:latest
```

**Windows/macOS**: 

```bash
docker run -d --name cityflow_platform `
  -p 3000:3000 `
  -v /var/run/docker.sock:/var/run/docker.sock `
  -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code `
  ghcr.io/kekehurry/cityflow_platform:latest
```

### 2. 预下载依赖（可选）

CityFlow 平台的 Docker 容器会自动下载最新版本的 CityFlow Runner 以执行 Python 和 JavaScript 代码。但是`cityflow_runner:latest`镜像仅包含 CityFlow 平台所需的最小依赖项。为了获得更完整的环境，建议下载完整版，其中包含城市研究中常用的软件包。

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:full
```

### 3. 镜像拉取替代方案

如果在中国下载`ghcr.io`镜像遇到网络问题，可尝试使用南京大学镜像加速：

```bash
docker pull ghcr.nju.edu.cn/kekehurry/cityflow_runner:full
```
下载完成后将镜像仓库名称改为`ghcr.io`,或者在工作流设置界面，将镜像名称改为南京大学镜像。

```bash
docker image tag ghcr.nju.edu.cn/kekehurry/cityflow_runner:latest ghcr.io/kekehurry/cityflow_runner:latest

docker image tag ghcr.nju.edu.cn/kekehurry/cityflow_runner:full ghcr.io/kekehurry/cityflow_runner:full
```

使用南京大学镜像拉取并启动cityflow platform:

```bash
docker run -d --name cityflow_platform \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code \
  ghcr.nju.edu.cn/kekehurry/cityflow_platform:latest
```

## 3. 常见问题

### Q1: 数据存储在哪里？

- 临时代码: `/cityflow_platform/cityflow_executor/code`

- 数据文件夹: `/cityflow_platform/cityflow_database/data` 

- 静态文件夹: `/cityflow_platform/cityflow_database/source`

如使用CityFlow启动器，启动器会自动在用户文件夹，创建`cityflow_platform/code`,`cityflow_platform/data`和`cityflow_platform/source`三个文件保存平台数据，这些数据会在版本更新时保留，如需全新安装，可自行删除该文件夹，然后更新升级。

**⚠️ 注意：使用Docker命令安装必须挂载临时代码文件夹**

```bash
-v /your/local/path:/cityflow_platform/cityflow_executor/code
```

### Q2: 如何更新？

```bash
docker stop cityflow_platform
docker rm cityflow_platform
docker pull ghcr.io/kekehurry/cityflow_platform:latest
# Re-run startup command
```
如果您想保留数据:

```bash
-v /your/local/path:/cityflow_platform/cityflow_database/data
-v /your/local/path:/cityflow_platform/cityflow_database/source
-e INIT_DATABASE=false
```


### Q3: 端口3000不可用？
尝试不同的端口映射:

```bash
-p 8080:3000  # Use host port 8080
```

### Q4: 如何提交问题?

在GitHub上提交: 

https://github.com/kekehurry/cityflow_platform
