#!/usr/bin/env bash
git stash
git pull
cd ./server/
npm install
cd ../client
yarn install
yarn build
pm2 restart 1
pm2 restart 2
