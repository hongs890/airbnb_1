var booking = (function() {
	var init = function(){
		onCreate();
	};
	var setContentView = function() {
	};
	var onCreate = function() {
		setContentView();
		$('#pub_article').on('click','#submit_location', function(){
			
			$('#pub_footer').remove();
			
			
			if($('#autocomplete').val()===''){
				alert('검색할 국가/도시 명을 입력해 주세요.');
				$('#autocomplete').focus();
				return;
			}
			if($('#checkin').val()===''){
				alert('예약 시작일을 선택해 주세요.');
				$('#checkin').focus();
				return;
			}
			if($('#checkout').val()===''){
				alert('예약 종료일을 선택해 주세요.');
				$('#checkout').focus();
				return;
			}
			booking.search_result_form(1);
		});
		
		
		
		$('#pub_article').on('click','#option_submit',function(){
			
			
			
			booking.search_result_form(1);
			
		});
		$('#pub_article').on('click','#show_more_fac',function(){
			$('#more_fac').toggleClass('collapse');
			$('#show_more_fac i').toggleClass('icon-caret-down');
			$('#show_more_fac i').toggleClass('icon-caret-up');
			$('#option_submit').prop('disabled',false);
		/*	$('#show_more_fac i').attr('class',)*/
		});
	
		$('#pub_article').on('click','button[name=paying_go]',function(e){
			e.preventDefault();
			$('#pub_article').html(PAYING_FORM);
		});
		$('#pub_article').on('click','#booking-item',function(){
			$('#pub_article').html(CANCEL_FORM);
		});
	}
	var show_detail = function(house_seq) {
		alert(house_seq);
		$('#pub_article').html(DETAIL_FORM);
	}
	var search_result_form = function(page_num) {
		
		
		var location = '';
		
		var search_data = {};
		
		var check_in = $('#checkin').val();
		var check_out = $('#checkout').val();
		check_in = check_in.includes(':') ? check_in : check_in + ' 15:00:00';
		check_out = check_out.includes(':') ? check_out : check_out + ' 10:00:00';
		if($('#autocomplete').val() !== undefined){
			
			location =  $('#autocomplete').val().split(' ');
			search_data = {
					'longitude':$('#lng').val(),'latitude':$('#lat').val(),'checkin':check_in,
					'checkout':check_out,'guestCnt':$('#guests option:selected').val(),'pageNum':1,
					'country':location[0], 'state':location[1]===undefined? 'NONE' :location[1],'city':location[2]===undefined? 'NONE' :location[2],
					'street':location[3]===undefined? 'NONE' :location[3]
			}
		}
		else{
			var room_type = ($('#facet-checkbox-entire-place').prop('checked')==true ? 1 : 0)
			+ ($('#facet-checkbox-private-room').prop('checked')==true ? 2 : 0)
			+ ($('#facet-checkbox-shared-room').prop('checked')==true ? 4 : 0)
			
			var loc_option = '';
			$('input[name=loc_option]').each(function(i) {
				if($(this).prop('checked')==true){
					loc_option += $(this).val()+':'
				}
			})
			loc_option = loc_option.substring(0,loc_option.length-1);
			
			if(loc_option!==''){
				if($('#state').val()==='NONE'){
					$('#state').val(loc_option);
				}else if($('#city').val()==='NONE'){
					$('#city').val(loc_option);
				}else if($('#street').val()==='NONE'){
					$('#street').val(loc_option);
				}
			}
			
			var fac_option = '';
			$('input[name=fac_option]').each(function(i) {
				if($(this).prop('checked')==true){
					fac_option += 'T-';
				}else{
					fac_option += '_-';
				}
			})
			
			var safety_option = '';
			$('input[name=safety_option]').each(function(i) {
				if($(this).prop('checked')==true){
					safety_option += 'T-';
				}else{
					safety_option += '_-';
				}
			})
			fac_option = fac_option.substring(0,fac_option.length-1);
			safety_option = safety_option.substring(0,safety_option.length-1);
			
			search_data = {
					'longitude':$('#lng').val(),'latitude':$('#lat').val(),'checkin':check_in,
					'checkout':check_out,'guestCnt':$('#guests option:selected').val(),'pageNum':1,
					'country':$('#country').val(), 'state':$('#state').val(),'city':$('#city').val(),
					'street':$('#street').val(),'roomType':room_type,'minPrice':$('#min_price').val(),'maxPrice':$('#max_price').val(),
					'bathroomCnt':$('#bathroom_cnt option:selected').val(),'bedCnt':$('#bed_cnt option:selected').val(),
					'convenience':fac_option,safetyFac:safety_option
			}
			
		}
		
		
		$.ajax({
			url : app.context()+'/booking/search',
			type : 'POST',
			data : JSON.stringify(search_data),
			dataType : 'json',
			contentType : 'application/json',
			async : false,
			success : function(data){
				var start = data.start;
				var end = data.end;
				var guestCnt = data.guestCnt;
			
				var BOOK_FORM = 
					'<link href="https://a1.muscache.com/airbnb/static/packages/map_search-6524c10aa13b7d045b8eabe42cd2fb39.css" media="screen" rel="stylesheet" type="text/css" />'
					+'<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />'
					+'<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />'
					+'<link href="https://a1.muscache.com/airbnb/static/p1/main-98647fa0df25654edefa1bcc99c20a4f.css" media="screen" rel="stylesheet" type="text/css" />'
					+'<div class="map-search">'
					+'<div class="sidebar" style="top: 10%; bottom: 10%;">'
					+'<div id="katamari-container">'
					+'<div>'
					+'<div>'
					+'<div>'
					+'<div>'
					+'<div class="filters collapse" style="">'
					+'<div id="filter_options">';
			
				BOOK_FORM += '<div class="filters-section panel-body panel-light intro-filter">'
				+'<div class="row">'
				+'<div class="col-lg-2 col-md-12 text-center-sm text-center-md space-sm-1 sectionLabel_rcr7sj">'
				+'<div id="filter-section-header-dates">'
				+'<span>날짜</span>'
				+'</div>'
				+'</div>'
				+'<div class="col-lg-9 col-md-11">'
				+'<div class="row row-condensed">'
				+'<div class="input-daterange">'
				+'<div class="col-md-4 col-sm-6 space-1-sm">'
				+'<label class="screen-reader-only" for="checkin">체크인</label>'
				+'<input id="checkin" type="text" name="start" class="checkin input-contrast" value="'+start+'" placeholder="체크인">'
				+'</div>'
				+'<div class="col-md-4 col-sm-6 space-1-sm">'
				+'<label class="screen-reader-only" for="checkout">체크아웃</label>'
				+'<input id="checkout" type="text" name="end" class="checkout input-contrast" value="'+end+'" placeholder="체크아웃">'
				+'</div>'
				+'</div>'
				+'<div class="col-md-4 col-sm-12 space-sm-1">'
				+'<div class="select select-block">'
				+'<label for="guests" class="screen-reader-only"><span>게스트 수</span></label>'
				+'<select id="guests">'
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
				+'<option value="16">숙박 인원 16+명</option>'
				+'</select>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				//
				+'<div class="filters-section panel-body panel-light intro-filter">'
				+'<div class="row">'
				+'<div class="col-lg-2 col-md-12 text-center-sm text-center-md space-sm-1 sectionLabel_rcr7sj">'
				+'<div id="filter-section-header-room-types">'
				+'<span>숙소 유형</span><span> </span><span><i class="icon icon-question hide-sm hide-md"></i><noscript></noscript></span>'
				+'</div>'
				+'</div>'
				+'<div class="col-lg-9 col-md-11">'
				+'<div class="row row-condensed" id="room-options">'
				+'<div class="col-md-4 col-sm-12 space-sm-1">'
				+'<label id="entire-place-checkbox-label" class="checkbox facet-checkbox facet-checkbox--room-type panel panel-dark" for="facet-checkbox-entire-place">'
				+'<div class="facet-checkbox__icon-col"><i class="icon h5 icon-entire-place"></i>'
				+'</div>'
				+'<div class="facet-checkbox__label-col"><span>집 전체</span>'
				+'</div>'
				+'<div class="facet-checkbox__input-col">'
				+'<input id="facet-checkbox-entire-place" type="checkbox" name="room-type" aria-labelledby="filter-section-header-room-types entire-place-checkbox-label" aria-describedby="entire-place-desc" value="집 전체">'
				+'</div>'
				+'</label>'
				+'</div>'
				+'<div class="col-md-4 col-sm-12 space-sm-1">'
				+'<label id="private-room-checkbox-label" class="checkbox facet-checkbox facet-checkbox--room-type panel panel-dark" for="facet-checkbox-private-room">'
				+'<div class="facet-checkbox__icon-col"><i class="icon h5 icon-private-room"></i>'
				+'</div>'
				+'<div class="facet-checkbox__label-col"><span>개인실</span>'
				+'</div>'
				+'<div class="facet-checkbox__input-col">'
				+'<input id="facet-checkbox-private-room" type="checkbox" name="room-type" aria-labelledby="filter-section-header-room-types private-room-checkbox-label" aria-describedby="private-room-desc" value="개인실">'
				+'</div>'
				+'</label>'
				+'</div>'
				+'<div class="col-md-4 col-sm-12 space-sm-1">'
				+'<label id="shared-room-checkbox-label" class="checkbox facet-checkbox facet-checkbox--room-type panel panel-dark" for="facet-checkbox-shared-room">'
				+'<div class="facet-checkbox__icon-col"><i class="icon h5 icon-shared-room"></i>'
				+'</div>'
				+'<div class="facet-checkbox__label-col">'
				+'<span>다인실</span>'
				+'</div>'
				+'<div class="facet-checkbox__input-col">'
				+'<input id="facet-checkbox-shared-room" type="checkbox" name="room-type" aria-labelledby="filter-section-header-room-types shared-room-checkbox-label" aria-describedby="shared-room-desc" value="다인실">'
				+'</div>'
				+'</label>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				
				
				
				
				+'<div class="filters-section panel-body panel-light intro-filter">'
				+'<div class="row">'
				+'<div class="col-lg-2 col-md-12 text-center-sm text-center-md space-sm-1 sectionLabel_rcr7sj">'
				+'<div id="filter-section-header-price">'
				+'<span>가격 범위</span>'
				+'</div>'
				+'</div>'
				+'<div class="col-lg-9 col-md-11">'
				+'<label class="col-md-4 col-sm-6 space-1" style="display : inline;">'
				+'<input id="min_price" type="text" placeholder="부터" style="text-align:right;" />'
				+'</label>'
				+'<label class="col-md-4 col-sm-6 space-1" style="display : inline;">'
				+'<input id="max_price" type="text" placeholder="까지" style="text-align:right;" />'
				+'</label>'
				+'<div>'
				+'</div>'	
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				
				
				+'<div id="div_size" class="filters-section panel-body panel-light">'
				+'<div class="row">'
				+'<div class="col-lg-2 col-md-12 text-center-sm text-center-md space-sm-1 sectionLabel_rcr7sj">'
				+'<div id="filter-section-header-size">'
				+'<span>규모</span>'
				+'</div>'
				+'</div>'
				+'<div class="col-lg-9 col-md-11">'
				+'<div class="row row-condensed">'
				+'<div class="col-md-4 col-sm-12 space-sm-1">'
				+'<div class="select select-block">'
				+'<label for="map-search-min_bedrooms" class="screen-reader-only">'
				+'<span>침실 최소 개수</span>'
				+'</label>'
				+'<select id="bedroom_cnt">'
				+'<option selected="" value="-1">침실 수</option>'
				+'<option value="1">침실 1개</option>'
				+'<option value="2">침실 2개</option>'
				+'<option value="3">침실 3개</option>'
				+'<option value="4">침실 4개</option>'
				+'<option value="5">침실 5개</option>'
				+'<option value="6">침실 6개</option>'
				+'<option value="7">침실 7개</option>'
				+'<option value="8">침실 8개</option>'
				+'<option value="9">침실 9개</option>'
				+'<option value="10">침실 10개</option>'
				+'</select>'
				+'</div>'
				+'</div>'
				+'<div class="col-md-4 col-sm-12 space-sm-1">'
				+'<div class="select select-block">'
				+'<label for="map-search-min_bathrooms" class="screen-reader-only">'
				+'<span>욕실 최소 개수</span>'
				+'</label>'
				+'<select id="bathroom_cnt">'
				+'<option selected="" value="-1">욕실 수</option>'
				+'<option value="0">욕실 0개</option>'
				+'<option value="0.5">욕실 0.5개</option>'
				+'<option value="1">욕실 1개</option>'
				+'<option value="1.5">욕실 1.5개</option>'
				+'<option value="2">욕실 2개</option>'
				+'<option value="2.5">욕실 2.5개</option>'
				+'<option value="3">욕실 3개</option>'
				+'<option value="3.5">욕실 3.5개</option>'
				+'<option value="4">욕실 4개</option>'
				+'<option value="4.5">욕실 4.5개</option>'
				+'<option value="5">욕실 5개</option>'
				+'<option value="5.5">욕실 5.5개</option>'
				+'<option value="6">욕실 6개</option>'
				+'<option value="6.5">욕실 6.5개</option>'
				+'<option value="7">욕실 7개</option>'
				+'<option value="7.5">욕실 7.5개</option>'
				+'<option value="8">욕실 8+개</option>'
				+'</select>'
				+'</div>'
				+'</div>'
				+'<div class="col-md-4 col-sm-12 space-sm-1">'
				+'<div class="select select-block">'
				+'<label for="map-search-min_beds" class="screen-reader-only">'
				+'<span>침대 최소 개수</span>'
				+'</label>'
				+'<select id="bed_cnt">'
				+'<option selected="" value="-1">침대 수</option>'
				+'<option value="1">침대 1개</option>'
				+'<option value="2">침대 2개</option>'
				+'<option value="3">침대 3개</option>'
				+'<option value="4">침대 4개</option>'
				+'<option value="5">침대 5개</option>'
				+'<option value="6">침대 6개</option>'
				+'<option value="7">침대 7개</option>'
				+'<option value="8">침대 8개</option>'
				+'<option value="9">침대 9개</option>'
				+'<option value="10">침대 10개</option>'
				+'<option value="11">침대 11개</option>'
				+'<option value="12">침대 12개</option>'
				+'<option value="13">침대 13개</option>'
				+'<option value="14">침대 14개</option>'
				+'<option value="15">침대 15개</option>'
				+'<option value="16">침대 16+개</option>'
				+'</select>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				
				
				+'<div id="filter_location" class="filters-section panel-body panel-light">'
				+'<div class="row">'
				+'<div class="col-lg-2 col-md-12 text-center-sm text-center-md space-sm-1 sectionLabel_rcr7sj">'
				+'<div id="filter-section-header-neighborhoods">'
				+'<span>지역</span>'
				+'</div>'
				+'</div>'
				+'<div class="col-lg-9 col-md-11">'
				+'<div>'
				+'<div class="row row-condensed">'
				// location for statement start
				
				$.each(data.locList, function(i, loc) {
					
					
					
					BOOK_FORM += '<div class="col-md-4">'
						+'<div>'
						+'<input type="checkbox" name="loc_option" value="'+loc+'">'+loc+''
						+'</div>'
						+'</div>'
				})
				
				
				
				
				
				// location for end
				BOOK_FORM += '</div>'
				+'</div>'
				+'</div>'
				+'<div class="col-md-1">'
				+'</div>'
				+'</div>'
				+'</div>'
				
				
				
				+'<div id="option_fac" class="filters-section panel-body panel-light">'
				+'<div class="row">'
				+'<div class="col-lg-2 col-md-12 text-center-sm text-center-md space-sm-1 sectionLabel_rcr7sj">'
				+'<div id="filter-section-header-amenities">'
				+'<span>시설</span>'
				+'</div>'
				+'</div>'
				+'<div class="col-lg-9 col-md-11">'
				+'<div>'
				+'<div class="row row-condensed">'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="필수 품목">필수 품목</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="무선인터넷">무선인터넷</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="샴푸">샴푸</div>'
				+'</div>'
				+'</div>'
				+'<div id="more_fac" class="filters-more collapse"><hr>'
				+'<div class="row row-condensed">'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="옷장/서랍장">옷장/서랍장</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="TV">TV</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="난방">난방</div>'
				+'</div><hr>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="에어컨">에어컨</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="조식,커피,차">조식,커피,차</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="책상/작업공간">책상/작업공간</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="벽난로">벽난로</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="다리미">다리미</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="헤어드라이기">헤어드라이기</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="fac_option" type="checkbox" value="반려동물 입실 가능">반려동물 입실 가능</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="safety_option" type="checkbox" value="연기 감지기">연기 감지기</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="safety_option" type="checkbox" value="일산화탄소 감지기">일산화탄소 감지기</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="safety_option" type="checkbox" value="구급상자">구급상자</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="safety_option" type="checkbox" value="안전 카드">안전 카드</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="safety_option" type="checkbox" value="소화기">소화기</div>'
				+'</div>'
				+'<div class="col-md-4">'
				+'<div><input name="safety_option" type="checkbox" value="침실에 잠금장치 있음">침실에 잠금장치 있음</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div id="show_more_fac" class="col-md-1">'
				+'<button class="btn-link btn-link--icon sectionLabel_rcr7sj">'
				+'<i class="icon icon-caret-down hide-sm"></i>'
				+'</button>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div id="filter_submit" class="panel-light panel-btn-sm filters-footer-sm fixed">'
				+'<div class="row row-condensed">'
				+'<div class="col-md-8 col-lg-7 col-md-offset-4 col-lg-offset-5">'
				+'<div class="row row-condensed space-sm-7">'
				+'<div class="col-sm-6">'
				+'<button id="option_cancel" class="btn btn-block cancel-btn">'
				+'<span>취소</span>'
				+'</button>'
				+'</div>'
				+'<div class="col-sm-6">'
				+'<button id="option_submit" class="btn btn-block btn-primary apply-filters-btn" disabled="">'
				+'<span>필터 적용하기</span>'
				+'</button>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				
				
				
				+'<div id="div_filter" class="sidebar-header panel-body clearfix panel-light">'
				+'<div class="pull-left">'
				+'<div>'
				+'<div class="applied-filters-container hide-sm">'
				+'<span class="pull-left show-filters">'
				+'<button type="button" class="btn" id="btn_filter">'
				+'<span>검색필터</span>'
				+'<span> </span>'
				+'</button>'
				+'</span><ul class="applied-filters list-unstyled"></ul>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div>'
				+'<div class="crossfading-panel__container text-right pull-right show-lg">'
				+'<div class="crossfading-panel crossfading-panel__vertically-centered-container crossfading-panel--right crossfading-panel--invisible"><h1 class="crossfading-panel--vertically-centered h6 text-right pull-right">'
				+'<span>예약 가능 숙소 146 개</span>'
				+'<span><span> · </span><span>도쿄</span></span></h1>'
				+'</div>'
				+'<div class="crossfading-panel crossfading-panel--right pull-right urgency-commitment-panel"><i class="icon pull-right urgency-commitment-panel--icon icon-calendar-trend crossfading-panel--margin-left"></i>'
				+'<div class="pull-right crossfading-panel__text--lg">'
				+'<strong>이 날짜에는 숙소가 2%만 남아있습니다.</strong>'
				+'<div>'
				+'<div class="crossfading-panel-body-text text-muted">'
				+'<div class="ucBody_1elyhsq">곧 예약하시는 걸 권해드립니다.</div>'
				+'<div class="learnMoreLink_jcsji7"></div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div class="crossfading-panel__container text-left pull-left crossfading-panel__container--md show-md">'
				+'<div class="crossfading-panel crossfading-panel__vertically-centered-container crossfading-panel--invisible"><h1 class="crossfading-panel--vertically-centered h6 text-left crossfading-panel--margin-left">'
				+'<span>예약 가능 숙소 146 개</span>'
				+'<span><span> · </span>'
				+'<span>도쿄</span>'
				+'</span></h1>'
				+'</div>'
				+'<div class="crossfading-panel crossfading-panel--left pull-left urgency-commitment-panel"><i class="icon pull-left urgency-commitment-panel--icon icon-calendar-trend crossfading-panel--margin-right hide-sm"></i>'
				+'<div class="pull-left text-center-sm crossfading-panel__text--md">'
				+'<strong>이 날짜에는 숙소가 2%만 남아있습니다.</strong>'
				+'<div>'
				+'<div class="crossfading-panel-body-text text-muted">'
				+'<div class="ucBody_1elyhsq">곧 예약하시는 걸 권해드립니다.</div>'
				+'<div class="learnMoreLink_jcsji7"></div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div class="hide-filters-open-sm">'
				+'<div class="space-sm-1 space-top-sm-1">'
				+'<div class="disclaimer-wrapper">'
				+'<div class="pricing-disclaimer text-muted"><i class="icon icon-currency-krw"></i>'
				+'<span>추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</span>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
	
				
				
				+'<div id="result_list" aria-live="polite" class="search-results">'
				+'<div class="outer-listings-container space-2">'
				+'<div class="listings-container">'
				+'<div class="row">'
				
				
				// house seq , picture, price*night
				+'<div class="listing-card-wrapper col-sm-12 space-2 col-md-6">'
				+'<div class="listing">'
				+'<div class="panel-image listing-img">'
				+'<div><a name="detail_go" href="#" class="media-photo media-cover"><input type="hidden" value="test"/>'
				+'<div class="listing-img-container media-cover text-center">'
				+'<img src="" class="img-responsive-height" alt="test">'
				+'</div></a>'
				+'<div class="panel-overlay-bottom-left panel-overlay-label panel-overlay-listing-label">'
				+'<div class="price-label">'
				+'<span><sup class="currency-prefix">₩</sup><span class="price-amount">193341</span>'
				+'<span> </span>'
				+'</span>'
				+'<span><span> </span>'
				+'<span>'
				+'<span> </span>'
				+'<span class="instant-book-trigger-wrapper">'
				+'<span><i class="icon icon-instant-book icon-flush-sides icon-beach"></i></span>'
				+'</span>'
				+'</span>'
				+'</span>'
				+'</div>'
				+'</div>'
				+'<div class="panel-overlay-top-right wl-social-connection-panel">'
				+'<span class="rich-toggle wish_list_button wishlist-button not_saved" role="button" style="display:block;width:32px;height:32px;"></span>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div class="panel-body panel-card-section">'
				+'<div class="media"><h3 title="2LDK(88㎡)Shinjuku 6min train!PrivateHouse!FreeWifi" class="h5 listing-name text-truncate space-top-1"><span></span><span> </span></span><a href="#" class="text-normal"><span class="listing-name--display">2LDK(88㎡)Shinjuku 6min train!PrivateHouse!FreeWifi</span></a></h3><a href="#" class="text-normal link-reset">'
				+'<div class="text-muted listing-location text-truncate">'
				+'<div><span>집 전체</span><span class="person-capacity hide-md"><span> · </span><span>숙박 인원 11명</span></span></div>'
				+'</div></a>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				
				
				
				
				
				
				
				
				
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div class="results-footer">'
				+'<div class="pagination-buttons-container space-8">'
				+'<div class="results_count">'
				+'<span><span><span>예약 가능 숙소 146 개</span></span><span> 중 </span><span>1</span><span> – </span><span>18</span></span>'
				+'</div>'
				+'<div class="pagination pagination-responsive">'



				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<input type="hidden" id="lat" value="'+data.lat+'">'
				+'<input type="hidden" id="lng" value="'+data.lng+'">'
				+'<input type="hidden" id="country" value="'+data.country+'">'
				+'<input type="hidden" id="state" value="'+data.state+'">'
				+'<input type="hidden" id="city" value="'+data.city+'">'
				+'<input type="hidden" id="street" value="'+data.street+'">'		
				+'</div>'
				+'</div>'
				+'<div id="map" style="position:absolute; right: 0;top: 10%; bottom: 10%;width: 40%;">'
				+'</div>';
				+'</div>'
				$('#pub_article').html(BOOK_FORM);
				
				var myLatLng = {lat: parseFloat(data.lat), lng: parseFloat(data.lng)};

				  var map = new google.maps.Map(document.getElementById('map'), {
				    zoom: 15,
				    center: myLatLng
				  });
				
				var image = new google.maps.MarkerImage(app.img() + '/booking/icon3.png', null, null, null, new google.maps.Size(100,25));
				
				var markers = new Array(data.list.length);
				var infoWindow = new google.maps.InfoWindow();
				
				$.each(data.list, function(i, item) {
					var latlng = {lat: parseFloat(item.latitude),lng: parseFloat(item.longitude)};
					
					markers[i] = new google.maps.Marker({
					    position: latlng,
					    map : map,
					    label: {
					    	text : '￦ '+item.price,
					        color: 'white',
					    },
					    icon: image,
					    
					 });
					
					var contentString = 
						'<div style="width:200px;height:200px;"><img src="'+app.img()+'/booking/'+item.picture+'" width="100%" height="70%" />'
						+'<br /><h4>' + item.title +'</h4>'
						+'</div>';
					markers[i].addListener('click', function() {
						infoWindow.setContent(contentString);
						infoWindow.open(map, markers[i]);
					});
				})
				
				
				$('#guests option:nth-child('+guestCnt+')').prop('selected',true);
				
				if(data.roomType!=null){
					var room_type = parseInt(data.roomType);
					if(room_type%2==1){
						$('#facet-checkbox-entire-place').prop('checked',true);				
					}
					switch (room_type) {
					case 2: case 3:
						$('#facet-checkbox-private-room').prop('checked',true);
						break;
					case 4: case 5:
						$('#facet-checkbox-shared-room').prop('checked',true);
						break;
					case 6: case 7:
						$('#facet-checkbox-shared-room').prop('checked',true);
						$('#facet-checkbox-private-room').prop('checked',true);
						break;
					default:
						break;
					}
				}
				if(data.bathroomCnt!=0){
					$('#bathroom_cnt option').each(function() {
						if($(this).val()==data.bathroomCnt){
							$(this).prop('selected',true);
						}
					})
				}
				if(data.bedCnt!=0){
					$('#bed_cnt option').each(function() {
						if($(this).val()==data.bathroomCnt){
							$(this).prop('selected',true);
						}
					})
				}
				if(data.minPrice!=0){
					$('#min_price').val(data.minPrice)
				}
				if(data.maxPrice!=0){
					$('#max_price').val(data.maxPrice)
				}
				if(data.convenience!=null){
					var conv = data.convenience.split('-');
					$('input[name=fac_option]').each(function(i) {
						if(conv[i]==='T'){
							$(this).prop('checked',true);
						}
					})
				}
				if(data.safetyFa!=null){
					var safy = data.safetyFac.split(':');
					$('input[name=safety_option]').each(function(i) {
						if(conv[i]==='T'){
							$(this).prop('checked',true);
						}
					})
				}
				// 여기가 조오오오오오온나 길어질꺼야
				$('.input-daterange').datepicker({
				    language: "kr",
					format: "yyyy/mm/dd",
				    startDate: "+0d"
				});
				
			},
			error:function(request,status,error){
			    alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);}
			
		});	
		
	
		
		$('#pub_article').on('click','#btn_filter',function(){
			$('#div_filter').hide();
			$('#result_list').hide();
			$('#div_size').show();
			$('#filter_location').show();
			$('#option_fac').show();
			$('#filter_submit').show();
			$('input[name=fac_option]').css('margin-bottom','10px');
			$('input[name=safety_option]').css('margin-bottom','10px');
		});	
		$('#pub_article').on('click','#option_cancel',function(){
			$('#div_filter').show();
			$('#result_list').show();
			$('#div_size').hide();
			$('#filter_location').hide();
			$('#option_fac').hide();
			$('#filter_submit').hide();
		});	
		
	}
	return{
		init : init,
		search_result_form : search_result_form,
		show_detail : show_detail
	}
})();

