// Problem - Want to make a search box that filters images in real time by matching text being typed into the search box against the text in the title of the images.

$("#search").on('keyup', function(){
      
        // Retrieve the input field text 
        var $filter = $(this).val();
        
  
        // Ignore it if someone hits enter at the end of their search term
        $(document).keypress(function(event) {
            if(event.which === 13) {
              event.preventDefault();
            }
        });
  
     


     $(".fancybox").each(function(){
  
        // If the div item does not contain the text phrase fade it out
        if ($(this).next().text().search(new RegExp($filter, "i")) < 0) {
           $(this).hide();
          
        // Show the div item if the phrase matches 
        } else {
            $(this).show();
            $(this).attr('rel', $filter);
        }
    
      });
  
  
    // Show a message to say that the search doesn't match any images
    if ($('.fancybox:visible').length === 0) {
        $('.emptyContainer').children().replaceWith("<div class='empty'>Sorry, there are no images that match your search.</div>");
     } else {
     $('.emptyContainer').children().replaceWith("<span></span>");
     }
  
});




   
 
  



