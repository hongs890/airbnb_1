<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link href="https://a0.muscache.com/airbnb/static/packages/common_o2.1-5f4458b9277fa888ec1185f49efbc3ff.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://a0.muscache.com/airbnb/static/packages/common-3381aec1bbb102e1ef06dc155c50a419.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://a1.muscache.com/airbnb/static/packages/p3-41be3666a9738fbe8bd7ee1a58de70cc.css" media="screen" rel="stylesheet" type="text/css" />

<div id="room">  
	<div id="photos" class="with-photos with-modal"><img src="${context}/resources/img/default.jpg" width="100%" height="100%"/>
	</div>
	<div id="summary" class="panel room-section">
    	<div class="page-container-responsive">
	        	<div class="row">
	        		<div class="col-lg-8">
	          			<div>
	          				<div class="summary-component">
	          					<div class="space-4 space-top-4">
	          						<div class="row">
	          							<div class="col-md-3 space-sm-4 text-center space-sm-2">
	          								<div class="media-photo-badge"><a class="media-photo media-round"><img alt="사용자 프로필 이미지" class="host-profile-image" height="115" width="115" data-pin-nopin="true" src="${context }/resources/img/default.jpg" title="Donald"></a>
	          								</div>
	          							</div>
	          							<div class="col-md-9">
		          							<h1 class="overflow h3 space-1 text-center-sm" id="listing_name">Ocean Front Condo by Owner</h1>
		          							<div id="display-address" class="space-2 text-muted text-center-sm"><a href="#neighborhood" class="link-reset">노스 머틀 비치, 사우스캐롤라이나, 미국</a>
		          								<span> &nbsp; </span>
		          							</div>
		          							<div class="row row-condensed text-muted text-center">
		          								<div class="col-sm-3">
		          									<i class="icon icon-entire-place icon-size-2" aria-hidden="true"></i>
		          								</div>
		          								<div class="col-sm-3">
		          									<i class="icon icon-group icon-size-2" aria-hidden="true"></i>
		          								</div>
		          								<div class="col-sm-3">
		          									<i class="icon icon-rooms icon-size-2" aria-hidden="true"></i>
		          								</div>
		          								<div class="col-sm-3">
		          									<i class="icon icon-double-bed icon-size-2" aria-hidden="true"></i>
		          								</div>
		          							</div>
	          							</div>
	          						</div>
	          						<div class="row">
	          							<div class="col-md-3 text-muted text-center hide-sm">
	          								<a href="#host-profile" class="link-reset text-wrap">Donald</a>
	          							</div>
	          							<div class="col-md-9">
	          								<div class="row row-condensed text-muted text-center">
	          									<div class="col-sm-3">집 전체</div>
	          									<div class="col-sm-3">숙박 인원 3명</div>
	          									<div class="col-sm-3">침실 1개</div>
	          									<div class="col-sm-3">침대 1개</div>
	          								</div>
	          							</div>
	          						</div>
	          					</div>
	          				</div>
	          			</div>
	        	</div>
	     	    <div class="col-lg-4">
	  		   		<div class="mobile-bookit-btn-container js-bookit-btn-container panel-btn-sm panel-btn-fixed-sm hide hide-md hide-lg">
	   			 		<button class="btn btn-primary btn-block btn-large js-book-it-sm-trigger">
	      				<span class="book-it__btn-text">예약 요청</span>
	     				<span class="book-it__btn-text--contact-host">호스트에게 연락하기</span>
	      				<span class="book-it__btn-text--instant"><i class="icon icon-bolt icon-beach h4"></i>즉시 예약 </span>
	   					</button>
	  				</div>
	
					<div id="tax-descriptions-tip" class="tooltip tooltip-top-middle" role="tooltip" data-sticky="true" data-trigger="#tax-descriptions-tooltip">
					</div>
	
	
	       			<div>
	  					<div class="book-it__container js-book-it-container fixed" style="top: 40px;">
					    	<div>
					    		<div>
					    			<div class="">
					    				<div class="book-it__price fixed" style="height: 40px;">
					    					<div class="row">
					    						<div class="col-sm-8">
					    							<div class="book-it__price-amount text-special">
					    								<span class="h3"><span>₩74315</span></span>
					    							</div>
					    						</div>
					    						<div class="col-sm-4">
					    							<div class="book-it__payment-period-container pull-right">
					    								<div class="book-it__payment-period"><span>1박</span>
					    								</div>
					    							</div>
					    						</div>
					    					</div>
					    				</div>
					    				<form method="post">
					    					<div class="panel book-it-panel">
					    						<div class="panel-body panel-light">
					    							<div class="row row-condensed space-3">
					    								<div class="col-md-9">
					    									<div class="row row-condensed">
					    										<div class="col-sm-6">
					    											<label class="book-it__label" for="datespan-checkin">체크인</label>
					    											<input id="datespan-checkin" type="text" name="checkin" class="checkin ui-datepicker-target" placeholder="년/월/일">
					    										</div>
					    										<div class="col-sm-6">
					    											<label class="book-it__label" for="datespan-checkout">체크아웃</label>
					    											<input id="datespan-checkout" type="text" name="checkout" class="checkout ui-datepicker-target" placeholder="년/월/일">
					    										</div>
					    									</div>
					    								</div>
					    								<div class="col-md-3">
					    									<div>
					    										<label for="number_of_guests_21674" class="book-it__label"><span>숙박 인원</span></label>
					    										<div class="select select-block">
					    											<select id="number_of_guests_21674" name="number_of_guests">
					    												<option selected="selected" value="1">1</option>
					    												<option value="2">2</option>
					    												<option value="3">3</option>
					    											</select>
					    										</div>
					    									</div>
					    								</div>
					    							</div>
					    							<div>
					    								<span class="btn btn-primary btn-large btn-block">
					    									<span>예약 요청</span>
					    								</span>
					    								<div class="bookit-message__container text-center text-muted">
					    									<small><span>'예약' 버튼을 클릭해도 대금이 바로 청구되지 않습니다.</span></small>
					    								</div>
					    							</div>
					    						<div class="hide">
						    						<button type="button" class="btn btn-primary btn-large btn-small btn-block">
						    							<span>호스트에게 연락하기</span>
						    						</button>
						    					</div>
						    				</div>
						    			</div>
						    		</form>
						    	</div>
						    </div>
						 </div>
	  				  </div>
				</div>
			</div>
	    </div>  
	  </div>
	</div>

		<div>
			<div>
				<div id="details" class="details-section webkit-render-fix">
					<div class="page-container-responsive">
						<div class="row">
							<div class="col-lg-8 js-details-column">
								<div class="space-8 space-top-8"><h4 class="space-4 text-center-sm"></h4>
									<div class="row row-condensed">
										<div class="contact-host-div col-12">
											<div>
												<button class="btn-link btn-link--bold" type="button">
													<span>호스트에게 연락하기</span>
												</button>
											</div>
										</div>
									</div>
									<hr>
									<div class="row">
										<div class="col-md-3 text-muted">
											<div><span>숙소</span></div>
										</div>
										<div class="col-md-9">
											<div class="row">
												<div class="col-md-6">
													<div>
														<span>숙박 가능 인원:</span>
														<span></span><strong>3</strong>
													</div>
													<div>
														<span>욕실:</span>
														<span> </span><strong>1</strong>
													</div>
													<div>
														<span>침실:</span>
														<span> </span><strong>1</strong>
													</div>
													<div>
														<span>침대:</span>
														<span> </span><strong>1</strong>
													</div>
												</div>
												<div class="col-md-6">
													<div><span>체크인:</span>
													<span> </span><strong>15:00 이후</strong>
												</div>
												<div>
													<span>체크아웃:</span>
													<span> </span><strong>10:00</strong>
												</div>
												<div>
													<span>집 유형:</span>
													<span> </span><strong>아파트</strong>
												</div>
												<div>
													<span>숙소 유형 :</span>
													<span> </span><strong>집 전체</strong>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<strong><a href="#house-rules" class="react-house-rules-trigger" data-prevent-default="true"><span>숙소 이용규칙</span></a></strong>
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="row amenities">
									<div class="col-md-3 text-muted">
										<div>
											<span>시설</span>
										</div>
									</div>
									<div class="col-md-9 expandable expanded">
										
									<div class="expandable-content expandable-content-full">
										<div class="row">
											<div class="col-sm-6">
												<div>
													<div class="space-1">
														<span><i class="icon h3 icon-meal"></i><span>&nbsp;&nbsp;&nbsp;</span></span>
														<span id="amenity-long-tooltip-trigger-8"><strong>부엌</strong></span>
													</div>
												</div>
												<div>
													<div class="space-1 text-muted">
														<span id="amenity-long-tooltip-trigger-40"><del>필수품목</del></span>
													</div>
												</div>
											</div>
											<div class="col-sm-6">
												<div>
													<div class="space-1">
														<span><i class="icon h3 icon-tv"></i><span>&nbsp;&nbsp;&nbsp;</span></span>
														<span id="amenity-long-tooltip-trigger-1"><strong>TV</strong></span>
													</div>
												</div>
												<div>
													<div class="space-1 text-muted">
														<span id="amenity-long-tooltip-trigger-40"><del>필수품목</del></span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr>
							<div class="row">
								<div class="col-md-3 text-muted">
									<div>
										<span>가격</span>
									</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-6">
											<div>
												<span>추가 인원 요금 :</span>
												<span> </span><strong>추가요금 없음</strong>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr>
							<div class="row description" id="description">
								<div class="col-md-3 text-muted">
									<div>
										<span>설명</span>
									</div>
								</div>
								<div class="col-md-9">
									<div>
										<div class="react-expandable expanded">
											<div class="expandable-content expandable-content-long">
												<div>
													<p><span>Small 14 Unit condo on the Beach in N. Myrtle Beach.</span></p>
													<p><span>설명</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr>
								<div class="row react-house-rules" id="house-rules">
									<div class="col-md-3">
										<div class="text-muted">
											<span>숙소 이용규칙</span>
										</div>
									</div>
									<div class="col-md-9">
										<div class="structured_house_rules">
											<div class="row col-sm-12">
												<span>체크인은 15:00 이후입니다.</span>
											</div>
											<div class="row">
												<div class="col-sm-2">
												<hr class="structured_house_rules__hr">
											</div>
										</div>
									</div>
									<div>
										<div class="react-expandable expanded">
											<div class="expandable-content">
												<div>
													<p><span>Winter rates: $70.00 per night</span></p>
												</div>
												<div class="expandable-indicator"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr>
							<div class="row">
								<div class="col-md-3 text-muted">
									<div>
										<span>안전 기능</span>
									</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-sm-6">
											<div>
												<div class="space-1">
													<span id="amenity-short-tooltip-trigger-35"><span>화재 감지기</span></span>
												</div>
											</div>
										</div>
										<div class="col-sm-6">
											<div>
												<div class="space-1">
													<span id="amenity-short-tooltip-trigger-39"><span>소화기</span></span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr>
							<div class="row">
								<div class="col-md-3 text-muted">
									<div>
										<span>예약 가능 여부</span>
									</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-6">최소 숙박일 <strong>3일</strong>.</div>
										<div class="col-md-6">
											<a id="view-calendar" href="#"><strong><span>달력 보기</span></strong></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div></div>
		<div id="host-profile" class="room-section webkit-render-fix">
			<div class="page-container-responsive space-top-8 space-8">
				<div class="row">
					<div class="col-lg-8">
						<h4 class="space-2 text-center-sm"><span>호스트</span></h4>
						<hr class="space-4 space-top-2">
						<div class="row">
							<div class="col-md-3 text-center">
								<div class="media-photo-badge">
									<a href="#" class="media-photo media-round">
									<img alt="Donald" class="media-photo media-round" height="90" width="90" data-pin-nopin="true" src="${context }/resources/img/default.jpg" title="Donald"></a>
								</div>
							</div>
							<div class="col-md-9">
								<h3 class="space-1">Donald</h3>
								<div class="row row-condensed space-2">
									<div class="col-md-12 text-muted">
										<span>Freeport, 뉴욕, 미국</span>
										<span> · </span>
										<span>회원가입 : 2009년 11월</span>
									</div>
								</div>
								<div class="react-expandable expanded">
									<div class="expandable-content expandable-content-long">
										<div><p><span>자기소개</span></p></div>
										<div class="expandable-indicator"></div>
									</div>
								</div>
								<div>
									<span class="btn btn-primary btn-small"><span>호스트에게 연락하기</span></span>
									<div><noscript data-reactid=".1exo7crry0w.2.0.0.0.2.1.5.1.0"></noscript></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
	<div id="neighborhood" class="room-section">
		<div style="position:relative;" class="page-container-responsive">
			<div class="p3-location--map">
				<div class="panel location-panel"></div>
				<ul id="guidebook-recommendations" class="hide">
					<li class="user-image"><img alt="Donald" data-pin-nopin="true" height="90" src="${context }/resources/img/default.jpg" title="Donald" width="90"></li>
				</ul>
				<div id="hover-card" class="panel">
				<div class="panel-body">
				<div class="text-center">숙소 위치</div>
				<div class="text-center">
					<span class="listing-location"><span>노스 머틀 비치,</span><span>사우스 캐롤라이나,</span><span>미국</span></span>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>