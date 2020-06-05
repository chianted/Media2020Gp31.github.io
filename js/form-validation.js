$(document).ready(function(){

	// hide messages 
	$("#error").hide();
	$("#success").hide();
	
	// on submit...
	$("#contactForm #submit").click(function() {
		$("#error").hide();
		
		//required:
		
		//name
		var first = $("input#first").val();
		if(first == ""){
			$("#error").fadeIn().text("you haven't type all questions.");
			$("input#name").focus();
			return false;
		}
		
		// email
		var second = $("input#email").val();
		if(second == ""){
			$("#error").fadeIn().text("you haven't type all questions.");
			$("input#email").focus();
			return false;
		}
		
		
		if(first!=""&&second!="") success()
		
	});  
		
		
	// on success...
	 function success(){
	 	$("#success").fadeIn();
	 	$("#contactForm").fadeOut();
	 }
	
    return false;
});

