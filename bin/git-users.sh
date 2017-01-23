#!/usr/bin/env bash

git log --pretty=short |
  git shortlog -se |
  awk '{$1="";print $0}' |
  sed 's/^ *//' |
  sort -r
