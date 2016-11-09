var booking = (function() {
	var init = function(){
		onCreate();
	};
	var setContentView = function() {
	};
	var onCreate = function() {
		setContentView();
		// MAIN 화면에서 지역/날짜/게스트수 검색 버튼 이벤트
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
		$('#pub_header').on('click','#submit_head_location', function() {	
			if($('#header-search-checkin').val()===''){
				alert('예약 종료일을 선택해 주세요.');
				$('#header-search-checkin').focus();
				return;
			}
			if($('#header-search-checkout').val()===''){
				alert('예약 시작일을 선택해 주세요.');
				$('#header-search-checkout').focus();
				return;
			}
			$('#header-search-settings').removeClass('shown');
			booking.search_result_form(0);
		})
		// 예약가능 리스트 페이지에서 필터검색 적용 버튼
		$('#pub_article').on('click','#option_submit',function(){
			booking.search_result_form(1);
		});
		// 필터검색 클릭 시 확장 옵션 리스트 보여주는 event 
		$('#pub_article').on('click','#show_more_fac',function(){
			$('#more_fac').toggleClass('collapse');
			$('#show_more_fac i').toggleClass('icon-caret-down');
			$('#show_more_fac i').toggleClass('icon-caret-up');
		});
		
	/*	$('#pub_article').on('click','button[name=paying_go]',function(e){
			e.preventDefault();
			$('#pub_article').html(PAYING_FORM);
		});
		$('#pub_article').on('click','#booking-item',function(){
			$('#pub_article').html(CANCEL_FORM);
		});*/
		
		// 필터적용 버튼 활성화 시켜주는 이벤트 들 
		$('#pub_article').on('change','#div_option select,#min_price,#max_price', function() {
			if($('#option_submit').prop('disabled')==true){
				$('#option_submit').prop('disabled',false);
			}
		})
		$('#pub_article').on('click','#div_option input[type=checkbox]', function() {
			if($('#option_submit').prop('disabled')==true){
				$('#option_submit').prop('disabled',false);
			}
		})
		
		// 예약가능 리스트에서 리스트를 클릭하면 디테일로 향하는 버튼 //
		$('#pub_article').on('click','a[name=detail_go]',function(e){
			var house_seq = $(this).children('input').prop('value');
			
			booking.show_detail(house_seq,1);
		});
		// 디테일 에서 예약 요청 버튼(결제 화면 이동 버튼) //
		$('#pub_article').on('click','button[name=paying_go]',function(e) {
			e.preventDefault();
			var check_in = $('#checkin_date').val();
			var check_out =  $('#checkout_date').val();
				
			var detail = {
				'checkinDate' : check_in.includes(' ')? check_in : check_in + ' 15:00:00',
				'checkoutDate' : check_out.includes(' ')? check_out : check_out + ' 10:00:00',
				'guestCnt' : $('#guest_cnt option:selected').val(),
				'houseSeq' : $('#house_seq').val(),
				'price' : $('#price').val()
			}
			$.ajax({
				url : app.context()+'/booking/GoPay/'+$('#nights').val(),
				type : 'POST',
				data : JSON.stringify(detail),
				dataType : 'json',
				contentType : 'application/json',
				async : false,
				success : function(data) {
					if(data.logined==false){
						alert('로그인 후 예약 가능합니다');
						return;
					}
					var info = data.bDto;
					var host = data.host;
					var house = data.house;
					
					if (info.houseSeq != 0) {
						var PAYING_FORM = '<main id="site-content" role="main" style="margin-top : 10%;">'
							+'<div data-hypernova-key="p4flash_messagebundlejs"><span></span></div>'
							+'<div id="main-view" class="main-view page-container-responsive space-top-md-6 space-md-6 space-top-lg-6 space-lg-6">'
							+'<div class="row">'
							+'<div class="col-sm-12 p4-error-header space-1">'
							+'<div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="form-errors">'
							+'<i class="icon alert-icon icon-alert-alt"></i>'
							+'<div class="h5 space-1 error-header">'
							+'거의 끝났습니다!'
							+'</div>'
							+'<ul></ul>'
							+'</div>'
							+'<div class="alert alert-with-icon alert-success alert-block hide space-lg-2 space-md-2" id="coupon-success">'
							+'<i class="icon alert-icon icon-star-circled"></i>'
							+'<div class="h5 space-1 error-header">'
							+'프로모션 요금이 적용되었습니다.'
							+'</div>'
							+'전체 숙박 요금에 프로모션을 적용했습니다. 이제 즐거운 여행을 하는 일만 남았네요!'
							+'</div>'
							+'<div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="server-error">'
							+'<i class="icon alert-icon icon-alert-alt"></i>'
							+'오류가 발생하여 요청이 접수되지 않았습니다. 에어비앤비 웹사이트가 점검 중이었거나 연결이 자동으로 중지되었을 수 있습니다. 다시 시도해 주세요.'
							+'</div>'
							+'<div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="verification-error">'
							+'<i class="icon alert-icon icon-alert-alt"></i>'
							+'회원님의 카드를 인증할 수 없습니다. 다른 카드로 시도해 보세요. 회원님의 카드에는 금액이 청구되지 않았습니다.'
							+'</div>'
							+'<div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="house-rules-error">'
							+'<i class="icon alert-icon icon-alert-alt"></i>'
							+'<div class="h5 space-1 error-header">'
							+'숙소 이용규칙과 약관'
							+'</div>'
							+'<p>'
							+'예약를 하려면, 숙소 이용규칙과 약관에 동의하세요.'
							+'</p>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="row">'
							+'<div class="col-md-5 col-md-push-7 space-lg-2 space-md-2 side-summary-container">'
							+'<div data-hypernova-key="p4_sidebarbundlejs">'
							+'<div class="summary-card col-center">'
							+'<div class="background-cover summary-card__payments-listing-image" style="background-image:url();">'
							+'</div>'
							+'<div class="pull-right space-3 summary-card__host-profile-photo">'
							+'<div class="media-photo media-round">'
							+'<img width="200" height="200" class="summary-card__host-profile-photo-src" src="'+app.img()+'/member/'+host.profileImg+'" alt="'+host.name+'">'
							+'</div>'
							+'</div>'
							+'<div class="panel">'
							+'<div class="panel-body">'
							+'<div class="text-muted space-2"><span>호스트: '+host.name+'님</span>'
							+'</div>'
							+'<div class="sidebar-text-large">'+house.explaination+''
							+'</div>'
							+'<div class="hide-sm text-muted">'
							+'<ul class="list-layout summary-card__additional-details-list">'
							+'<li>'+house.roomType+'</li>'
							+'</ul>'
							+'<div>'+house.street+', '+house.city+', '+house.state+' '+house.zipCode+', '+house.country+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="panel-body hide-sm">'
							+'<div class="row row-condensed">'
							+'<div class="col-sm-5">'
							+'<div class="text-muted space-bottom-2"><span>체크인</span>'
							+'</div><span>'+info.checkinDate+'</span>'
							+'</div>'
							+'<div class="col-sm-2 summary-card__check-in-icon">'
							+'<i class="icon icon-chevron-right icon-light-gray"></i>'
							+'</div>'
							+'<div class="col-sm-5">'
							+'<div class="text-muted space-bottom-2"><span>체크아웃</span>'
							+'</div><span>'+info.checkoutDate+'</span>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="panel-body hide-sm">'
							+'<table class="summary-card__billing-table">'
							+'<tbody>'
							+'<tr class="price-item">'
							+'<td><span>₩'+info.price+' x '+data.nights+'박</span><span>&nbsp;</span></td>'
							+'<td class="text-right price-item__price"><div></div></td>'
							+'</tr>'
							+'</tbody>'
							+'</table>'
							+'</div>'
							+'<div class="panel-body hide-sm">'
							+'<span class="sidebar-text-large space-2 summary-card__total-price" tabindex="-1">'
							+'<table class="summary-card__billing-table">'
							+'<tbody>'
							+'<tr class="price-item">'
							+'<td><span></span><span>&nbsp;</span></td>'
							+'<td class="text-right price-item__price">'
							+'<div><span>결제 요금 : ₩'+parseInt(info.price*data.nights)+'</span><sup>KRW</sup></div>'
							+'</td>'
							+'</tr>'
							+'</tbody>'
							+'</table>'
							+'</span>'
							+'</div>'
							+'<div class="show-sm panel-body text-center"><a><span>요금 및 여행 요약 보기</span></a></div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="pwp-summary-container"></div>'
							+'</div>'
							+'<div class="urgency-commitment-message col-md-7 col-md-pull-5 space-lg-4 space-md-4 space-sm-2">'
							+'<div data-hypernova-key="p4_urgency_commitment_messagebundlejs">'
							+'<div><span class="hide-sm">'
							+'<div class="panel UrgencyCommitmentWrapper--expanded">'
							+'<div class="panel-body">'
							+'<div class="icon-background-container icon-rare-find-background">'
							+'<div class="UrgencyCommitmentWrapper__text">'
							+'<strong>흔치 않은 기회입니다.</strong>'
							+'<div class="media space-top-1">'+host.name+' 숙소는 보통 예약이 가득 차있습니다.</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</span>'
							+'<div class="show-sm"><a href="#" class="link-reset">'
							+'<div class="panel UrgencyCommitmentWrapper--expanded">'
							+'<div class="panel-body">'
							+'<div class="icon-background-container icon-rare-find-background">'
							+'<div class="UrgencyCommitmentWrapper__text">'
							+'<strong>흔치 않은 기회입니다.</strong>'
							+'<div class="media space-top-1">'+host.name+'님의 숙소는 보통 예약이 가득 차있습니다.</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div></a>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div id="content-container" class="summary-card-page-content col-md-7 col-md-pull-5">'
							+'<div class="accordion-panel" data-panel-name="Payment">'
							+'<div id="payment-panel" class="accordion-panel__content accordion-panel-overflow text-lead accordion-panel--expanded">'
							+'<div id="payment_selectors">'
							+'<div>'
							+'<div class="row space-4">'
							+'<div class="col-sm-12"><span>호스트가 요청을 수락한 경우에만 비용이 청구됩니다. 호스트는 24시간 내로 요청을 수락 또는 거절해야 합니다.</span>'
							+'</div>'
							+'</div>'
							+'<div>'
							+'<div class="row space-4">'
							+'<div class="col-6">'
							+'<div>'
							+'<label for="payment_country"><span>결제 국가</span></label>'
							+'<div class="select select-block">'
							+'<select name="payment_country">'
							+'<option selected="" value="KR">대한민국</option>'
							+'</select>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div>'
							+'<div class="row">'
							+'<div class="col-sm-12">'
							+'<label for="payment_type"><span>결제 방법</span></label>'
							+'</div>'
							+'</div>'
							+'<div class="row space-4">'
							+'<div class="col-md-6 col-sm-12">'
							+'<div>'
							+'<div class="select select-block">'
							+'<select name="payment_type">'
							+'<option selected="" value="0">신용카드</option>'
							+'</select>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div>'
							+'<div>'
							+'<div>'
							+'<div class="row space-4">'
							+'<div class="col-12">'
							+'<div class="page-container-full">'
							+'<div class="row">'
							+'<div class="responsive-component col-12 cc-number space-4">'
							+'<label for="credit-card-number" data-i18n="cc_number" class="text-lead">카드 번호</label>'
							+'<div class="right-addon first-message-right-addon">'
							+'<a href="#" id="tooltip-cc-icon-lock" class="icon icon-lock icon-light-gray h3 link-reset"></a>'
							+'<input type="text" id="card_number" maxlength="19" name="credit-card-number" placeholder="XXXX-XXXX-XXXX-XXXX" class="first-message-input invalid">'
							+'</div>'
							+'<div id="card_error" class="label label-warning inline-error text-lead" name="credit-card-number-error">'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="row">'
							+'<div class="responsive-component col-6 cc-expiration">'
							+'<label for="credit-card-month" class="text-lead">'
							+'유효기간'
							+'</label>'
							+'<div class="row row-super-condensed">'
							+'<div class="col-6">'
							+'<div class="select select-block first-message-select-div">'
							+'<select id="card_m" option="selected" name="credit-card-month" class="first-message-input">'
							+'<option>MM</option>'
							+'<option value="1">1</option>'
							+'<option value="2">2</option>'
							+'<option value="3">3</option>'
							+'<option value="4">4</option>'
							+'<option value="5">5</option>'
							+'<option value="6">6</option>'
							+'<option value="7">7</option>'
							+'<option value="8">8</option>'
							+'<option value="9">9</option>'
							+'<option value="10">10</option>'
							+'<option value="11">11</option>'
							+'<option value="12">12</option>'
							+'</select>'
							+'</div>'
							+'</div>'
							+'<div class="col-6">'
							+'<div class="select select-block first-message-select-div">'
							+'<select name="credit-card-year" class="first-message-input">'
							+'<option>YYYY</option>'
							var year = 0;
							var nowDate = new Date();
							for(var idx=1;idx <=15;idx++){
								year = nowDate.getFullYear();
								PAYING_FORM += '<option value="'+year+'">'+year+'</option>';
								nowDate.setFullYear(year+1);		
							}
							PAYING_FORM +='</select>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="label label-warning inline-error hide text-lead" name="credit-card-exp-date-past-error">'
							+'</div>'
							+'<div class="label label-warning inline-error hide text-lead" name="credit-card-exp-date-error">'
							+'</div>'
							+'</div>'
							+'<div class="responsive-component col-6 cc-security-code">'
							+'<label id="cvv-label" for="credit-card-cvv" class="text-lead">'
							+'보안 코드'
							+'</label>'
							+'<div class="right-addon first-message-right-addon">'
							+'<input type="text" name="credit-card-cvv" class="first-message-input">'
							+'</div>'
							+'<div class="label label-warning inline-error hide text-lead" name="credit-card-cvv-error">'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="row space-4">'
							+'<div class="col-6">'
							+'<div>'
							+'<label for="credit_card[first_name]"><span>이름</span></label>'
							+'<input name="credit_card[first_name]" type="text">'
							+'</div>'
							+'</div>'
							+'<div class="col-6">'
							+'<div>'
							+'<label for="credit_card[last_name]"><span>성</span></label>'
							+'<input name="credit_card[last_name]" type="text">'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="row space-4">'
							+'<div class="col-4">'
							+'<div>'
							+'<label for="credit_card[zip]"><span>우편번호</span></label>'
							+'<input name="credit_card[zip]" type="text">'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="accordion-style-checkout__section">'
							+'<div>'
							+'<div>'
							+'<div class="text-lead">'
							+'<div class="media-body text-rausch">에어비앤비는 게스트가 호스트와 협의하여 직접 계약을 체결할 수 있도록 해주는 플랫폼을 제공합니다. 숙박은 호스트가 게스트에게 제공하며, 에어비앤비는 호스트의 행위나 숙박을 감독하지 않습니다. 에어비앤비는 게스트와 호스트 사이에 체결되는 어떠한 계약의 당사자도 아니므로, 이에 관한 어떠한 책임도 지지 않습니다.</div>'
							+'<div class="terms media">'
							+'<div class="media-body terms-media-body">'
							+'<label name="form" for="agrees-to-terms" class="va-container">'
							+'<div class="va-top accordion-checkbox">'
							+'<input type="checkbox" id="bt_agrees" name="agree" value="1" disabled="disabled">'
							+'</div>'
							+'<div class="va-top" id="agrees-to-terms-text">'
							+'<div><a href="#" class="house-rules-link" id="house-rules-modal-trigger">숙소 이용규칙</a>, <a href="#" class="cancel-policy-link" target="_blank">환불정책</a>, <a href="#" class="refund_policy_link" target="_blank">게스트 환불 정책</a>에 동의합니다. 서비스 수수료를 포함하여 표시된 총액을 지불하는 것에도 동의합니다.</div>'
							+'</div>'
							+'</label>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="space-top-3">'
							+'<div id="payment-form-submit-wrapper">'
							+'<button id="paying_complete" class="btn btn-large btn-primary">요청 보내기'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="show-sm space-top-2">'
							+'<div class="accordion-style-checkout__section">'
							+'<div>'
							+'<div>'
							+'<div class="sidebar-text-large">'
							+'<div><span>합계</span><span>&nbsp;</span><span>₩78126</span></div>'
							+'</div><a href="#"><span>요금 및 여행 요약 보기</span></a></div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="modal" id="security-deposit-modal" role="dialog">'
							+'<div class="modal-table">'
							+'<div class="modal-cell">'
							+'<div class="modal-content">'
							+'<div class="panel-header">'
							+'<a href="#" class="panel-close" data-behavior="modal-close">'
							+'×'
							+'<span class="screen-reader-only">'
							+'보증금'
							+'</span>'
							+'</a>'
							+'보증금'
							+'</div>'
							+'<div class="panel-body">'
							+'<p>'
							+'보증금은 체크인 하루 전에 회원님의 신용카드로 청구됩니다. 호스트가 문제를 제기하지 않는 경우, 체크아웃 48시간 후 청구 금액 전액이 취소됩니다.'
							+'</p>'
							+'<p>'
							+'호스트가 문제를 제기할 경우에는, 에어비앤비에서 보증금의 지급을 유보하고 호스트와 게스트 양 당사자들로부터 추가 정보를 수집할 것입니다. 만약 호스트와 게스트 간에 합의가 이루어 지는 경우, 에어비앤비에서 해당 금액을 돌려드립니다. 주로 호스트가 피해 정도를 결정하지만, 에어비앤비는 모든 청구건들을 추적하여, 호스트가 보증금을 차지하기 위해 과도하게 청구를 하는 경향이 있다고 판단되면 이 호스트를 퇴출시킵니다.'
							+'</p>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<input type="hidden" id="price" value="'+parseInt(info.price*data.nights)+'"/>'
							+'<input type="hidden" id="check_in" value="'+info.checkinDate+'"/>'
							+'<input type="hidden" id="check_out" value="'+info.checkoutDate+'"/>'
							+'<input type="hidden" id="guest_cnt" value="'+info.guestCnt+'"/>'
							+'<input type="hidden" id="house_seq" value="'+info.houseSeq+'"/>'
							+'</main>';
						
						$('#pub_article').html(PAYING_FORM);
						
						
						
					}
				},	
				error : function(x,s,m) {
					alert('결제화면으로 이동 중 에러 발생 : '+m);
				}
			});
			/// 카드번호 정규식 ///
			$('#card_number').keyup(function(e) {
				if((e.which >=48 && e.which <= 57) || (e.which >=96 && e.which <= 105) || e.which==189 || e.which==8 || e.which==109){
					var cardNum = $(this).val();
					if(cardNum.length > 8){
						if(card_util.card_num_checker($(this).val())){
							$('#card_error').html('<font color="black">올바른 카드 번호</font>');
							$('#bt_agrees').prop('disabled',false);
							$('#paying_complete').toggle('disabled');
						}else{
							$('#card_error').html('<font color="black">잘못된 카드 번호 입니다</font>');
							$(this).focus();
						}	
					}	
				}else{
					$(this).prop('value',$(this).prop('value').substring(0,$(this).prop('value').length-1));
				}	
			})
	/*		
			function agreeCheck(frm)
			{
				if (frm.bt_paying.disabled==true)
					frm.bt_paying.disabled=false
					else
					frm.bt_paying.disabled=true
			}
			
			$('#pub_artcle').on('click','#bt_agrees', function agreeCheck(frm) {
				frm.preventDefault();
				
			});*/
			
			/// 결제화면 에서 결제버튼 ///
			$('#paying_complete').click(function(e) {
				if($('#bt_agrees').prop('disabled')==true){
					
					alert('카드번호를 정확히 입력해주십시오');
					$('#card_number').focus();
					return;
				}
				
				e.preventDefault();
				var pay_data = {
					'cardNum' : $('#card_number').val(),
					'price' : $('#price').val(),
					'checkinDate' : $('#check_in').val(),
					'checkoutDate' : $('#check_out').val(),
					'guestCnt' : $('#guset_cnt').val(),
					'houseSeq' : $('#house_seq').val()
						}
				$.ajax({
					url : app.context()+'/booking/payment',
					type : 'POST',
					data : JSON.stringify(pay_data),
					dataType : 'json',
					contentType : 'application/json',
					async : false,
					success : function(data) {
							alert('결제완료!');
							booking.resv_cancel(1);
					},	
					error : function(x,s,m) {
						alert('결제 중 에러 발생 : '+m);
					}	
				});
			});
		})
		
		$('#pub_article').on('click','#back', function() {
			booking.resv_cancel(1);
		})
		
		// 예약현황 버튼 (예약 취소) //
		$('#pub_header').on('click','#resv_cancel',function(){
			booking.resv_cancel(1);
		});
		// 요청보내기 토글 //
		$('#pub_article').on('click','#bt_agrees', function() {
			$('#paying_complete').toggle('disabled');
			
			/*if($('#paying_complete').prop('disabled')==false){
				$('#paying_complete').prop('disabled',true);
			}else{
				$('#paying_complete').prop('disabled',false);					
			}	*/
		})
		
		
		
		
	}
	// 리스트에서 이미지 클릭시 해당 화면으로 이동하는 이벤트 핸들러
	
	// 검색 페이지 보여주는 이벤트 핸들러
	var search_result_form = function(page_num) {
		var location = '';
		var search_data = {};
		// 예약시작일 , 종료일 임의적으로 체크인은 15시 체크아웃은 10시로 고정 
		var check_in = page_num==0? $('#header-search-checkin').val() : $('#checkin').val();
		var check_out = page_num==0? $('#header-search-checkout').val() : $('#checkout').val();
		
		if(page_num==-1){
			// MAIN TEST 용 (메인에서 도시들 사진 눌렀을 떄 임시 링크위한 TEMP 값들)
			var day = new Date();
			var endDay = new Date();
			day.setDate(day.getDate()+6);
			endDay.setDate(endDay.getDate()+9);
			location='대한민국 서울특별시';
			check_in = day.getFullYear()+'/'+(day.getMonth()+1)+'/'+ (day.getDate() < 10 ? '0'+day.getDate(): day.getDate());
			check_out = endDay.getFullYear()+'/'+(endDay.getMonth()+1)+'/'+(endDay.getDate() <10? '0'+endDay.getDate():endDay.getDate());
			$('#lng').val(127.04932480000007);
			$('#lat').val(37.51523630000001);
		
		}
	
		check_in = check_in.includes(':') ? check_in : check_in + ' 15:00:00';
		check_out = check_out.includes(':') ? check_out : check_out + ' 10:00:00';
	
		// 첫 페이지에서 검색한 주소를 분할(ex: 서울특별시 강남구)
		if($('#autocomplete').val() !== undefined){
			if(page_num==-1){
				location = location.split(' ');
				page_num = 1;
			}else{
				location = page_num==0? $('#location').val().split(' ') : $('#autocomplete').val().split(' ');
			}
			var room_type = ($('#room_type_0').prop('checked')==true ? 1 : 0)
			+ ($('#room_type_1').prop('checked')==true ? 2 : 0)
			+ ($('#room_type_2').prop('checked')==true ? 4 : 0)
			
			if(location[1]!=undefined && location[1].includes('서울')){
				location[1] = '서울특별시';
			}
			
			search_data = {
					'longitude':$('#lng').val(),'latitude':$('#lat').val(),'checkin':check_in,
					'checkout':check_out,'guestCnt': page_num==0? $('#guests_top option:selected').val():$('#guests option:selected').val(),'pageNum':page_num==0? 1 : page_num,
					'country':location[0], 'state':location[1]===undefined? 'NONE' :location[1],'city':location[2]===undefined? 'NONE' :location[2],
					'street':location[3]===undefined? 'NONE' :location[3],'roomType':room_type
			}
		}
		else{
			// 첫화면에서 넘어온게 아닌 해당 페이지에서 재 검색 수행시 이 블록 수행
			// 룸타입은 3개의 체크박스, 각각 1,2,4의 값을 주어 더하기 형식으로 체크한 값들 저장
			var room_type = ($('#facet-checkbox-entire-place').prop('checked')==true ? 1 : 0)
			+ ($('#facet-checkbox-private-room').prop('checked')==true ? 2 : 0)
			+ ($('#facet-checkbox-shared-room').prop('checked')==true ? 4 : 0)
			
			// 지역 검색을 위해 체크박스들을 체크했을 경우 지역 값들을 저장
			var loc_option = '';
			$('input[name=loc_option]').each(function(i) {
				if($(this).prop('checked')==true){
					loc_option += $(this).val()+',';
				}
			})
			loc_option = loc_option.substring(0,loc_option.length-1);
			
			// 지역 검색 단계 별로 체크박스로 체크한 지역 값들을 저장
			//ex: 시로 검색했을 경우 구단위가 체크박스로 나오며 그 값들은 city에 저장 
			//city(구,군) 으로 검색했을 경우 동,거리 단위가 체크 박스로 나오며 값들은 street에 저장
			if(loc_option!==''){
				if($('#state').val()==='NONE'){
					$('#state').val(loc_option);
				}else if($('#city').val()==='NONE'){
					$('#city').val(loc_option);
				}else if($('#street').val()==='NONE'){
					$('#street').val(loc_option);
				}
			}
			// 편의시설 선택한 값들 저장
			var fac_option = '';
			$('input[name=fac_option]').each(function(i) {
				if($(this).prop('checked')==true){
					fac_option += 'T-';
				}else{
					fac_option += '_-';
				}
			})
			// 안전시설 선택한 값들 저장
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
					'checkout':check_out,'guestCnt':$('#guests option:selected').val(),'pageNum':page_num,
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
				var check_in = data.checkIn;
				var check_out = data.checkOut;
				var guestCnt = data.guestCnt;
			
				var BOOK_FORM = 
					'<script src="'+app.js()+'/application.js"></script>'
					+'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>'
					+'<link href="https://a1.muscache.com/airbnb/static/packages/map_search-6524c10aa13b7d045b8eabe42cd2fb39.css" media="screen" rel="stylesheet" type="text/css" />'
					+'<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />'
					+'<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />'
					+'<link href="https://a1.muscache.com/airbnb/static/p1/main-98647fa0df25654edefa1bcc99c20a4f.css" media="screen" rel="stylesheet" type="text/css" />'
					+'<link rel="stylesheet" href="'+app.css()+'/datepicker/bootstrap-datepicker.css" />'
					+'<div class="map-search">'
					+'<div class="sidebar" style="top: 10%; bottom: 10%;">'
					+'<div id="katamari-container">'
					+'<div>'
					+'<div>'
					+'<div>'
					+'<div>'
					+'<div id="div_option" class="filters collapse" style="">'
					+'<div id="filter_options">';
				//========================== 검색 DIV(날짜,인원수)==========================
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
				+'<input id="checkin" type="text" name="start" class="checkin input-contrast" value="'+check_in+'" placeholder="체크인">'
				+'</div>'
				+'<div class="col-md-4 col-sm-6 space-1-sm">'
				+'<label class="screen-reader-only" for="checkout">체크아웃</label>'
				+'<input id="checkout" type="text" name="end" class="checkout input-contrast" value="'+check_out+'" placeholder="체크아웃">'
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
				
				//========================== 검색 DIV(숙소유형)==========================
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
				//========================== 검색 DIV(가격)==========================
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
				//========================== 검색 DIV(규모:침대 갯수 등)==========================
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
				+'<option value="1">욕실 1개</option>'
				+'<option value="2">욕실 2개</option>'
				+'<option value="3">욕실 3개</option>'
				+'<option value="4">욕실 4개</option>'
				+'<option value="5">욕실 5개</option>'
				+'<option value="6">욕실 6개</option>'
				+'<option value="7">욕실 7개</option>'
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
				//========================== 검색 DIV(지역)==========================
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
				$.each(data.locList, function(i, loc) {
					BOOK_FORM += '<div class="col-md-4">'
						+'<div>'
						+'<input type="checkbox" name="loc_option" value="'+loc+'">'+loc+''
						+'</div>'
						+'</div>'
				})
				//========================== 검색 DIV(편의시설,안전시설)==========================
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
				//========================== 검색 DIV(검색필터 확장)==========================
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
				//========================== 검색 DIV(리스트)==========================
				+'<div class="crossfading-panel__container text-right pull-right show-lg">'
				+'<div class="crossfading-panel crossfading-panel__vertically-centered-container crossfading-panel--right crossfading-panel--invisible"><h1 class="crossfading-panel--vertically-centered h6 text-right pull-right">'
				+'<span>예약 가능 숙소 '+data.totCount+' 개</span>'
				+'<span><span> · </span><span></span></span></h1>'
				+'</div>'
				+'<div class="crossfading-panel crossfading-panel--right pull-right urgency-commitment-panel"><i class="icon pull-right urgency-commitment-panel--icon icon-calendar-trend crossfading-panel--margin-left"></i>'
				+'<div class="pull-right crossfading-panel__text--lg">'
				+'<strong>이 날짜에는 숙소가 '+data.totCount+' 곳이 남아있습니다.</strong>'
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
				+'<span>예약 가능 숙소 '+data.totCount+' 개</span>'
				+'<span><span> · </span>'
				+'<span>도쿄</span>'
				+'</span></h1>'
				+'</div>'
				+'<div class="crossfading-panel crossfading-panel--left pull-left urgency-commitment-panel"><i class="icon pull-left urgency-commitment-panel--icon icon-calendar-trend crossfading-panel--margin-right hide-sm"></i>'
				+'<div class="pull-left text-center-sm crossfading-panel__text--md">'
				+'<strong>이 날짜에는 숙소가 '+data.totCount+' 곳이 남아있습니다.</strong>'
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
				// house seq , picture
				$.each(data.list, function(i, house) {
					BOOK_FORM += '<div class="listing-card-wrapper col-sm-12 space-2 col-md-6">'
						+'<div class="listing">'
						+'<div class="panel-image listing-img">'
						+'<div><a name="detail_go" href="#" class="media-photo media-cover"><input type="hidden" value="'+house.houseSeq+'"/>'
						+'<div class="listing-img-container media-cover text-center">'
						+'<img src="'+app.img()+'/booking/'+house.picture+'" class="img-responsive-height" alt="'+house.title+'">'
						+'</div></a>'
						+'<div class="panel-overlay-bottom-left panel-overlay-label panel-overlay-listing-label">'
						+'<div class="price-label">'
						+'<span><sup class="currency-prefix">₩</sup><span class="price-amount">'+house.price+'</span>'
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
						+'</div>'
						+'</div>'
						+'<div class="panel-body panel-card-section">'
						+'<div class="media"><h3 title="'+house.title+'" class="h5 listing-name text-truncate space-top-1"><span></span><span> </span></span><a href="#" class="text-normal"><span class="listing-name--display">'+house.title+'</span></a></h3><a href="#" class="text-normal link-reset">'
						+'<div class="text-muted listing-location text-truncate">'
						+'<div><span>'+house.roomType+'</span><span class="person-capacity hide-md"><span> · </span><span>숙박 인원 '+house.guestCnt+'명</span></span></div>'
						+'</div></a>'
						+'</div>'
						+'</div>'
						+'</div>'
						+'</div>'
				})
				//========================== 검색 DIV(리스트 페이징)==========================
				BOOK_FORM += '</div>'
				+'</div>'
				+'</div>'
				+'<center class="results-footer">'
				+'<div class="pagination-buttons-container space-8">'
				+'<div class="results_count">'
				+'<span><span><span>예약 가능 숙소 '+data.totCount+' 개</span></span><span> 중 </span><span>'+data.start+'</span><span> – </span><span>'+data.end+'</span></span>'
				+'</div>'
				+'<div class="pagination pagination-responsive">'
				+'<ul>'
				var startPg = data.startPg;
				var groupSize = data.groupSize;
				var lastPg = data.lastPg;
				var totPg = data.totPg;
				if(startPg-groupSize > 0){
					BOOK_FORM += '<li><a href="#" onClick="booking.search_result_form('+(startPg-1)+')"  aria-label="Previous"> <span aria-hidden="true">&laquo;</span>'
					+'</a></li>';
				}
				for(var i=startPg; i<=lastPg; i++){
					if(i==page_num){
						BOOK_FORM+='<li><a href="#" onClick="booking.search_result_form('+i+')" style="color: red;">'+i+'</a></li>';
					}else{
						BOOK_FORM+='<li><a href="#" onClick="booking.search_result_form('+i+')">'+i+'</a></li>';
					}
				}
				if(lastPg+1 <= totPg){
					BOOK_FORM += '<li><a href="#" onClick="booking.search_result_form('+(lastPg+1)+')" aria-label="Next"> <span aria-hidden="true">&raquo;</span>'
					+'</a></li>';
				}
				BOOK_FORM += '</ul>'
				+'</div>'
				+'</div>'
				+'</center>'
				+'</div>'
				//========================== 검색 DIV(검색어들 저장 HIDDEN)==========================
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
				+'<input type="hidden" id="nights" value="'+data.nights+'">'		
				+'</div>'
				+'</div>'
				+'<div id="map" style="position:absolute; right: 0;top: 10%; bottom: 10%;width: 40%;">'
				+'</div>';
				+'</div>'
				$('#pub_article').html(BOOK_FORM);
				//========================== 지도 DIV(검색 리스트)==========================
				var myLatLng = {lat: parseFloat(data.lat), lng: parseFloat(data.lng)};
				  var map = new google.maps.Map(document.getElementById('map'), {
				    zoom: 12,
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
						'<div style="width:200px;height:200px;"><a href="#" name="detail_go"><input type="hidden" value="'+item.houseSeq+'"/><img src="'+app.img()+'/booking/'+item.picture+'" width="100%" height="70%"/></a>'
						+'<br /><h4>' + item.title +'</h4>'
						+'</div>';
					markers[i].addListener('click', function() {
						infoWindow.setContent(contentString);
						infoWindow.open(map, markers[i]);
					});
				})
				//========================== 이전 검색값들 페이지에 적용==========================
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
						if($(this).val()==data.bedCnt){
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
				//========================== 달력 ==========================
				$('.input-daterange').datepicker({
				    language: "kr",
					format: "yyyy/mm/dd",
				    startDate: "+0d"
				});
			},
			error:function(request,status,error){
			    alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);}
			
		});	
		//========================== 검색필터 확장==========================
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
		//==========================검색필터 축소==========================
		$('#pub_article').on('click','#option_cancel',function(){
			$('#div_filter').show();
			$('#result_list').show();
			$('#div_size').hide();
			$('#filter_location').hide();
			$('#option_fac').hide();
			$('#filter_submit').hide();
		});	
	};
	
	
	return{
		init : init,
		search_result_form : search_result_form,
		show_detail : function(seq,type) {
			$.ajax({
				url : app.context()+'/booking/detail/'+seq,
				data : {'check_in' : $('#checkin').val()===undefined?'NONE':$('#checkin').val(), 'check_out' : $('#checkout').val()===undefined?'NONE':$('#checkout').val(), 'guest_cnt': $('#guests').val()===undefined?'NONE':$('#guests').val(),'nights': $('#nights').val()===undefined?'NONE':$('#nights').val()},
				type : 'GET',
				dataType : 'json',
				async : false,
				success : function(data) {
					if (data.house.houseSeq != 0) {
						var house = data.house;
						var DETAIL_FORM = 
							'<script src="'+app.js()+'/application.js"></script>'
							+'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>'
							+'<div id="room">'
							+'<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />'
							+'<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />'
							+'<link href="https://a1.muscache.com/airbnb/static/p1/main-98647fa0df25654edefa1bcc99c20a4f.css" media="screen" rel="stylesheet" type="text/css" />'
							+'<link rel="stylesheet" href="'+app.css()+'/datepicker/bootstrap-datepicker.css" />'
							+'<div id="photos" class="with-photos with-modal"><img alt="img" src="'+app.img()+'/booking/'+house.picture+'" width="100%" height="550px" style="padding-bottom : 5%;"/>'
							+'</div>'
							+'<div id="summary" class="panel room-section">'
							+'<div class="page-container-responsive">'
							+'<div class="row">'
							+'<div class="col-lg-8">'
							+'<div>'
							+'<div class="summary-component">'
							+'<div class="space-4 space-top-4">'
							+'<div class="row">'
							+'<div class="col-md-3 space-sm-4 text-center space-sm-2">'
							+'<div class="media-photo-badge"><a class="media-photo media-round"><img alt="사용자 프로필 이미지" class="host-profile-image" height="115" width="115" data-pin-nopin="true" src="'+app.img()+'/booking/'+house.picture+'"></a>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<h1 class="overflow h3 space-1 text-center-sm" id="listing_name">'+house.title+'</h1>'
							+'<div id="display-address" class="space-2 text-muted text-center-sm"><a href="#neighborhood" class="link-reset">'+house.country+', '+house.state+', '+house.city+', '+house.street+'</a>'
							+'<span> &nbsp; </span>'
							+'</div>'
							+'<div class="row row-condensed text-muted text-center">'
							+'<div class="col-sm-3">'
							+'<i class="icon icon-entire-place icon-size-2" aria-hidden="true"></i>'
							+'</div>'
							+'<div class="col-sm-3">'
							+'<i class="icon icon-group icon-size-2" aria-hidden="true"></i>'
							+'</div>'
							+'<div class="col-sm-3">'
							+'<i class="icon icon-rooms icon-size-2" aria-hidden="true"></i>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="row">'
							+'<div class="col-md-3 text-muted text-center hide-sm">'
							+'<a href="#host-profile" class="link-reset text-wrap"></a>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<div class="row row-condensed text-muted text-center">'
							+'<div class="col-sm-3">'+house.roomType+'</div>'
							+'<div class="col-sm-3">숙박 인원 : '+house.guestCnt+' 명</div>'
							+'<div class="col-sm-3">침실 '+house.bathroomCnt+' 개</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							 +'<div class="col-lg-4">'
							 +'<div class="mobile-bookit-btn-container js-bookit-btn-container panel-btn-sm panel-btn-fixed-sm hide hide-md hide-lg">'
							+'<button name="paying_go" class="btn btn-primary btn-block btn-large js-book-it-sm-trigger">'
							+'<span class="book-it__btn-text">예약 요청</span>'
							 +'<span class="book-it__btn-text--contact-host">호스트에게 연락하기</span>'
							+'<span class="book-it__btn-text--instant"><i class="icon icon-bolt icon-beach h4"></i>즉시 예약 </span>'
							 +'</button>'
							+'</div>'
							+''
							+'<div id="tax-descriptions-tip" class="tooltip tooltip-top-middle" role="tooltip" data-sticky="true" data-trigger="#tax-descriptions-tooltip">'
							+'</div>'
							+''
							+''
							 +'<div>'
							+'<div class="book-it__container js-book-it-container fixed" style="top: 40px;">'
							+'<div>'
							+'<div>'
							+'<div class="">'
							+'<div class="book-it__price fixed" style="height: 40px;">'
							+'<div class="row">'
							+'<div class="col-sm-8">'
							+'<div class="book-it__price-amount text-special">';
							var bDto = data.bDto;
						
							DETAIL_FORM += type==1? '<span class="h3"><span>￦ '+ parseInt(house.price*data.nights)+'</span></span>'
									:'<span class="h3"><span>￦ '+ bDto.price+'</span></span>';
							DETAIL_FORM += '</div>'
							+'</div>'
							+'<div class="col-sm-4">'
							+'<div class="book-it__payment-period-container pull-right">';
							DETAIL_FORM += type==1?'<div class="book-it__payment-period"><span>'+data.nights+'박</span>'
									: '<div class="book-it__payment-period"><span></span>'
							DETAIL_FORM +='</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<form method="post">'
							+'<div class="panel book-it-panel">'
							+'<div class="panel-body panel-light">'
							+'<div class="row row-condensed space-3">'
							+'<div class="col-md-9 input-daterange">'
							+'<div class="row row-condensed">'
							+'<div class="col-sm-6">'
							+'<label class="book-it__label" for="datespan-checkin">체크인</label>';
							DETAIL_FORM += type==1?'<input id="checkin_date" type="text" name="start" class="checkin ui-datepicker-target" value="'+data.check_in+'">'
									: '<span>'+bDto.checkinDate+'</span>';
						
							DETAIL_FORM +='</div>'
							+'<div class="col-sm-6">'
							+'<label class="book-it__label" for="datespan-checkout">체크아웃</label>'
							DETAIL_FORM += type==1? '<input id="checkout_date" type="text" name="end" class="checkout ui-datepicker-target" value="'+data.check_out+'">'
									:'<span>'+bDto.checkoutDate+'</span>'
							
							DETAIL_FORM +='</div>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-3">'
							+'<div>'
							+'<label for="number_of_guests_21674" class="book-it__label"><span>숙박 인원</span></label>'
							+'<div class="select select-block">'
							+'<select id="guest_cnt" name="number_of_guests">'
							+'<option value="1">1</option>'
							+'<option value="2">2</option>'
							+'<option value="3">3</option>'
							+'<option value="4">4</option>'
							+'<option value="5">5</option>'
							+'<option value="6">6</option>'
							+'<option value="7">7</option>'
							+'<option value="8">8</option>'
							+'<option value="9">9</option>'
							+'<option value="10">10</option>'
							+'<option value="11">11</option>'
							+'<option value="12">12</option>'
							+'<option value="13">13</option>'
							+'<option value="14">14</option>'
							+'<option value="15">15</option>'
							+'<option value="16">16+</option>'
							+'</select>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div>';
							DETAIL_FORM += type==1? 
							'<button class="btn btn-primary btn-large btn-block" name="paying_go">'
							+'<span>예약 요청</span>'
							+'</button>'
							+'<div class="bookit-message__container text-center text-muted">'
							+'<small><span>"예약" 버튼을 클릭해도 대금이 바로 청구되지 않습니다.</span></small>'
							+'</div>'
							: 
							'<span class="btn btn-primary btn-large btn-block" id="back">'
							+'<span>뒤 로</span>'
							+'</span>'
							+'<div class="bookit-message__container text-center text-muted">'
							+'<small><span>"뒤로" 버튼을 클릭하면 예약현황으로 이동합니다</span></small>'
							+'</div>';	
						
							DETAIL_FORM +='</div>'
							+'<div class="hide">'
							+'<button type="button" class="btn btn-primary btn-large btn-small btn-block">'
							+'<span>호스트에게 연락하기</span>'
							+'</button>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</form>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+''
							+'<div>'
							+'<div>'
							+'<div id="details" class="details-section webkit-render-fix">'
							+'<div class="page-container-responsive">'
							+'<div class="row">'
							+'<div class="col-lg-8 js-details-column">'
							+'<div class="space-8 space-top-8"><h4 class="space-4 text-center-sm"></h4>'
							+'<div class="row row-condensed">'
							+'<div class="contact-host-div col-12">'
							+'<div>'
							+'<button class="btn-link btn-link--bold" type="button">'
							+'<span>호스트에게 연락하기</span>'
							+'</button>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<hr>'
							+'<div class="row">'
							+'<div class="col-md-3 text-muted">'
							+'<div><span>숙소</span></div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<div class="row">'
							+'<div class="col-md-6">'
							+'<div>'
							+'<span>숙박 가능 인원:</span>'
							+'<span></span><strong>'+house.guestCnt+'</strong>'
							+'</div>'
							+'<div>'
							+'<span>욕실:</span>'
							+'<span> </span><strong>'+house.bathroomCnt+'</strong>'
							+'</div>'
							+'<div>'
							+'<span>침실:</span>'
							+'<span> </span><strong>'+house.bedCnt+'</strong>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-6">'
							+'<div><span>체크인:</span>'
							+'<span> </span><strong>15:00 이후</strong>'
							+'</div>'
							+'<div>'
							+'<span>체크아웃:</span>'
							+'<span> </span><strong>10:00</strong>'
							+'</div>'
							+'<div>'
							+'<span>집 유형:</span>'
							+'<span> </span><strong>'+house.type+'</strong>'
							+'</div>'
							+'<div>'
							+'<span>숙소 유형 :</span>'
							+'<span> </span><strong>'+house.roomType+'</strong>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div class="row">'
							+'<div class="col-md-6">'
							+'<strong><a href="#house-rules" class="react-house-rules-trigger" data-prevent-default="true"><span>숙소 이용규칙</span></a></strong>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<hr>'
							+'<div class="row amenities">'
							+'<div class="col-md-3 text-muted">'
							+'<div>'
							+'<span>시설</span>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9 expandable expanded">'
							+''
							+'<div class="expandable-content expandable-content-full">'
							
							+'<div class="row">'
							+'<div class="col-sm-6">'
							var conven = house.convenience.split('-');
							// 왼쪽시설
							
							DETAIL_FORM += conven[0]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-essentials"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>필수품목</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>필수품목</del></span>'
									+'</div>'
									+'</div>'
									
							DETAIL_FORM += conven[2]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-shampoo"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>샴푸</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>샴푸</del></span>'
									+'</div>'
									+'</div>'
							
							DETAIL_FORM += conven[4]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-tv"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>TV</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>TV</del></span>'
									+'</div>'
									+'</div>'
							DETAIL_FORM += conven[6]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-air-conditioning"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>에어컨</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>에어컨</del></span>'
									+'</div>'
									+'</div>'
							DETAIL_FORM += conven[8]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-laptop"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>책상/작업공간</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>책상/작업공간</del></span>'
									+'</div>'
									+'</div>'							
							DETAIL_FORM += conven[10]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-iron"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>다리미</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>다리미</del></span>'
									+'</div>'
									+'</div>'
							DETAIL_FORM += conven[12]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-paw"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>반려동물</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>반려동물</del></span>'
									+'</div>'
									+'</div>'
							
							
							
							+'</div>'
							// 오른쪽 시설
							+'<div class="col-sm-6">'
									
							DETAIL_FORM += conven[1]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-wifi"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>무선인터넷</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>무선인터넷</del></span>'
									+'</div>'
									+'</div>'
							
							DETAIL_FORM += conven[3]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-hangers"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>옷장/서랍장</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>옷장/서랍장</del></span>'
									+'</div>'
									+'</div>'
							DETAIL_FORM += conven[5]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-heating"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>난방</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>난방</del></span>'
									+'</div>'
									+'</div>'
							DETAIL_FORM += conven[7]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-cup"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>조식,커피,차</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>조식,커피,차</del></span>'
									+'</div>'
									+'</div>'							
							DETAIL_FORM += conven[9]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-fireplace"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>벽난로</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>벽난로</del></span>'
									+'</div>'
									+'</div>'
							DETAIL_FORM += conven[11]=='T' ?
									'<div>'
									+'<div class="space-1">'
									+'<span><i class="icon h3 icon-hair-dryer"></i><span>&nbsp;&nbsp;&nbsp;</span></span>'
									+'<span id="amenity-long-tooltip-trigger-8"><strong>헤어드라이어	</strong></span>'
									+'</div>'
									+'</div>'
									:
									'<div>'
									+'<div class="space-1 text-muted">'
									+'<span id="amenity-long-tooltip-trigger-40"><del>헤어드라이어</del></span>'
									+'</div>'
									+'</div>'
							DETAIL_FORM += '</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<hr>'
							+'<div class="row">'
							+'<div class="col-md-3 text-muted">'
							+'<div>'
							+'<span>가격</span>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<div class="row">'
							+'<div class="col-md-6">'
							+'<div>'
							+'<span>1박 요금 : ￦ '+house.price+'</span>'
							+'</div>'
							+'<div>'
							+'<span>추가 인원 요금 :</span>'
							+'<span> </span><strong>추가요금 없음</strong>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<hr>'
							+'<div class="row description" id="description">'
							+'<div class="col-md-3 text-muted">'
							+'<div>'
							+'<span>설명</span>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<div>'
							+'<div class="react-expandable expanded">'
							+'<div class="expandable-content expandable-content-long">'
							+'<div>'
							+'<p><span>'+house.explaination+'</span></p>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<hr>'
							+'<div class="row react-house-rules" id="house-rules">'
							+'<div class="col-md-3">'
							+'<div class="text-muted">'
							+'<span>숙소 이용규칙</span>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<div class="structured_house_rules">'
							+'<div class="row col-sm-12">'
							+'<span>체크인은 15:00 이후입니다.</span>'
							+'</div>'
							var rules = house.rules.split('-');
							DETAIL_FORM += rules[0]=='T' ? 
								'<div class="row col-sm-12">'
								+'<span>어린이(2~12세) 숙박에 적합함</span>'
								+'</div>' : ' ';
							DETAIL_FORM += rules[1]=='T' ? 
								'<div class="row col-sm-12">'
								+'<span>유아(2세 미만) 숙박에 적합함 </span>'
								+'</div>' : ' ';
							DETAIL_FORM += rules[2]=='T' ? 
								'<div class="row col-sm-12">'
								+'<span>반려동물 동반에 적합함</span>'
								+'</div>' : ' ';
							DETAIL_FORM += rules[3]=='T' ? 
								'<div class="row col-sm-12">'
								+'<span>흡연 가능</span>'
								+'</div>' : ' ';
							DETAIL_FORM += rules[4]=='T' ? 
								'<div class="row col-sm-12">'
								+'<span>행사나 파티 허용</span>'
								+'</div>' : ' ';
							DETAIL_FORM += '<div class="row col-sm-12">'
							+'</div>'
							+'<div class="row">'
							+'<div class="col-sm-12">'
							+'<hr class="structured_house_rules__hr">'
							+'<span>'+house.otherRule+'</span>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div>'
							+'<div class="react-expandable expanded">'
							+'<div class="expandable-content">'
							+'<div class="expandable-indicator"></div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<hr>'
							+'<div class="row">'
							+'<div class="col-md-3 text-muted">'
							+'<div>'
							+'<span>안전 기능</span>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<div class="row">'
							+'<div class="col-sm-6">'
							var safetys = house.safetyFac.split('-');
							DETAIL_FORM += safetys[0]=='T' ? 
								'<div>'
								+'<div class="space-1">'
								+'<span id="amenity-short-tooltip-trigger-35"><span>연기 감지기</span></span>'
								+'</div>'
								+'</div>' : ' ';
							DETAIL_FORM += safetys[2]=='T' ? 
								'<div>'
								+'<div class="space-1">'
								+'<span id="amenity-short-tooltip-trigger-35"><span>구급상자</span></span>'
								+'</div>'
								+'</div>' : ' ';
							DETAIL_FORM += safetys[4]=='T' ? 
								'<div>'
								+'<div class="space-1">'
								+'<span id="amenity-short-tooltip-trigger-35"><span>소화기</span></span>'
								+'</div>'
								+'</div>' : ' ';
							
							
							DETAIL_FORM +='</div>'
							+'<div class="col-sm-6">'
							
							
							DETAIL_FORM += safetys[1]=='T' ? 
									'<div>'
									+'<div class="space-1">'
									+'<span id="amenity-short-tooltip-trigger-35"><span>일산화탄소 감지기</span></span>'
									+'</div>'
									+'</div>' : ' ';
								
							DETAIL_FORM += safetys[3]=='T' ? 
								'<div>'
								+'<div class="space-1">'
								+'<span id="amenity-short-tooltip-trigger-35"><span>안전 카드</span></span>'
								+'</div>'
								+'</div>' : ' ';
							DETAIL_FORM += safetys[5]=='T' ? 
								'<div>'
								+'<div class="space-1">'
								+'<span id="amenity-short-tooltip-trigger-35"><span>침실에 잠금장치</span></span>'
								+'</div>'
								+'</div>' : ' ';
							
							
							DETAIL_FORM += '</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<hr>'
							+'<div class="row">'
							+'<div class="col-md-3 text-muted">'
							+'<div>'
							+'<span>예약 가능 여부</span>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<div class="row">'
							+'<div class="col-md-6">최소 숙박일 <strong>'+house.minNights+'일</strong>.</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div></div>'
							+'<div id="host-profile" class="room-section webkit-render-fix">'
							+'<div class="page-container-responsive space-top-8 space-8">'
							+'<div class="row">'
							+'<div class="col-lg-8">'
							+'<h4 class="space-2 text-center-sm"><span>호스트</span></h4>'
							+'<hr class="space-4 space-top-2">'
							+'<div class="row">'
							+'<div class="col-md-3 text-center">'
							+'<div class="media-photo-badge">'
							+'<a href="#" class="media-photo media-round">'
							+'<img alt="'+data.host.name+'" class="media-photo media-round" height="90" width="90" data-pin-nopin="true" src="'+app.img()+'/member/'+data.host.profileImg+'"></a>'
							+'</div>'
							+'</div>'
							+'<div class="col-md-9">'
							+'<h3 class="space-1">'+data.host.name+'</h3>'
							+'<div class="row row-condensed space-2">'
							+'<div class="col-md-12 text-muted">'
							+'<span>'+house.country+', '+house.state+'</span>'
							+'<span> · </span>'
							+'<span>회원가입 : '+data.host.regDate+'</span>'
							+'</div>'
							+'</div>'
							+'<div class="react-expandable expanded">'
							+'<div class="expandable-content expandable-content-long">'
							+'<div class="expandable-indicator"></div>'
							+'</div>'
							+'</div>'
							+'<div>'
							+'<span class="btn btn-primary btn-small"><span>호스트에게 연락하기</span></span>'
							+'<div></div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<div id="neighborhood" class="room-section">'
							+'<div style="position:relative;" class="page-container-responsive">'
							+'<div class="p3-location--map">'
							+'<div class="panel location-panel"></div>'
							+'<ul id="guidebook-recommendations" class="hide">'
							+'<li class="user-image"><img alt="'+data.host.name+'" data-pin-nopin="true" height="90" src="'+app.img()+'/member/'+data.host.profileImg+'" title="'+data.host.name+'" width="90"></li>'
							+'</ul>'
							+'<div id="hover-card" class="panel">'
							+'<div class="panel-body">'
							+'<div class="text-center">숙소 위치</div>'
							+'<div class="text-center">'
							+'<span class="listing-location"><span>'+house.country+'</span><span>'+house.state+',</span><span>'+house.city+'</span></span>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'</div>'
							+'<input type="hidden" id="price" value="'+house.price+'" />'
							+'<input type="hidden" id="house_seq" value="'+house.houseSeq+'" />'
							+'<input type="hidden" id="nights" value="'+data.nights+'"/>'
							+'</div>';
						$('#pub_article').html(DETAIL_FORM);
						$("#pub_footer").remove();
						$('#guest_cnt option:nth-child('+data.guest_cnt+')').prop('selected',true);
						
						if(type==1){
							var blockDates = new Array();
							$.each(data.blockDate, function(i,date) {
								blockDates[i] = date;
							})
							$('.input-daterange').datepicker({
							    language: "kr",
								format: "yyyy/mm/dd",
							    startDate: "+0d",
							    datesDisabled : blockDates
							});
						}
						$('html,body').scrollTop(0);
					}
				},
				error : function(x,s,m) {
					alert('디테일 화면으로 이동 중 에러 발생 : '+m);
				}
			});
		},
		resv_cancel : function(pgNum) {
			$.getJSON(app.context()+'/booking/list/'+pgNum,function(data){
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				console.log('스타트페이지'+startPg);
				console.log('라스트페이지'+lastPg);
				console.log('페이지사이즈'+pgSize);
				console.log('토탈페이지'+totPg);
				console.log('그룹사이즈'+groupSize);
				var booking_list =  
					'<div id="cancel_form" class="formbox2">'
					+'<h2>예약취소</h2>'
					+'<p class="m_b_5">* <span class="red">예약정보</span>를 잘 확인하여 취소하시기 바랍니다.'
					+'<br>* <span class="red">예약번호</span>를 클릭하면 상세 정보 확인 가능합니다.</p>'
					+'<table class="table table-striped">'
					+'<caption><h4 style="text-align:center">예약정보</h4></caption>'
					+'<thead>'
					+'<tr>'
					+'<th scope="col">예약번호</th>'
					+'<th scope="col">예약신청일</th>'
					+'<th scope="col">이용기간</th>'
					+'<th scope="col">예약장소</th>'
					+'<th scope="col"></th>'
					+'</tr>'
					+'</thead>'
					+'<tbody>'
					;
				if(data.totCount == 0){
				
					booking_list+='<tr><td colspan="5"><center>신청하신 내역이 없습니다.</center></td></tr>';
				}else{
					$.each(data.list, function(i, booking) {
						booking_list+=
							'<tr>'
							+'<td scope="col"><a href="#" onClick="booking.show_detail('+booking.resvSeq+',2)">'+booking.resvSeq+'</a></td>'
							+'<td scope="col">'+booking.paymentDate+'</td>'
							+'<td scope="col">'+booking.checkinDate+'~'+booking.checkoutDate+'</td>'
							+'<td scope="col">'+booking.state+'</td>'
							+'<td scope="col"><span id="booking_cancel_bt" type="button" onClick="booking.cancel_booking('+booking.resvSeq+')" class="btn btn-danger" style="height: 30px;">취소</span></td>'
							+'</tr>';
					});
				}
				booking_list += '</tbody></table>';
					booking_list +='<center class="pagination pagination-responsive" style="display: block"><ul>';
					if((startPg-groupSize) > 0){
						booking_list += 
							'<li>'
							+'<a href="#" onClick="booking.resv_cancel('+(startPg-1)+')" aria-label="Previous">'
							+'<span aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'</li>';
					}
					for(var i=startPg; i<=lastPg; i++){
						if(i==pgNum){
							booking_list +='<li><a style="color: red;">'+i+'</a></li>';
						}else{
							booking_list += '<li><a href="#" onclick="booking.resv_cancel('+i+')">'+i+'</a></li>';
						}
					}
					if(lastPg+1 <= totPg){
						booking_list += 
							'<li>'
							+'<a href="#" onClick="booking.resv_cancel('+(lastPg+1)+')" aria-label="Next">'
							+ '<span aria-hidden="true">&raquo;</span>'
							+'</a>'
							+'</li>';
					}
					booking_list += '</ul></center></div>'
					$('#pub_article').html(booking_list);
			});
		},
		cancel_booking : function(resv_seq) {
			if(confirm("예약을 취소 하시겠습니까?")==true){
				$.ajax({
					url : app.context()+'/booking/bookingCancel',
					type : 'POST',
					data : {'resvSeq' : resv_seq},
					dataType : 'json',
					success : function(data) {
							alert('예약이 취소 되었습니다.');
							booking.resv_cancel(1);
					},	
					error : function(x,s,m) {
						alert('예약취소 중 에러 발생 : '+m);
					}	
				});
			}
		}
	
	}
})();




// card

var card_util = (function(){
	return {
		isNumber : function(value){
			return typeof value === 'number' && isFinite(value);
		},
		card_num_checker : function(value){
			var cnc_regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
			return cnc_regex.test(value)?true:false;
		}
	};
})();

