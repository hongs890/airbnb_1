<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://a1.muscache.com/airbnb/static/packages/map_search-6524c10aa13b7d045b8eabe42cd2fb39.css" media="screen" rel="stylesheet" type="text/css" />

<main id="site-content" role="main">

<div data-hypernova-key="p4flash_messagebundlejs"><span data-react-checksum="464588145"></span></div>
<div id="main-view" class="main-view page-container-responsive space-top-md-6 space-md-6 space-top-lg-6 space-lg-6">
  <form action="/payments/create_booking_v2" method="post" id="checkout-form">
    <div class="row">
      <div class="col-sm-12 p4-error-header space-1">
        <div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="form-errors">
  			<i class="icon alert-icon icon-alert-alt"></i>
 			 <div class="h5 space-1 error-header">
    			거의 끝났습니다!
  			</div>
  			<ul></ul>
		</div>
<div class="alert alert-with-icon alert-success alert-block hide space-lg-2 space-md-2" id="coupon-success">
  <i class="icon alert-icon icon-star-circled"></i>
  <div class="h5 space-1 error-header">
    프로모션 요금이 적용되었습니다.
  </div>
  전체 숙박 요금에 프로모션을 적용했습니다. 이제 즐거운 여행을 하는 일만 남았네요!
</div>
<div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="server-error">
  <i class="icon alert-icon icon-alert-alt"></i>
  오류가 발생하여 요청이 접수되지 않았습니다. 에어비앤비 웹사이트가 점검 중이었거나 연결이 자동으로 중지되었을 수 있습니다. 다시 시도해 주세요.
</div>
<div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="verification-error">
  <i class="icon alert-icon icon-alert-alt"></i>
  회원님의 카드를 인증할 수 없습니다. 다른 카드로 시도해 보세요. 회원님의 카드에는 금액이 청구되지 않았습니다.
</div>
<div class="alert alert-with-icon alert-error alert-block hide space-lg-2 space-md-2" id="house-rules-error">
  <i class="icon alert-icon icon-alert-alt"></i>
  <div class="h5 space-1 error-header">
      숙소 이용규칙과 약관
  </div>
  <p>
      예약를 하려면, 숙소 이용규칙과 약관에 동의하세요.
  </p>
