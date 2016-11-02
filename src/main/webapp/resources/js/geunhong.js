var hosting = (function(){
	var _bed_count = 0, _bathroom_count = 0, _max_nights_count = 1, _min_nights_count = 0;
	var init = function(){onCreate();};
	var setContentView = function(){};
	var onCreate = function (){
		setContentView();
	var hosting_main_met = function(){
			$('#pub_article').html(hosting_main);		
		};
	var hosting_regist_1_met = function(){
		$.ajax({
			url : app.context()+'/hosting/regist_building',
			type : 'POST',
			dataType : 'json',
			async : false,
			success : function(data){
				var frame = '';
				frame += hosting_regist_1;
				for (var int = 0; int < data.length; int++) {
					frame += '<option selected="selected" value="'+(int+1)+'">'+data[int]+'</option>';
				}
				frame += hosting_regist_1_1;
				$('#pub_article').html(frame);
					$.ajax({
						url : app.context() + '/hosting/regist_login',
						type : 'POST',
						dataType : 'json',
						async : false,
						success : function(member){
							if (member.message === 'fail_login') {
								alert('로그인이 필요한 서비스입니다.');
								$('#pub_article').html(SIGNIN);
						/*		$('#user-login-btn').click(function(e){
								e.preventDefault();
								$.ajax({
									url : app.context()+'/member/signin',
									type : 'get',
									data : {'email' : $('#signin_email').val(),
											'pw' : $('#signin_password').val()},
									dataType : 'json',
									success : function(data){
										if (data.email==='admin') {
											location.href = memApp.context()+'/admin/main';
										} else {
											$('#pub_header').empty().load(app.context()+ '/member/logined/header');
											$('#pub_article').empty().load(app.context()+'member/logined/main');
										}
									},
									error : function(x,s,m){alert('error '+m+'==가입되지 않은 아이디입니다.');}
								});
								});*/
							}
						},
						error : function(x,s,m){
							alert('regist_login시 error 발생 : ' + m)
						}
					});
					

			},
			error : function(x,s,m){
				alert('regist_building시 error 발생 : ' + m);
			}
		});	
	}
		$('#pub_header').on('click','#hosting_go',function(){
			hosting_main_met();
		});
		$('#pub_article').on('click','#hosting_go',function(){
			hosting_main_met();
		});
		$('#pub_article').on('click','#hosting_regist_1',function(){
			hosting_regist_1_met();
		})
		$('#pub_header').on('click','#hosting_regist_1',function(){
			hosting_regist_1_met();
		})
		$('#pub_article').on('click','#hosting_regist_2',function(){
			$('#hosting_room_type_foot').prop('value', $('#host_room_type option:selected').val());
			$('#hosting_guest_cnt_foot').prop('value', $('#host_guest_cnt option:selected').val());
			$('#hosting_building_seq_foot').prop('value', $('#host_building_type option:selected').val());
			$('#pub_article').html(hosting_regist_2);
		})
		$('#pub_article').on('click','#host_bed_cnt_plus',function(){
			_bed_count += 1;
			$('#div_host_bed_cnt').html('<input type="text" value="'+_bed_count+'" class="host_regist_count" id="host_bed_cnt" readonly>');
		})
		$('#pub_article').on('click','#host_bed_cnt_minus',function(){
			if (_bed_count <= 0) {
				alert('침대의 갯수는 - 가 될 수 없습니다.');
			}else{
				_bed_count -= 1;
				$('#div_host_bed_cnt').html('<input type="text" value="'+_bed_count+'" class="host_regist_count" id="host_bed_cnt" readonly>');
			}
		})
		$('#pub_article').on('click','#host_bathroom_cnt_plus',function(){
			_bathroom_count += 1;
			$('#div_host_bathroom_cnt').html('<input type="text" value="'+_bathroom_count+'" class="host_regist_count" id="host_bathroom_cnt" readonly>');
		})
		$('#pub_article').on('click','#host_bathroom_cnt_minus',function(){
			if (_bathroom_count <= 0) {
				alert('욕실의 갯수는 - 가 될 수 없습니다.');
			}else{
				_bathroom_count -= 1;
				$('#div_host_bathroom_cnt').html('<input type="text" value="'+_bathroom_count+'" class="host_regist_count" id="host_bathroom_cnt" readonly>');
			}
		})
		$('#pub_article').on('click','#hosting_regist_3',function(){
			$('#hosting_bed_cnt_foot').prop('value',$('#host_bed_cnt').val());
			$('#hosting_bathroom_cnt_foot').prop('value',$('#host_bathroom_cnt').val());
			$('#pub_article').html(hosting_regist_3);
		
			initAutocomplete();
			$('#postal_code').keyup(function(){
				if (hosting.pwChecker2($('#postal_code').val()) === 'yes') {
				}else{
					alert('우편번호는 숫자만 입력 가능합니다.');
					$('#postal_code').val('').focuson();
				}
			});
		})
		$('#pub_article').on('click', '#autocomplete_submit', function(){
			$('#country').prop('value','');
			$('#host_state').prop('value','');
			$('#locality').prop('value','');
			$('#street_number').prop('value','');
			$('#host_optional').prop('value','');
			$('#country').prop('value',$('#autocomplete').val().split(' ')[0]);
			$('#host_state').prop('value',$('#autocomplete').val().split(' ')[1]);
			$('#locality').prop('value',$('#autocomplete').val().split(' ')[2]);
			$('#street_number').prop('value',$('#autocomplete').val().split(' ')[3]);
			$('#host_optional').prop('value',$('#autocomplete').val().split(' ')[4]);
			$('#hosting_autocomplete_foot').prop('value', $('#autocomplete').val()) 
		});
		$('#pub_article').on('click','#hosting_regist_4',function(){
			if ($('#host_state').val() === '' || $('#locality').val() === '' || $('#street_number').val() === ''
				|| $('#host_optional').val() === '' || $('#postal_code').val() === '' || $('#country').val() === '') {
				alert('값을 빠짐없이 입력해주시기 바랍니다.');
			}else{
				$('#hosting_country_foot').prop('value', $('#country').val());
				$('#hosting_state_foot').prop('value', $('#host_state').val());
				$('#hosting_city_foot').prop('value', $('#locality').val());
				$('#hosting_street_foot').prop('value', $('#street_number').val());
				$('#hosting_optional_foot').prop('value', $('#host_optional').val());
				$('#hosting_zip_code_foot').prop('value', $('#postal_code').val());
				$('#pub_article').html(hosting_regist_4);
				$('#pac-input').prop('value',$('#hosting_autocomplete_foot').val());
				 var map = new google.maps.Map(document.getElementById('googleMap'), {
					    center: {lat: -33.8688, lng: 151.2195},
					    zoom: 13,
					    mapTypeId: google.maps.MapTypeId.ROADMAP
					  });
				 var map2 = new google.maps.Map(document.getElementById("googleMap"),map);
					google.maps.event.addListener(map2, 'click', function(event){
						placeMarker(event.latLng);
					});
					
					var input = document.getElementById('pac-input');
					var searchBox = new google.maps.places.SearchBox(input);
					map2.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
					map2.addListener('bounds_changed', function() {
					    searchBox.setBounds(map2.getBounds());
					  });
					
					var markers = [];
					  // Listen for the event fired when the user selects a prediction and retrieve
					  // more details for that place.
					  searchBox.addListener('places_changed', function() {
					    var places = searchBox.getPlaces();

					    if (places.length == 0) {
					      return;
					    }

					    // Clear out the old markers.
					    markers.forEach(function(marker) {
					      marker.setMap(null);
					    });
					    markers = [];

					    // For each place, get the icon, name and location.
					    var bounds = new google.maps.LatLngBounds();
					    places.forEach(function(place) {
					      var icon = {
					        url: place.icon,
					        size: new google.maps.Size(71, 71),
					        origin: new google.maps.Point(0, 0),
					        anchor: new google.maps.Point(17, 34),
					        scaledSize: new google.maps.Size(25, 25)
					      };

					      // Create a marker for each place.
					      markers.push(new google.maps.Marker({
					        map: map,
					        icon: icon,
					        title: place.name,
					        position: place.geometry.location
					      }));

					      if (place.geometry.viewport) {
					        // Only geocodes have viewport.
					        bounds.union(place.geometry.viewport);
					      } else {
					        bounds.extend(place.geometry.location);
					      }
					    });
					    map2.fitBounds(bounds);
					  });
					  
					  
					
				function placeMarker(location){
					var marker = new google.maps.Marker({
						position : location,
						map : map,
					});
					var infowindow = new google.maps.InfoWindow({
						content : 'Latitude: ' + location.lat() + '<br>Longitude : ' + location.lng()
					});
					infowindow.open(map2,marker);
					$('#hosting_map_lat').prop('value', location.lat());
					$('#hosting_map_long').prop('value', location.lng());
					google.maps.event.addListener(map2, 'click', function(event){
						marker.setMap(null);
					});
				}
			}
		})
		$('#pub_article').on('click','#hosting_regist_5',function(){
			if ($('#hosting_map_lat').val() === '' || $('#hosting_map_long').val() === '') {
				alert('지도상에서 위치를 선택해주시기 바랍니다');
			}else{
				$('#hosting_latitude_foot').prop('value', $('#hosting_map_lat').val());
				$('#hosting_longitude_foot').prop('value', $('#hosting_map_long').val());
				
				$('#pub_article').html(hosting_regist_5);
			}	
		})
		$('#pub_article').on('click','#hosting_regist_6',function(){
			var convenience =
			(($('#host_convenience_1').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_2').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_3').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_4').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_5').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_6').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_7').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_8').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_9').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_10').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_11').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_12').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_13').prop('checked') == true)?'T':'F'); 
			var safety_fac = 
			(($('#host_safety_fac_1').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_2').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_3').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_4').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_5').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_6').prop('checked') == true)?'T':'F');	
			$('#hosting_convenience_foot').prop('value', convenience);
			$('#hosting_safety_fac_foot').prop('value', safety_fac);
			$('#pub_article').html(hosting_regist_6);
		})
		$('#pub_article').on('click','#hosting_regist_7',function(){
			var space = 
			(($('#host_space_1').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_2').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_3').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_4').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_5').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_6').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_7').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_8').prop('checked') == true)?'T':'F');
			$('#hosting_space_foot').prop('value', space);
			 $('#pub_article').html(hosting_regist_7);
			 $('#fine-uploader-gallery').fineUploader({
		            template: 'qq-template-gallery',
		            request: {
		                endpoint: '/server/uploads'
		            },
		            thumbnails: {
		                placeholders: {
		                    waitingPath: '/source/placeholders/waiting-generic.png',
		                    notAvailablePath: '/source/placeholders/not_available-generic.png'
		                }
		            },
		            validation: {
		                allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
		            }
		        });
		})
		$('#pub_article').on('click','#hosting_regist_8',function(){
			if ($('#host_upload_img').text() === '') {
				alert('사진을 1장 이상 등록해주시기 바랍니다.');
			}else{
				$('#hosting_picture_foot').prop('value', $('#host_upload_img').text());
				$('#pub_article').html(hosting_regist_8);
			}
		})
		$('#pub_article').on('click','#hosting_regist_9',function(){
			if ($('#host_explaination').val() === '') {
				alert('숙소 설명을 작성해주시기 바랍니다.');
			} else {
				$('#hosting_explaination_foot').prop('value', $('#host_explaination').val());
				$('#pub_article').html(hosting_regist_9);
			}
		})
		$('#pub_article').on('click','#hosting_regist_10',function(){
			if ($('#host_title').val() === '') {
				alert('숙소 제목을 입력해주시기 바랍니다.');
			} else {
				$('#hosting_title_foot').prop('value', $('#host_title').val());
				$('#pub_article').html(hosting_regist_10);
			}
		})
		$('#pub_article').on('click','#hosting_regist_11',function(){
	
			if ($('#host_other_rule').val() === '') {
				alert('규칙을 작성해주시기 바랍니다. (없을 경우 없음으로 작성)');
			}else{
				var rules = 
					(($('#host_rules_1').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_rules_2').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_rules_3').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_rules_4').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_rules_5').prop('checked') == true)?'T':'F');
					$('#hosting_rules_foot').prop('value', rules);
					$('#hosting_other_rule_foot').prop('value', $('#host_other_rule').val());
					$('#pub_article').html(hosting_regist_11);
					$('#host_checkin_term').keyup(function(){
						if (hosting.pwChecker3($('#host_checkin_term').val()) === 'yes') {
						}else{
							alert('날짜는 최대 99일, 숫자만 입력 가능합니다.');
							$('#host_checkin_term').val('').focuson();
						}
					});
			}
		})
		$('#pub_article').on('click','#hosting_regist_12',function(){
			if ($('#host_checkin_term').val() === '') {
				alert('예약 가능 일자를 입력해주세요');
			}else{
				$('#hosting_checkin_term_foot').prop('value', $('#host_checkin_term').val());
				$('#hosting_checkin_time_foot').prop('value', $('#host_checkin_time option:selected').val());
				$('#pub_article').html(hosting_regist_12);
			}
		})
		$('#pub_article').on('click','#host_min_nights_plus',function(){
			_min_nights_count += 1;
			$('#div_host_min_nights').html('<input type="text" value="'+_min_nights_count+'" class="host_regist_count" id="host_min_nights" readonly>');
			if (_min_nights_count > _max_nights_count) {
				alert('최소 숙박일수는 최대 숙박일수보다 클 수 없습니다.');
				_min_nights_count -= 1;
				$('#div_host_min_nights').html('<input type="text" value="'+_min_nights_count+'" class="host_regist_count" id="host_min_nights" readonly>');
			}
		})
		$('#pub_article').on('click','#host_min_nights_minus',function(){
			if (_min_nights_count <= 0) {
				alert('최소 숙박일수는 - 가 될 수 없습니다.');
			}else{
				_min_nights_count -= 1;
				$('#div_host_min_nights').html('<input type="text" value="'+_min_nights_count+'" class="host_regist_count" id="host_min_nights" readonly>');
			}
		})
		$('#pub_article').on('click','#host_max_nights_plus',function(){
			_max_nights_count += 1;
			$('#div_host_max_nights').html('<input type="text" value="'+_max_nights_count+'" class="host_regist_count" id="host_max_nights" readonly>');
		})
		$('#pub_article').on('click','#host_max_nights_minus',function(){
				if (_max_nights_count <= 0) {
					alert('최대 숙박일수는 - 가 될 수 없습니다.');
				}else{
					if (_max_nights_count <= _min_nights_count) {
						alert('최대 숙박일수는 최소 숙박일수보다 작을 수 없습니다.');
						$('#div_host_max_nights').html('<input type="text" value="'+_max_nights_count+'" class="host_regist_count" id="host_max_nights" readonly>');
					}else{
						_max_nights_count -= 1;
						$('#div_host_max_nights').html('<input type="text" value="'+_max_nights_count+'" class="host_regist_count" id="host_max_nights" readonly>');
					}
				}
		})
		$('#pub_article').on('click','#hosting_regist_13',function(){		
			$('#hosting_min_nights_foot').prop('value', $('#host_min_nights').val());
			$('#hosting_max_nights_foot').prop('value', $('#host_max_nights').val());
			$('#pub_article').html(hosting_regist_13);
			$('#host_price').keyup(function(){
				if (hosting.pwChecker($('#host_price').val()) === 'yes') {
				}else{
					alert('가격은 숫자만 입력 가능합니다.');
					$('#host_price').val('').focuson();
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_14',function(){
			if ($('#host_price').val() === '') {
				alert('숙박요금을 책정해주시기 바랍니다.');
			} else {
				$('#hosting_price_foot').prop('value', $('#host_price').val());
				
				var regist_insert = {
					'room_type' : $('#hosting_room_type_foot').val(),
					'guest_cnt' : $('#hosting_guest_cnt_foot').val(),
					'building_seq' : $('#hosting_building_seq_foot').val(),
					'bed_cnt' : $('#hosting_bed_cnt_foot').val(),
					'bathroom_cnt' : $('#hosting_bathroom_cnt_foot').val(),
					'convenience' : $('#hosting_convenience_foot').val(),
					'safety_fac' : $('#hosting_safety_fac_foot').val(),
					'space' : $('#hosting_space_foot').val(),
					'picture' : $('#hosting_picture_foot').val(),
					'explaination' : $('#hosting_explaination_foot').val(),
					'title' : $('#hosting_title_foot').val(),
					'rules' : $('#hosting_rules_foot').val(),
					'other_rule' : $('#hosting_other_rule_foot').val(),
					'checkin_term' : $('#hosting_checkin_term_foot').val(),
					'checkin_time' : $('#hosting_checkin_time_foot').val(),
					'min_nights' : $('#hosting_min_nights_foot').val(),
					'max_nights' : $('#hosting_max_nights_foot').val(),
					'price' : $('#hosting_price_foot').val(),
					'country' : $('#hosting_country_foot').val(),
					'state' : $('#hosting_state_foot').val(),
					'city' : $('#hosting_city_foot').val(),
					'street' : $('#hosting_street_foot').val(),
					'optional' : $('#hosting_optional_foot').val(),
					'zip_code' : $('#hosting_zip_code_foot').val(),
					'latitude' : $('#hosting_latitude_foot').val(),
					'longitude' : $('#hosting_longitude_foot').val(),
				}
				$.ajax({
					url : app.context()+'/hosting/regist_insert',
					type : 'POST',
					data : JSON.stringify(regist_insert),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'success_insert') {
							alert('호스팅이 정상적으로 등록 되었습니다.');
							$('#pub_article').html(hosting_manage_1)
						}
					},
					error : function(x,s,m){
						alert('regist_insert시 error 발생 : ' + m);
					}
				});
			}
		})

		$('#pub_article').on('click','#hosting_manage_1',function(){
			hosting.hosting_manage_main(1);
		})
		$('#pub_header').on('click','#hosting_manage_1',function(){
			hosting.hosting_manage_main(1);
		})
		
		$('#pub_article').on('click','#hosting_manage_2',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_2)
			$(function() {
				function onClickHandler(date, obj) {
			var $calendar = obj.calendar;
			var $box = $calendar.parent().siblings('.box').show();
			var text = '';
			if(date[0] !== null) {
				text += date[0].format('YYYY-MM-DD');
			}
			if(date[0] !== null && date[1] !== null) {
				text += '~';
			} else if(date[0] === null && date[1] == null) {
				text += '~';
			}

			if(date[1] !== null) {
				text += date[1].format('YYYY-MM-DD');
			}
			$box.val(text);
			var block_date = $('#host_calendar_val').val().split("~");
			$('#host_calendar_min').prop('value',block_date[0]);
			$('#host_calendar_max').prop('value',block_date[1]);
		}
		var cal_date = new Array();	
		for (var int = 0; int < 100; int++) {
			var date = new Date();
			date.setDate(date.getDate() + int);
			cal_date[int] = moment(date).format('YYYY-MM-DD');
		}
		$('.multi-select-calendar').pignoseCalendar({
			multiple: true,
			select: onClickHandler,
			enabledDates : cal_date
		});
		!(function() {
			var times = 30;
			var disabledDates = [];
			for(var i=0; i < times; /* Do not increase index */) {
				var year = moment().year();
				var month = 0;
				var day = parseInt(Math.random() * 364 + 1);
				var date = moment().year(year).month(month).date(day).format('YYYY-MM-DD');
				if($.inArray(date, disabledDates) === -1) {
					disabledDates.push(date);
					i++;
				}
			}
			disabledDates.sort();
			var $dates = $('.disabled-dates-calendar').siblings('.guide').find('.guide-dates');
			for (var idx in disabledDates) {
				$dates.append('<span>' + disabledDates[idx] + '</span>');
			}
			$('.disabled-dates-calendar').pignoseCalendar({
				select: onClickHandler,
				disabledDates: disabledDates
			});
		} ());
	});
			$('#host_manage_submit_2').click(function(){
				var manage_data_2 = {
					'block_date' : $('#host_calendar_min').val() + ',' + $('#host_calendar_max').val(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage2',
					type : 'POST',
					data : JSON.stringify(manage_data_2),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage2') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage2시 error 발생 : ' + m);
					}
				});
			})
		})
		$('#pub_article').on('click','#hosting_manage_3',function(){
			$('#pub_article').html(hosting_manage_menu2)
			$('#host_manage_detail_right1').html(hosting_manage_3)
			$.ajax({
					url : app.context()+'/hosting/manage_list',
					data : {'house_seq' : $('#manage_house_seq_foot').val()},
					dataType : 'json',
					success : function(data){
						$.each(data, function(i, list){
							$('#host_manage_price_div').html('<input type="text" placeholder="현재 설정되어 있는 가격 : '+list.price+' " class="host_regist_count2" id="host_manage_price">');
						});
					},
					error : function(x,s,m){
						alert('manage_list시 error 발생 : ' + m);
					}
				});
			
			$('#host_manage_submit_3').click(function(){
				var manage_data_3 = {
					'price' : $('#host_manage_price').val(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage3',
					type : 'POST',
					data : JSON.stringify(manage_data_3),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage3') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage3시 error 발생 : ' + m);
					}
				});
			});
		})
		$('#pub_article').on('click','#hosting_manage_4',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_4)
			$('#host_manage_submit_4').click(function(){
				var manage_rules = 
					(($('#host_manage_rules_1').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_2').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_3').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_4').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_5').prop('checked') == true)?'T':'F');
				var manage_data_4 = {
					'rules' : manage_rules,
					'other_rule' : $('#host_manage_other_rule').val(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				
				
				
				$.ajax({
					url : app.context()+'/hosting/manage4',
					type : 'POST',
					data : JSON.stringify(manage_data_4),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage4') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage4시 error 발생 : ' + m);
					}
				});
			});
		})
		$('#pub_article').on('click','#hosting_manage_5',function(){
			$('#pub_article').html(hosting_manage_menu2)
			$('#host_manage_detail_right1').html(hosting_manage_5)
			$('#host_manage_submit_5').click(function(){
				var manage_data_5 = {
					'checkin_time' : $('#host_manage_checkin_time option:selected').val(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage5',
					type : 'POST',
					data : JSON.stringify(manage_data_5),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage5') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage5시 error 발생 : ' + m);
					}
				});
			});
		})
		$('#pub_article').on('click','#hosting_manage_6',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_6)
		})
		$('#pub_article').on('click','#hosting_manage_7',function(){
			$('#pub_article').html(hosting_manage_menu3)
			$('#host_manage_detail_right1').html(hosting_manage_7)
			$('#host_manage_submit_7').click(function(){
				var manage_data_7 = {
					'building_seq' : $('#host_manage_building_type option:selected').val(),
					'room_type' : $('#host_manage_room_type option:selected').val(),
					'guest_cnt' : $('#host_manage_guest_cnt option:selected').val(),
					'bed_cnt' : $('#host_manage_bed_cnt option:selected').val(),
					'bathroom_cnt' : $('#host_manage_bathroom_cnt option:selected').val(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage7',
					type : 'POST',
					data : JSON.stringify(manage_data_7),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage7') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage7시 error 발생 : ' + m);
					}
				});
			})
			

		})
		$('#pub_article').on('click','#hosting_manage_8',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_8)
			$('#host_manage_submit_8').click(function(){
				var manage_data_8 = {
					'title' : $('#host_manage_title').val(),
					'explaination' : $('#host_manage_explaination').val(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage8',
					type : 'POST',
					data : JSON.stringify(manage_data_8),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage8') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage8시 error 발생 : ' + m);
					}
				});
			})
		})
		$('#pub_article').on('click','#hosting_manage_9',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_9)
			var map;
			var myCenter = new google.maps.LatLng(39.025165, 125.796194);
				var mapProp = {
					center:myCenter,
					zoom : 13,
					mapTypeId : google.maps.MapTypeId.ROADMAP
				};
				map = new google.maps.Map(document.getElementById("googleMap_manage"),mapProp);
				google.maps.event.addListener(map, 'click', function(event){
					placeMarker(event.latLng);
				});
			function placeMarker(location){
				var marker = new google.maps.Marker({
					position : location,
					map : map,
				});
				var infowindow = new google.maps.InfoWindow({
					content : 'Latitude: ' + location.lat() + '<br>Longitude : ' + location.lng()
				});
				infowindow.open(map,marker);
				$('#hosting_manage_map_lat').prop('value', location.lat());
				$('#hosting_manage_map_long').prop('value', location.lng());
				google.maps.event.addListener(map, 'click', function(event){
					marker.setMap(null);
				});
			}

			$('#host_manage_submit_9').click(function(){
				var manage_data_9 = {
					'latitude' : $('#hosting_manage_map_lat').val(),
					'longitude' : $('#hosting_manage_map_long').val(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage9',
					type : 'POST',
					data : JSON.stringify(manage_data_9),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage9') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage9시 error 발생 : ' + m);
					}
				});
			});	
		})
		$('#pub_article').on('click','#hosting_manage_10',function(){
			$('#pub_article').html(hosting_manage_menu4)
			$('#host_manage_detail_right1').html(hosting_manage_10)
			$('#host_manage_submit_10').click(function(){
				var convenience = 
				(($('#host_manage_convenience_1').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_2').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_3').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_4').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_5').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_6').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_7').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_8').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_9').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_10').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_11').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_12').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_13').prop('checked') == true)?'T':'F');
				var manage_data_10 = {
					'convenience' : convenience,
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage10',
					type : 'POST',
					data : JSON.stringify(manage_data_10),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage10') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage10시 error 발생 : ' + m);
					}
				});
			})
			
		})
		$('#pub_article').on('click','#hosting_manage_11',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_11)
			$('#fine-uploader-gallery_manage').fineUploader({
		            template: 'qq-template-gallery',
		            request: {
		                endpoint: 'hanbitairbnbpicture.s3.amazonaws.com',
		                accessKey: 'AKIAJEPBVPCKWOPK6Y6A'
		            },
		            signature: {
		                endpoint: '/s3/signature'
		            },
		            uploadSuccess: {
		                endpoint: '/s3/success'
		            },
		            iframeSupport: {
		                localBlankPagePath: '/success.html'
		            },
		            thumbnails: {
		                placeholders: {
		                    waitingPath: '/source/placeholders/waiting-generic.png',
		                    notAvailablePath: '/source/placeholders/not_available-generic.png'
		                }
		            },
		            validation: {
		                allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
		            }
		        });
			$('#host_manage_submit_11').click(function(){
				var manage_data_11 = {
					'picture' : $('#host_upload_img').text(),
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage11',
					type : 'POST',
					data : JSON.stringify(manage_data_11),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage11') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage11시 error 발생 : ' + m);
					}
				});
			})
			
			
		})
		$('#pub_article').on('click','#hosting_manage_12',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_12)
			$('#host_manage_submit_12').click(function(){
				var safety_fac = 
					(($('#host_manage_safety_fac_1').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_2').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_3').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_4').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_5').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_6').prop('checked') == true)?'T':'F');
				var manage_data_12 = {
					'safety_fac' : safety_fac,
					'house_seq' : $('#manage_house_seq_foot').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage12',
					type : 'POST',
					data : JSON.stringify(manage_data_12),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage12') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage12시 error 발생 : ' + m);
					}
				});
			})
		})
	};
	return {
		init : init, _bed_count : _bed_count, _bathroom_count : _bathroom_count, 
		_max_nights_count : _max_nights_count, _min_nights_count : _min_nights_count, 
		pwChecker : function(value){
			var pw_regex =  /^[0-9]{1,20}$/;
			return pw_regex.test(value)?"yes":"no";
		},
		pwChecker2 : function(value){
			var pw_regex =  /^[0-9-]{1,20}$/;
			return pw_regex.test(value)?"yes":"no";
		},
		pwChecker3 : function(value){
			var pw_regex =  /^[0-9]{1,2}$/;
			return pw_regex.test(value)?"yes":"no";
		},
		hosting_manage_main : function(pgNum){
			$.getJSON(app.context()+'/hosting/manage1/'+pgNum,function(data){
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var country = data.country;
				var hosting_manage_1 = 
					'<style>'
					+'table, th, td {'
					+'border: 1px solid #EAEAEA;'
					+'}'
					+'th, td {'
					+'padding: 5px;'
					+'text-align: left;'
					+'}'
					+'</style>'
					+'<div id="host_manage_div_page_1">'
					+'<div id="host_manage_div_left1">'
					+'<div id="host_manage_div_left2">'
					+'<h4><b>숙소 목록</b></h4><br>'
					+'<h4>예약 관리</h4>'
					+'<h4>예약 필수 조건</h4><br>'
					+'<input type="button" value="새로운 숙소 추가" class="btn btn-primary" id="hosting_regist_1">'
					+'</div>'
					+'</div>'
					+'<div id="host_manage_div_right1">'
					+'<div id="host_manage_div_right3">'
					+'<table style="width:100%;">'
					+'<tbody>';
					$.each(data.list, function(i,list){
						$('#manage_house_seq_foot').prop('value', list.house_seq)
				hosting_manage_1 += 
						'<tr>'
						+'<th colspan="2" style="background-color: #EAEAEA;">운영 중</th>'
						+'</tr>'
						+'<tr>'
						+'<td rowspan="4">'+list.picture+'</td>'
						+'<td>'+list.title+'</td>'
						+'</tr>'
						+'<tr>'
						+'<td>'+country+'</td>'
						+'</tr>'
						+'<tr>'
						+'<td>'+list.reg_date+'</td>'
						+'</tr>'
						+'<tr>'
						+'<td><input type="button" value="달력 관리 및 설정" class="btn btn-default" id="hosting_manage_2">'
						+'</td>'
						+'</tr>';
					});
					hosting_manage_1 += '</tbody></table>';
					hosting_manage_1 += '<center><ul class="pagination">';
				for(var i=startPg; i<=lastPg; i++){
						hosting_manage_1 += '<a href="#" onclick="hosting.hosting_manage_main('+i+')">'+i+'</a>';
				}

				hosting_manage_1 += '</ul></center>';
				hosting_manage_1 +=
					'</div>'
					+'</div>'
					+'</div>';
				$('#pub_article').html(hosting_manage_1);
			});
		}
	};
})();
var hosting_main = 
'<script for="window" event="onunload" language="javascript">'
+' browser_Event();'
+'</script>'
+'<div id="host_main_top_pic"><br/>'
+'<div id="host_main_top1">'
+'<div id="host_main_top2">'
+'<h1 style="color:white;"><b><br>에어비앤비<br>호스트가 되어<br>부수입을<br>올리세요.</b><br><br></h1>'
+'<h4 style="color:white;">집 수리비를 모으고 꿈에 그리던 <br>여행을 떠나는 등 호스팅 부수입으로 <br>꿈을 이루세요.</h4><br><br>'
+'<input type="button" value="호스팅 시작하기" class="btn btn-danger" id="hosting_regist_1">'
+'<br><br><br>'
+'</div>'
+'</div>'
+'<br/>'
+'</div>'
+'<div id="host_main_way1">'
+'<h4 style="text-align:center; color: grey;">호스팅 방법</h4>'
+'<div id="host_main_way2">'
+'<h2>①</h2><br>'
+'<h2><b>호스트로 등록</b></h2><br>'
+'<h5>숙소 등록부터 시작해 보세요. 숙소에 대한 프로필을 작성하는 것과 같습니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-home icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$0.3:$0.$0.0.0"></i><br>'
+'<h2>숙소 페이지에 필요한 정보</h2><br>'
+'<h5>숙소 설명을 입력하고, 사진을 찍어 업로드하고, 가격을 설정하세요. 게스트는 숙소 정보를 보고 회원님의 숙소에 대해 파악할 수 있습니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-group icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".245ywa29log.4.0.1:$0.3:$0.$1.0.0"></i><br>'
+'<h2>이용 가능 게스트 요건</h2><br><br>'
+'<h5>예약 가능 여부 및 숙소 이용 규칙을 설정하세요. 호스트 설정 및 달력 설정 기능을 통해 호스팅을 보다 쉽게 할 수 있습니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-handshake icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".245ywa29log.4.0.1:$0.3:$1.$0.0.0"></i><br>'
+'<h2>에어비앤비가 도와드려요</h2><br>'
+'<h5>숙소 준비부터 요금 선택, 현지 법에 따른 의무에 대한 이해까지 각 단계마다 필요한 도구와 정보를 제공해 드려요.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_way1">'
+'<div id="host_main_way2">'
+'<h2>②</h2><br>'
+'<h2><b>숙소 검색 및 예약</b></h2>'
+'<h5>예약 확인과 함께 게스트의 메시지를 받게 됩니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-comment icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$1.3:$0.$0.0.0"></i><br>'
+'<h2>게스트에게 메시지 보내기</h2><br>'
+'<h5>온라인이나 앱을 통해 메시지를 보내 게스트에 대해 알아가고 질문에 답할 수 있습니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-suitcase icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$1.3:$0.$1.0.0"></i><br>'
+'<h2>체크인 계획</h2><br><br>'
+'<h5>호스트에 따라 게스트를 직접 만나 열쇠를 전달하기도 하고, 출입문 비밀번호를 전달하기도 합니다. 회원님께 편리한 방법을 선택하세요.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_way1">'
+'<div id="host_main_way2">'
+'<h2>③</h2><br>'
+'<h2><b>게스트 맞이하기</b></h2>'
+'<h5>아침을 제공하는 호스트도 있고, 보다 자유로운 방식을 선호하는 호스트도 있습니다. 호스팅 방식은 전적으로 회원님이 결정할 수 있습니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-essentials icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$0.$0.0.0"></i><br>'
+'<h2>기본적인 준비</h2><br>'
+'<h5>대부분의 호스트는 게스트가 사용할 수 있는 모든 공간을 청소하고 깨끗한 침대 시트, 수건, 화장지와 같은 필수품목을 제공합니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-id-card-back icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$0.$1.0.0"></i><br>'
+'<h2>게스트의 숙박 결제</h2><br>'
+'<h5>에어비앤비가 결제에 관한 모든 부분을 처리하니 회원님이 직접 관여하실 부분은 없습니다. 게스트는 체크인 전에 요금을 납부합니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-money-deposit icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$1.$0.0.0"></i><br>'
+'<h2>대금 수령 방법</h2><br>'
+'<h5>페이팔, 계좌 입금, 해외 송금 중에서 대금 수령 방법을 선택하실 수 있습니다. 대금은 게스트가 체크인하고 24시간 후에 자동으로 입금됩니다. 간단하죠?</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-tag icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$1.$1.0.0"></i><br>'
+'<h2>수입과 수수료</h2><br>'
+'<h5>에어비앤비에 숙소를 등록하는 것은 무료입니다. 에어비앤비는 모든 예약에 3%의 호스트 서비스 수수료를 부과합니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-filter icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$2.$0.0.0"></i><br>'
+'<h2>요금 설정</h2><br>'
+'<h5>요금은 회원님이 결정합니다. 숙소를 등록하면 비슷한 숙소의 요금과 여행 트렌드를 고려하여 요금을 제안해 주는 도구를 이용할 수 있습니다.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_way1" style="margin-top:20%;">'
+'<div id="host_main_way2">'
+'<h2>④</h2><br>'
+'<h2><b>안심하세요</b></h2>'
+'<h5>에어비앤비가 회원님과 회원님의 집을 보호하기 위한 계획을 미리 세워두었습니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-host-guarantee icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.5.0.2:$0.$0.0.0"></i><br>'
+'<h2>₩1,000,000,000 호스트 보호 프로그램</h2><br>'
+'<h5>호스트 보호 프로그램은 사고로 회원님의 집이나 물건에 피해가 발생할 경우에 대비해 회원님을 보호해주는 프로그램입니다. 에어비앤비에 숙소가 등록된 모든 호스트는 추가 비용 없이 보장을 받을 수 있습니다. 별도의 절차 없이 자동으로 가입됩니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-ok-alt icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.5.0.2:$0.$1.0.0"></i><br>'
+'<h2>신뢰를 기초로 하는 에어비앤비</h2><br>'
+'<h5>전화번호를 포함한 게스트와 호스트 양측의 정보를 인증하였습니다. 여행 후에는 게스트와 호스트 모두 서로에 대해 후기를 남기도록 되어 있습니다. 게스트도 후기를 통해 평가를 받으므로 호스트와 숙소를 존중하여 대하게 됩니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-lifesaver icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.5.0.2:$1.$0.0.0"></i><br>'
+'<h2>수입 이상의 가치</h2><br>'
+'<h5>호스트는 부수입을 버는 것뿐만 아니라 글로벌 커뮤니티의 일원이 되어 도움을 받을 수 있습니다. 에어비앤비와 다른 호스트에게 배울 수 있는 기회가 언제든 열려 있습니다.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_media1">'
+'<div id="host_main_media2">'
+'<h1 style="color:white; text-align:center;"><b>호스트가 들려주는 호스팅의 매력<br><br></b></h1>'
+'<h1 style="color:white; text-align:center;"><a href="#">▶</a></h1>'
+'</div>'
+'</div>'
+'<div id="host_main_bottom1">'
+'<div id="host_main_bottom2">'
+'<h1 style="color:white;"><b>게스트를 맞이해 보세요!</b></h1><br>'
+'<input type="button" value="호스팅 시작하기" class="btn btn-danger" id="hosting_regist_1">'
+'<img src="https://a0.muscache.com/airbnb/static/slash_host/hand_key-601456c51410ba5705dfef7c047bfe4f.png" alt="" style="float:right" />'
+'</div>'
+'</div>';
var hosting_regist_1 = 
'<div id="host_regist_div_page_1">'
+'<div id="host_regist_div_left1">'
+'<div id="host_regist_div_left4">'
+'<h1>호스트가 될 준비를 시작해보세요.</h1><br>'
+'<h6 style="color:grey">1단계</h6><br>'
+'<h3>회원님의 숙소 유형은 무엇인가요?</h3><br>'	
+'<select class="host_regist_select1" id="host_room_type">'
+'<option selected="selected" value="집전체">집 전체</option>'
+'<option value="개인실">개인실</option>'
+'<option value="다인실">다인실</option>'
+'</select><br>'
+'<select class="host_regist_select1" id="host_guest_cnt">'
+'<option selected="selected" value="1">게스트  1명</option>'
+'<option value="2">게스트  2명</option>'
+'<option value="3">게스트  3명</option>'
+'<option value="4">게스트  4명</option>'
+'<option value="5">게스트  5명</option>'
+'<option value="6">게스트  6명</option>'
+'<option value="7">게스트  7명</option>'
+'<option value="8">게스트  8명</option>'
+'<option value="9">게스트  9명</option>'
+'<option value="10">게스트  10명</option>'
+'<option value="11">게스트  11명</option>'
+'<option value="12">게스트  12명</option>'
+'<option value="13">게스트  13명</option>'
+'<option value="14">게스트  14명</option>'
+'<option value="15">게스트  15명</option>'
+'<option value="16">게스트  16명 + </option>'
+'</select><br><br>'
+'<h3>숙소의 건물 유형을 알려주세요.</h3><br>'
+'<select class="host_regist_select1" id="host_building_type">';
var hosting_regist_1_1 = 
'</select><br><br><hr>'
+'<a href="#" id="hosting_go"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_2"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right1">'
+'<img src="/web/resources/img/hosting/host_regist_1.jpg" alt="" style="margin-top:6%; margin-left:10%;"/>'
+'</div>'
+'</div>';
var hosting_regist_2 =
'<div id="host_regist_div_page_2">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소에 침대의 갯수는 몇 개인가요?</h2><br>'
+'<div id="div_host_bed_cnt"><input type="text" value="'+hosting._bed_count+'" class="host_regist_count" id="host_bed_cnt" readonly></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_bed_cnt_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_bed_cnt_minus"><br><br><br><br><br>'
+'<h2>욕실은 몇 개인가요?</h2><br>'
+'<div id="div_host_bathroom_cnt"><input type="text" value="'+hosting._bathroom_count+'" class="host_regist_count" id="host_bathroom_cnt" readonly></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_bathroom_cnt_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_bathroom_cnt_minus"><br>'
+'<br><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_1"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_3"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_2">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>회원님 숙소의 침대 수와 종류에 따라 몇 명의 인원이 불편함 없이 머물 수 있는지가 결정됩니다.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_3 = 
'<div id="host_regist_div_page_3">'	
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소의 위치를 알려주세요.</h2><br>'
+'<h4>주소를 입력해주세요</h4>'
+'<div id="locationField">'
+'<input id="autocomplete" placeholder="Enter your address" onFocus="geolocate()" class="host_regist_count2" type="text"></input>'
+'<input type="button" value="확인" id="autocomplete_submit" class="btn btn-info" style="width:100%">'
+'</div>'
+'<h4>국가</h4>'
+'<input type="text" id="country" class="host_regist_count2"><br>'
+'<div style="float:left; width:50%;">'
+'<h4>도시</h4>'
+'<input type="text" placeholder="예) 서울특별시" class="host_regist_count2" id="host_state">'
+'</div>'
+'<div style="float:left; width:50%;">'
+'<h4>시 / 군</h4>'
+'<input type="text" placeholder="예) 강남구" class="host_regist_count2" id="locality">'
+'</div><br><br><br><br>'
+'<h4>도로명 / 건물번호 / 아파트 이름 / 건물 이름</h4>'
+'<input type="text" placeholder="예) 언주로 406" class="host_regist_count2" id="street_number"><br>'
+'<h4>빌딩 번호, 빌딩/아파트 이름(및 호실)</h4>'
+'<input type="text" placeholder="예) 35동 4층 407호" class="host_regist_count2" id="host_optional"><br>'
+'<h4>우편번호</h4>'
+'<input type="text" placeholder="예) 135-919" class="host_regist_count2" id="postal_code"><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_2"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_4"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_3">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>정확한 주소는 예약이 확정된 게스트에게만 공개됩니다.</h5><br>'
+'<img src="https://a2.muscache.com/airbnb/static/list_your_space/tip-address-3a85eca55833a5cee81d0c8df157d89d.png" alt="" />'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_4 = 
'<div id="host_regist_div_page_4">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소의 위치를 알려주세요.</h2><br>'
+'<input id="pac-input" class="controls" type="text" placeholder="Search Box">'
+'<div id="googleMap" style="width:100%; height:380px;"></div>'
+'<br><br>'
+'<h4 style="color:grey;">원하는 위치를 선택해주세요.</h4><br><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_3"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_5"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'<input type="hidden" id="hosting_map_lat">'
+'<input type="hidden" id="hosting_map_long">'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_4">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'	
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>정확한 주소는 예약이 확정된 게스트에게만 공개됩니다.</h5><br>'
+'<img src="https://a2.muscache.com/airbnb/static/list_your_space/tip-address-3a85eca55833a5cee81d0c8df157d89d.png" alt="" />'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_5 = 
'<div id="host_regist_div_page_5">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>어떤 편의시설을 제공하시나요?</h2><br>'
+'<form id="host_convenience">'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_1"><span class="host_regist_input_text">필수 품목</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_2"><span class="host_regist_input_text">무선인터넷</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_3"><span class="host_regist_input_text">샴푸</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_4"><span class="host_regist_input_text">옷장/서랍장</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_5"><span class="host_regist_input_text">TV</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_6"><span class="host_regist_input_text">난방</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_7"><span class="host_regist_input_text">에어컨</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_8"><span class="host_regist_input_text">조식,커피,차</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_9"><span class="host_regist_input_text">책상/작업공간</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_10"><span class="host_regist_input_text">벽난로</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_11"><span class="host_regist_input_text">다리미</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_12"><span class="host_regist_input_text">헤어 드라이기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_13"><span class="host_regist_input_text">집에서 키우는 반려동물</span><br><br>'
+'</form>'
+'<h2>안전시설</h2><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_1"><span class="host_regist_input_text">연기 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_2"><span class="host_regist_input_text">일산화탄소 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_3"><span class="host_regist_input_text">구급상자</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_4"><span class="host_regist_input_text">안전 카드</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_5"><span class="host_regist_input_text">소화기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_6"><span class="host_regist_input_text">침실에 잠금장치 있음</span><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_4"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_6"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_5">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>필수품목을 제공하면 게스트가 내 집처럼 편안하게 머물 수 있습니다.<br><br>'
+'일부 호스트는 조식 또는 커피와 차만 제공하기도 합니다. 필수 사항은 아니지만,'
+'이런 서비스를 제공하면 게스트가 보다 환영받는다고 느낄 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_6 =
'<div id="host_regist_div_page_6">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>게스트가 어떤 공간을 사용할 수 있나요?</h2><br>'	
+'<input type="checkbox" class="host_regist_input_box" id="host_space_1"><span class="host_regist_input_text">부엌</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_2"><span class="host_regist_input_text">빨래 - 세탁기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_3"><span class="host_regist_input_text">빨래 - 건조기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_4"><span class="host_regist_input_text">주차</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_5"><span class="host_regist_input_text">엘리베이터</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_6"><span class="host_regist_input_text">수영장</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_7"><span class="host_regist_input_text">자쿠지 욕조</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_8"><span class="host_regist_input_text">헬스장</span><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_5"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_7"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_6">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>호스팅하는 공간은 집 안에 있어야 합니다. 집의 일부가 아닌 빨래방이나 주변 시설은 포함하지 마세요. 이웃이 동의하면 수영장이나 자쿠지 등의 단지 공유 시설을 포함할 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_7 = 
'<div id="host_regist_div_page_7">'
+'<div id="host_regist_div_left5" style="height:1000px;"></div>'
+'<div id="host_regist_div_center1">'
+'<div id="host_regist_div_center2">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" style="float:right"/>'
+'<script type="text/javascript" src="/web/resources/js/hosting/hosting_jquery.fine-uploader.js"></script>'
+'<h3>숙소의 모습을 게스트에게 보여주세요</h3><br><br><div id="fine-uploader-gallery"></div><br><br>'
+'<input type="hidden" id="hosting_image_value">'
+'<hr>'
+'<a href="#" id="hosting_regist_6"><input type="button" value="뒤로" class="btn btn-info host_regist_prev2"></a>'
+'<a href="#" id="hosting_regist_8"><input type="button" value="다음" class="btn btn-danger host_regist_next2"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right5">&nbsp;</div>'
+'</div>';
var hosting_regist_8 = 
'<div id="host_regist_div_page_8">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소 설명을 작성하세요</h2><br>'
+'<input type="text" placeholder="숙소에서 가까운 곳" class="host_regist_count3" id="host_explaination"><br><br><br><br><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_7"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_9"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_8">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>여기에 작성한 설명이 숙소 페이지 맨 위에 표시됩니다.'
+'게스트가 숙소를 검색할 때 일반적으로 궁금해 하는 질문 몇 가지를 제시해 보았습니다.' 
+'내용은 나중에 수정하거나 추가하실 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_9 =
'<div id="host_regist_div_page_9">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>이름 지정</h2><br>'
+'<input type="text" placeholder="숙소 제목" class="host_regist_count2" id="host_title"><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_8"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_10"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_9">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right6">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>주변 숙소의 몇 가지 예를 보여드립니다.</h5><br>'
+'<div style="float:left; width:50%; margin-top:-7%">'
+'<img src="https://a2.muscache.com/im/pictures/47535740/2697a4de_original.jpg" alt="" style="width:100%; height:100;" /><br><br><br>'
+'<img src="https://a2.muscache.com/im/pictures/b3d17cb0-6905-4242-a107-46ed053d3996.jpg" alt="" style="width:100%; height:100%; margin-top:-12%"/><br><br><br>'
+'<img src="https://a2.muscache.com/im/pictures/8ce7437a-a577-4d38-93a7-e164b813e81d.jpg" alt="" style="width:100%; height:70px; margin-top:-7%"/><br><br><br>'
+'</div>'
+'<div style="float:right; width:50%; margin-top:-7%">'
+'<h5>고급 스튜디오를 최저가에 @강남역 최고의 위치!!</h5><br>'
+'<h5>English/中文OK! 1min to subway 3-room huge apartment</h5><br>'
+'<h5>[Myeongdong] #003 Jongno Hans house</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_10 =
'<div id="host_regist_div_page_10">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>게스트가 지켜야 할 숙소 이용규칙을 정하세요</h2><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_1"><span class="host_regist_input_text">어린이(2~12세) 숙박에 적합함</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_2"><span class="host_regist_input_text">유아(2세 미만) 숙박에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_3"><span class="host_regist_input_text">반려동물 동반에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_4"><span class="host_regist_input_text">흡연 가능 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_5"><span class="host_regist_input_text">행사나 파티 허용 </span><br><br>'
+'<h2>기타 규칙 추가하기</h2><br>'
+'<input type="text" placeholder="그 밖에 게스트가 알아두어야 하는 사항" class="host_regist_count2" id="host_other_rule">'
+'<hr>'
+'<a href="#" id="hosting_regist_9"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_11"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_10">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>에어비앤비의 필수 요건을 충족하고 숙소 이용규칙에 동의해야 숙소를 예약할 수 있습니다.'
+'즉시 예약으로 숙소를 예약한 게스트가 숙박 전이나 도중에 숙소 이용규칙을 어기면 페널티 없이 예약을 취소할 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_11 =
'<div id="host_regist_div_page_11">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>언제부터 예약할 수 있나요?</h2><br>'
+'<input type="text" id="host_checkin_term" class="host_regist_count2" placeholder="예 ) 1일일 경우 1">'
+'<br><br>'
+'<h5 style="color: grey;">팁: 날짜는 일단위로 설정 가능합니다.<br>예) 15 = 15일 뒤부터 예약 가능<br>즉시 예약 가능할 경우 0</h5><br><br>'
+'<h2>몇 시까지 체크인이 가능한가요?</h2><br>'
+'<select class="host_regist_select1" id="host_checkin_time">'
+'<option selected="selected" value="15">15:00</option>'
+'</select><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_10"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_12"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_11">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>temp</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_12 = 
'<div id="host_regist_div_page_12">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>게스트가 얼마 동안 숙박할 수 있나요?</h2><br>'
+'<h5>최소 숙박일수</h5>'
+'<div id="div_host_min_nights"><input type="text" value="'+hosting._min_nights_count+'" class="host_regist_count" id="host_min_nights" readonly></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_min_nights_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_min_nights_minus"><br><br><br>'
+'<h5>최대 숙박일수</h5>'
+'<div id="div_host_max_nights"><input type="text" value="'+hosting._max_nights_count+'" class="host_regist_count" id="host_max_nights" readonly></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_max_nights_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_max_nights_minus"><br><br><br><br><br>'
+'<h5 style="color: grey;">팁: 숙박 기간이 짧으면 예약을 더 많이 받을 수 있지만, 그만큼 예약을 자주 받아야 합니다.</h5><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_11"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_13"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_12">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>temp</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_13 =
'<div id="host_regist_div_page_13">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>기본 요금</h2><br>'
+'<h5 style="color: grey;">기본 요금은 회원님이 정한 기본 1박당 요금입니다.</h5><br><br>'
+'<h6>기본 요금</h6>'
+'<input type="text" placeholder="￦ / 박" class="host_regist_count2" id="host_price">'
+'<br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_12"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_14"><input type="button" value="완료" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_13">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>temp</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_manage_menu = 
'<div id="host_manage_div_page_2">'
+'<div id="host_manage_detail_left1">'
+'<h4><b>호스팅</b></h4><hr>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4><b>숙소</b></h4><br>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4><b>게스트 자료</b></h4><br>'
+'<h5><a href="#" id="guidebook_go">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_menu2 = 
'<div id="host_manage_div_page_3">'
+'<div id="host_manage_detail_left1">'
+'<h4><b>호스팅</b></h4><hr>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4><b>숙소</b></h4><br>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4><b>게스트 자료</b></h4><br>'
+'<h5><a href="#" id="guidebook_go">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_menu3 = 
'<div id="host_manage_div_page_4">'
+'<div id="host_manage_detail_left1_3">'
+'<h4><b>호스팅</b></h4><hr>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4><b>숙소</b></h4><br>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4><b>게스트 자료</b></h4><br>'
+'<h5><a href="#" id="guidebook_go">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_menu4 = 
'<div id="host_manage_div_page_5">'
+'<div id="host_manage_detail_left1_4">'
+'<h4><b>호스팅</b></h4><hr>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4><b>숙소</b></h4><br>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4><b>게스트 자료</b></h4><br>'
+'<h5><a href="#" id="guidebook_go">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_2 =
'<script type="text/javascript" src="/web/resources/js/hosting/jquery.latest.min.js"></script>'
+'<script type="text/javascript" src="/web/resources/js/hosting/bootstrap.min.js"></script>'
+'<script type="text/javascript" src="/web/resources/js/hosting/prism.min.js"></script>'
+'<script type="text/javascript" src="/web/resources/js/hosting/moment.min.js"></script>'
+'<script type="text/javascript" src="/web/resources/js/hosting/pignose.calendar.js"></script>'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<div id="wrapper">'
+'<h2><b>예약 불가능일자 설정</b></h2>'
+'<h6>호스트가 원하는 날짜는 예약할 수 없도록 설정할 수 있습니다.</h6><br><hr>'
+'<div class="multi-select-calendar"></div>'
+'<div class="box" id="host_calendar_val"></div>'
+'</div>'
+'<hr><a href="#" id="host_manage_submit_2"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_1">'
+'<div id="host_manage_detail_right4" style="background-color:white; padding:5% 5% 5% 5%; border:1px solid #BDBDBD;">'
+'<h5><b>예약 불가능일자</b></h5><br>'
+'<h6>시작일자</h6>'
+'<input type="text" id="host_calendar_min">'
+'<h6>종료일자</h6>'
+'<input type="text" id="host_calendar_max"><br>'
+'</div>'
+'</div>'
+'</div>';
var hosting_manage_3 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>요금 설정</b></h2>'
+'<h6>호스트가 원하는 요금을 설정할 수 있습니다.</h6><br><hr>'
+'<div id="host_manage_price_div"><input type="text" placeholder="￦ / 박" class="host_regist_count2" id="host_manage_price"></div>'
+'<hr><a href="#" id="host_manage_submit_3"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_4 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>숙소 이용규칙</b></h2>'
+'<h6>특정 유형의 예약을 허용하거나 제한하세요. 회원님이 정한 규칙에 동의한 게스트만 예약할 수 있습니다.'
+'&nbsp;<a href="#">더 알아보기</a></h6><br><hr>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_1"><span class="host_regist_input_text">어린이(2~12세) 숙박에 적합함</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_2"><span class="host_regist_input_text">유아(2세 미만) 숙박에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_3"><span class="host_regist_input_text">반려동물 동반에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_4"><span class="host_regist_input_text">흡연 가능 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_5"><span class="host_regist_input_text">행사나 파티 허용 </span><br><br>'
+'<h2>추가규칙</h2><br>'
+'<input type="text" placeholder="그 밖에 게스트가 알아두어야 하는 사항" class="host_regist_count2" id="host_manage_other_rule"><hr>'
+'<a href="#" id="host_manage_submit_4"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_5 = 
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>체크인</b></h2>'
+'<h6>체크인에 대한 정책</h6><br><hr>'
+'<h2>체크인 시간</h2><br>'
+'<select class="host_regist_select1" id="host_manage_checkin_time">'
+'<option value="15" selected="selected">15:00</option>'
+'</select><br><br><hr>'
+'<a href="#" id="host_manage_submit_5"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_6 = 
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>예약 취소</b></h2>'
+'<h6>예약 취소에 대한 환불 정책</h6><br><hr>'
+'<h2>환불 정책</h2><br>'
+'<select id="host_regist_select1">'
+'<option>유연 : 숙소 도착 하루 전에 취소하는 경우 에어비앤비 수수료 제외 전액 환불</option>'
+'<option>보통 : 숙소 도착 5일 전까지 취소 시 에어비앤비 수수료 제외 전액 환불</option>'
+'<option>엄격 : 숙소 도착 7일 전까지 취소 시 수수료 제외 50% 환불</option>'
+'</select><br><br><hr>'
+'<a href="${context}/hosting/regist_12"><input type="button" value="수정" class="btn btn-danger" id="host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_7 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>숙소</b></h2><br>'
+'<h4>집 유형</h4>'
+'<select class="host_regist_select1" id="host_manage_building_type">'
+'<option selected="selected" value="2">하나를 선택해주세요.</option>'
+'</select>'
+'<h4>숙소 유형</h4>'
+'<select class="host_regist_select1" id="host_manage_room_type">'
+'<option selected="selected" value="집전체">집 전체</option>'
+'<option value="개인실">개인실</option>'
+'<option value="다인실">다인실</option>'
+'</select><br>'
+'<h4>수용 인원</h4>'
+'<select class="host_regist_select1" id="host_manage_guest_cnt">'
+'<option selected="selected" value="1">게스트  1명</option>'
+'<option value="2">게스트  2명</option>'
+'<option value="3">게스트  3명</option>'
+'<option value="4">게스트  4명</option>'
+'<option value="5">게스트  5명</option>'
+'<option value="6">게스트  6명</option>'
+'<option value="7">게스트  7명</option>'
+'<option value="8">게스트  8명</option>'
+'<option value="9">게스트  9명</option>'
+'<option value="10">게스트  10명</option>'
+'<option value="11">게스트  11명</option>'
+'<option value="12">게스트  12명</option>'
+'<option value="13">게스트  13명</option>'
+'<option value="14">게스트  14명</option>'
+'<option value="15">게스트  15명</option>'
+'</select>'
+'</div><hr>'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>침실 및 욕실</b></h2><br>'
+'<h4>침실 수</h4>'
+'<select class="host_regist_select1" id="host_manage_bed_cnt">'
+'<option selected="selected" value="1">1</option>'
+'</select>'
+'<h4>욕실 수</h4>'	
+'<select class="host_regist_select1" id="host_manage_bathroom_cnt">'
+'<option selected="selected" value="1">1</option>'
+'</select><br><hr>'
+'<a href="#" id="host_manage_submit_7"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_3">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_8 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>여행객들에게 회원님의 숙소에 대해서 알려주세요.</b></h3><br>'
+'<h6>에어비앤비에 등록된 모든 숙소는 각자의 개성이 있습니다. 회원님 숙소의 장점을 부각시켜 회원님 지역에서 머물 예정인 게스트에게 숙소를 어필하세요.</h6>'
+'<hr>'
+'<h4>숙소 이름</h4>'
+'<input type="text" placeholder="숙소 제목" class="host_regist_count2" id="host_manage_title"><br><br>'
+'<h4>요약</h4>'
+'<input type="text" placeholder="숙소에서 가까운 곳" class="host_regist_count3" id="host_manage_explaination"><br>'
+'<hr><a href="#" id="host_manage_submit_8"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_9 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>게스트가 숙소를 찾을 수 있도록 위치 정보를 제공하세요.</b></h3><br>'
+'<h6>게스트는 이 정보를 활용하여 숙소를 찾습니다.</h6>'
+'<div id="googleMap_manage" style="width:100%; height:380px;"></div>'
+'<input type="hidden" id="hosting_manage_map_lat">'
+'<input type="hidden" id="hosting_manage_map_long">'
+'<hr><a href="#" id="host_manage_submit_9"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_10 = 
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>여행객들에게 회원님의 숙소에 대해서 알려주세요.</b></h3><br>'
+'<h6>에어비앤비에 등록된 모든 숙소는 각자의 개성이 있습니다. 회원님 숙소의 장점을 부각시켜 회원님 지역에서 머물 예정인 게스트에게 숙소를 어필하세요.</h6>'
+'<hr><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_1"><span class="host_regist_input_text">필수 품목</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_2"><span class="host_regist_input_text">무선인터넷</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_3"><span class="host_regist_input_text">샴푸</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_4"><span class="host_regist_input_text">옷장/서랍장</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_5"><span class="host_regist_input_text">TV</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_6"><span class="host_regist_input_text">난방</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_7"><span class="host_regist_input_text">에어컨</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_8"><span class="host_regist_input_text">조식,커피,차</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_9"><span class="host_regist_input_text">책상/작업공간</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_10"><span class="host_regist_input_text">벽난로</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_11"><span class="host_regist_input_text">다리미</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_12"><span class="host_regist_input_text">헤어 드라이기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_13"><span class="host_regist_input_text">집에서 키우는 반려동물</span><br><br>'
+'<hr><a href="#" id="host_manage_submit_10"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right3_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_11 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<script type="text/javascript" src="/web/resources/js/hosting/hosting_jquery.fine-uploader.js"></script>'
+'<h3><b>사진을 더하면 숙소를 실감하게 보여줄 수 있습니다.</b></h3><br>'
+'<h6>게스트가 접근할 수 있는 장소의 사진을 최소 1장 올려주세요. 나중에 언제든 사진을 수정하실 수 있습니다.</h6>'
+'<div id="fine-uploader-gallery_manage"></div>'
+'<hr><a href="#" id="host_manage_submit_11"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_12 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>숙소 안전</b></h3><br>'
+'<h6>드물기는 하지만 긴급 상황이 발생할 수 있습니다. 게스트가 긴급 상황에 대비할 수 있도록 해주세요.</h6>'
+'<hr><br>'
+'<h3><b>안전 체크리스트</b></h3><br>'	
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_1"><span class="host_regist_input_text">연기 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_2"><span class="host_regist_input_text">일산화탄소 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_3"><span class="host_regist_input_text">구급상자</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_4"><span class="host_regist_input_text">안전 카드</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_5"><span class="host_regist_input_text">소화기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_6"><span class="host_regist_input_text">침실에 잠금장치</span><br><br>'
+'<hr><a href="#" id="host_manage_submit_12"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';


