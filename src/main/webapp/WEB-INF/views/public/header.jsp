<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<script src="${js}/application.js"></script>
<script src="${js}/hyunwoo.js"></script>
<body class="with-new-header home_view v2 p1 fixed-header">
   <span class="screen-reader-only"> 에어비앤비 </span>
   <div id="header" class="airbnb-header new ">
      <div class="header--sm show-sm" aria-hidden="true">
      <!-- 에어비앤비 로고 -->
         <i class="icon icon-reorder icon-rausch"></i> <span class="screen-reader-only"> 에어비앤비 </span>
       <!--   <div class="title--sm text-center">
            <button class="btn btn-block search-btn--sm search-modal-trigger "
               style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
               <i class="icon icon-search icon-gray"></i> <span class="search-placeholder--sm"> 어디로 가세요? </span>
            </button>
         </div> -->
         <div class="action--sm"></div>
         <nav class="nav--sm" role="navigation"></nav>
         <div class="search-modal-container"></div>
      </div>
      <header class="regular-header clearfix hide-sm" id="new-header"   role="banner">
      
         <div class="comp pull-left" style="margin-bottom:-2%; padding-bottom:-20%;">
            <div  id="h_logo"style="margin-top: 0% auto" class="hdr-btn link-reset belo-container" aria-label="에어비앤비">
             <i class="icon icon-pos--lower icon-airbnb-alt h2 show-login"></i> 
             <i class="icon icon-pos--lower icon-airbnb show-logout"></i>
            </div>
         </div>
         <div class="comp pull-right show-logout"><div id="m_signup" class="hdr-btn link-reset">회원가입</div></div>
         <div class="comp pull-right show-logout"><div id="m_signin" class="hdr-btn link-reset">로그인</div></div>
         <div id="js-header-help-menu"><div class="comp pull-right help-trigger-wrapper no-border background-light-gray" >
         <div  class="hdr-btn js-help-toggle link-reset needsclick">도움말(미구현)<i class="header-icon icon-lifesaver-alt-gray"></i>
               </div>
            </div>
         <div class="comp pull-right hide-host comp-become-a-host ">
            <div  style="margin-top: 0% auto" class="hdr-btn link-reset lys-link js-become-a-host-link comp-become-a-host__link">
            <span id="hosting_go" class="btn btn-small btn-become-a-host"> 호스팅 하기 <i class="icon icon-gift icon-host-referral-gift js-host-referral-gift-icon hide "></i>
            </span>
            </div>
         </div>
         </div>
  	<div class="comp pull-left back-to-search-results-wrapper"></div>
	<div class="comp search-bar-wrapper" role="search">
                <div class="search-bar" id="locationField">
            	<i class="header-icon icon-search-alt-gray search-icon"></i>
                  <input   type="search" placeholder="어디로 가세요?" id="location" name="location" data-date-placeholder="년/월/일" class="location" data-toglle="tooltip" title="국내입력"/>
                   <input type="hidden" name="source" value="hdr" />
             <div id="header-search-settings" class="panel search-settings header-menu">
                  <div><div class="panel-body clearfix">
                    <div class="row row-condensed">
                      <div class="col-sm-12">
                           <div class="row row-condensed input-daterange">
                              <div class="col-sm-6">
                                 <label for="header-search-checkin" class="field-label">
                                    <strong>체크인</strong>
                                 </label>
                                 <input type="text" id="header-search-checkin" name="start" class="checkin ui-datepicker-target" placeholder="년/월/일">
                              </div>
                              <div class="col-sm-6">
                                 <label for="header-search-checkout" class="field-label">
                                    <strong>체크아웃</strong>
                                 </label>
                                 <input type="text" id="header-search-checkout" class="checkout ui-datepicker-target" name="end" placeholder="년/월/일">
                              </div>
                           </div>
                        </div>
                       <div class="col-sm-12 space-top-2">
                           <label for="header-search-guests" class="field-label">
                              <strong>숙박 인원</strong>
                           </label>
                           <div class="select select-block select-large">
                              <select id="guests_top" name="guests">
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
                               <option value="16">숙박 인원 16+명</option>
                               </select>
                              <div>
                                 <div class="GuestPicker hide">
                                    <div class="GuestPickerRow row row-condensed">
                                       <div class="col-sm-8 GuestPickerRow__label">
                                          <strong aria-live="polite">성인 1명</strong>
                                       </div>
                                       <div class="col-sm-4 increment-btn-container">
                                          <div class="increment-btn">
                                             <button class="btn btn-decrement" aria-label="성인 수 줄이기">
                                                <i class="icon icon-minus"></i>
                                             </button>
                                             <button class="btn btn-increment" aria-label="성인 수 늘리기">
                                             <i class="icon icon-add"></i>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="GuestPickerRow row row-condensed">
                                       <div class="col-sm-8 GuestPickerRow__label">
                                          <strong aria-live="polite">어린이 0명</strong>
                                          <div class="pull-right text-muted text-small">2 ~ 12세
                                          </div>
                                       </div>
                                    <div class="col-sm-4 increment-btn-container">
                                       <div class="increment-btn">
                                          <button class="btn btn-decrement" aria-label="어린이 수 줄이기" >
                                             <i class="icon icon-minus"></i>
                                          </button>
                                          <button class="btn btn-increment" aria-label="어린이 수 늘리기" ><i class="icon icon-add"></i></button>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="GuestPickerRow row row-condensed">
                                    <div class="col-sm-8 GuestPickerRow__label">
                                       <strong aria-live="polite">유아 0명</strong>
                                       <div class="pull-right text-muted text-small">2세 미만
                                       </div>
                                    </div>
                                    <div class="col-sm-4 increment-btn-container">
                                       <div class="increment-btn">
                                          <button class="btn btn-decrement" aria-label="유아 수 줄이기">
                                          <i class="icon icon-minus"></i>
                                          </button>
                                          <button class="btn btn-increment" aria-label="유아 수 늘리기">
                                             <i class="icon icon-add"></i>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="GuestPickerFooter text-muted text-small">
                                    <div class="row row-condensed">
                                       <div class="col-sm-9">
                                       </div>
                                       <div class="col-sm-3 text-right GuestPickerFooter__close">
                                          <button class="btn-link" type="button">
                                             <span>닫기</span>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <input type="hidden" name="adults" value="1">
                        <input type="hidden" name="children" value="0">
                        <input type="hidden" name="infants" value="0">
                        <input type="hidden" name="guests" value="1">
                     </div>
                  </div>
                </div>
               <fieldset>
               <div class="panel-header menu-header normal-line-height">
                  <strong><small>
                  <legend id="room-type-legend">숙소 유형</legend></small></strong>
               </div>
            <div class="panel-body">
               <div class="space-4">
                  <label class="checkbox menu-item" for="room_type_0">
                     <input type="checkbox" aria-describedby="room-type-legend" id="room_type_0" name="room_types[]" value="Entire home/apt">
                        <i class="icon icon-entire-place horizontal-margin-medium"></i>
                        <span>집 전체</span>
                  </label>
                  <label class="checkbox menu-item" for="room_type_1">
                     <input type="checkbox" aria-describedby="room-type-legend" id="room_type_1" name="room_types[]" value="Private room">
                        <i class="icon icon-private-room horizontal-margin-medium"></i>
                        <span data-reactid=".0.0.1.0.1.1.0.1.2">개인실</span>
                  </label>
                  <label class="checkbox menu-item" for="room_type_2">
                     <input type="checkbox" aria-describedby="room-type-legend" id="room_type_2" name="room_types[]" value="Shared room">
                     <i class="icon icon-shared-room horizontal-margin-medium"></i>
                     <span>다인실</span>
                  </label>
               </div>
            </div>
         </fieldset>
         <div class="panel-body">
            <span id="submit_head_location" type="submit" class="btn btn-primary btn-block"><i class="icon icon-search"></i>
               <span>숙소 찾기</span>
            </span>
         </div>
     </div>
   		</div>
                           </div>
         </div>
      </header>
       <input type="hidden" id="lng">
 		<input type="hidden" id="lat"> 
   </div>
   <noscript>
      <div class="alert alert-with-icon alert-error no-js-alert">
         <i class="icon alert-icon icon-alert-alt"></i> 죄송합니다. 에어비앤비 웹사이트의 일부는
         자바스크립트가 활성화되어 있지 않으면 제대로 작동하지 않습니다.
      </div>
   </noscript>
   
<script type="text/javascript">
 		  function fillInAddress3() {
 			  // Get the place details from the autocomplete object.
 			  var place = autocomplete3.getPlace();
 			  $('#lat').prop('value',place.geometry.location.lat());
 			  $('#lng').prop('value',place.geometry.location.lng());
 			  console.log(place.formatted_address);
 			 
 			  document.getElementById('header-search-settings').className = 'panel search-settings header-menu shown';
 			  console.log(document.getElementById('header-search-settings').className);
 			  // Get each component of the address from the place details
 			  // and fill the corresponding field on the form.
 			 
 			}
   </script>