--- 
layout: post
is_review: false
title: "Oreilly School: Open For Attack."
tags: 
- title: Rants
  autoslug: rants
  slug: rants
- title: Internet
  autoslug: internet
  slug: internet
- title: Entertainment
  autoslug: entertainment
  slug: entertainment
- title: Development
  autoslug: development
  slug: development
- title: Websites
  autoslug: websites
  slug: websites
---
I was going through a course on Oreilly School last night and I wanted to poke around.  I was logged into a class where I could see all of my lessons.  I decided to view the source code for the frame and was astonished at what I found.  They still have ALL of the SQL queries printing out into HTML comments.  This is all fine and dandy while debugging but when a site goes into production these SHOULD NOT be there.There are so many SQL statements I would not be surprised if I could have the entire database schema at my fingertips.  I have written in to the instructor to have them notify the web team.  They do not want to be left open to SQL injection attempts.
