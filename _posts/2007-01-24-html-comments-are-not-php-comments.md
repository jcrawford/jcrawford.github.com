--- 
wordpress_id: 289
layout: post
wordpress_url: http://www.josephcrawford.com/2007/01/24/html-comments-are-not-php-comments/
categories: 
- slug: development
  autoslug: development
  title: Development
- slug: rants
  autoslug: rants
  title: Rants
- slug: tips-tricks
  autoslug: tips-&amp;-tricks
  title: Tips &amp; Tricks
tags: []

title: HTML comments are not PHP comments
---
I am not sure how many times I have run into this.  I am not sure if the original developer thinks that the HTML comment will halt the PHP from processing or not.  However when you create an HTML comment any PHP that is inside of that comment will still execute and increase the load time for the page.  Take this example for instance.<!--more-->[php]<!--  <tr>    <td>      <?=(rand(1,2)%2)?'Hello':'Bye';?>    </td>  </tr>-->[/php]depending on how the rand evaluates the output would be either of the following.[html]<!--  <tr>    <td>      Hello    </td>  </tr>--><!--  <tr>    <td>      Bye    </td>  </tr>-->[/html]As you can see commenting out the HTML will not halt the PHP from executing.  If you have a lot of code which is commented out with HTML comments, you are also going to want to comment out the PHP.
