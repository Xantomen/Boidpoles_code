$(document).ready(function(){

	$("#create_pole").click(function(e){
		
		createNewPole();
		
	});
	$("#create_poles").click(function(e){
		
		var number = $("#pole_number").val();
		
		if(number)
		{
			createManyPoles(number);
		}
		
	});
	$("#pole_number").click(function(e){
		
		e.stopPropagation();
		
	});
	$("#destroy_poles").click(function(e){
		
		deleteAllPoles();
		
	});
	
	$("#create_bullet").click(function(e){
		
		createNewBullet(0,0);
		
	});
	$("#create_bullets").click(function(e){
		
		var number = $("#bullet_number").val();
		
		if(number)
		{
			createManyBullets(number);
		}
		
	});
	$("#bullet_number").click(function(e){
		
		e.stopPropagation();
		
	});
	$("#destroy_bullets").click(function(e){
		
		deleteAllBullets();
		
	});
	
	
	
});