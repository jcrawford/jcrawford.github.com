--- 
layout: post
is_review: true
title: "Review: AppleTV"
tags: 
- title: Software
  autoslug: software
  slug: software
- title: Raves
  autoslug: raves
  slug: raves
- title: News
  autoslug: news
  slug: news
- title: Local
  autoslug: local
  slug: local
- title: Internet
  autoslug: internet
  slug: internet
- title: Entertainment
  autoslug: entertainment
  slug: entertainment
- title: Tips &amp; Tricks
  autoslug: tips-&amp;-tricks
  slug: tips-tricks
---
So I have had some time to actually fiddle with my AppleTV.  I have actually opened mine up and modified it so that I can play all sorts of media formats, it is no longer restricted to just iTunes content.When I modified my AppleTV I did not know there was a way to do so without having to open the unit.  If you are not upgrading the drive and just want to make it so that you can install plug-ins your best bet is to read up on the [patch-stick](http://wiki.awkwardtv.org/wiki/Patchstick/Testing "Patchstick/Testing - AwkwardTV") method.   The one thing I feel I NEED to say and cannot STRESS enough is that before you do anything you make recovery images of the EFI and Recovery partitions.  If you fail to make backups and something goes wrong your only option to fix your drive will be to borrow a friends AppleTV and get the partition images.  I can tell you how much of a pain that is.  The reason I suggest you use the patch-stick method is because you will not have to open your unit.  The patch-stick is a one time operation once the system is patched you will not need the usb drive anymore.When I was modifying mine I moved SSHD to the wrong directory then went to delete it and did 'rm -rf /usr/bin/'.  Can you say Woops!  I attempted to recover the files from the 1.1 update that Apple released but was unable to do that.  Somehow during the process the EFI partition of my drive became corrupt.  I was left with a perfectly fine AppleTV unit without a hard drive that would boot the system.  I had to borrow a friends AppleTV and make the images necessary to fix mine.<!--more-->If you need to know how to make the images or how to rebuild your drive the folks over at [AwkwardTV](http://www.awkwardtv.org/ "AwkwardTV") have outlined the process pretty well in their [Prepare a Hard Drive](http://wiki.awkwardtv.org/wiki/Prepare_a_Hard_Drive "Prepare a Hard Drive - AwkwardTV") wiki page which also outlines how to create your recovery images.  I also found an article on [Engadget](http://www.engadget.com/ "Engadget") that outlined the process but it was not the correct method and I found it to be a waste of my time.  However if you cannot get the AwkwardTV process to work it might be worth checking out.  Their article [How-to: Upgrade the drive in your AppleTV](http://www.engadget.com/2007/03/23/how-to-upgrade-the-drive-in-your-apple-tv/http://www.engadget.com/2007/03/23/how-to-upgrade-the-drive-in-your-apple-tv/ "How-to: Upgrade your drive in your AppleTV") is geared towards upgrading the drive but might still work for repairing your drive.Before you get jumpy however you will want to read an article that explains how to do a manual update for the AppleTV software.  This will allow you to install the new update so that you can have the YouTube functionality that Apple provides.  You can find more about it in the [June 20 2007 Patch](http://wiki.awkwardtv.org/wiki/June_20_2007_Patch_(aka_the_YouTube_Patch) "June 20 2007 Patch - AwkwardTV") entry of the AwkwardTV wiki.Installing SSH was easy once I made sure not to make any typo's.  In order to install SSH I followed the instructions on the Engadget blog [How-to: Play DivX and Xvid on the AppleTV](http://www.engadget.com/2007/04/10/how-to-play-divx-and-xvid-on-your-apple-tv/ "How-to: Play DivX and Xvid on the AppleTV").  I followed the instructions for setting up SSH and nothing else.  Below I explain why.Installing the plug-ins was a piece of cake once I recovered my drive (and made sure not to make any mistakes like the last time).  While you can install all plug-ins manually I would not suggest it.  There is a very well developed plug-in called [ATVLoader](http://alanquatermain.net/atvloader/ "ATVLoader"). This plugin comes with a nice installer and very clear instructions.  The main purpose of this plug-in is that you can sit on your couch with the AppleTV remote and scroll through a menu where you can select plug-ins to install on the fly.  You will not have to SSH to the AppleTV to install more plug-ins every time you wish to install one.This is the order in which I feel you should commit the above operations:1. Do a factory restore (hold the - and menu buttons on the remote for 6 seconds)
2. Do the MANUAL update for the AppleTV
3. Install the ATVLoader plug-in
Make sure that when you do the manual update you add the optional line to the /etc/hosts file, this will keep anyone from running an automatic update and ruining your hard work installing the plugins.  Also when you run the 1.1 update automatically some things are removed such as AFP leaving SSH your only option to connect to the AppleTV.  I am sure more was removed however I am not sure exactly what was removed.If you have any questions about modifying your AppleTV you can feel free to ask me, but you should also check out [#AwkwardTV](irc://irc.moofspeak.net/AwkwardTV "AwkwardTV IRC Channel") on irc.moofspeak.net they have been really helpful to me especially since I can be a real pain in the butt.
