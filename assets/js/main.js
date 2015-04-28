$(document).ready(function(){
	// Moving elevator to middle of floor
	$("#elevator").animate({"padding-top": "80px"}, "slow")	

	// Moving elevator 
	$("#floor-0 .arrows img").click(function(event){
		event.preventDefault();
		$("#elevator img").animate("slow").attr("src","assets/img/door-elevator.png");
		$("#elevator").animate({"padding-top": "0px"}, 1500, 
			function(){
				$("#elevator img").animate("slow").attr("src","assets/img/elevator.png");
			}
		);
	});

	$("#floor-1 .arrows img").click(function(event){
		event.preventDefault();
		$("#elevator img").animate("slow").attr("src","assets/img/door-elevator.png");
		$("#elevator").animate(
			{"padding-top": "145px"},1500, 
			function(){
				$("#elevator img").animate("slow").attr("src","assets/img/elevator.png");
			});
	});

	$("#floor-2 .arrows img").click(function(event){
		event.preventDefault();
		$("#elevator img").animate("slow").attr("src","assets/img/door-elevator.png");
		$("#elevator").animate({"padding-top": "292px"}, 1500, 
			function(){
				$("#elevator img").animate("slow").attr("src","assets/img/elevator.png");
			});
	});
	
	$("#floor-3 .arrows img").click(function(event){
		event.preventDefault();
		$("#elevator img").animate("slow").attr("src","assets/img/door-elevator.png");
		$("#elevator").animate({"padding-top": "438px"}, 1500, 
			function(){
				$("#elevator img").animate("slow").attr("src","assets/img/elevator.png");
			});
	});
	
	$("#floor-4 .arrows img").click(function(event){
		event.preventDefault();
		$("#elevator img").animate("slow").attr("src","assets/img/door-elevator.png");
		$("#elevator").animate({"padding-top": "585px"}, 1500, 
			function(){
				$("#elevator img").animate("slow").attr("src","assets/img/elevator.png");
			});
	});
});