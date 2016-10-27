<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<script type="text/template" id="qq-template-gallery">
        <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">
            <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">
                <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>
            </div>
            <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>
                <span class="qq-upload-drop-area-text-selector"></span>
            </div>
            <div class="qq-upload-button-selector qq-upload-button">
                <div>Upload a file</div>
            </div>
            <span class="qq-drop-processing-selector qq-drop-processing">
                <span>Processing dropped files...</span>
                <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>
            </span>
            <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">
                <li>
                    <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>
                    <div class="qq-progress-bar-container-selector qq-progress-bar-container">
                        <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>
                    </div>
                    <span class="qq-upload-spinner-selector qq-upload-spinner"></span>
                    <div class="qq-thumbnail-wrapper">
                        <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>
                    </div>
                    <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>
                    <button type="button" class="qq-upload-retry-selector qq-upload-retry">
                        <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>
                        Retry
                    </button>

                    <div class="qq-file-info">
                        <div class="qq-file-name">
                            <span class="qq-upload-file-selector qq-upload-file" id="host_upload_img"></span>
                            <span class="qq-edit-filename-icon-selector qq-edit-filename-icon" aria-label="Edit filename"></span>
                        </div>
                        <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">
                        <span class="qq-upload-size-selector qq-upload-size"></span>
                        <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">
                            <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>
                        </button>
                        <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">
                            <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>
                        </button>
                        <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">
                            <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>
                        </button>
                    </div>
                </li>
            </ul>

            <dialog class="qq-alert-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Close</button>
                </div>
            </dialog>

            <dialog class="qq-confirm-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">No</button>
                    <button type="button" class="qq-ok-button-selector">Yes</button>
                </div>
            </dialog>
            <dialog class="qq-prompt-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <input type="text">
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Cancel</button>
                    <button type="button" class="qq-ok-button-selector">Ok</button>
                </div>
            </dialog>
        </div>
    </script>
</head>
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
				<div  id="h_logo_u" style="margin-top: 0% auto" class="hdr-btn link-reset belo-container cursor" aria-label="에어비앤비">
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
				<div class="panel  drop-down-menu avatar-tooltip--new">
    <div class="panel-header no-border hide-lg">
    </div>
        <div id="m_edit" class=" panel-body link-reset hover-item no-crawl" >
          <a class="hover-item_content"  id="hosting_regist_1">호스팅 등록</a>
        </div>
        <div class=" panel-body link-reset hover-item no-crawl">
          <a id="m_dashboard" class="hosting_main">호스팅 관리</a>
        </div>
        <aside class=" panel-body link-reset hover-item no-crawl">
          <a id="m_inbox" class="hover-item_content">임시3</a>
        </aside>
        <aside class=" panel-body link-reset hover-item no-crawl">
          <a id="m_account" class="hover-item_content">임시완4</a>
        </aside>
          <aside  class=" panel-body link-reset hover-item no-crawl">
          <a id="m_logout" class="hover-item_content">임시5</a>
           </aside>
        </div>
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
