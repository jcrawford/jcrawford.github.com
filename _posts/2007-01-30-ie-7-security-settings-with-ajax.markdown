--- 
layout: post
is_review: false
title: IE 7 Security Settings With AJAX
tags: 
- title: Internet
  autoslug: internet
  slug: internet
- title: Rants
  autoslug: rants
  slug: rants
- title: Tips &amp; Tricks
  autoslug: tips-&amp;-tricks
  slug: tips-tricks
---
If you have been having problems getting the AJAX to work on your site, you might want to check IE 7's security settings.  I had an issue with the browser reports in the sidebar.  They just would not load in IE 7 so i had to do some digging.  It looks like IE FINALLY went to the native XMLHTTP support so you will not need to use the damn ActiveX component anymore (unless you are going for backwards compatability).  The new XMLHTTP method is enabled by default but there is a setting that is disabled by default.  The setting that is disable prevents the site from using the XMLHTTP object.  I am not sure why they would do this, there are going to be a lot of angry users out there.Setting something that the world is becoming more and more attached to is just wrong in my opinion.  Here is what you need to do in order to make AJAX enabled sites work in IE 7.Go to Tools -> Internet Options -> Security -> Custom Level and check the box next to "Access data sources across domains" This should allow sites to run the AJAX enabled content or not....  Is there another checkbox hidden down even deeper?
