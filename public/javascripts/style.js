$( document ).ready(function() {
    console.log( "ready!" );
   
   
   		// $(function(){

   	//	setTimeout(function () {
    //    $('#myModal').modal('toggle');
    //}, 2000);
   		

   //})

// js code for bootstrap navbar collapse on click function//

$(document).on('click',function(){
  $('.collapse').collapse('hide');
});

$(document).on('click','.navbar-collapse',function(e){
  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle'){
  $(this).collapse('hide');
}
});






});
    

