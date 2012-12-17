--- 
wordpress_id: 450
layout: post
wordpress_url: http://www.josephcrawford.com/2007/08/02/review-zend-support-vs-sales-tactics/
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
- slug: php
  autoslug: php
  title: PHP
- slug: rants
  autoslug: rants
  title: Rants
- slug: reviews
  autoslug: reviews
  title: Reviews
- slug: software
  autoslug: software
  title: Software
tags: []

title: "Review: Zend, Support vs Sales Tactics"
---
Recently i switched jobs, going back to eFashion Solutions.  At eFS we remotely mount our user directory to our local machine using SMB.  On OS X it just mounts as if it were a local drive on the system.  While using Zend Studio it works great for the most part, all except for one little issue.  It causes the Samba install on the server to use 90% of the CPU.  I tried to use Eclipse however it wont work with the SMB drive at all.We believe the issue with Zend is that it sees the SMB drive as a local drive (which in many ways it is) and does not cache the directory listing.  Without caching the directory listing it is constantly transferring data between the server and my client.  The IT dept told me that using SMB with Zend Studio is not an option due to the increase in CPU use.I contacted Zend online through their online chat (Sales) to find out if there is a phone # that I could call to get this question answered or possibly report a bug in their software.  They insisted that they do not have phone support.  Hey guess what, you want to buy a license you have live chat on the site and or a phone to call.  Once they have your money though, you are screwed.  You have to wait upwards of 24 hours for a response to any support ticket that you submit and no way to contact anyone at all for immediate support issues.  I'm sorry but if it is keeping you from being able to work they should assist you almost immediately.<!--more-->Now I have a perpetual license for Zend Studio which means I can use the software for as long as I want however my support has expired.  For this issue they insisted that I had to pay $149 for continued support without any guarantee that they could fix my problem.  I refuse to pay them a non-refundable amount for them to say hey look you found a bug, there's no ETA on when that can be fixed.In my opinion Zend's support tactics are FAR behind their sales.  They like any company should are pushing the sales.  However they shouldn't run the support department the way they currently do.  I mean I would understand if this was a simple issue of say how do i get code indentation to work.  Something stupid like that would be fine for an answer like this.  I am already a paying customer what do they have to lose if they were to help me?  If it's a bug you can bet your ass I will be upgrading, if it's not I would upgrade anyhow because they tried to help me with the issue and I am already used to using this software why would I switch?  Being treated like this is no way to keep customers.However when it is very possibly an issue with their software I feel they should at least look into the issue for me.  If it's possible for me to turn on in the configuration then fine I would pay for the support they gave me, but if it is a bug....  I am not going to pay to tell them that their software has issues.I am so glad that I have suggested Zend products to all of my colleagues and employers to find out that they treat customers like this.  I guess I am going to be in the market for a new IDE, and will be back to the drawing board in reviewing the products.-------------------------------Update 08/06/2006-------------------------------As you may have seen in the comments Yoram from Zend stated he would call me.  It is now Monday morning and after following up with his comment and sending all required information I have an email in my inbox.  The thing is the email tells me to state my problem and he will answer it for me.  Did he not actually read this article?  He also stated that in the future all support issues need to go through the Support Contact form on zend's site.  Hmm I still have Ticket #172850 which is still pending since Thursday.-------------------------------Update 08/11/2006-------------------------------I thought I would let everyone know how the support has been going since my last update.  The support staff has actually started asking questions about the situation through the support ticket, however now they tell me that they are going to try to reproduce the issue locally and it will take some time so if they do not respond that is why.  Just how long should it take?  It shouldn't take more than a few hours to setup Samba and configure it so that they can remotely load a volume.  Anyway they responded with that on the 9th and well since it is a weekend I do not expect to hear much.  I will let you all know how the support is going as thing progress.  You would think that because this is hindering me from getting work done they would put a priority on it and get it fixed or help to resolve the issue.  I mean Zend is a well known company and one could only hope that the support team does not consist of 2 guys in a garage.-------------------------------Update 08/15/2006-------------------------------Zend finally got back to me today.  However they said that they were unable to reproduce this issue on several mac test machines.  The only thing they did not try was using a remote VPN.  I am not sure what is going on with this however with the level of support I have received I am going to start looking into alternative IDE's and try to find a better one for the Mac Platform.  Zend is a very nice IDE and it has a great debugger.  With the level of support Zend offers I am just not inclined to continue using their products.  If you know of a good IDE other than those listed in my [PHP IDE's](http://www.josephcrawford.com/2006/08/24/review-php-ides/) review please let me know so that I can give it a shot.
