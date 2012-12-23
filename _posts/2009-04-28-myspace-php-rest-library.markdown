--- 
layout: post
is_review: false
title: MySpace PHP REST Library
tags: 
- title: Software
  autoslug: software
  slug: software
- title: Reviews
  autoslug: reviews
  slug: reviews
- title: Rants
  autoslug: rants
  slug: rants
- title: News
  autoslug: news
  slug: news
- title: Internet
  autoslug: internet
  slug: internet
- title: Entertainment
  autoslug: entertainment
  slug: entertainment
- title: Development
  autoslug: development
  slug: development
- title: PHP
  autoslug: php
  slug: php
- title: Useful
  autoslug: useful
  slug: useful
---
Over the last few days I have been digging deep into the concepts of REST.  I have been reading through my copy of [RESTful Web Services](http://www.amazon.com/RESTful-Web-Services-Leonard-Richardson/dp/0596529260/ref=sr_1_1?ie=UTF8&s=books&qid=1240926906&sr=8-1).  Out of curiosity I searched [Google](http://www.josephcrawford.com/2008/02/15/iphone-usage-shocks-google/ "Google") for a "php REST library" and it turned up the [Official MySpace PHP REST Library](http://wiki.developer.myspace.com/index.php?title=Category:MDP_Libraries#Official_MySpace_REST_API_PHP_Library).I started to look through the code and noticed something really weird about how the code is structured.  It looks like they are trying to use an Object Oriented approach however I think they are going about things improperly.  The code looks a lot like the following.[php]      class Configs {          public static $APPLICATION_KEY = "api_oauth_consumer_key";          public static $APPLICATION_SECRET = "api_oauth_consumer_secret";      }      class SelectorType {          public static $ME = "@me";          public static $ALL = "@all";          public static $SELF = "@self";          public static $FRIENDS = "@friends";      }[/php]Now the structure of these classes is fine, but it does bring out the question as to why they are using classes for this type of stuff. The classes have no methods, they have only provided public static properties. I am not sure why they took this approach. I am not sure if they are trying to remain backwards compatible with PHP 4 or not. If they are however I think they would be better off using constants for these values in the Common.php file, also I am pretty sure they are not trying to support PHP 4 because they are using the static keyword in the classes and I believe PHP 4 would FAIL with that being there. I am unsure why they are not using class constants. I would suggest a better way of doing things.[php]// PHP 4 Backwards Compatabilitydefine('APPLICATION_KEY', 'api_oauth_consumer_key');define('APPLICATION_SECRET', 'api_oauth_consumer_secret');define('SELECTOR_TYPE_ME', '@me');define('SELECTOR_TYPE_ALL', '@all');define('SELECTOR_TYPE_SELF', '@self');define('SELECTOR_TYPE_FRIENDS', '@friends');// PHP 5 Compatabilityclass Configs{ const APPLICATION_KEY = 'api_oauth_consumer_key'; const APPLICATION_SECRET = 'api_oauth_consumer_secret';}class SelectorType{ const SELECTOR_TYPE_ME = '@me'; const SELECTOR_TYPE_ALL = '@all'; const SELECTOR_TYPE_SELF = '@self'; const SELECTOR_TYPE_FRIENDS = '@friends';}[/php]Even if they were to choose to go the PHP 5 way I would highly suggest that they do not use classes as containers for constants, there is no need to do this.  It is not using proper OOP methodologies.  Why create an object that just holds 2 - 4 constant variables, these would be better suited for define() calls in my opinion.I am not trying to flame the work of others, I would just like an idea of why they are using these methods.  Anyone reading this that knows the developers on the team feel free to have them explain what they were thinking when creating this code base.
