      $(document).ready(function(){
          
          setTimeout(function() { 
                 $('.popup').css('display','block');
            }, 2000);
         
          $('#popup-X-btn').click(function(){
               $('.popup').css('display','none');
          })
      })