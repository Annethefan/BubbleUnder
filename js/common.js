$(document).ready(function(){
 
//Enhancing the form with helper text

 $("#field-e123104f735c23a").val("Please enter full name");

 $("#field-8738a4e5228c8f6").val("Incl local dialling code");

 $("#name").val("Format DDMMYYYY");

 $("#field-5b4b6f1d4f16151").val("The more you can enter here, the less we have to check with you :)");

 $("input, textarea").focus(function(){
  $(this).select();
 });

});


//Making the gallery captions appear on hover :-

$("figcaption").hide();
$("figure").each(function(){
$(this).hover(function(){
$(this).find("figcaption").slideDown("medium");
},function(){
$(this).find("figcaption").slideUp("medium");
});
});



