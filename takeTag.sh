#!/usr/bin/env bash

## 1. 读取标签
tag=$1
tagMessage=$2

## 2. 切换master分支
git checkout master
git pull

## 3. 打tag
git tag -a $tag -m $tagMessage

## 4. 推送tag
git push origin $tag