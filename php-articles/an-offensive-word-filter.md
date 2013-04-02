---
layout: page
title: "PHP Articles | An Offensive Word Filter"
permalink: /an-offensive-word-filter/index.html
---

One of my tasks recently was to create an offensive word filter.  This filter would be called on pages which had form posts that contained user data.  We did not want to allow offensive words to be shown.  Words like crap or crapping would be shown as c&lowast;&lowast;p and c&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;g. The first thing I did was determine what methods would be required for the class.  We wanted to be able to check a string for offensive words as well as censor out the offensive words.  I created the class named OffensiveWord and created the appropriate methods called isOffensive and censor.

We also did not want to have to instantiate the class in order to call the method so we opted to use static methods.  Using static methods we are able to call OffensiveWord::isOffensive( ‘string’ ); rather than having to instantiate the class. Along with these two methods we also needed a method for loading the offensive words into the object from a flat file. We choose to use a flat file but you could very well use a database table for this as well.

We are first going to start off by making the method that will load our offensive word list into the object. This method is pretty self-explanatory. First we check to make sure that the word file exists and that the file is readable. If so we use the file() function to read the file. If you are not aware of what the file() function does it reads the file line by line and creates an array element for each line of the file. This might take more processing power than using the fopen, fread and fclose functions but it also takes less code and works perfect in this situation. Once we have an array of words I am looping over them and calling trim() to get rid of any excess whitespace and then push it into the self::$_word_list[] array. Once the words are loaded I am using the usort function to sort the words by string length. I am doing this because if the word crap appears before the word crapping in the word list then crapping would be changed to c&lowast;&lowast;pping rather than what I wanted. With the usort function it requires a user defined callback function that will be called along with it, for that I created the sort method. You can read more about the usort function in the php documentation, I will not go into depth on the function or callback function in this article.

{% highlight php linenos %}
<?php
/**
  * Load the offensive word list
  *
  * @return boolean
  */
 private function load_bad_word_list( )
 {
     if( 
	 	is_file( 'offensiveword.txt' ) && 
		is_readable( 'offensiveword.txt' ) 
	 )
     {
         $lines = file( 'offensiveword.txt' );
         self::$_total_words_in_list = count( $lines );
         for( $i = 0; $i <= ( self::$_total_words_in_list - 1); $i++ ) 
		 	if( $lines[$i] != "" ) 
				self::$_word_list[] = trim( $lines[$i] );
         usort(self::$_word_list, array( self, 'sort' ) );
         $lines = null;
         return true;
     }
     else return false;
 }
 
 /**
  * Sort the word list by string length, longest to smallest string. This
  * is the user defined callback function for the usort function call
  * in the load_bad_word_list method.
  *
  * @param string $a
  * @param string $b
  * @return integer
  */
 private function sort( $a, $b )
 {
     if( strlen( $a ) < strlen( $b ) ) return 1;
     if( strlen( $a ) > strlen( $b ) ) return -1;
 
     // they must be the same length
     return 0;
 }
{%  endhighlight %}

Once we have the ability to load the offensive word list we now need to work on checking whether there are offensive words within a string and a method for censoring them out. In the isOffensive static method we first need to check and see if the word list has been loaded, we simply count how many words are in the class property $_word_list. If there are more than 0 then the list has already been loaded, if not we need to call the load_bad_word_list() method. Once we have the list of words we need to loop over every word and check to see if our string contains any of the offensive words. For this task I am using the strpos php function. A lot of people would have just used the strstr function but for this situation strpos is better. The reason is because strstr will return the word found in the string and strpos just returns a true/false value. strpos takes less processing especially when you just want to know if a value exists or not. Looping over the words if any are found the method will return true otherwise when the looping is over it will return false. Pretty simple eh.

