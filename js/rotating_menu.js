var maxspeed = 0.02;
var minspeed = 0.00;

var speed = maxspeed;

var radius = 140;
var count = 0;

function rotate() 
{

var centerx = $(document).width()/2;
var centery = $(document).height()/2;
var num_items = $(".menuitem").length;
$(".menuitem").each(function() {

	var angle = count * (Math.PI/180);

	var newx = centerx + Math.cos(angle)*radius -50;

	var newy = centery + Math.sin(angle)*radius - 50;

	$(this).css("left",newx+"px");
	$(this).css("top",newy+"px");


	count += 360/num_items + speed;

});

}


$(document).ready(function() {
	setInterval(rotate,3000/360);

	$(document).mousemove(function(e){
		var dw = $(document).width();
		var dh = $(document).height();
		var itemh = $(".menuitem").height();
		var itemw = $(".menuitem").width();
		if(e.pageX > dw/2-radius-itemw/2 && e.pageX < dw/2 + radius + itemw/2 && e.pageY > dh/2-radius-itemh/2 && e.pageY < dh/2+radius+itemh/2)
		{
			speed = minspeed;
		}else{
			speed = maxspeed;
		}
		
	});


});