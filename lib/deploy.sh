#!/bin/bash

if [ -d "/tmp/jekyll" ]; then
    echo 'DELETING TEMP DIRECTORY'
    rm -rf "/tmp/jekyll"
    echo 'CREATING TEMP DIRECTORY'
    mkdir "/tmp/jekyll"
    mkdir "/tmp/jekyll/build"
else
    echo 'CREATING TEMP DIRECTORY'
    mkdir "/tmp/jekyll"
    mkdir "/tmp/jekyll/build"
fi

cd /Volumes/Storage/Dropbox/Projects/jcrawford.github.com
git checkout dev
rm -rf _site/
jekyll
if [ -d "_site" ]; then
    if [ -d "/tmp/jekyll/build/" ]; then
        echo "Copying Build"
        cp -rf "_site/" "/tmp/jekyll/build/"
        echo "Checking out the MASTER branch"
        git checkout master
        echo "Deleting all old files"
        rm -rf *
        if [ -d "/tmp/jekyll/build/" ]; then
            echo "Copying build into MASTER branch"
            cp -rf /tmp/jekyll/build/* . > /dev/null 2>&1
            git add . > /dev/null 2>&1
            git commit -am "running site build process"
            echo "Pushing site build to Github"
            git push origin master
            echo "Checking out the development branch"
            git checkout dev
        else
            echo 'BUILD FAILED!!'
        fi
    else
        echo 'UNABLE TO CREATE TEMP DIRECTORY'
    fi
fi