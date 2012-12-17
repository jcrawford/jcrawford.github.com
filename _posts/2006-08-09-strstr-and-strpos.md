--- 
image: php-featured.png
wordpress_id: 11
layout: post
wordpress_url: http://www.josephcrawford.com/archives/11
categories: 
- slug: uncategorized
  autoslug: uncategorized
  title: Uncategorized
tags: []

title: strstr() and strpos()
---
I have seen a lot of people who are using strstr when in fact they should be using strpos.  It is better to use strpos if all you want to know is if a string exists (true/false).  strstr() will return the actual string from the first occurance of $needle to the end of the string which causes more resources to be used since it has to be parsed out.  strpos will return the integer index for the position of the first occurance, in this case int(44).  Try out this code example.<pre lang="php" line="1"> $string = 'this is just an example for you'; $needle = 'an example'; echo strstr( $string, $needle).'; var_dump(strpos($string, $needle));</pre>As you can see strstr will require more processing and more time than strpos if you are using it a lot.  The best thing to do is evaluate the situation.  If you just need to know true/false, always use strpos.  However if you will need to use the value found in $needle then you will have to use strstr.  Just keep in mind that the larger and larger an application get's the more you have to watch out for these mishaps :)
