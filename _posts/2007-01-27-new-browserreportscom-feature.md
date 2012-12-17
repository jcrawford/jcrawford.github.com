--- 
wordpress_id: 300
layout: post
wordpress_url: http://www.josephcrawford.com/2007/01/27/new-browserreportscom-feature/
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
- slug: raves
  autoslug: raves
  title: Raves
- slug: websites
  autoslug: websites
  title: Websites
tags: []

title: New BrowserReports.Com Feature
---
Tonight I was working on the [BrowserReports](http://www.browserreports.com/) site and altered the spy feature that we had.  Now you can spy on your own domains referals.  An example would be [this page](http://www.browserreports.com/spy/josephcrawford.com/10).Also notice on the sidebar of this site I am showing the last 10 referers.  Keep watching it, it will reload automatically using AJAX to get the referers from [BrowserReports](http://www.browserreports.com/).:: EDIT ::I just noticed that the sidebar is not working on IE 7 in Windows Vista.  I will be diagnosing this soon and getting that fixed.  Sorry to all of those who are using it.Ok so I figured out what the issue was.  IE is what is stopping it, go to Tools -> Internet Options -> Security -> Custom Level and check the box next to "Access data sources across domains" This should fix the issue.
