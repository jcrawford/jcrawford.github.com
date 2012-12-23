--- 
layout: post
is_review: true
title: "Review: Linkinus 1.3"
tags: 
- title: Software
  autoslug: software
  slug: software
- title: Reviews
  autoslug: reviews
  slug: reviews
- title: Raves
  autoslug: raves
  slug: raves
- title: News
  autoslug: news
  slug: news
- title: Mac
  autoslug: mac
  slug: mac
- title: Internet
  autoslug: internet
  slug: internet
- title: Entertainment
  autoslug: entertainment
  slug: entertainment
- title: Websites
  autoslug: websites
  slug: websites
---

[![Linkinus 1.3](http://josephcrawford.com/wp-content/uploads/2008/06/linkinus.png "Linkinus")](http://www.linkinus.com/)In the past I wrote a [review on Linkinus](http://josephcrawford.com/2007/09/21/review-linkinus/).  Since then I have been using it as my IRC client and have been loving it.  It has a nice clean interface and allows you to write scripts (AppleScript) and Cocoa Plug-ins to add functionality to the client.  The other day version 1.3 was released which added a few new features which I thought were worth reviewing.  The first thing I will cover are the split chats.  If you command-click on several IRC channels / Queries.  You will be able to see all of them in the same window.  It takes the window area and splits it if you will.  This is a very nice feature however I believe it is lacking a bit of functionality just yet.  It is a new feature so I am sure it will be enhanced as time goes on. 

The very first thing I noticed is that when I had IRC running but Linkinus closed (detached mode) when I opened Linkinus I had split windows already set.  It had been a few hours since I was in Linkinus and I was in some very high traffic channels.  The channel windows were scrolling madly for about 5 minutes.  It seemed like it was trying to "catch-up" to the IRC buffer.  After about 5 minutes I had to close Linkinus, quit IRC and restart it all.  The other area of the split chat's that I feel needs improvement is how you switch windows.  Yes you can use cmd+shift+down and cmd+shift+up and you can also click on the topic bar above the channel.  However clicking in the channel window alone should change the active window.  However it does not work like that.
<!--more-->
Another feature that I will touch on is a feature that was released in version 1.2 however it was not getting the use / attention that it should have so they made a point to tell us about it in 1.3.  The new /getscript function.  This is an AppleScript that someone wrote.  If you use this command it will fetch the specified script from the script repository, install it and reload your scripts and plug-ins.  For instance to install the netinfo script you would issue the command '/getscript netinfo'.  Now what if you are lazy, you want to install all the scripts available but do not want to install them one by one.  You can issue the command /getscript -all' and it will download all of the scripts, updating the ones you already have with the latest versions.  Personally I think that this should be enhanced.  If I want to update all of the scripts I currently have installed I have to do that manually calling each one from what I can see.  I would like to see a command '/getscript -update' that will update all of the scripts I currently have installed with the latest versions.

This next feature is more of a style update but it is still pretty cool.  If you are using the Whisper style you will be able to see images and [YouTube](http://www.youtube.com/) video's embedded into the chat windows.  Whenever you or someone else posts a link, it will load the image or video for you to see.  This is nice because you will never have to leave your IRC client to share video's with other users.  If the user on the other end is not using the Whisper theme they will see the normal link that you posted. If you like the look of the Whisper theme and do not like the video or images embedded there is also a version that will not embed the images and video.  There was a comment by Jannis Leidel on the [review written by TUAW](http://www.tuaw.com/2008/06/04/linkinus-1-3-brings-split-chats-embedded-videos-and-a-performa/#comments) where they state that they wrote the theme for limechat and that it was ripped from that.  From what I can see it has in fact been ripped.  I feel he has a right to complain and [Linkinus](http://www.linkinus.com/) should give credit to him for the original creation of the theme.  However things are ripped every day.  They should feel good that there theme was worth someones time in writing it for another client.

In version 1.3 of [Linkinus](http://www.linkinus.com/) they also revamped the graphical user interface, enhanced the performance, changed the way auto-completion worked.  There are many other features, fixes that were done in this release, take a look at the change log to see them all.
