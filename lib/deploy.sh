#!/bin/bash

if [ -d "/tmp/jekyll" ]; then
    rm -rf /tmp/jekyll
    mkdir /tmp/jekyll
    mkdir /tmp/jekyll/build
fi

cd /Volumes/Storage/Dropbox/Projects/jcrawford.github.com
git checkout dev
rm -rf _site/
jekyll
cp -rf _site/* /tmp/jekyll/build/
git checkout master
rm -rf *
cp -rf /tmp/jekyll/build/* .
git add .
git commit -am "running site build process"
git push origin master
git checkout dev