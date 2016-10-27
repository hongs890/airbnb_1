var app = (function() {
	var init = function(context) {
		session.init(context);
		onCreate();
		booking.init();
		hosting.init();
		admin.init();
		member.init();
		main.init();
		memApp.init(context);
	};
	var context = function() {
		return session.getContextPath();
	};
	var js = function() {
		return session.getJavascriptPath('js');
	};
	var css = function() {
		return session.getCssPath('css');
	};
	var img = function() {
		return session.getImagePath('img');
	};
	var setContentView = function() {
		$('#h_admin').addClass('cursor');
		$('#p_con_footer').addClass('text_center').css('margin-left','16%').css('margin-right','0 auto').css('width','100%');
		$('#h_logo').addClass('cursor');
		$('#h_logo_u').addClass('cursor');
		$('#m_signin').addClass('cursor');
		$('#m_signup').addClass('cursor');
		$('#m_management').addClass('cursor');
	};
	var onCreate = function() {
		setContentView();
		$('#h_logo').click(function(){
			location.href = app.context() + '/'});
		$('#h_logo_u').click(function(){
			location.href = app.context() + '/'});
	/*	$('#m_management').click(function(e){
			e.preventDefault();
			$.ajax({
				url : app.context()+'/member/main',
				success : function(data){
					alert('input data value: '+data.message);
					if (data.message==="success") {
						$('#mem_nav').empty().append(app.context()+ '/member/nav');
						$('#pub_article').empty().html(DASHBOARD);
					} else {
						alert('success error');
					}
				},
				error : function(x,s,m){alert('error '+m);}
			});
		});*/
		$('#m_signin').click(function(){
			$('#pub_article').html(SIGNIN);
			$('#user-login-btn').click(function(e){
				e.preventDefault();
			
			$.ajax({
				url : app.context()+'/member/signin',
				type : 'POST',
				data : {'id' : $('#signin_email').val(),
						'pw' : $('#signin_password').val()},
				dataType : 'json',
				success : function(data){
					alert('input data value: '+data.message);
					if (data.message==="SUCCESS") {
						$('#pub_header').empty().load(app.context()+ '/member/logined/header');
						$('#pub_article').empty().html(LOGGED_MAIN);
					} else {
						location.href = app.context()+'/admin/main';
					}
				},
				error : function(x,s,m){alert('error '+m);}
			});
			});
		});
	
	};
		
	return {
		init : init,
		onCreate : onCreate,
		setContentView : setContentView,
		context : context,
		img : img,
		js : js,
		css : css,
	}
})();
var session = (function() {
	var init = function(context) {
		sessionStorage.setItem('context', context);
		sessionStorage.setItem('js', context + '/resources/js');
		sessionStorage.setItem('css', context + '/resources/css');
		sessionStorage.setItem('img', context + '/resources/img');
	};
	var getContextPath = function() {
		return sessionStorage.getItem('context');
	};
	var getJavascriptPath = function() {
		return sessionStorage.getItem('js');
	};
	var getCssPath = function() {
		return sessionStorage.getItem('css');
	};
	var getImagePath = function() {
		return sessionStorage.getItem('img');
	};
	return {
		init : init,
		getContextPath : getContextPath,
		getJavascriptPath : getJavascriptPath,
		getCssPath : getCssPath,
		getImagePath : getImagePath
	};

})();
var main = (function() {
	var init = function() {onCreate();};
	var setContentView = function() {
		$('#b_detail1').addClass('cursor');
		$('#b_detail2').addClass('cursor');
		$('#b_detail3').addClass('cursor');
		$('#b_main1').addClass('cursor');
		$('#b_main2').addClass('cursor');
		$('#b_main3').addClass('cursor');
		$('#b_main4').addClass('cursor');
		$('#b_main5').addClass('cursor');
		$('#g_main1').addClass('cursor');
		$('#g_main2').addClass('cursor');
		$('#g_main3').addClass('cursor');
	};
	var onCreate = function() {
		setContentView();
		$('#pub_article').on('click','#b_detail1',function(){
			$('#pub_article').html(DETAIL_FORM);
		});
		$('#pub_article').on('click','#b_detail2',function(){
			$('#pub_article').html(DETAIL_FORM);
		});
		$('#pub_article').on('click','#b_detail3',function(){
			$('#pub_article').html(DETAIL_FORM);
		});
		$('#pub_article').on('click','#b_main1',function(){
			$('#pub_article').html(BOOKING_FORM);
		});
		$('#pub_article').on('click','#b_main2',function(){
			$('#pub_article').html(BOOKING_FORM);
		});
		$('#pub_article').on('click','#b_main3',function(){
			$('#pub_article').html(BOOKING_FORM);
		});
		$('#pub_article').on('click','#b_main4',function(){
			$('#pub_article').html(BOOKING_FORM);
		});
		$('#pub_article').on('click','#b_main5',function(){
			$('#pub_article').html(BOOKING_FORM);
		});
		$('#g_main1').click(function(){
			$.ajax({
				url : app.context() + '/guidebook/g_Seoul',
				success : function(data) {
					alert('가져온 데이타 값 {} : ' + data.message);
					if (data.message === "success") {
						$('#pub_article').empty().html(g_Seoul);
					} else {
						alert('실패 {} : ');
					}
				},
				error : function(x, h, m) {
					alert('에러' + m);
				}
			});
			});
	};
	return {
		init : init
	};
})();
var u_header = (function() {
	var init = function() {
		onCreate();
		$('#m_dashboard').addClass('red');
	};
	var setContentView = function() {
	};
	var onCreate = function() {
		setContentView();
		$('#m_edit').click(function(){
			$.ajax({
				url : app.context() + '/member/edit',
				success : function(data) {
					alert('가져온 데이타 값 {} : ' + data.message);
					if (data.message === "success") {
						$('#pub_article').empty().html(EDIT);
					} else {
						alert('실패 {} : ');
					}
				},
				error : function(x, h, m) {
					alert('에러' + m);
				}
			});
			});
		$('#pub_header').on('click','#m_dashboard',function(){
			$('#pub_article').html(DASHBOARD);});
		$('#pub_header').on('click','#m_inbox',function(){
			$('#pub_article').html(INBOX);});
		$('#pub_header').on('click','#m_account',function(){
			$('#pub_article').html(ACCOUNT);});
		$('#pub_header').on('click','#m_logout',function(){
			$('#pub_article').html(LOGOUT);});
	};
	return {
		init : init
	};
})();
var nav = (function() {
	var init = function() {
		onCreate();
	};
	var setContentView = function() {
		
	};
	var onCreate = function() {
		setContentView();
	};
	return {
		init : init
	};
})();
var g_Seoul =
	'<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css">'
	+ '<link href="https://a1.muscache.com/airbnb/static/packages/manage_listing-5a21a78e524e212ada30b6a27fa6a498.css" media="screen" rel="stylesheet" type="text/css">'
	+ '<link href="https://a0.muscache.com/airbnb/static/packages/guidebook_new_guest_page-db43b7573ef62e14d129030f0166e840.css" media="screen" rel="stylesheet" type="text/css">'
	+ '<div class="guidebook-form">'
	+ '<div style="margin-top:2%;width:100%;" class="map-container guidebook-form__map-container">'
	+ '<div class="map-canvas" style="height: 100%; width: 100%;">'
	+ '<div style="height: 100%; width: 100%; position: relative; overflow: hidden;">'
	+ '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15047.120076241188!2d126.9363544769632!3d37.548764916285414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1472798528536"'
	+ 'width="100%" height="100%" frameborder="0" style="border: 0" allowfullscreen></iframe>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ '<div class="guidebook-new-guest-page__recommendation-container">'
	+ '<div class="guidebook-new-guest-page__image"'
	+ 'style="background-image: url(https://a2.muscache.com/ac/pictures/2a4e63c3-c981-4cbc-9c37-80a6ab3a9d24.jpg?interpolation=lanczos-none&amp;amp;size=x_large&amp;amp;output-format=progressive-jpeg&amp;amp;output-quality=70);"></div>'
	+ '<div class="panel">'
	+ '<div class="guidebook-new-guest-page__body">'
	+ '<div>'
	+ '<div>'
	+ '<h1 class="guidebook-new-guest-page__title">'
	+ '<span>서울 완전정복!</span>'
	+ '</h1>'
	+ '<h4 class="guidebook-new-guest-page__introduction">'
	+ '<span>돌아다닐 때 이것만 있으면 끝! 이 지역 에어비앤비 호스트가 추천하는 현지의 숨겨진 보석 같은'
	+ '장소들을 모은 가이드북입니다.</span></h4>'
	+ '<hr class="guidebook-new-guest-page__cut-off">'
	+ '<h3 class="guidebook-new-guest-page__best-of-best">'
	+ '<span>추천 장소 모음</span>'
	+ '</h3>'
	+ '</div>'
	+ '</div>'
	+ '<div class="guidebook-place-card-collection">'
	+ '<div class="guidebook-place-card-collection__item">'
	+ '<div class="guidebook-place-card-collection__scroll-anchor"></div>'
	+ '<div class="guidebook-place-card">'
	+ '<div class="guidebook-place-card__place-frame">'
	+ '<div>'
	+ '<p class="guidebook-place-card__number">'
	+ '<span>#</span>'
	+ '<span>1</span>'
	+ '</p>'
	+ '<a class="guidebook-place-card__save-button link-reset"">'
	+ '<i class="icon icon-size-2 icon-heart-alt"></i></a>'
	+ '</div>'
	+ '<h3 class="guidebook-place-card__title">서울의 명소</h3>'
	+ '<a href="#" class="guidebook-place-card__category"> 공원 및 자연</a>'
	+ '<a href="#" class="guidebook-place-card__category">공원</a>'
	+ '<div class="guidebook-place-card__other-highlights">'
	+ '<span class="guidebook-place-card__map-hours-and-website-group">'
	+ '<span class="guidebook-place-card__highlight">'
	+ '<a class="guidebook-place-card__link">'
	+ '<span>지도</span></a><span'
	+ 'class="guidebook-place-card__highlights-extra-padding">·</span></span>'
	+ '<span class="guidebook-place-card__highlight">'
	+ '<a class="guidebook-place-card__link">'
	+ '<span>영업 시간</span></a>'
	+ '<span class="guidebook-place-card__highlights-extra-padding">·</span></span>'
	+ '<span class="guidebook-place-card__highlight">'
	+ '<a href="#" target="_blank" class="guidebook-place-card__link">'
	+ '<span>웹사이트</span></a>'
	+ '<span class="guidebook-place-card__highlights-extra-padding">·</span></span></span>'
	+ '</div>'
	+ '</div>'
	+ '<div class="guidebook-place-recommendation__frame">'
	+ '<div>'
	+ '<p class="guidebook-place-recommendation__first-recommendation-title">'
	+ '<span>000명의 호스트가 추천</span>'
	+ '</p>'
	+ '<div style="display: none;">'
	+ '<button type="button"'
	+ 'class="guidebook-place-recommendation__recommendation-toggle-button">'
	+ '<span'
	+ 'class="guidebook-place-recommendation__recommendation-title">'
	+ '<span>호스트 추천 이유</span></span>'
	+ '<span>&nbsp;</span>'
	+ '<i class="icon icon-caret-up"></i>'
	+ '</button>'
	+ '</div>'
	+ '</div>'
	+ '<p class="guidebook-place-recommendation__description">'
	+ '<span> 호스트가 쓰는 코멘트가 이쪽에 표시</span>'
	+ '<a  class="guidebook-place-recommendation__link">'
	+ '<span>&nbsp;</span>'
	+ '<span>더 읽어보기</span></a>'
	+ '</p>'
	+ '<div>'
	+ '<div class="guidebook-place-recommendation__host-profile-image">'
	+ '<img'
	+ 'src="https://a1.muscache.com/im/users/27130439/profile_pic/1422933844/original.jpg?aki_policy=profile_small"'
	+ 'alt="Dougal" class="media-photo media-round"'
	+ 'style="height: 32px; width: 32px;">'
	+ '</div>'
	+ '<a href="#"'
	+ 'class="guidebook-place-recommendation__host-guidebook-link">'
	+ '<span>출처: Host(1)님의 가이드북</span></a>'
	+ '</div>'
	+ '</div>'
	+ '<div class="guidebook-place-recommendation__frame">'
	+ '<p class="guidebook-place-recommendation__description">'
	+ '<span>호스트가 쓰는 코멘트가 이쪽에 표시2</span>'
	+ '<a class="guidebook-place-recommendation__link">'
	+ '<span>&nbsp;</span>'
	+ '<span>더 읽어보기</span></a>'
	+ '</p>'
	+ '<div>'
	+ '<div class="guidebook-place-recommendation__host-profile-image">'
	+ '<img'
	+ 'src="https://a1.muscache.com/im/users/22662933/profile_pic/1422470091/original.jpg?aki_policy=profile_small"'
	+ 'alt="Leslie" class="media-photo media-round"'
	+ 'style="height: 32px; width: 32px;"'
	+ 'data-reactid=".1ze0k5z3k74.3.1.1.0.1.0:$150637.1.1:$1.2.0.0">'
	+ '</div>'
	+ '<a href="#"'
	+ 'class="guidebook-place-recommendation__host-guidebook-link">'
	+ '<span>출처: Host(2)님의 가이드북</span></a>'
	+ '</div>'
	+ '</div>'
	+ '<div class="guidebook-place-card-collection__pagination">'
	+ '<div class="pagination pagination-responsive">'
	+ '<ul class="list-unstyled">'
	+ '<li class="active">'
	+ '<a href="#">1</a></li>'
	+ '<li class="">'
	+ '<a href="#" rel="next">2</a></li>'
	+ '<li class="">'
	+ '<a href="#" rel="next">3</a></li>'
	+ '<li class="gap">'
	+ '<span class="gap">…</span></li>'
	+ '<li class="">'
	+ '<a href="#" rel="next">10</a></li>'
	+ '<li class="next next_page">'
	+ '<a href="#" rel="next">'
	+ '<span class="screen-reader-only">'
	+ '<span>다음</span></span>'
	+ '<i class="icon icon-caret-right"></i></a></li>'
	+ '</ul>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ '<div>'
	+ '<hr class="guidebook-new-guest-page__cut-off">'
	+ '<div class="guidebook-guest-page-footer__link-section">'
	+ '<div>'
	+ '<a href="#">'
	+ '<h4 class="guidebook-guest-page-footer__link-section-title">'
	+ '<span>서울에서 할 일 더 보기</span></h4></a>'
	+ '</div>'
	+ '<a  href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 레스토랑</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 카페/커피숍</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 제과점</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 나이트클럽</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 바</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 흥미로운 장소</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 박물관</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서울에 있는 쇼핑몰</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>서점</span></a>'
	+ '<a href="#"'
	+ 'class="guidebook-guest-page-footer__link-section-item">'
	+ '<span>영화관</span></a>'
	+ '</div></div>'
	+ '</div>'
	+ '</div>'
	+ '</div>' + '</div>' + '</div>' + '</div>';
