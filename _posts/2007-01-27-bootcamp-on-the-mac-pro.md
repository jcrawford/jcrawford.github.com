--- 
wordpress_id: 298
layout: post
wordpress_url: http://www.josephcrawford.com/2007/01/27/bootcamp-on-the-mac-pro/
categories: 
- slug: mac
  autoslug: mac
  title: Mac
- slug: raves
  autoslug: raves
  title: Raves
- slug: reviews
  autoslug: reviews
  title: Reviews
- slug: software
  autoslug: software
  title: Software
- slug: tips-tricks
  autoslug: tips-&amp;-tricks
  title: Tips &amp; Tricks
tags: []

title: Bootcamp on the Mac Pro
---
Last night I decided to attempt to install XP SP2 with BootCamp on my new Mac Pro.  Everything was going smooth, I got the OS to install perfectly, the Apple drivers worked like a charm.  It seemed everything was flawless, I even got the bluetooth keyboard and mouse to work in Windows which many people said was not possible.  I had everything setup and it was time to reboot to OS X.  I restarted the computer and held down the alt/option key waiting to see the screen where I could choose which OS to load.  To my surprise it just booted into Windows without ever showing me the screen to choose the OS.I did some quick Googling and found that the bluetooth keyboard was not working at that point.  My options were limited.  I had to keep a wired keyboard sitting next to my computer so that I could boot to the OS choice screen.  In my opinion this was not logical.  Why should I have to do that when the bluetooth keyboard works with the Mac on boot?  I can restart and hold down the eject key to get the optical drive to eject, so why can I not get it to boot to the OS choice screen?  I have been unable to come up with an answer for that.  This brought up the thought of... "maybe there is a configuration file I can edit to make the OS choice screen show up on every boot and auto boot a default OS after a specified amount of time.."  I did some digging but could not find anything.  Was there not a bootloader like [Lilo](http://refit.sourceforge.net/) or [Grub](http://www.gnu.org/software/grub/) for this?<!--more-->Since Bootcamp is not supported by Apple Care I could not just call them up and ask why.  I resorted to going to the Apple discussion forums and asking there.  Within a few hours someone responded to my question telling me that what they thought I needed to use was [rEFIt](http://refit.sourceforge.net/).  So what is rEFIt?> rEFIt is a boot menu and maintenance toolkit for EFI-based machines like the Intel Macs. You can use it to boot multiple operating systems easily, including triple-boot setups with Boot Camp. It also provides an easy way to enter and explore the EFI pre-boot environment.Below is a screenshot of rEFIt running, however please note that this is not my install.  I took this screenshot for the rEFIt site and they stated that the image was cropped and that it is a full screen display.  Also the OS icons are not fixed, rEFIt detects the installed operating systems and shows the appropriate icons.  I have not fiddled with it yet but the documentation says that you can change the icons for the installed OS's and that you can disable the optional features under the OS images for situations like in a computer lab.<div align="center">![rEFIt in action](http://www.josephcrawford.com/wp-content/uploads/2007/01/screen1.png)</div>I have installed rEFIt on my machine and it was very simple.  Just download the Mac install package, run it and reboot.  rEFIt was exactly what I needed.  It worked with the bluetooth keyboard, it offered me a default OS and a timer to automatically boot the default OS if no keys were pressed.  I thank the developer of this software but also I thank [Fortuny](http://discussions.apple.com/profile.jspa?userID=675477) for answering my question on the Apple forums.:: EDIT ::The only issue I seem to be having with the bluetooth keyboard and mouse is if they are in use on Windows and I reboot.  If i am rebooting from windows rEFIt will not see the keyboard or mouse, it will then automatically boot into OS X however since that is set as my default OS.  Once booted into OS X it picks them up.  I am almost betting that this is an issue in the way that windows handles bluetooth and nothing to do with the mac, however I will be digging into this to see if I can find a solution.  I will update this thread if I do in fact find a solution.
