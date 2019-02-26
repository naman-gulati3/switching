$(document).ready(function(){
                        
    var leftInput = $('.left-form input');
    var rightInput = $('.right-form input');
        $(leftInput).focus(function(){
                    $(this).addClass('moveRight');
            });
            
   
    $(leftInput).select(function(){
      
            $(this).addClass('backToOriginal');
    });
            
    
          
            $(rightInput).focus(function(){
           
                $(this).addClass('moveLeft');
            });
            $(rightInput).select(function(){
      
      $(this).addClass('backToRight');
});
                                              
    });