var LOGGED_MAIN=
	'<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />'
	+'<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />'
	+'<link href="https://a1.muscache.com/airbnb/static/p1/main-98647fa0df25654edefa1bcc99c20a4f.css" media="screen" rel="stylesheet" type="text/css" />'
	+'<html lang="ko" xmlns:fb="http://ogp.me/ns/fb#">'
	+'<div style="margin: 0 auto;width: 100%;text-align: center;">'
	+'<video autoplay="" loop="" data-wow-delay="0.5s" style="width: 100%; height:600px; object-fit:fill; text-align: center;">'
	+'<source src="https://a0.muscache.com/airbnb/static/P1-background-vid-compressed-2.mp4" type="video/mp4">'
	+'</video>'
	 +'<div id="search-bar-container" class="hero__content-footer hide-sm">'
	+'<div class="page-container-responsive search-bar-responsive-container">'
	+'<div id="searchbar">'
	+'<div class="searchbar row" >'
	+'<form id="searchbar-form" action="/s">'
	+'<div class="searchbar__inputs-wrapper col-sm-10" >'
	+'<div class="row">'
	+'<label class="searchbar__location col-md-4 col-lg-6">'
	+'<span class="screen-reader-only">어디로 가세요?</span>'
	+'<input id="location" type="text" class="input-large input-contrast" autocomplete="off" name="location" placeholder="어디로 가세요?" />'
	+'<div id="searchbar-location-error" class="searchbar__location-error hide">위치를 설정해 주세요</div></label>'
	+'<label class="searchbar__checkin col-md-3 col-lg-2">'
	+'<span class="screen-reader-only">체크인</span>'
	+'<input id="checkin" type="text" class="checkin input-large input-contrast" name="checkin" placeholder="체크인" /></label>'
	+'<label class="searchbar__checkout col-md-3 col-lg-2">'
	+'<span class="screen-reader-only">체크아웃</span>'
	+'<input id="checkout" type="text" class="checkout input-large input-contrast" name="checkout"placeholder="체크아웃" /></label>'
	+'<label class="searchbar__guests col-md-2">'
	+'<span class="screen-reader-only">게스트 수</span>'
	+'<div class="select select-block select-large">'
	+'<select id="guests" name="guests">'
	+'<option value="1">숙박 인원 1명</option>'
	+'<option value="2">숙박 인원 2명</option>'
	+'<option value="3">숙박 인원 3명</option>'
	+'<option value="4">숙박 인원 4명</option>'
	+'<option value="5">숙박 인원 5명</option>'
	+'<option value="6">숙박 인원 6명</option>'
	+'<option value="7">숙박 인원 7명</option>'
	+'<option value="8">숙박 인원 8명</option>'
	+'<option value="9">숙박 인원 9명</option>'
	+'<option value="10">숙박 인원 10명</option>'
	+'<option value="11">숙박 인원 11명</option>'
	+'<option value="12">숙박 인원 12명</option>'
	+'<option value="13">숙박 인원 13명</option>'
	+'<option value="14">숙박 인원 14명</option>'
	+'<option value="15">숙박 인원 15명</option>'
	+'<option value="16">숙박 인원 16+명</option></select></div></label></div></div></form>'
	+'<div class="searchbar__submit-wrapper col-sm-2">'
	+'<buttonid="submit_location" type="submit" class="searchbar__submit btn btn-primary btn-block btn-large">'
	+'<span class="searchbar__submit-text">숙소 검색</span>'
	+'</button></div></div></div></div></div>'
	+'</div>'
	 +'<div align="center">'
	 +'<div style="padding-top:100px;"><h2 style = "color:brown; font-style: italic;">여행은 살아보는 거야</h2><br></br>'
	+'<h3>191개 이상 국가의 현지 대표 호스트의 집을 예약하고 살아보는 여행을 경험해 보세요.</h3></div><br>'
	+'<img src='+app.img()+'/public/room1.jpg id="b_detail1" alt="Bangkok_room" style="width:25%;height:500px;" >'
	 +'<img src='+app.img()+'/public/room2.jpg id="b_detail2" alt="Europe_room" style="width:25%;height:500px;">'
	 +'<img src='+app.img()+'/public/room3.jpg id="b_detail3" alt="Paris_room" style="width:25%;height:500px;">'
	 +'</div><br>'
	+'<div align="center" style="width:100%;height:1200px;">'
	+'<div style="padding-top:100px;">'
	+'<h2 style = "font-style: italic;">두근두근 세계 여행</h2><br></br>'
	+'<h4>세계 곳곳을 누벼 보세요</h4></div><br>'
	+'<img src='+app.img()+'/public/sweden.jpg id="b_main1" alt="Bangkok" style="width:50%;height:400px;margin-bottom:0 auto">'
	+'<img src='+app.img()+'/public/paris.jpg id="b_main2" alt="Paris" style="width:25%;height:400px;"><br>'
	+'<img src='+app.img()+'/public/osaka.jpg id="b_main3" alt="Osaka" style="width:25%;height:400px;">' 
	+'<img src='+app.img()+'/public/bangkok.jpg id="b_main4" alt="Bangkok" style="width:25%;height:400px;">' 
	 +'<img src='+app.img()+'/public/london.jpg id="b_main5" alt="London" style="width:25%;height:400px;">' 
	  +'</div>'
	  +'<div align="center">'
	  +'<div style="padding-bottom: 100px;">'
	  +'<h2 style = "font-style: italic;">가이드북</h2><br></br>'
	+'<h4>가고 싶은 도시의 명소를 확인하세요!</h4><br>'
	  +'<img src='+app.img()+'/public/seoul.jpg id="g_main1" alt="seoul" style="width:25%;height:400px;">' 
	 +'<img src='+app.img()+'/public/busan.jpg id="g_main2" alt="busan" style="width:25%;height:400px;">' 
	 +'<img src='+app.img()+'/public/incheon.jpg id="g_main3" alt="incheon" style="width:25%;height:400px;">' 
	 +'</div>'
	 +'</div>'
	 +'</html>'