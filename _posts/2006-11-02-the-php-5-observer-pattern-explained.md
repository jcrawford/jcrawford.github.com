--- 
wordpress_id: 169
layout: post
wordpress_url: http://www.josephcrawford.com/2006/11/02/the-php-5-observer-pattern-explained/
categories: 
- slug: development
  autoslug: development
  title: Development
- slug: raves
  autoslug: raves
  title: Raves
tags: []

title: The PHP 5 Observer Pattern Explained
---

We are going to discuss the Observer pattern, this pattern is what you will use when you have several objects that need to react when an event from another object is triggered.  Please ignore the echo statements that are scattered around the code, they are there because they show the flow process of the code when run in the browser.

When using the Observer pattern you will need to create 2 interfaces.  The Observable and Observer interface.  These are pretty well self explanatory by the names.  As you would guess the Observer interface is what you implement on objects that will observe another object.

[php]interface Observable {function attach( Observer $observer );function detach( Observer $observer );function notify( );} [/php]

The Observable interface is a pretty simple concept.  It is also pretty well self explanatory, it contains 3 methods attach, detach and notify.  The attach and detach methods require a parameter be passed into them.  It also uses type casting to enforce that they implement the Observer interface.  You would not want to attach an object to the Observable object that does not implement the Observer Interface.  It could lack the required method and could cause bugs in your code.

The Observer interface requires any objects that implement it to contain only 1 method.  The update method.  This method is passed the Observable object as a parameter and therefore we have used type casting again to enforce the object passed in implement the Observable interface.

[php]interface Observer{function update( Observable $observer );}[/php]

Now that we have the interfaces out of the way we need to create the object that will be Observable.  I have chosen to name the class Order.  Whenever the processOrder method is called it in turn calls the notify method.  The notify method will loop over all of the observer objects and call their update methods.  It passes the instance of the Order class to the Observer object so that it can access the object.  In this example we are just accessing the status of the Order object.
<!--more-->
[php]class Order implements Observable{private $observers = array( );private $status = array( );private $items = array( );

function __construct( ){echo 'In Order Constructor!';}function Order( ){

}

function attach( Observer $observer ){echo 'Attaching '.get_class($observer).' to Order!';$this->observers[] = $observer;}

function detach( Observer $observer ){$this->observers = array_diff( $this->observers, array( $observer ) );}

function notify( ){foreach ( $this->observers as $obs ){echo 'Notifying '.get_class($this).'!';$obs->update( $this );}}

function processOrder( ){// notify the observersecho 'Processing Order!';$this->setStatus('Processing Order');$this->notify( );}

function setStatus( $status ){$this->status = array( $status );}

function getStatus( ){return $this->status;}}[/php]

Ok so all that is left is the object that will implement the Observer interface.  I have chosen to use something that a lot of sites implement.  A logging class.

[php]class GeneralLogger implements Observer{function __construct(){echo 'Creating '.get_class($this).'!';}function GeneralLogger(){$this->__construct();}

function update( Observable $observer ){$status = $observer->getStatus( );echo 'Logging: '.$status[0].'!';}}[/php]

This class implements the Observer interface and implements the required update method.  In this method all we do is retrieve the status of the Order object that is passed into this object.  We could however do much more if we choose to.

Now we need to actually setup the objects to work with each other.[php]include_once('includes/interfaces/Observable.php');include_once('includes/interfaces/Observer.php');include_once('includes/classes/Order.php');include_once('includes/classes/GeneralLogger.php');

$order = new Order( );$order->attach( new GeneralLogger( ) );$order->processOrder( );[/php]

The following output is what you get if you run this script in your browser

In Order Constructor!Attaching GeneralLogger to Order!Processing Order!Notifying Order!Logging: Processing Order!

Notice that when we call the processing order, it calls the notifying order method, which in turn calls the logging update method to output the final line in the browser.

Now you can get quite complex when using the observer pattern, for instance imagine we had a paypal payment module, which implemented both Observable and Observer interfaces (Yes you can do that).  It would be notified upon the execution of processOrder, this would run the update method.  Well maybe we want to start to process the payment at this point.  So we reach out and do the payment stuff, we can now have the payment module alert any of it's personal observers about the results of the payment process.  It payment fails we can have emails sent to the customer and administrator for instance.

There are quite a few reasons to use the Observer pattern, however just like all patterns you should not use them too much.

If you have any questions about this small example please feel free to ask in comments, I am always willing to explain the code better so that people can understand it.
