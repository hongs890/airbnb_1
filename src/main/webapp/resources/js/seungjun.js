/*var guide = (function() {
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

//////////////////////////////////// 승준 ////////////////////////////////////
$('#pub_article').on('click','#guidebook_go',function(){
$('#pub_article').html(hosting_manage_menu)
$('#host_manage_detail_right1').html(GUIDEBOOK)
$('#g_continue').on('click','#g_major_category')
         var map = new google.maps.Map(document.getElementById('map-canvas'),
                   {center :{ lat : 37.552623,lng : 126.937834}, scrollwheel: true, zoom : 12 });
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds({}));
              });
            var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.bindTo('bounds', map);
            var markers = [];
            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();
                if (places.length == 0) {
                  return;
                }
                markers.forEach(function(marker) {
                  marker.setMap(null);
                });
                markers = [];
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                  markers.push(new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location
                  }));
                  if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                  } else {
                    bounds.extend(place.geometry.location);
                  }
                });
                map.fitBounds(bounds);
            });
            //////////////////// 카테고리 /////////////////////
            var mi_category0 = new Array("-선택-","");
            var mi_category1 = new Array("수석","보석","향수","우표","골동품","음반","전화카드","화폐");
            var mi_category2 = new Array("헹글라이딩","패러글라이딩","스카이다이빙","스쿠버다이빙","수상스키","카누/카약","래프팅(급류타기)","하이킹","사냥","번지점프","캠핑","등산","승마","스키","스노우보드","연날리기","R/C","낚시","서바이벌게임","드라이브");
            var mi_category3 = new Array("독서","영화/연극","사진","미술","악기연주","음악감상");
            var mi_category4 = new Array("골프", "농구", "댄스", "무예", "배구", "수영", "스노우보드", "승마", "스쿼시", "스키", "야구", "에어로빅","조깅","족구","테니스","헬스","카누/카약","축구");
            var mi_category5 = new Array("공예","사진","그림","문예","모형/프라모델","인형만들기");
            var mi_category6 = new Array("바둑","장기","체스","오델로","오목","컴퓨터 게임","서바이벌게임","카드");
            var mi_category7 = new Array("서예","수예/자수","꽃꽂이","요리","인형만들기","다도(차)","수족관","모형/프라모델","댄스","인터넷서핑");
            var mi_category8 = new Array("애완동물","분재","유머","천체관측","댄스","마술","아마추어 무선","로켓","운세/심리","원예","R/C","쇼핑","단전호흡","요요","요가","헬스");

            function category_change(item){
                var temp, i=0, j=0;
                var ccount, cselect;
                temp = document.signform.mi_category;
                for (i=(temp.options.length-1) ; i>0 ; i--){ temp.options[i] = null; }
                eval('ccount = mi_category' + item + '.length');
                for (j=0 ; j<ccount ; j++) {
                    eval('cselect = mi_category' + item + '[' + j + '];');
                    temp.options[j]= new Option(cselect,cselect); 
                }
                temp.options[0].selected=true;
                return true;
            }
//////////////////////////////////////////////////////////////////////////////////////
       $.ajax({
            url : app.context()+'/guidebook/manage13',
            success : function(data){
               if (data.message === 'success') {
               }
            },
            error : function(x,s,m){
               alert('manage13시 error 발생 : ' + m);
               }
            });
            })
//////////////////////////////////////////////////////////////////////////////////////

var GUIDEBOOK =
	   '<div id="host_manage_detail_right2" style="overflow: scroll; height: 820px;">'
	   +'<div id="host_manage_detail_right2_2">'
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
	      + '<h3>가이드북 등록</h3>'
	      + '<hr>'
	      + '<div>'
	      + '추천장소를 입력하시고 카테고리와 코멘트를 입력해주세요'
	      + '<div>'
	      + '<input id="pac-input" type="text" class="controls" placeholder="수정중1111">'
	      + '</div>'
	      ///// 셀렉트 ///
	      + '<hr>'
	      +'<div class="col-md-6">'
	      + '   <select name=bighobby onChange=javascript:hobbychange(document.signform.bighobby.options.selectedIndex);>'
	      + '    <option selected value="">-선택-</option>'
	      + '    <option value=수집>수집</option>'
	      + '    <option value=야외/레져>야외/레져</option>'
	      + '    <option value=문화생활>문화생활</option>'
	      + '    <option value=스포츠>스포츠</option>'
	      + '    <option value=창작>창작</option>'
	      + '    <option value=게임>게임</option>'
	      + '    <option value=실내활동>실내활동</option>'
	      + '    <option value=기타>기타</option>'
	      + '   </select>'
	      + '</div>'
	      + '   </td>'
	      + '   <td>'
	      +'<div class="col-md-6">'
	      + '   <select name=hobby size=1>'
	      + '      <option selected value="">-선택-</option>'
	      + '      <option value=""></option>'
	      + '   </select>'
	      + '</div>'
	      + '</div>'
	      ///////////////
	      + '</div>'
	      + '</div>'
	      + '</div>'
	      + '</div>'
	   +'<div id="host_manage_detail_right_1">'
	      + '<div class="map-container>'
	      + '<div class="map-canvas-form" style="height: 100%; width: 100%;">'
	      + '<div class = "map-canvas" id = "map-canvas" style="height: 95%; width: 97%; margin-top: 8%; ">'
	      + '</div>'
	      + '</div>'
	      + '</div>'
	      + '</div>'
	      +'</div>';*/