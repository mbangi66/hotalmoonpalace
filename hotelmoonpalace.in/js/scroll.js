$(window).scroll(function(){

			var pos = $(window).scrollTop();

			$('#scrollPos').html(pos);

			if(pos > 200)
			{
				$('#scrollBtn').fadeIn();
			}
			else
			{
				$('#scrollBtn').fadeOut();
			}

		});

		$('#scrollBtn').click(function(){

			$('html,body').animate({scrollTop: 0},1000,'easeOutExpo');

		});
		