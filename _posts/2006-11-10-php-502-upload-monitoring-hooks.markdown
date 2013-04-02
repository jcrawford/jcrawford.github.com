--- 
layout: post
is_review: false
title: PHP 5.0.2 Upload Monitoring Hooks
tags: 
- title: Development
  autoslug: development
  slug: development
- title: Internet
  autoslug: internet
  slug: internet
- title: News
  autoslug: news
  slug: news
- title: Raves
  autoslug: raves
  slug: raves
---

As many of you may know in PHP 5.0.2 they introduced a patch that will allow you to monitor file uploads.  What is so good about this?  Well with PHP being able to monitor the file upload you can actually implement a real progress bar so that users who are uploading large files will see a meter rather than it looking like the page is just hanging there not doing anything.  

I have been trying to find some documentation on this feature so that I could code an example and explain how it is used.  However i have been unable to find a whole lot about this topic on the php.net website.  Through a search of the mailing lists that I subscribe to I was able to find an example with some source code.  What else do you need to implement a progress meter aside from PHP?  Well you will need to use some JavaScript.

JavaScript is not my area of expertise and there is still so much that i need to learn.  Due to this fact it will be hard for me to give a real tutorial on this process.  Rasmus Lerdorf posted an example of how to implement this on the php.general mailing list.  If you look at the source code you will see that it actually uses only a small bit of PHP and uses quite a bit of JavaScript.

Take the [demo](http://progphp.com/upload.php "PHP Upload Progress Meter") for a test drive.  Once you see this thing in action I am sure you will want to see the [source code](http://progphp.com/upload.phps "PHP Upload Progress Meter").  I hope that it does not take too long to get some more in depth documentation up on the PHP website.  This feature is too nice to not document well.

 
<br />
