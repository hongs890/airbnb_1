<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<html lang="ko" xmlns:fb="http://ogp.me/ns/fb#">
    <meta charset="utf-8">
<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://a1.muscache.com/airbnb/static/p1/main-98647fa0df25654edefa1bcc99c20a4f.css" media="screen" rel="stylesheet" type="text/css" />
	<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <style>
      #locationField, #controls {
        position: relative;
        width: 480px;
      }
      #autocomplete {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 99%;
      }
      .label {
        text-align: right;
        font-weight: bold;
        width: 100px;
        color: #303030;
      }
      #address {
        border: 1px solid #000090;
        background-color: #f0f0ff;
        width: 480px;
        padding-right: 2px;
      }
      #address td {
        font-size: 10pt;
      }
      .field {
        width: 99%;
      }
      .slimField {
        width: 80px;
      }
      .wideField {
        width: 200px;
      }
      #locationField {
        height: 20px;
        margin-bottom: 2px;
      }
    </style>



<link rel="stylesheet" href="${css}/datepicker/bootstrap-datepicker.css" />

<div style="margin: 0 auto;width: 100%;text-align: center; position: relative;">
<video autoplay="" loop="" data-wow-delay="0.5s" style="width: 100%; height:600px; object-fit:fill; text-align: center;">
<source src="https://a0.muscache.com/airbnb/static/P1-background-vid-compressed-2.mp4" type="video/mp4">
</video>
 <div id="search-bar-container" class="hero__content-footer hide-sm">
   <div class="page-container-responsive search-bar-responsive-container">
   <div id="searchbar">
   <div class="searchbar row">
   <form id="searchbar-form" action="/s">
   <div class="searchbar__inputs-wrapper col-sm-10" >
   <div class="row">
   <div id="locationField" style="display: inline;">
   <label class="searchbar__location col-md-4 col-lg-6">
   <span class="screen-reader-only">어디로 가세요?</span>
   <input id="autocomplete" type="text" onFocus="geolocate()" class="input-large input-contrast" name="autocomplete" placeholder="어디로 가세요?" />
   </label>
   </div>
   <div class="input-daterange">
   <label class="searchbar__checkin col-md-3 col-lg-2">
   <span class="screen-reader-only">체크인</span>
   <input id="checkin" type="text" class="checkin input-large input-contrast" name="start" placeholder="체크인" /></label>
   
   <label class="searchbar__checkout col-md-3 col-lg-2">
   <span class="screen-reader-only">체크아웃</span>
   <input id="checkout" type="text" class="checkout input-large input-contrast" name="end"placeholder="체크아웃" /></label>
   </div>
   <label class="searchbar__guests col-md-2">
   <span class="screen-reader-only">게스트 수</span>
   <div class="select select-block select-large">
   <select id="guests" name="guests">
   <option value="1">숙박 인원 1명</option>
   <option value="2">숙박 인원 2명</option>
   <option value="3">숙박 인원 3명</option>
   <option value="4">숙박 인원 4명</option>
   <option value="5">숙박 인원 5명</option>
   <option value="6">숙박 인원 6명</option>
   <option value="7">숙박 인원 7명</option>
   <option value="8">숙박 인원 8명</option>
   <option value="9">숙박 인원 9명</option>
   <option value="10">숙박 인원 10명</option>
   <option value="11">숙박 인원 11명</option>
   <option value="12">숙박 인원 12명</option>
   <option value="13">숙박 인원 13명</option>
   <option value="14">숙박 인원 14명</option>
   <option value="15">숙박 인원 15명</option>
   <option value="16">숙박 인원 16+명</option></select></div></label></div></div></form>
   <div class="searchbar__submit-wrapper col-sm-2">
   <button id="submit_location" type="submit" class="searchbar__submit btn btn-primary btn-block btn-large">
   <span class="searchbar__submit-text">숙소 검색</span>
   </button></div></div></div></div></div>
   
   
</div>
 <div align="center">
 <div style="padding-top:100px;"><h2 style = "color:brown; font-style: italic;">여행은 살아보는 거야</h2><br></br>
<h3>191개 이상 국가의 현지 대표 호스트의 집을 예약하고 살아보는 여행을 경험해 보세요.</h3></div><br>
<img src="${img}/public/room1.jpg" id="b_detail1" alt="Bangkok_room" style="width:25%;height:500px;" >
 <img src="${img}/public/room2.jpg" id="b_detail2" alt="Europe_room" style="width:25%;height:500px;">
 <img src="${img}/public/room3.jpg" id="b_detail3" alt="Paris_room" style="width:25%;height:500px;">
 </div><br>
<div align="center" style="width:100%;height:1200px;">
<div style="padding-top:100px;">
<h2 style = "font-style: italic;">두근두근 세계 여행</h2><br></br>
<h4>세계 곳곳을 누벼 보세요</h4></div><br>
<img src="${img}/public/sweden.jpg" id="b_main1" alt="Bangkok" style="width:50%;height:400px;margin-bottom:0 auto">
<img src="${img}/public/paris.jpg" id="b_main2" alt="Paris" style="width:25%;height:400px;"><br>
<img src="${img}/public/osaka.jpg" id="b_main3" alt="Osaka" style="width:25%;height:400px;"> 
<img src="${img}/public/bangkok.jpg" id="b_main4" alt="Bangkok" style="width:25%;height:400px;"> 
 <img src="${img}/public/london.jpg" id="b_main5" alt="London" style="width:25%;height:400px;"> 
  </div>
  <div align="center">
  <div style="padding-bottom: 100px;">
  <h2 style = "font-style: italic;">가이드북</h2><br></br>
<h4>가고 싶은 도시의 명소를 확인하세요!</h4><br>
  <img src="${img}/public/seoul.jpg" id="g_main1" alt="seoul" style="width:25%;height:400px;"> 
 <img src="${img}/public/busan.jpg" id="g_main2" alt="busan" style="width:25%;height:400px;"> 
 <img src="${img}/public/incheon.jpg" id="g_main3" alt="incheon" style="width:25%;height:400px;"> 
 <input type="hidden" id="lat" />
 <input type="hidden" id="lng" />
 </div>
 </div>


    <script src="${js}/hyunwoo.js"></script>
	<script type="text/javascript">
		$('.input-daterange').datepicker({
		    language: "kr",
			format: "yyyy/mm/dd",
		    startDate: "+0d"
		});
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
		      {types: ['geocode']});

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
	</script>
 </html>