</div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 col-md-push-7 space-lg-2 space-md-2 side-summary-container">
        <div data-hypernova-key="p4_sidebarbundlejs">
        	<div class="summary-card col-center">
        		<div class="background-cover summary-card__payments-listing-image" style="background-image:url();">
        		</div>
        		<div class="pull-right space-3 summary-card__host-profile-photo">
        			<div class="media-photo media-round">
        				<img class="summary-card__host-profile-photo-src" src="https://a2.muscache.com/im/pictures/531c686c-96ff-4d95-8806-bc3452a0e62b.jpg?aki_policy=profile_x_medium" alt="Chris">
       				</div>
       			</div>
       			<div class="panel">
       				<div class="panel-body">
       					<div class="text-muted space-2"><span>호스트: SangHo님</span>
       					</div>
       					<div class="sidebar-text-large">고급 스튜디오를 최저가에 @강남역 최고의 위치!!
       					</div>
       					<div class="hide-sm text-muted">
       						<ul class="list-layout summary-card__additional-details-list">
       							<li>집 전체</li>
       								<li><small><div class="star-rating-wrapper">
       									<div class="star-rating" content="4.5">
       										<div class="foreground">
       											<span><span><i class="icon-star icon icon-beach icon-star-big"></i><span> </span></span><span>
       												<i class="icon-star icon icon-beach icon-star-big"></i><span> </span></span><span><i class="icon-star icon icon-beach icon-star-big"></i><span> </span></span><span>
       												<i class="icon-star icon icon-beach icon-star-big"></i><span> </span></span><i class="icon-star-half icon icon-beach icon-star-big"></i></span>
       										</div>
       										<div class="background">
       											<span><span><i class="icon-star icon icon-light-gray icon-star-big"></i><span> </span></span><span><i class="icon-star icon icon-light-gray icon-star-big"></i>
       												<span> </span></span><span><i class="icon-star icon icon-light-gray icon-star-big"></i><span> </span></span><span><i class="icon-star icon icon-light-gray icon-star-big"></i>
       												<span> </span></span><span><i class="icon-star icon icon-light-gray icon-star-big"></i><span> </span></span></span>
       										</div>
       									</div>
       									<span> </span><span class="h6"><small><span>60</span></small></span>
       										</div>
       									</small>
       								</li>
       								<li class="hide-md"><span>후기 60개</span></li>
       						</ul>
       						<div>Gangnam-daero, Seocho-gu, 서울 137-072, 한국</div>
       					</div>
       				</div>
       				<div class="panel-body hide-sm">
       					<div class="row row-condensed">
       						<div class="col-sm-5">
       							<div class="text-muted space-bottom-2"><span>체크인</span>
       							</div><span>2016년 10월 13일</span>
       						</div>
       						<div class="col-sm-2 summary-card__check-in-icon">
       							<i class="icon icon-chevron-right icon-light-gray"></i>
       						</div>
       						<div class="col-sm-5">
       							<div class="text-muted space-bottom-2"><span>체크아웃</span>
       							</div><span>2016년 10월 14일</span>
       						</div>
       					</div>
       				</div>
       				<div class="panel-body hide-sm">
       					<table class="summary-card__billing-table">
       						<tbody>
       							<tr class="price-item">
       								<td><span>₩58036 x 1박</span><span>&nbsp;</span></td>
       								<td class="text-right price-item__price"><div><span>₩58036</span></div></td>
       							</tr>
       						</tbody>
       					</table>
       				</div>
       				<div class="panel-body hide-sm">
       					<span class="sidebar-text-large space-2 summary-card__total-price" tabindex="-1">
       						<table class="summary-card__billing-table">
       							<tbody>
       								<tr class="price-item">
       									<td><span>총합계</span><span>&nbsp;</span></td>
       									<td class="text-right price-item__price">
       										<div><span>₩78126</span><sup>KRW</sup></div>
       									</td>
       								</tr>
       							</tbody>
       						</table>
       					</span>
       				</div>
       				<div class="show-sm panel-body text-center"><a><span>요금 및 여행 요약 보기</span></a></div>
       			</div>
       		</div>
       	</div>
		<div class="pwp-summary-container"></div>
      </div>
        <div class="urgency-commitment-message col-md-7 col-md-pull-5 space-lg-4 space-md-4 space-sm-2">
          <div data-hypernova-key="p4_urgency_commitment_messagebundlejs">
          	<div><span class="hide-sm">
          		<div class="panel UrgencyCommitmentWrapper--expanded">
          			<div class="panel-body">
          				<div class="icon-background-container icon-rare-find-background">
          					<div class="UrgencyCommitmentWrapper__text">
          						<strong>흔치 않은 기회입니다.</strong>
          							<div class="media space-top-1">Chris님의 숙소는 보통 예약이 가득 차있습니다.</div>
          					</div>
          				</div>
          			</div>
          		</div>
          		</span>
          		<div class="show-sm"><a href="#" class="link-reset">
          			<div class="panel UrgencyCommitmentWrapper--expanded">
          				<div class="panel-body">
          					<div class="icon-background-container icon-rare-find-background">
          						<div class="UrgencyCommitmentWrapper__text">
          							<strong>흔치 않은 기회입니다.</strong>
          								<div class="media space-top-1">Chris님의 숙소는 보통 예약이 가득 차있습니다.</div>
          						</div>
          					</div>
          				</div>
          			</div></a>
          		</div>
          	</div>
          </div>
        </div>
      <div id="content-container" class="summary-card-page-content col-md-7 col-md-pull-5">
        <div class="accordion-panel" data-panel-name="Payment">
 		 <div id="payment-panel" class="accordion-panel__content accordion-panel-overflow text-lead accordion-panel--expanded">
    		<div id="payment_selectors">
    			<div>
    				<div class="row space-4">
    					<div class="col-sm-12"><span>호스트가 요청을 수락한 경우에만 비용이 청구됩니다. 호스트는 24시간 내로 요청을 수락 또는 거절해야 합니다.</span>
    					</div>
    				</div>
    				<div>
    					<div class="row space-4">
    						<div class="col-6">
    							<div>
    								<label for="payment_country"><span>결제 국가</span></label>
    									<div class="select select-block">
    										<select name="payment_country">
    											 <option selected="" value="KR">한국</option>
    										</select>
    									</div>
    							</div>
    						</div>
    					</div>
    				</div>
    				<div>
    					<div class="row">
    						<div class="col-sm-12">
    							<label for="payment_type"><span>결제 방법</span></label>
    						</div>
    					</div>
    					<div class="row space-4">
    						<div class="col-md-6 col-sm-12">
    							<div>
    								<div class="select select-block">
    									<select name="payment_type">
    										<option selected="" value="0">신용카드</option>
    									</select>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    <div>
    	<div>
    		<div>
    			<div class="row space-4">
    				<div class="col-12">
    					<div><iframe name="payment-iframe" width="100%" height="206" frameborder="0" scrolling="no" seamless="" src="https://iframes.airbnbpayments.com/b559a9258b67d889f841daf72497323a8a21302d/pay.html?country=KR&amp;origin=https%3A%2F%2Fwww.airbnb.co.kr&amp;show_first_message_redesign=1"></iframe>
    					</div>
    				</div>
    			</div>
    			<div class="row space-4">
    				<div class="col-6">
    					<div>
    						<label for="credit_card[first_name]"><span>이름</span></label>
    							<input name="credit_card[first_name]" type="text">
    					</div>
    				</div>
    				<div class="col-6">
    					<div>
    						<label for="credit_card[last_name]"><span>성</span></label>
    							<input name="credit_card[last_name]" type="text">
    					</div>
    				</div>
    			</div>
    			<div class="row space-4">
    				<div class="col-4">
    					<div>
    						<label for="credit_card[zip]"><span>우편번호</span></label>
    							<input name="credit_card[zip]" type="text">
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</div>
        <div class="accordion-style-checkout__section">
          <div>
          	<div>
          		<div class="text-lead">
          			<div class="media-body text-rausch">에어비앤비는 게스트가 호스트와 협의하여 직접 계약을 체결할 수 있도록 해주는 플랫폼을 제공합니다. 숙박은 호스트가 게스트에게 제공하며, 에어비앤비는 호스트의 행위나 숙박을 감독하지 않습니다. 에어비앤비는 게스트와 호스트 사이에 체결되는 어떠한 계약의 당사자도 아니므로, 이에 관한 어떠한 책임도 지지 않습니다.</div>
          			<div class="terms media">
          			 <div class="media-body terms-media-body">
          			 	<label for="agrees-to-terms" class="va-container">
          			 	 <div class="va-top accordion-checkbox">
          			 	 	<input id="agrees-to-terms" name="" type="checkbox" value="1">
          			 	 </div>
          			 	 <div class="va-top" id="agrees-to-terms-text">
          			 	 	<div><a href="#" class="house-rules-link" id="house-rules-modal-trigger">숙소 이용규칙</a>, <a href="/home/cancellation_policies#strict" class="cancel-policy-link" target="_blank">환불정책</a>, <a href="/terms/guest_refund_policy" class="refund_policy_link" target="_blank">게스트 환불 정책</a>에 동의합니다. 서비스 수수료를 포함하여 표시된 총액을 지불하는 것에도 동의합니다.</div>
          			 	 </div>
          			 	</label>
          			 </div>
          			</div>
          		</div>
          		<div class="space-top-3">
          			<div id="payment-form-submit-wrapper">
          				<button class="btn btn-large btn-primary disabled"><span>요청 보내기</span></button>
          			</div>
          		</div>
          		<div class="hide">
          			<div class="space-1">
          				<div class="space-2 space-top-2 text-lead">
          					<div>
          						<div class="space-2 space-top-2"><h4><span>Chris님의 숙소를 예약하려면 신분증을 보여주세요.</span></h4><p class="text-muted"><span>호스트 Chris님은 예약 전에 에어비앤비에 정부 발행 신분증을 제출할 것을 요구합니다. 신분증 자체는 호스트에게 보이지 않으며, 본 인증은 신분증이 만료될 때까지 유효합니다.</span></p></div>
          							<button type="button" class="btn btn-primary btn-large"><span>신분증 사진 촬영</span></button>
         					</div>
         				</div>
         			</div>
         		</div>
         		<div id="house-rules-modal" class="modal" role="dialog" aria-hidden="true" data-trigger="#house-rules-modal-trigger">
         			<div class="modal-table">
         				<div class="modal-cell">
         					<div class="modal-content">
         						<div class="panel-header house-rules-modal-label"><span>Chris님의 숙소 이용규칙</span><a href="#" class="panel-close" data-behavior="modal-close">×</a></div>
         						<div class="panel-body house-rules-modal-body">
         							<div class="expandable_house_rules">
         								<div class="structured_house_rules">
         									<div class="row col-sm-12"><span>흡연 금지</span></div>
         									<div class="row col-sm-12 space-top-1"><span>반려동물 동반에 적합하지 않음</span></div>
         									<div class="row col-sm-12 space-top-1"><span>파티나 이벤트 금지</span></div>
         									<div class="row col-sm-12 space-top-1"><span>체크인은 22:00 이후입니다.</span></div>
         									<div class="row">
         										<div class="col-sm-2"><hr class="structured_house_rules__hr"></div>
         									</div>
         								</div>
         							</div>
         						</div>
         					</div>
         				</div>
         			</div>
         		</div>
         	</div>
        </div>
        <div class="show-sm space-top-2">
          <div class="accordion-style-checkout__section">
            <div>
            	<div>
            		<div class="sidebar-text-large">
            			<div><span>합계</span><span>&nbsp;</span><span>₩78126</span></div>
            		</div><a href="#"><span>요금 및 여행 요약 보기</span></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="modal" id="security-deposit-modal" role="dialog">
  <div class="modal-table">
    <div class="modal-cell">
      <div class="modal-content">
        <div class="panel-header">
          <a href="#" class="panel-close" data-behavior="modal-close">
            ×
            <span class="screen-reader-only">
              보증금
            </span>
          </a>
          보증금
        </div>
        <div class="panel-body">
          <p>
            보증금은 체크인 하루 전에 회원님의 신용카드로 청구됩니다. 호스트가 문제를 제기하지 않는 경우, 체크아웃 48시간 후 청구 금액 전액이 취소됩니다.
          </p>
          <p>
            호스트가 문제를 제기할 경우에는, 에어비앤비에서 보증금의 지급을 유보하고 호스트와 게스트 양 당사자들로부터 추가 정보를 수집할 것입니다. 만약 호스트와 게스트 간에 합의가 이루어 지는 경우, 에어비앤비에서 해당 금액을 돌려드립니다. 주로 호스트가 피해 정도를 결정하지만, 에어비앤비는 모든 청구건들을 추적하여, 호스트가 보증금을 차지하기 위해 과도하게 청구를 하는 경향이 있다고 판단되면 이 호스트를 퇴출시킵니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </main>