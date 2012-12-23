--- 
layout: post
is_review: false
image: arrows-featured.png
title: Simultaneuos HTTP requests in PHP with cURL
tags: 
- title: Tips &amp; Tricks
  autoslug: tips-&amp;-tricks
  slug: tips-tricks
- title: Raves
  autoslug: raves
  slug: raves
- title: News
  autoslug: news
  slug: news
- title: Entertainment
  autoslug: entertainment
  slug: entertainment
- title: Development
  autoslug: development
  slug: development
- title: PHP
  autoslug: php
  slug: php
- title: Websites
  autoslug: websites
  slug: websites
---

When you are working with remote data feeds it will definatly impact the load time of your site.  For instance if you are using multiple curl calls to reach out to Google and Yahoo to get search results and Google takes 1 second but Yahoo takes 3 seconds it takes your application 4 seconds to load.  Now this can add up very quickly if you are making several connections.  The load time for your site becomes the total load time of all sites you are reaching out to.
  
What about simultaneous requests?  Well this would make sense because the load time of your application would be as long as the call that takes the longest.  In the example above the load time would be 3 seconds as opposed to 4 seconds.
  
[Stoyan Stefanov](http://www.phpied.com/) wrote a [nice article](http://www.phpied.com/simultaneuos-http-requests-in-php-with-curl/) with example code showing just how to accomplish thi.  I cannot wait to give it a shot and boost the performance of my apps.  Thanks for pointing this out Stoyan. 
