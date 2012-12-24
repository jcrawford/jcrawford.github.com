var searchTimer;

$(document).ready( function () {
    
  $("#s").attr("autocomplete", "off");

  $('#search-3').css('position', 'relative');
	$('#search-3').append('<div id="search-results"></div>');

	$('#s').keydown( function (e) {
				
		if (e.which == 40) {

		  if ($('#search-results .search-entry.selected').length != 0) {
		    var prime = $('#search-results .search-entry.selected');
		    prime.next().addClass('selected');
		    prime.removeClass('selected');
		  } else {
		    $('#search-results .search-entry:first').addClass('selected');
		  }

      $('#search-results').animate({
        scrollTop: $('#search-results').scrollTop() + $('#search-results .search-entry.selected').position().top - 20
      }, 300, function() { });
            
		} else if (e.which == 38) {
		
		  if ($('#search-results .search-entry.selected').length != 0) {
		    var prime = $('#search-results .search-entry.selected');
		    prime.prev().addClass('selected');
		    prime.removeClass('selected');
		  } else {
		    $('#search-results .search-entry:last').addClass('selected');
		  }

      $('#search-results').animate({
        scrollTop: $('#search-results').scrollTop() + $('#search-results .search-entry.selected').position().top - 20
      }, 300, function() { });
		  		
		} else if (e.which == 13) {
          e.preventDefault();
          var page = $('#search-results .search-entry.selected a').attr('href');
          if(page != undefined) {
              window.location.href = page;
          }
		  return false;
          
      } else if (e.which == 27) {
          $("#s").val("").blur();
          $("#search-results").hide();
          $(".icon-remove").remove();
		} else {
      if (searchTimer == null)
        searchTimer = setTimeout("siteSearch($('#s').val())", 500);		
		}
		
	});

  //siteSearch('phantom paradise');

})

siteSearch = function(w) {

    var words;
    var o = this;
    
    o.parseWords = function(w) {
        
      // parse the words out of the query
      words = w.toLowerCase().match(/\w{2,}/gi);
      
      // convert the array to stemmed words
      sWords = new Array();
      for (w2 in words) {
        stem = stemmer(words[w2]);
        if ($.inArray(stem, sWords) == -1) {
          sWords.push(stem);
        }
      }
            
      // return the stemmed version
      return sWords;

    };

    o.getIndexUrls = function(ws) {
    
      // create an array of urls pointing to the first letter of each word
      files = new Object();
      for (word in ws) {
        temp = '/search/terms/' + ws[word].substring(0, 2).toLowerCase() + '.json';
        files[temp] = null;
      }
            
      return files;
        
    };

    o.loadIndexes = function(is) {  
      // make an ajax call to get all the indexes
      for (file in is) {
        $.getJSON(file, o.getPostIds);
      }
    };
    
    o.getPostIds = function(ts) {

      if (!o.posts.length) {
        o.posts = new Array();
      }
          
      // loop through the terms, then the ids for each term
      for (var term in ts) {
          
        // if the index term matches one of our search terms, add it to the list of posts
        if ($.inArray(term, o.words) != -1) {															

          for (id in ts[term]) {
            if (!o.posts[ts[term][id]]) {
              o.posts[ts[term][id]] = 1;
            } else {
              o.posts[ts[term][id]] ++;
            }
            
          }
          
        }
          
      }

    };
    
    o.getPosts = function() {

			var sortable = [];
			for (var postId in o.posts) {
				sortable.push([postId, o.posts[postId]])
			}
			
			o.posts = sortable.sort(function(a, b) {return b[1] - a[1]})
    
      for (var i=0; i < o.posts.length && i < 20; i++) {
        $.get('/search/posts/' + o.posts[i][0] + '.html', o.loadPostData);
      }
  
      $(document).unbind();

    };

    o.loadPostData = function(ts) {
      $('#search-results').append(ts);
    }
    
    o.clearResults = function() {
      $(document).unbind();
      $('#search-results').empty();
      $('#search-results').hide();
      $('#searchform i').remove();
      $('#searchform input').val('');
    }
    
    // here's the main code of the function
    
    clearTimeout(searchTimer);
    searchTimer = null;
    $(document).unbind();
    $('#search-results').empty();
    $('#search-results').hide();

    o.posts = new Array();
    o.words = o.parseWords(w);
    o.indexUrls = o.getIndexUrls(o.words);
    
    o.loadIndexes(o.indexUrls);
        
    $(document).ajaxStop(function () { 
    	if (o.posts.length) {

    		o.getPosts();
    		    		
    		$('#search-results').css('top', $('#searchform').offset().top + 34); 
    		$('#search-results').show();
            if($(".icon-remove").length == 0) {
                $('<i class="icon-remove"></i>').appendTo("#searchform").click(o.clearResults);
            }
    		
    	}
    });
    
};var searchTimer;