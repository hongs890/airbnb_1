<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<body class="with-new-header fixed-header">
      <div class="smart-banner" aria-hidden="true"></div>
      <div id="header" class="airbnb-header new logged_in is_host">
  <div class="header--sm show-sm" aria-hidden="true">
  <div class="title--sm text-center">
      <button class="btn btn-block search-btn--sm search-modal-trigger " style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        <i class="icon icon-search icon-gray"></i>
        <span class="search-placeholder--sm"> 어디로 가세요?
        </span>
      </button>
      <a href="/" class="header-belo hide">
        <span class="screen-reader-only">에어비앤비</span>
      </a>
  </div>
  <div class="action--sm"></div>
  <nav class="nav--sm" role="navigation"></nav>
  <div class="search-modal-container"></div>
</div>
  <header class="regular-header clearfix hide-sm" id="new-header" role="banner">
   <div class="comp pull-left">
  <div id ="h_logo" class="hdr-btn link-reset belo-container" aria-label="에어비앤비">
    <i class="icon icon-pos--lower  icon-airbnb-alt h2 show-login" style="margin-top:-1.5%"></i>
    <i class="icon icon-pos--lower  icon-airbnb show-logout"></i>
  </div>
</div>
   <div class="comp pull-right show-login">
        <a class="no-crawl hdr-btn link-reset header-avatar-trigger needsclick" rel="nofollow" href="/trips" data-href="/dashboard" data-href-host="/trips">
    <span class="value_name margin-right--tiny hide-md">user</span>
    <div class="media-photo media-round user-profile-image header-icon icon-profile-alt-gray">
    <img width="28" height="28" src="https://a2.muscache.com/im/pictures/0c825300-eb86-4356-a1ac-23b1cb633d04.jpg?aki_policy=profile_small" alt="">
   </div>
  </a>

  <div class="panel  drop-down-menu avatar-tooltip--new">
    <div class="panel-header no-border hide-lg">
      <strong><span class="value_name">user</span></strong>
    </div>
        <a href="/users/edit" class=" panel-body link-reset hover-item no-crawl">
          <div class="hover-item__content">프로필 수정</div>
        </a>
          <a href="/users/notifications" class=" panel-body link-reset hover-item no-crawl">
          <div class="hover-item__content">계정 관리</div>
        </a>
          <a href="/logout" class=" panel-body link-reset hover-item no-crawl">
          <div class="hover-item__content">로그아웃</div>
           </a>
        </div>
   </div>
   <div id="js-header-help-menu"><div class="comp pull-right no-border help-trigger-wrapper no-hover" >
   <span class="margin-right--tiny hide-md">도움말</span><i class="header-icon icon-lifesaver-alt-gray"></i><div class="field-guide panel help-side-panel" ><div class="side-panel-header text-center">
   <a href="#" class="close-button pull-right link-reset" >
   <div class="comp pull-right show-host" >
  <div  class="needsclick host-icon-wrapper no-crawl hdr-btn link-reset js-host-menu-icon"  >
    <span  id="hosting_go2" class="hide-md margin-right--tiny" >호스트</span><i class="header-icon host-icon js-host-icon icon-home-alt-gray">
      <i class="alert-count js-host-item-count listing-count text-center fade in">!</i>
    </i>
    </div>
  <div class="panel  drop-down-menu host-tooltip--new">
    <div class="panel-header no-border hide-lg">
      <span ><strong>호스트</strong></span>
    </div>
    <div class="hover-item panel-body relist-your-space">
      <a href="https://www.airbnb.co.kr/manage-listing/15345840" class="link-reset click-area">
        <div class="listing-image placeholder"></div><div class="cta-container va-container va-container-v">
          <div class="va-middle">
            <div class="cta-text space-5">숙소 등록 완료하기
            </div>
            <div class="cta-text-v3-reactivate hide">재활성화하기
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 58%;">
              </div>
            </div>
          </div>
        </div>
   </a>      
   <div class="close-button hide">
        <a href="#" class="alert-close"></a>
      </div>
    </div>
        <div id="go_dashboard" class=" panel-body link-reset hover-item origin-item js-host-dashboard-link no-crawl">
          <div class="hover-item__content">알림판
            <i class="alert-count js-pending-request-count--inline text-center fade">0</i>
          </div>
        </div>
                <div class=" panel-body link-reset hover-item origin-item js-host-manage-listings-link no-crawl">
          <div id="hosting_manage_1" class="hover-item__content"> 숙소 관리
            <i class="alert-count listing-count listing-count--inline text-center fade in hide">1</i>
          </div></a>
        <div class=" panel-body link-reset hover-item origin-item js-host-list-your-space-link">
          <div id="hosting_regist_1" class="hover-item__content"> 숙소 등록 </div></a>        
          <div class=" panel-body link-reset hover-item origin-item js-host-my-reservations-link no-crawl">
          <div id="booking_item" class="hover-item__content"> 예약 관리  </div></a>
        <div class=" panel-body link-reset hover-item origin-item js-host-transaction-history-link no-crawl">
          <div id="paying_form" class="hover-item__content">대금 수령 내역   </div></a>
         </div>
   </div>
      <div class="comp pull-left back-to-search-results-wrapper"></div>
         <div class="comp search-bar-wrapper" role="search">
            <form action="/s" class="search-form">
        <div class="search-bar">
						<i class="header-icon icon-search-alt-gray search-icon"></i>
						 <input	type="search" placeholder="어디로 가세요?" autocomplete="off" name="location" data-date-placeholder="년/월/일" class="location" />
						<input type="hidden" name="source" value="hdr" />
					</div>
         </form></div>
   </header>
   </div> 