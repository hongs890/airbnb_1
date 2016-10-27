<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js" />
<meta charset="utf-8">
<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css">
<link href="https://a1.muscache.com/airbnb/static/packages/manage_listing-5a21a78e524e212ada30b6a27fa6a498.css" media="screen" rel="stylesheet" type="text/css">
<div class="guidebook-form" style="margin-left: 12%;">
	<div class="map-container guidebook-form__map-container">
		<div class="map-canvas" style="height: 100%; width: 100%;">
			<div style="height: 100%; width: 100%; position: relative; overflow: hidden;">
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #map {
        height: 100%;
      }
      .controls {
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid transparent;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        height: 29px;
        margin-left: 17px;
        margin-top: 10px;
        outline: none;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 400px;
      }
      .controls:focus {
        border-color: #4d90fe;
      }
    </style>
    <input id="pac-input" class="controls" type="text"
        placeholder="추천 장소...">
    <div id="map"></div>
    

    
    <script>
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.551371, lng: 126.940742},
    zoom: 12
  });
  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setVisible(true);
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.formatted_address);
    infowindow.open(map, marker);
  });
}
    </script>
<!--     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ8YB6bT5otUnn6Q1w4XmRFS5DQuPqtp0&libraries=places&signed_in=true&callback=initMap"
        async defer></script> -->
  </body>
</html>
	</div>	
		</div>
	</div>
	<div class="guidebook-form__recommendations-container">
		<div class="guidebook-form__head">
			<div class="panel-body">
				<h2><span>회원님이#도시이름#에서 좋아하는 것들을 소개해 주세요.</span>
				</h2>
				<div class="guidebook-form__sub-head">
					<span>가장 좋아하는 음식점과 명소를 소개하는 가이드북을 만들어 보세요. 게스트가 이동 중에도 편리하게 볼 수 있게요!</span>
				</div>
				<div class="guidebook-form__sub-head-legal" >
					<span><span>어디에 표시되나요?</span></span>
				</div>
				<div class="guidebook-form__sub-head-legal">
					<a href="#" target="_blank"><span><span>가이드북 인쇄하기 </span><span>»</span></span></a>
				</div>
			</div>
		</div>
		<div class="guidebook-form__main-categories">
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-food-scene"></div>
							</div>
							<div class="col-md-8">
								<h3>음식</h3>
								<hr class="recommendation-form__mini-hr">
								<div>제일 좋아하는 레스토랑, 베이커리, 커피숍이 어디인가요?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input id = "search" type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div>
										<div class="recommendation-form__section">
											<div class="row row-condensed">
												<div class="col-md-12">
													<div class="select">
														<select class=""><option selected="" value="-1">카테고리 선택</option>
															<option >레스토랑</option>
															<option>카페 또는 커피숍</option>
															<option>베이커리</option>
															<option>디저트 가게</option>
															<option>길거리 시장</option>
															<option>기타</option></select>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div
									class="recommendation-form__icon text-white icon h4 text-center gb-icon-nightlife"></div>
							</div>
							<div class="col-md-8">
								<h3>바와 클럽</h3>
								<hr class="recommendation-form__mini-hr">
								<div>밤 시간에 여가를 즐길 때는 주로 어디로 가시나요?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
					<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-sightseeing"></div>
							</div>
							<div class="col-md-8">
								<h3>관광</h3>
								<hr class="recommendation-form__mini-hr">
								<div>놓쳐서는 안 될 상징적인 장소가 있나요?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-parks-nature"></div>
							</div>
							<div class="col-md-8">
								<h3>공원 및 자연</h3>
								<hr class="recommendation-form__mini-hr">
								<div>자연을 느끼고 싶을 때 어디로 가세요?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input id="search_nature" type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-arts-culture"></div>
							</div>
							<div class="col-md-8">
								<h3>예술과 문화</h3>
								<hr class="recommendation-form__mini-hr">
								<div>고유의 역사와 문화를 느낄 수 있는 장소를 추천한다면?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..."autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-shopping"></div>
							</div>
							<div class="col-md-8">
								<h3>쇼핑</h3>
								<hr class="recommendation-form__mini-hr">
								<div>주변에 독특한 현지 가게들이 있나요?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-essentials"></div>
							</div>
							<div class="col-md-8">
								<h3>생활 필수 서비스</h3>
								<hr class="recommendation-form__mini-hr">
								<div>식료품을 사거나 세탁물을 맡길 때, 어디로 가세요?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-entertainment"></div>
							</div>
							<div class="col-md-8">
								<h3>엔터테인먼트와 액티비티</h3>
								<hr class="recommendation-form__mini-hr">
								<div>놀거리를 즐길 수 있는 곳을 추천한다면?</div>
							</div>
						</div>
						<div><div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-getting-around"></div>
							</div>
							<div class="col-md-8">
								<h3>교통편</h3>
								<hr class="recommendation-form__mini-hr">
								<div>주요 대중교통 수단은 무엇인가요? 주변에 자동차를 렌트할 수 있는 곳이 있나요?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div>
									</div>
									<div></div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="guidebook-form__main-category">
				<div class="recommendation-form__add-section">
					<div class="panel-body">
						<div class="row row-condensed">
							<div class="col-md-1">
								<div class="recommendation-form__icon text-white icon h4 text-center gb-icon-everything-else"></div>
							</div>
							<div class="col-md-8">
								<h3>기타</h3>
								<hr class="recommendation-form__mini-hr">
								<div>그 외 추천하고 싶은 장소가 있다면?</div>
							</div>
						</div>
						<div>
							<div class="row row-condensed">
								<div class="col-md-1"></div>
								<div class="col-md-8">
									<div class="recommendation-form__section">
										<div class="location-autocomplete">
											<i class="icon icon-search h3 location-autocomplete__eyeglass"></i>
											<input type="text" value="" placeholder="추천 장소..." autocomplete="off">
										</div></div><div></div></div></div><div></div></div></div></div></div></div></div></div>