Now for the most complicated part of the entire class….. Believe me it’s really not that bad. We need to create the censor method. This method will actually replace all offensive words in the string. I have opted to use an &lowast; as the blackout character and I have also opted to only show the first and last letter of the offending word. You can choose to do this however you wish. To get the results I wanted I had to use a mixture of substr, strlen and sprintf. To do the actual word replacement I am using eregi_replace which is a regular expression function that is case-insensitive. One thing that I should also mention is that I am passing the string in by reference. You will see the & symbol in the function definition. If you do not know what passing by reference is you should [read up on passing by reference](http://us.php.net/manual/en/language.references.pass.php) however I will explain it briefly. Passing a variable by reference is passing the memory location where the variable is stored. Normally when you pass a variable around in php it will create a copy of the variable. Since the string is passed in by reference any operations completed on the string inside the censor method will effect the variable outside of the method. Let me show a small example.

```php
<?php
/**
 * Passing by reference
 *
 * Outputs
 *
 * 10 - before add() call
 * 10 - after add() call
 * 15 - after addref() call
 */
$a = 10;
echo $a;
add($a);
echo $a;
addref($a);
echo $a;
 
function addref(&$a)
{
    $a += 5;
}
 
function add($a)
{
    $a += 5;
}
```

Notice that the add function call does not effect the value of $a outside of the add method. However the addref method call does. This is because you are passing $a into addref by reference. When you call the add method call php will create a copy of the $a variable and any operations inside the add function are completed on the copy of the variable.

In the censor method I am also calling the isOffensive method to check and see if the string contains any offensive words. If there are no offensive words there is no point in doing any further processing. Another thing that you might find confusing are all of the references to self:: in the code. Things have to be done like this due to the methods being defined as static. You are probably use to seeing $this rather than self:: but if you are confused I suggest you read up on the [PHP 5 static keyword](http://us.php.net/manual/en/language.oop5.static.php).

```php
<?php
/**
 * An Offensive Word Filtering Class
 *
 */
class OffensiveWord
{   
    static private $_word_list;
    static private $_total_words_in_list;
 
    /**
     * Class Constructor
     * 
     * Currently this is not used because the public methods that are
     * available are all statically called
     */
    private function __construct( )
    {
 
    }
 
    /**
     * Load the offensive word list
     *
     * @return boolean
     */
    private function load_bad_word_list( )
    {
        if( 
			is_file( INCLUDE_DIR.'/offensiveword.txt' ) && 
			is_readable( INCLUDE_DIR.'/offensiveword.txt' ) 
		)
        {
            $lines = file( INCLUDE_DIR.'/offensiveword.txt' );
            self::$_total_words_in_list = count( $lines );
            for( $i = 0; $i <= ( self::$_total_words_in_list - 1); $i++ ) 
				if( $lines[$i] != "" ) 
					self::$_word_list[] = trim( strtolower( $lines[$i] ) );
            usort(self::$_word_list, array( self, 'sort' ) );
            $lines = null;
            return true;
        }
        else return false;
    }
 
    /**
     * Sort the word list by string length, longest to smallest string. 
     * This is the user defined callback function for the usort 
     * function call in the load_bad_word_list method.
     *
     * @param string $a
     * @param string $b
     * @return integer
     */
    private function sort( $a, $b )
    {
        if( strlen( $a ) < strlen( $b ) ) return 1;
        if( strlen( $a ) > strlen( $b ) ) return -1;
 
        // they must be the same length
        return 0;
    }
 
    /**
     * Check to see if there are offensive words in the string
     *
     * @param string $string
     * @return boolean
     */
    static public function isOffensive( $string )
    {
        if( count( self::$_word_list ) == 0 ) 
			self::load_bad_word_list( );
			
		$total_words = self::$_total_words_in_list - 1;
        for( $i = 0; $i <= $total_words; $i++ )
        {
            if(stripos($string, self::$_word_list[$i]))
				return true;
        }
		
        return false;
    }
 
    /**
     * Actually censor out the offensive words from the string.
     *
     * @param string $string by reference
     * @return boolean
     */
    static public function censor( &$string = null )
    {
        if( self::isOffensive( $string ) === false ) return true;
        for( $i = 0; $i <= ( self::$_total_words_in_list - 1 ); $i++ )
        {
            $string = eregi_replace(
				self::$_word_list[$i], 
				substr(
					self::$_word_list[$i], 
					0, 
					1
				).
				sprintf(
					"%'*".(strlen(self::$_word_list[$i])-2)."s", 
					NULL
				).substr(
					self::$_word_list[$i], 
					strlen(self::$_word_list[$i])-1, 1
				), $string
			);
        }
        return true;
    }
}
 
$string = 'Some crappy words are in this crap.';
OffensiveWord::censor( $string );
echo $string;
// outputs: Some c****y words are in this c**p
```

If you have any questions about this article please feel free to contact me. If there is a topic you would like explained, drop me a line and I will try to get an article posted to better explain it for you.