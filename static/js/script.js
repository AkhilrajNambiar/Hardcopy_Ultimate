$(document).ready(function(){
	$('#tap-link1').hover(function(){
		$('#tap1').css("display","inline-block");
	},
	function(){
		$('#tap1').css("display","none");
	});
	$('#tap-link2').hover(function(){
		$('#tap2').css("display","inline-block");
	},
	function(){
		$('#tap2').css("display","none");
	});
	$('#tap-link3').hover(function(){
		$('#tap3').css("display","inline-block");
	},
	function(){
		$('#tap3').css("display","none");
	});
	$('#tap-link4').hover(function(){
		$('#tap4').css("display","inline-block");
	},
	function(){
		$('#tap4').css("display","none");
	});
	$('#tap-link5').hover(function(){
		$('#tap5').css("display","inline-block");
	},
	function(){
		$('#tap5').css("display","none");
	});
	$('#tap-link6').hover(function(){
		$('#tap6').css("display","inline-block");
	},
	function(){
		$('#tap6').css("display","none");
	});

	$('#cap-link1').hover(function(){
		$('#cap1').css("display","inline-block");
	},
	function(){
		$('#cap1').css("display","none");
	});
	$('#cap-link2').hover(function(){
		$('#cap2').css("display","inline-block");
	},
	function(){
		$('#cap2').css("display","none");
	});
	$('#cap-link3').hover(function(){
		$('#cap3').css("display","inline-block");
	},
	function(){
		$('#cap3').css("display","none");
	});
	$('#cap-link4').hover(function(){
		$('#cap4').css("display","inline-block");
	},
	function(){
		$('#cap4').css("display","none");
	});
	$('#cap-link5').hover(function(){
		$('#cap5').css("display","inline-block");
	},
	function(){
		$('#cap5').css("display","none");
	});

	$('#map-link1').hover(function(){
		$('#map1').css("display","inline-block");
	},
	function(){
		$('#map1').css("display","none");
	});
	$('#map-link2').hover(function(){
		$('#map2').css("display","inline-block");
	},
	function(){
		$('#map2').css("display","none");
	});
	$('#login').click(function(){
		$('#Loginmodal').modal('show');
	});
	$('#king').click(function(){
		$('#Loginmodal').modal('hide');
		$('#signupmodal').modal('show');
	});
	$('#algore').click(function(){
		$('#signupmodal').modal('hide');
		$('#Loginmodal').modal('show');
	});
	$('.contributor').click(function(){
		$('#contributemodal').modal('show');
	});
	$('.theme').click(function(){
		if($('.theme').children('img').attr('src') == 'images/lighttheme.png'){
			$('#styledark').attr('href','css/styleslight.css');
			$('.theme').children('img').attr('src','images/darktheme.png')
		}
		else if($('.theme').children('img').attr('src') == 'images/darktheme.png'){
			$('#styledark').attr('href','css/stylesdark.css');
			$('.theme').children('img').attr('src','images/lighttheme.png');
		}
	});
});