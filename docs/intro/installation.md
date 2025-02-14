---
slug: /install
sidebar_position: 2
title: Installation
author: kaihu
---

# Installation Guide / 安装指南

## 1. Environment Preparation  / 环境准备

### 1. Install Docker  / 安装Docker

**Windows/macOS**:  
  
  - Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/) / 从[Docker Desktop](https://www.docker.com/products/docker-desktop/)官网下载安装包安装

**Linux**:  
  ```bash
  sudo apt-get update && sudo apt-get install docker.io
  sudo systemctl enable --now docker
  sudo usermod -aG docker $USER
  newgrp docker
  ```

### 2. Verify Installation / 确认安装

```bash
docker --version
```

## 2. Quick Installation / 快速安装

### 1. Startup Command  / 启动命令

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

### 2. Pre-download Dependency (Optional) / 预下载依赖（可选）

The Docker container for the CityFlow platform will automatically download the latest version of the CityFlow Runner to execute Python and JavaScript code. Alternatively, you can download it manually:

CityFlow 平台的 Docker 容器会自动下载最新版本的 CityFlow Runner 以执行 Python 和 JavaScript 代码。你也可以手动下载：

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:latest
```

The latest CityFlow Runner image includes only the minimal dependencies required for the CityFlow platform. For a more comprehensive environment, it is recommended to download the full version, which includes commonly used packages for urban research. You can also install the packages you need in the cityflow platform terminal later.

最新的 CityFlow Runner 镜像仅包含 CityFlow 平台所需的最小依赖项。为了获得更完整的环境，建议下载完整版，其中包含城市研究中常用的软件包。你也可以之后在CityFlow 平台内安装你需要的依赖包。

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:full
```

### 3. Image pulling alternatives/镜像拉取替代方案

If you encounter network problems downloading the `ghcr.io` image and you are in China, try using the Nanjing University Image acceleration.

如果在中国下载`ghcr.io`镜像遇到网络问题，可尝试使用南京大学镜像加速：

```bash
docker pull ghcr.nju.edu.cn/kekehurry/cityflow_runner:full
```
Change the image repository name to `ghcr.io` when the download is complete. Or in the workflow setting interface, change the image name to Nanjing University Image.

下载完成后将镜像仓库名称改为`ghcr.io`,或者在工作流设置界面，将镜像名称改为南京大学镜像。

```bash
docker image tag ghcr.nju.edu.cn/kekehurry/cityflow_runner:latest ghcr.io/kekehurry/cityflow_runner:latest

docker image tag ghcr.nju.edu.cn/kekehurry/cityflow_runner:full ghcr.io/kekehurry/cityflow_runner:full
```

Pull and launch the cityflow platform using the Nanjing University image.

使用南京大学镜像拉取并启动cityflow platform:

```bash
docker run -d --name cityflow_platform \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code \
  ghcr.nju.edu.cn/kekehurry/cityflow_platform:latest
```

## 3. Troubleshooting / 常见问题

### Q1: Where is data stored?  / 数据存储在哪里？

- Temperotal code/临时代码: `/cityflow_platform/cityflow_executor/code`

- Data folder/数据文件夹: `/cityflow_platform/cityflow_database/data` 

- Statics folder/静态文件夹: `/cityflow_platform/cityflow_database/source`

**⚠️ Note: Mounting the temperotal code folder is needed to run the platform/ 注意：运行平台时必须挂载临时代码文件夹**

```bash
-v /your/local/path:/cityflow_platform/cityflow_executor/code
```

### Q2: How to update?/ 如何更新？

```bash
docker stop cityflow_platform
docker rm cityflow_platform
docker pull ghcr.io/kekehurry/cityflow_platform:latest
# Re-run startup command
```
If you want to keep the data / 如果您想保留数据:

```bash
-v /your/local/path:/cityflow_platform/cityflow_database/data
-v /your/local/path:/cityflow_platform/cityflow_database/source
-e INIT_DATABASE=false
```


### Q3: Port 3000 unavailable? / 端口3000不可用？
Try different port mapping / 尝试不同的端口映射:

```bash
-p 8080:3000  # Use host port 8080
```

### Q4: How to report issues / 如何提交问题?

Submit issues on GitHub / 在GitHub上提交: 

https://github.com/kekehurry/cityflow_platform


**Documentation/文档: [Cityflow Document (WIP)](https://doc.cityflow.cn/)**