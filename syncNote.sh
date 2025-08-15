# !/usr/bin/env bash

# 1. 进入Note目录

cd ~/Note

# 2.获取当前时间

now=$(date "+%Y%m%d")

echo "sync now: $now"

# 3.同步到github

git add .

git commit -m "sync at $now"

git push origin main

echo "同步到github完成"