$( document ).ready(function() {
    console.log( "ready!" );
   
   
   		// $(function(){

   	//	setTimeout(function () {
    //    $('#myModal').modal('toggle');
    //}, 2000);
   		

   //})

   	$('#about').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'about' ? $('#down') : $('#up');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});

});
    

