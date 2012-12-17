--- 
wordpress_id: 481
layout: post
wordpress_url: http://www.josephcrawford.com/2007/10/31/removing-the-leopard-dock-shelf/
categories: 
- slug: internet
  autoslug: internet
  title: Internet
- slug: mac
  autoslug: mac
  title: Mac
- slug: tips-tricks
  autoslug: tips-&amp;-tricks
  title: Tips &amp; Tricks
tags: []

title: Removing The Leopard Dock Shelf
---

I was searching around today and I have found out how you can get rid of that reflective glass shelf.  There are 2 commands you have to execute in terminal
  
``defaults write com.apple.dock no-glass -boolean YES          ``
  
``killall Dock``  
  
![Leopard Dock without Glass Reflection](http://www.josephcrawford.com/wp-content/uploads/2007/10/dock_no_glass.jpg)I found that when executing those commands you tell the dock that you want no glass.  Now it gives you a dock with a background image as shown. The closest i could get to a total transparent dock is to remove the white border from the image to the right.  I cannot seem to find the file in which the dock uses for the gray background.  I am sure it is just another image in the resources directory.  What I did was open bottomX.png where X = 1-5. and created transparent versions in the same size and used those for my dock.
  
As previously stated in a previous post someone has already created a small utility called [2DOrNot2D](http://www.eternalstorms.at/utilities/2dornot2d/ "2DOrNot2D") which will allow you to alter the appearance of your dock.  Currently it only allows for switching between 2D and 3D viewing of the dock but I am sure more is to come.
