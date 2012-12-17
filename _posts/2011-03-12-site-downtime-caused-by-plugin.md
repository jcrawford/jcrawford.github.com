--- 
image: downtime-featured.png
wordpress_id: 1369
layout: post
wordpress_url: http://www.josephcrawford.com/?p=1369
categories: 
- slug: development
  autoslug: development
  title: Development
- slug: entertainment
  autoslug: entertainment
  title: Entertainment
- slug: internet
  autoslug: internet
  title: Internet
- slug: news
  autoslug: news
  title: News
- slug: rants
  autoslug: rants
  title: Rants
- slug: tips-tricks
  autoslug: tips-&amp;-tricks
  title: Tips &amp; Tricks
- slug: websites
  autoslug: websites
  title: Websites
tags: []

title: Site Downtime Caused by Plugin
---
To all of my readers who noticed my site was showing the 404 page for every page on the site I apologize.  The issue is now fixed.  I noticed the issue this morning and started to diagnose the issue.  It appears that a plugin I recently installed caused the issues.I had recently installed the [Broken Link Checker](http://wordpress.org/extend/plugins/broken-link-checker/) plugin which appearedto corrupt some of my database tables.  If this has happened to you there is however some good news to accompany the bad news.  If you repair all of your tables either using direct database commands or phpMyAdmin this should solve your issues.  If it does not I am afraid you will probably have to restore your database from a backup.
