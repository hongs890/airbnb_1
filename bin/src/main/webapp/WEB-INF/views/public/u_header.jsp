<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<body class="with-new-header home_view v2 p1 fixed-header">
	<span class="screen-reader-only"> 에어비앤비 </span>
	<div  class="airbnb-header new ">
		<div class="header--sm show-sm" aria-hidden="true">
		<!-- 에어비앤비 로고 -->
			<i class="icon icon-reorder icon-rausch"></i> <span class="screen-reader-only"> 에어비앤비 </span>
			<div class="title--sm text-center">
				<button class="btn btn-block search-btn--sm search-modal-trigger "
					style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
					<i class="icon icon-search icon-gray"></i> <span class="search-placeholder--sm"> 어디로 가세요? </span>
				</button>
			</div>
			<div class="action--sm"></div>
			<nav class="nav--sm" role="navigation"></nav>
			<div class="search-modal-container"></div>
		</div>
		<header class="regular-header clearfix hide-sm" id="new-header"	role="banner">
			<div class="comp pull-left" style="margin-bottom:-2%; padding-bottom:-20%;">
				<div  id="h_logo_u" style="margin-top: 0% auto" class="hdr-btn link-reset belo-container" aria-label="에어비앤비">
				 <i class="icon icon-pos--lower icon-airbnb-alt h2 show-login"></i>
				 <i class="icon icon-pos--lower icon-airbnb show-logout"></i>
				</div>
			</div>
   
   	<div class="comp pull-right show-logout">
   	 <a class="no-crawl hdr-btn link-reset header-avatar-trigger needsclick">
    <span class="value_name margin-right--tiny hide-md">user</span>
    <div class="media-photo media-round user-profile-image header-icon icon-profile-alt-gray">
    <img width="28" height="28" src="https://a2.muscache.com/im/pictures/0c825300-eb86-4356-a1ac-23b1cb633d04.jpg?aki_policy=profile_small" alt="">
   </div>
  </a>
  <div class="panel  drop-down-menu avatar-tooltip--new">
    <div class="panel-header no-border hide-lg">
    </div>
        <div id="m_edit" class=" panel-body link-reset hover-item no-crawl" >
          <a class="hover-item_content"  >프로필 수정</a>
        </div>
        <div class=" panel-body link-reset hover-item no-crawl">
          <a id="m_dashboard" class="hover-item_content">마이페이지</a>
        </div>
        <aside class=" panel-body link-reset hover-item no-crawl">
          <a id="m_inbox" class="hover-item_content">메세지함</a>
        </aside>
        <aside class=" panel-body link-reset hover-item no-crawl">
          <a id="m_account" class="hover-item_content">계좌관리</a>
        </aside>
          <aside  class=" panel-body link-reset hover-item no-crawl">
          <a id="m_logout" class="hover-item_content">로그아웃</a>
           </aside>
        </div>
   </div>
       
			<div id="js-header-help-menu">
			<div class="comp pull-right help-trigger-wrapper no-border background-light-gray" >
			<div  class="hdr-btn js-help-toggle link-reset needsclick">도움말<i class="header-icon icon-lifesaver-alt-gray"></i>
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
				<form action="/s" class="search-form">
					<div class="search-bar">
						<i class="header-icon icon-search-alt-gray search-icon"></i>
						 <input	type="search" placeholder="어디로 가세요?" autocomplete="off" name="location" data-date-placeholder="년/월/일" class="location" />
						<input type="hidden" name="source" value="hdr" />
					</div>
				</form>
			</div>
			</header>
	<noscript>
		<div class="alert alert-with-icon alert-error no-js-alert">
			<i class="icon alert-icon icon-alert-alt"></i> 죄송합니다. 에어비앤비 웹사이트의 일부는
			자바스크립트가 활성화되어 있지 않으면 제대로 작동하지 않습니다.
		</div>
	</noscript>