#!/usr/bin/env bash

# 1. 获取参数中的目标分支名称
if [ ! $1 ]; then
    echo "请输入目标分支名称"
    exit 1
fi

targetBranch=$1

echo "targetBranch: $targetBranch"

# 2. 获取当前分支名称
currentBranch=$(git symbolic-ref --short -q HEAD)

echo "currentBranch: $currentBranch"

# 3. 切换到目标分支
git checkout $targetBranch
echo "checkout to $targetBranch"

# 4. pull 目标分支
git pull
echo "pull $targetBranch"

# 5. 合并当前分支到目标分支
git merge origin/$currentBranch
echo "merge $currentBranch to $targetBranch"

# 6. 提交合并后的代码
git push
echo "push $targetBranch"

# 7. 切换到当前分支
git checkout $currentBranch
echo "checkout to $currentBranch"
