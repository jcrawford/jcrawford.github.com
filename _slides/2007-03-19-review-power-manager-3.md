--- 
wordpress_id: 401
layout: post
wordpress_url: http://www.josephcrawford.com/2007/03/19/review-poser-manager-3/
categories: 
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
- slug: reviews
  autoslug: reviews
  title: Reviews
- slug: software
  autoslug: software
  title: Software
tags: []

title: "Review: Power Manager 3"
---
I woke up this morning to an email in my in-box that was telling me about a new release for some mac software.  The software is called [Power Manager 3](http://www.dssw.co.uk/powermanager/ "Power Manager 3") and is supposed to help you cut down the costs on running your mac.  It allows you to schedule your computer to shut down, go into sleep mode, automatically logout at certain times etc.  This all seems very cool.  Could you imagine running this on the computers in the computer lab.  You would set it up and it's all automated.One thing that the Power Manager 3 website is saying is that it can save you money.  Well I guess it could if you leave the computers on 24/7.  However I am not sure what computer lab would leave all of the computers on overnight.  This is something they say on their website.> Imagine all your lab computers switching themselves off at night and on in the morning.<strike>This is almost accurate.  In order for the computer to switch itself back on it would have to be in sleep mode.  While in sleep mode the computer is still consuming power.  If you shut your computer down there is no way for it to monitor the time and trigger events such as wakeup.  If you are already shutting the computer down at night, how is this supposed to help you save money?  I believe that they are misleading people by not disclosing that to the public.  Now they also state the following which I have no idea how they would accomplish.</strike>From what I have found out (I am not sure how yet) the mac can actually schedule itself to power up from a shut down state.  I retract what I said above about them being misleading and I apologize for stating that when i was incorrect.> Use Power Manager to automate when your organisation's computers are switched on, off, or asleep.How they can tell a computer that is totally shut down to turn on sounds <strike>impossible</strike> weird to me.  I think i am going to have to get the demo and try it out.<!--more-->![Power Manager 3](http://www.josephcrawford.com/wp-content/uploads/2007/03/power-manager-3.jpg)Another thing that you might notice when you go to the site is that the cost of the program is only 20 euros per computer.  This is about $26.62 when it comes to US dollars and if you ask me is quite expensive for what the application does.  Let's look a bit closer at the website.  Did you notice that the return on investment (ROI) is 6 months - 2 years?  I am sorry but I personally would not spend $30 and have to wait that long just to get my $30 back before I start saving money.I would be very surprised if this software is successful.  This is something that would be better priced at $10 (USD) per copy or even released as open source software.  I know that I personally will not be grabbing a copy.  After reading the site I have not even tried a demo yet but I do plan to.  Please see below for updates on this review.
 
**---------- UPDATE ----------**I downloaded the demo version of Power Manager 3 and installed it.  During the install it required that I reboot my computer.  It all seemed to go fine but when it loaded back into OS X and I went to the preferences for Power Manager it said it was not running.  I checked the help file and it said to reboot your computer or manually start it with the following command.> localhost:~ jcrawford$ sudo launchctl load /Library/LaunchDaemons/uk.co.dssw.powermanager.plistPassword:uk.co.dssw.powermanager: Already loadedlocalhost:~ jcrawford$I am not sure what is happening but on my Intel based Mac Pro Power Manager will not start.  I am going to try another reboot and a bit more debugging to find out what is going on but if I cannot get the service to start it is pretty much useless.
