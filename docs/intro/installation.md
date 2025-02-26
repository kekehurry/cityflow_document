---
slug: /install
sidebar_position: 2
title: Installation
author: kaihu
---

# Installation Guide

## 1. Environment Preparation

### 1. Install Docker

**Windows/macOS**:  
  
  - Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/)

**Linux**:  
  ```bash
  sudo apt-get update && sudo apt-get install docker.io
  sudo systemctl enable --now docker
  sudo usermod -aG docker $USER
  newgrp docker
  ```

### 2. Verify Installation

```bash
docker --version
```

## 2. Quick Start with CityFlow Launcher

After installing Docker, users of `Windows` and `MacOS (Apple Silicon)` can directly use the **CityFlow Launcher** to install the CityFlow platform. The installation steps are as follows:

- Download the installation package for the corresponding platform from the [release](https://github.com/kekehurry/cityflow_platform/releases) and install it.

- Open the CityFlow Launcher and select the `CityFlow Runner` and `CityFlow Platform` images. The different image versions are as follows:
  - **CityFlow Runner**:
    - `cityflow_runner:latest`: Contains the minimum dependencies required for the CityFlow platform. You can install different `python` and `npm` packages as needed.
    - `cityflow_runner:full`: Contains commonly used software packages in urban research. **(Recommended)**
    - `cityflow_runner:dev`: Development version, updated frequently. Developers can install this version to experience the latest features.
  - **CityFlow Platform**:
    - `cityflow_platform:latest`: The latest image of the CityFlow platform. **(Recommended)**
    - `cityflow_platform:dev`: Development version, updated frequently. Developers can install this version to experience the latest features.
  - **Nanjing University Accelerated Mirror**:
    Users in Mainland China can choose the corresponding version of the Nanjing University accelerated mirror to speed up the download.

- Click the `Start` button and wait for the download and installation to complete. Pulling the image may take some time depending on your network environment, so please be patient.


## 3. Install using Docker (Alternatively)

### 1. Startup Command

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

### 2. Pre-download Dependency (Optional)

The Docker container for the CityFlow platform will automatically download the latest version of the CityFlow Runner to execute Python and JavaScript code. Alternatively, you can download it manually:

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:latest
```

The latest CityFlow Runner image includes only the minimal dependencies required for the CityFlow platform. For a more comprehensive environment, it is recommended to download the full version, which includes commonly used packages for urban research. You can also install the packages you need in the cityflow platform terminal later.


```bash
docker pull ghcr.io/kekehurry/cityflow_runner:full
```

## 3. Troubleshooting

### Q1: Where is data stored?

- Temperotal code: `/cityflow_platform/cityflow_executor/code`

- Data folder: `/cityflow_platform/cityflow_database/data` 

- Statics folder: `/cityflow_platform/cityflow_database/source`

**⚠️ Note: Mounting the temperotal code folder is needed to run the platform**

```bash
-v /your/local/path:/cityflow_platform/cityflow_executor/code
```

### Q2: How to update?

```bash
docker stop cityflow_platform
docker rm cityflow_platform
docker pull ghcr.io/kekehurry/cityflow_platform:latest
# Re-run startup command
```
If you want to keep the data:

```bash
-v /your/local/path:/cityflow_platform/cityflow_database/data
-v /your/local/path:/cityflow_platform/cityflow_database/source
-e INIT_DATABASE=false
```


### Q3: Port 3000 unavailable?
Try different port mapping:

```bash
-p 8080:3000  # Use host port 8080
```

### Q4: How to report issues?

Submit issues on GitHub: 

https://github.com/kekehurry/cityflow_platform
