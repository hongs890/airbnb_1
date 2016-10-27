var app = (function() {
	var init = function(context) {
		session.init(context);
		onCreate();
		booking.init();
		hosting.init();
		main.init();
		memApp.init(context);
		sangho.init();
		u_header.init();
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
		$('#m_signin').addClass('cursor');
		$('#m_signup').addClass('cursor');
		$('#m_management').addClass('cursor');
	};
	var onCreate = function() {
		setContentView();
		$.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDmPCXXMQxNDjMHsC9AT66JGelMu5XDh4E&signed_in=true&libraries=places&callback=initAutocomplete');
		$('#h_logo').click(function(){
		
			location.href = app.context() + '/'
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
			$('#pub_article').html(DETAIL_FORM);
		});
		$('#pub_article').on('click','#b_main2',function(){
			$('#pub_article').html(DETAIL_FORM);
		});
		$('#pub_article').on('click','#b_main3',function(){
			$('#pub_article').html(DETAIL_FORM);
		});
		$('#pub_article').on('click','#b_main4',function(){
			$('#pub_article').html(DETAIL_FORM);
		});
		$('#pub_article').on('click','#b_main5',function(){
			$('#pub_article').html(DETAIL_FORM);});
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
/*로그인후*/
var u_header = (function() {
	var init = function() {
		onCreate();
	};
	var setContentView = function() {
	};
	var onCreate = function() {
		setContentView();
		$('#pub_header').on('click','#m_edit',function(){
			$('#pub_article').html(EDIT);});
		$('#pub_header').on('click','#m_dashboard',function(){
			$('#pub_article').html(DASHBOARD);});
		$('#pub_header').on('click','#m_inbox',function(){
			$('#pub_article').html(INBOX);});
		$('#pub_header').on('click','#m_account',function(){
			$('#pub_article').html(ACCOUNT);});
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

