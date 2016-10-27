var guide = (function() {
	var init = function(context) {
		onCreate();
	};
	var context = function() {
		return session.getContextPath();
	};
	var setContentView = function() {
	};
	var onCreate = function() {
		setContentView();

	};
	return {
		init : init,
		context : context,
		onCreate : onCreate,
		setContentView : setContentView
	}
})();

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.551371, lng: 126.940742},
        zoom: 12
      });
      var input = document.getElementById('pac-input');
      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);
      map.controls[google.maps.ControlPosition].push(input);
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

var GUIDEBOOK =
    '<div id="host_manage_detail_right1">'
   +'<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">'
   + '<link rel="stylesheet" href="${css}/hosting.css" />'
   + '<style>'
   + '#map {'
   + 'height: 97%;'
   + '}'
   + '</style>'
   + '<div id="host_manage_detail_right2"'
   + 'style="overflow: scroll; height: 820px;">'
   + '<div id="host_manage_detail_right2_2">'
   + '<h2>회원님이#도시이름#에서 좋아하는 것들을 소개해 주세요.</h2>'
   + '<hr>'
   + '<br>'
   + '<div>'
   + '<span>가장 좋아하는 음식점과 명소를 소개하는 가이드북을 만들어 보세요. 게스트가 이동 중에도 편리하게'
   + '볼 수 있게요!</span>'
   + '</div>'
   + '<br>'
   + '<div class="guidebook-form__sub-head-legal">'
   + '<span>어디에 표시되나요?</span>'
   + '<div class="guidebook-form__sub-head-legal">'
   + '<a href="#" target="_blank"><span><span>가이드북'
   + '인쇄하기 </span>»</span></a>'
   + '</div>'
   + '</div>'
   + '<hr>'
   + '<div>'
   + '<h3>음식</h3>'
   + '<hr>'
   + '<div>'
   + '제일 좋아하는 레스토랑, 베이커리, 커피숍이 어디인가요?'
   + '<div>'
   + '<input id="input" type="text"'
   + 'placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<hr>'
   + '<div>'
   + '<h3>바와 클럽</h3>'
   + '<hr>'
   + '<div>'
   + '밤 시간에 여가를 즐길 때는 주로 어디로 가시나요?'
   + '<div>'
   + '<input id="input" type="text"'
   + 'placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<hr>'
   + '<div>'
   + '<h3>관광</h3>'
   + '<hr>'
   + '<div>'
   + '놓쳐서는 안 될 상징적인 장소가 있나요?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<hr>'
   + '<div>'
   + '<h3>공원 및 자연</h3>'
   + '<hr>'
   + '<div>'
   + '자연을 느끼고 싶을 때 어디로 가세요?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<hr>'
   + '<div>'
   + '<h3>예술과 문화</h3>'
   + '<hr>'
   + '<div>'
   + '고유의 역사와 문화를 느낄 수 있는 장소를 추천한다면?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<div>'
   + '<hr>'
   + '<h3>쇼핑</h3>'
   + '<hr>'
   + '<div>'
   + '주변에 독특한 현지 가게들이 있나요?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<div>'
   + '<hr>'
   + '<h3>생활 필수 서비스</h3>'
   + '<hr>'
   + '<div>'
   + '식료품을 사거나 세탁물을 맡길 때, 어디로 가세요?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<div>'
   + '<hr>'
   + '<h3>엔터테인먼트와 액티비티</h3>'
   + '<hr>'
   + '<div>'
   + '놀거리를 즐길 수 있는 곳을 추천한다면?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<div>'
   + '<hr>'
   + '<h3>교통편</h3>'
   + '<hr>'
   + '<div>'
   + '주요 대중교통 수단은 무엇인가요? 주변에 자동차를 렌트할 수 있는 곳이 있나요?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<div>'
   + '<hr>'
   + '<h3>기타</h3>'
   + '<hr>'
   + '<div>'
   + '그 외 추천하고 싶은 장소가 있다면?'
   + '<div>'
   + '<input id="input" type="text" placeholder="추천 장소...">'
   + '</div>'
   + '</div>'
   + '</div>'
   + '</div>'
   + '</div>'
   + '<div id="host_manage_detail_right3">'
   + '&nbsp;'
   + '<div class="map-canvas" style="height: 100%; width: 100%;">'
   + '<div'
   + 'style="height: 95%; width: 100%; position: relative; margin-top: 5%;">'
   + '<div id="map"></div>'
   + '</div>'
   + '</div>'
   + '</div>'
   + '</div>'
   + '</div>';

