$(document).ready(function(){
	var count = 0;
	var images = ["../images/banner1.jpg","../images/banner.jpg","../images/banner.png"];
	var image = $(".fader"); 
	
	image.css("background-image","url("+images[count]+")");

	setInterval(function(){
		image.fadeout(500,function(){
		image.css("background-image","url("images[count++]+")");
		image.fadeIn(500);
});
	if (count == images.length){
	count = 0;
}
},3000);

});
