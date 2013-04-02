--- 
layout: post
is_review: false
title: New BrowserReports.Com Feature
tags: 
- title: Raves
  autoslug: raves
  slug: raves
- title: News
  autoslug: news
  slug: news
- title: Internet
  autoslug: internet
  slug: internet
- title: Entertainment
  autoslug: entertainment
  slug: entertainment
- title: Development
  autoslug: development
  slug: development
- title: Websites
  autoslug: websites
  slug: websites
---
Tonight I was working on the [BrowserReports](http://www.browserreports.com/) site and altered the spy feature that we had.  Now you can spy on your own domains referals.  An example would be [this page](http://www.browserreports.com/spy/josephcrawford.com/10).Also notice on the sidebar of this site I am showing the last 10 referers.  Keep watching it, it will reload automatically using AJAX to get the referers from [BrowserReports](http://www.browserreports.com/).:: EDIT ::I just noticed that the sidebar is not working on IE 7 in Windows Vista.  I will be diagnosing this soon and getting that fixed.  Sorry to all of those who are using it.Ok so I figured out what the issue was.  IE is what is stopping it, go to Tools -> Internet Options -> Security -> Custom Level and check the box next to "Access data sources across domains" This should fix the issue.
