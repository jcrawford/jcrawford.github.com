--- 
wordpress_id: 389
layout: post
wordpress_url: http://www.josephcrawford.com/2007/03/04/google-maps-api-2/
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
- slug: javascript
  autoslug: javascript
  title: JavaScript
- slug: raves
  autoslug: raves
  title: Raves
tags: []

title: Google Maps API
---
I started my new job last Thursday and they wanted me to look into implementing Google Maps into the site.  They wanted to plot on a map the location of each person who attended a conference.  They currently have the attendee information stored in a database so I could get at it easy enough.  I had never looked into the Google Maps API nor have I done much with Java-Script.  The last few days I have been reading and messing around with it.  I finally have an implementation that is working great.  There is one issue that I have run into though.  Under the map they want to have 2 drop down boxes.  One for an industry type and another for the company size.  I have the forms posting the form on change so that it will post the selected values of both drop down boxes using ajax, however I cannot seem to get the map to update when the drop down boxes are changed.It does call the same server.php that the map calls when you move around the map to load only the points that are currently in view on the map.  However the drop down boxes do not seem to do anything.  I checked the URL that the drop downs create and they show new data however the map does not seem to update.  If you have ever created a Google Maps implementation that interacted with a form please leave some comments with any help you could provide.  I am going to do some more digging in the morning but so far I have been unable to find anything.Once I learn a bit more about the Google Maps API I plan to write a well explained tutorial on how to use it with PHP and AJAX and what I have learned by diving in.  This will be published on the new site once I get that up and running.  I am just waiting for the domain transfer to go through at the moment.
