$(document).ready(function(){
	var risd = ["Michael&nbsp;", "Rock&nbsp;", "Rhode&nbsp;", "Island&nbsp;", "School&nbsp;", "of Design&nbsp;", "Visiting&nbsp;", "Designer&nbsp;", "February&nbsp;", "25&nbsp;", "6:30pm&nbsp;"];
	$("div").each(function(){
	var words = risd[Math.floor(Math.random() * risd.length)];
	$(this).html(words);
	});

	//variables
	var name = "Andrew";
	var zip = 10001;
	var greeting = "Hello " + name;

	//functions
	function sayHello () {
		var greeting = "Hello " + name;
		console.log(greeting);
	}

	// calling a function
	sayHello();


	/*$("div").hover(function() {

		$(this).html("Hovered");
		$(this).addClass("hovered");
	}, function() {
		$(this).html("see ya");
		$(this).removeClass("hovered");
	});*/

	var colors = ["yellow", "red", "blue",];
	var border = ["dotted", "solid", "ridge", "dashed"];
	var back = ["pink", "violet", "gold", "whitesmoke", "floralwhite", "green", "white"];


	$("div").click(function (){
		/*$(this).addClass("clicked");
		//var randNumber = Math.random() * 500;
		//$(this).css("font-size", randNumber + "px");
		//console.log(randNumber);
		//$(this).css("float", "left");
		//$(this).css("background-color", "red");
		var hello = colors[Math.floor(Math.random() * colors.length)];
		var second = colors[Math.floor(Math.random() * colors.length)];
		var type = border[Math.floor(Math.random() * border.length)];
		var number = Math.random() * 10;
		var third = Math.random() * 30;
		var fourth = Math.random() * 30;
		var top = Math.random() * 100;
		var left = Math.random() * 100;
		var radius = Math.random() *100;
		var zindex = Math.floor(Math.random() * 5);

		$(this).css("background-color", hello);
		$(this).css("border", number + "px" + " " + type);
		$(this).css("border-color", second);
		$(this).css("width", third + "px");
		$(this).css("height", fourth + "px");
		$(this).css("position", "fixed")
		$(this).css("top", top + "%");
		$(this).css("left", left +"%");
		$(this).css("z-index", zindex);
		$(this).css("border-radius", 0 + "%");*/

	});


	/*$(window).resize(function (){
		var cem = back[Math.floor(Math.random() * colors.length)];
		$("body").css("background-color", cem);
	});*/



	var backtwo = ["white", "black", "yellow"];
	var risd = ["Michael&nbsp;", "Rock&nbsp;", "Rhode&nbsp;", "Island&nbsp;", "School&nbsp;", "of Design&nbsp;", "Visiting&nbsp;", "Designer&nbsp;", "February&nbsp;", "25&nbsp;", "6:30pm&nbsp;"];

	$(window).scroll(function (){
		var what = backtwo[Math.floor(Math.random() * backtwo.length)];
		$("body").css("background-color", what);
		/*$("div").html(risd);*/
		$("div:hover").each(function(){
			var what = backtwo[Math.floor(Math.random() * backtwo.length)];
			//$(this).css("background-color", what);
		});
		$("div").each(function(){
			var what = backtwo[Math.floor(Math.random() * backtwo.length)];
			var words = risd[Math.floor(Math.random() * risd.length)];
			$("div").html(words);
			//$(this).css("background-color", what)
	/*		var top = Math.random() * 1000;
			var left = Math.random() * 1000;
			$(this).css("top", top + "%");
			$(this).css("left", left +"%");
			$(this).css("position", "absolute");*/
		});
	});





});
