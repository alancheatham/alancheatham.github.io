#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# copy 404.html
cp 404.html dist/404.html

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'alancheatham.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:alancheatham/alancheatham.com.git master:gh-pages

cd -