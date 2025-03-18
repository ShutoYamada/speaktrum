FROM mcr.microsoft.com/devcontainers/base:bullseye

# # 必要なツールをインストール
# RUN apt-get update && apt-get install -y \
#     python3 \
#     python3-pip \
#     curl \
#     && rm -rf /var/lib/apt/lists/*

# npm
RUN apt-get update && apt-get install -y npm \
    python3 \
    python3-pip
# pnpm
RUN npm install -g pnpm
# vite, ts
RUN npm -g install vite typescript tsc-alias typescript-transform-paths npm-run-all
# Terraform
RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add - \
    && echo "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update && apt-get install -y terraform
# Google Cloud SDK
RUN curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee /etc/apt/sources.list.d/google-cloud-sdk.list \
    && apt-get update && apt-get install -y google-cloud-cli

# RUN curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - \
#     && echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list \
#     && apt-get update && apt-get install -y google-cloud-cli