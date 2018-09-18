
$(document).ready(function(){

//jQuery Filter	
	$("#myInput").on("keyup", function() {
	  var value = $(this).val().toLowerCase();
	  $("#myTable tr").filter(function() {
	    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	  });
	});

//jQuery Animate
	$("button").click(function(){
        $("img").animate({
            height: 'toggle'
        });
    });

//jQuery HTML Set Content and Attributes
	$("#btn1").click(function(){
        $("#T").val("Good Luck!");
    });
    $("#btn2").click(function(){
        $("#T").val("Keep Spirit!");
    });
    $("#btn3").click(function(){
        $("#T").val("Hopeless!");
    });
    $("#btn4").click(function(){
        $("#T").val("We're the Champion!");
    });

});