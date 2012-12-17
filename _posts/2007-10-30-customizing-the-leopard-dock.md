--- 
image: dock-featured.png
wordpress_id: 476
layout: post
wordpress_url: http://www.josephcrawford.com/2007/10/30/customizing-the-leopard-dock/
categories: 
- slug: entertainment
  autoslug: entertainment
  title: Entertainment
- slug: internet
  autoslug: internet
  title: Internet
- slug: mac
  autoslug: mac
  title: Mac
- slug: raves
  autoslug: raves
  title: Raves
- slug: tips-tricks
  autoslug: tips-&amp;-tricks
  title: Tips &amp; Tricks
tags: []

title: Customizing the Leopard Dock
---
Many people seem to be irritated by the new Leopard dock.  I myself was a bit upset with the new indicator icon change.  They used to have black triangles that would allow you to know what applications were open at a quick glance.  Now they have changed that indicator to a light blue orb which is kinda hard to see.  I found a method on changing the indicators back at a website.  I tested it and it worked however the indicator icons were not the proper dimensions as they looked stretched.  
I then found another site which had a much better set of indicators which will be used here.

Below are the steps which you need to complete in order to change your indicator icons.
  

  
  
  <!--more-->1.) Download the [Dock Indicators](http://www.josephcrawford.com/wp-content/uploads/2007/10/indicators.zip "Dock Indicators")  
2.) Unzip them to your desktop.
  
3.) open Terminal.app and issue the following command                    _ cd /System/Library/CoreServices/Dock.app/Content/Resources/_
 
4.) Now that you are in that directory you need to rename the current dock indicators for a backup                    _ sudo mv indicator_small.png original_indicator_small.png                     sudo mv indicator_medium.png original_indicator_medium.png                     sudo mv indicator_large.png original_indicator_large.png_
  
5.) With the backups made it is time to copy over the indicators that you downloaded.                    _ sudo cp -rf /Users         /Desktop/indicators/indicator_* /System/Library/CoreServices/Dock.app/Content/Resources/_
  
6.) The final step is to restart the dock with the following command                     killall Dock
  
After you have completed the above steps you will be able to have that lovely black triangle back as the dock indicator.
  
People have also figured out that you can change the color of the dock as well.  You do this in the same manner as you did above for the dock indicator, the only difference is that you are dealing with different images.  The images you want to be concerned with are the scurve_x.png images in the /Content/Resources/ directory along with the indicator images.  Make sure you back up the original images before you do anything.  You can download the modified [Dock Images](http://www.josephcrawford.com/wp-content/uploads/2007/10/dock.zip "Dock Images") and save them to your desktop.  I have included both the black and orange colors, you just need to rename them to scurve_x.png where x is the size sm, m, l, xl.  Once you put the proper images in place do not forget to do the killall Dock command to restart the dock.  Now I did notice that these images will only work if your dock is on the bottom of your screen, they will not work for the right or left sides.  I do imagine it is just another image switch like these though.  Above is a picture of my current Dock.  While the initial setup of this is a bit technical I for see some smart developer writing a small application which will allow you to do this in a very easy method.  The only question that lies is why did Apple not make the ability to accomplish this rather than allowing some 3rd party to do it?  
