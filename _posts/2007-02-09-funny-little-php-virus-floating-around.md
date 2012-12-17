--- 
wordpress_id: 322
layout: post
wordpress_url: http://www.josephcrawford.com/2007/02/09/funny-little-php-virus-floating-around/
categories: 
- slug: development
  autoslug: development
  title: Development
- slug: internet
  autoslug: internet
  title: Internet
- slug: news
  autoslug: news
  title: News
- slug: rants
  autoslug: rants
  title: Rants
tags: []

title: Funny little PHP "virus" floating around
---
Someone is sending out emails trying to convince people that the email is from thier web host.  It has an attachment which includes an asp file and a php file.  They are requesting that you upload one of the 2 files to your web server because there is a security flaw that needs to be patched.THe person who wrote this code put in a lot of effort to try to encode this script.  They base_64_encoded the strings and then decoded them within an eval statment so that the script could execute.  If you recieve any emails similar to this DO NOT install the files.  The file will take advantage of a server software and allow the author to comprimize your machine.To get more information and figure out how to tell if any of your hosting customers have installed this view [this post](http://www.cyberlot.net/comment/reply/68).