//  CALENDAR 
(function(factory){
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$(element).data('datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.inputField.length;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}
		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
		this.setDatesDisabled(this.o.datesDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view, default_value){
			if (view === 0 || view === 'days' || view === 'month') {
				return 0;
			}
			if (view === 1 || view === 'months' || view === 'year') {
				return 1;
			}
			if (view === 2 || view === 'years' || view === 'decade') {
				return 2;
			}
			if (view === 3 || view === 'decades' || view === 'century') {
				return 3;
			}
			if (view === 4 || view === 'centuries' || view === 'millennium') {
				return 4;
			}
			return default_value === undefined ? false : default_value;
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView, 0);
			o.minViewMode = this._resolveViewName(o.minViewMode, 0);
			o.maxViewMode = this._resolveViewName(o.maxViewMode, 4);

			// Check that the start view is between min and max
			o.startView = Math.min(o.startView, o.maxViewMode);
			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			o.daysOfWeekHighlighted = o.daysOfWeekHighlighted||[];
			if (!$.isArray(o.daysOfWeekHighlighted))
				o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
			o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function(d){
				return parseInt(d, 10);
			});

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = [
					o.datesDisabled
				];
			}
			o.datesDisabled = $.map(o.datesDisabled,function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            else if (this.component && this.hasInput) { // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					mousedown: $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(evt){
			var dateString;
			if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types
				&& $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
				dateString = evt.originalEvent.clipboardData.getData('text/plain');
			}
			else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			}
			else {
				return;
			}
			this.setDate(dateString);
			this.update();
			evt.preventDefault();
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (typeof selected_date !== 'undefined') {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			if (this.inputField) {
				this.inputField.val('');
			}

			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},
		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left,
				top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					// Default to left
					this.picker.addClass('datepicker-orient-left');
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);
			else
				this.viewDate = this.o.defaultViewDate;

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
			this.element.change();
			return this;
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				this.picker.find('.datepicker-days .datepicker-switch')
					.attr('colspan', function(i, val){
						return parseInt(val) + 1;
					});
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '',
			i = 0;
			while (i < 12){
        var focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');	
			} 
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, step, currentYear, startYear, endYear, callback){
			var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;

			html      = '';
			view      = this.picker.find(selector);
			year      = parseInt(currentYear / factor, 10) * factor;
			startStep = parseInt(startYear / step, 10) * step;
			endStep   = parseInt(endYear / step, 10) * step;
			steps     = $.map(this.dates, function(d){
				return parseInt(d.getUTCFullYear() / step, 10) * step;
			});

			view.find('.datepicker-switch').text(year + '-' + (year + step * 9));

			thisYear = year - step;
			for (i = -1; i < 11; i += 1) {
				classes = [cssClass];
				tooltip = null;

				if (i === -1) {
					classes.push('old');
				} else if (i === 10) {
					classes.push('new');
				}
				if ($.inArray(thisYear, steps) !== -1) {
					classes.push('active');
				}
				if (thisYear < startStep || thisYear > endStep) {
					classes.push('disabled');
				}
        if (thisYear === this.viewDate.getFullYear()) {
				  classes.push('focused');
        }

				if (callback !== $.noop) {
					before = callback(new Date(thisYear, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof(before) === 'boolean') {
						before = {enabled: before};
					} else if (typeof(before) === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
				thisYear += step;
			}
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.toggle(this.o.title !== '');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				1,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month, monthChanged, yearChanged;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch')){
				this.showMode(1);
			}

			// Clicked on prev or next
			var navArrow = target.closest('.prev, .next');
			if (navArrow.length > 0) {
				dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);
				if (this.viewMode === 0){
					this.viewDate = this.moveMonth(this.viewDate, dir);
					this._trigger('changeMonth', this.viewDate);
				} else {
					this.viewDate = this.moveYear(this.viewDate, dir);
					if (this.viewMode === 1){
						this._trigger('changeYear', this.viewDate);
					}
				}
				this.fill();
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.showMode(-2);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a day
				if (target.hasClass('day')){
					day = parseInt(target.text(), 10) || 1;
					year = this.viewDate.getUTCFullYear();
					month = this.viewDate.getUTCMonth();

					// From last month
					if (target.hasClass('old')){
						if (month === 0) {
							month = 11;
							year = year - 1;
							monthChanged = true;
							yearChanged = true;
						} else {
							month = month - 1;
							monthChanged = true;
 						}
 					}

					// From next month
					if (target.hasClass('new')) {
						if (month === 11){
							month = 0;
							year = year + 1;
							monthChanged = true;
							yearChanged = true;
 						} else {
							month = month + 1;
							monthChanged = true;
 						}
					}
					this._setDate(UTCDate(year, month, day));
					if (yearChanged) {
						this._trigger('changeYear', this.viewDate);
					}
					if (monthChanged) {
						this._trigger('changeMonth', this.viewDate);
					}
				}

				// Clicked on a month
				if (target.hasClass('month')) {
					this.viewDate.setUTCDate(1);
					day = 1;
					month = target.parent().find('span').index(target);
					year = this.viewDate.getUTCFullYear();
					this.viewDate.setUTCMonth(month);
					this._trigger('changeMonth', this.viewDate);
					if (this.o.minViewMode === 1){
						this._setDate(UTCDate(year, month, day));
						this.showMode();
					} else {
						this.showMode(-1);
					}
					this.fill();
				}

				// Clicked on a year
				if (target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					month = 0;
					year = parseInt(target.text(), 10)||0;
					this.viewDate.setUTCFullYear(year);

					if (target.hasClass('year')){
						this._trigger('changeYear', this.viewDate);
						if (this.o.minViewMode === 2){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('decade')){
						this._trigger('changeDecade', this.viewDate);
						if (this.o.minViewMode === 3){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('century')){
						this._trigger('changeCentury', this.viewDate);
						if (this.o.minViewMode === 4){
							this._setDate(UTCDate(year, month, day));
						}
					}

					this.showMode(-1);
					this.fill();
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			if (this.inputField){
				this.inputField.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					}
  					else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					}
  					else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					}
  					else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				if (this.inputField){
					this.inputField.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
			}
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		$(element).data('datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker');

			if (typeof(dp) === "undefined") {
				return;
			}

			var new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&laquo;',
			rightArrow: '&raquo;'
		}
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			daysShort: ["일", "월", "화", "수", "목", "금", "토"],
			daysMin: ["일", "월", "화", "수", "목", "금", "토"],
			months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			today: "Today",
			clear: "Clear",
			titleFormat: "yyyy MM"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
			},
			{
				clsName: 'decades',
				navFnc: 'FullDecade',
				navStep: 100
			},
			{
				clsName: 'centuries',
				navFnc: 'FullCentury',
				navStep: 1000
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
                return format.toValue(date, format, language);
            var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				part, dir, i, fn;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					fn = fn_map[part[2]];
					date = Datepicker.prototype[fn](date, dir);
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
			}

			if (typeof dateAliases[date] !== 'undefined') {
				date = dateAliases[date];
				parts = date.match(/([\-+]\d+)([dmwy])/g);

				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
					date = new Date();
				  	for (i=0; i < parts.length; i++){
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						fn = fn_map[part[2]];
						date = Datepicker.prototype[fn](date, dir);
				  	}

			  		return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
				}
			}

			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.6.4';

	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));






// autoComplete

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode'],componentRestrictions: {country: 'kr'}});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

// [START region_fillform]
function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  $('#lat').prop('value',place.geometry.location.lat());
  $('#lng').prop('value',place.geometry.location.lng());
  console.log(place.formatted_address);
 
  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
 
}
// [END region_fillform]

// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}	