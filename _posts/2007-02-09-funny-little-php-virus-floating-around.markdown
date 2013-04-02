--- 
layout: post
is_review: false
title: Funny little PHP "virus" floating around
tags: 
- title: Development
  autoslug: development
  slug: development
- title: Internet
  autoslug: internet
  slug: internet
- title: News
  autoslug: news
  slug: news
- title: Rants
  autoslug: rants
  slug: rants
---
Someone is sending out emails trying to convince people that the email is from thier web host.  It has an attachment which includes an asp file and a php file.  They are requesting that you upload one of the 2 files to your web server because there is a security flaw that needs to be patched.THe person who wrote this code put in a lot of effort to try to encode this script.  They base_64_encoded the strings and then decoded them within an eval statment so that the script could execute.  If you recieve any emails similar to this DO NOT install the files.  The file will take advantage of a server software and allow the author to comprimize your machine.To get more information and figure out how to tell if any of your hosting customers have installed this view [this post](http://www.cyberlot.net/comment/reply/68).
