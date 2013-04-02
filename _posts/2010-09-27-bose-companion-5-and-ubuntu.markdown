--- 
layout: post
is_review: false
image: bose.png
title: Bose Companion 5 and Ubuntu (SOLVED)
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
- title: Internet
  autoslug: internet
  slug: internet
- title: Useful
  autoslug: useful
  slug: useful
excerpt: For the last few days I have been trying very hard to get my Bose Companion 5 speakers to work with Ubuntu that I have installed on my MacBook Pro.  However it seemed like the OS just did not see the speakers when I went to the audio output options.  Ubuntu only seemed to see the built in card and after a bit of Googling I found that there were quite a few people who were having problems with this.
---
For the last few days I have been trying very hard to get my Bose Companion 5 speakers to work with Ubuntu that I have installed on my MacBook Pro.  However it seemed like the OS just did not see the speakers when I went to the audio output options.  Ubuntu only seemed to see the built in card and after a bit of Googling I found that there were quite a few people who were having problems with this.  Fortunately enough for me I went to [#Ubuntu](irc://irc.freenode.net/#ubuntu) on [irc.freenode.net](irc://irc.freenode.net/) and was able to get some assistance from there.  The first thing they had me do was an lsusb -v and check to see if my Bose speakers were seen at all.  I found that they were so they then had me run gstreamer-properties in the terminal which brought up a UI for use.  I checked out the UI and noticed that ALSA was selected for the output Plugin.  I quickly checked the Device drop down and noticed that there was USB Audio.  I selected it and then tried the Test button.  The test sound played so I thought everything was golden.  I closed the UI by clicking the close button and then went off to test my audio.  I still had no sound so once again I went to the System -> Preferences -> Sound panel and noticed that again I was not seeing USB Audio in the output tab.<!--more-->I closed the Sound preferences UI and ran gstreamer-properties again but this time as sudo.  I choose the same options and clicked close.  I then rebooted the system and had some bizarre behavior.  The system booted fine but when it first started to boot it started playing the test sound and it continued until Ubuntu was fully booted.  When I heard the sound I thought something was wrong and started thinking what if the audio works and I have to deal with that sound during boot-up every-time, could I really deal with it?  Once Ubuntu was booted up and the sound stopped I checked the System -> Preferences -> Sound UI once again and this time I found USB Audio under the output tab.  I selected it applied everything and closed the preferences window.  I went off to Youtube to try out the sound and I was amazed it worked.Now with my sound actually working through my Bose system I had to reboot to see if that "test" sound played again.  Everything booted properly and quietly and my sound remains working.  A BIG thank you to BluesKaj on [#Ubuntu](irc://irc.freenode.net/#ubuntu).
