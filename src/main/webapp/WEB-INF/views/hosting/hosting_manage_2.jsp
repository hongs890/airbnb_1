<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css"/>
<c:set var="js" value="${context}/resources/js"/>
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="${css}/hosting.css" />
<link rel="stylesheet" href="${css}/hosting_clndr.css" />
<link rel="stylesheet" href="${css}/hosting_style.css" />
<link href='//fonts.googleapis.com/css?family=Maven+Pro:700,400' rel='stylesheet' type='text/css'>
<script src="${js}/hosting_jquery-1.11.1.min.js"></script>
<script src="${js}/hosting_responsiveslides.min.js"></script>
<script src="${js}/hosting_underscore-min.js"></script>
<script src= "${js}/hosting_moment-2.2.1.js"></script>
<script src="${js}/hosting_clndr.js"></script>
<script src="${js}/hosting_site.js"></script>
<div id="host_regist_div_page7">
<div id="host_manage_detail_left1">
	<h5>호스팅</h5>
	<h6><a href="${context}/hosting/manage_2">달력</a></h6>
	<h6><a href="${context}/hosting/manage_3">요금 설정</a></h6>
	<h6><a href="${context}/hosting/manage_4">예약</a></h6>
	<h6><a href="${context}/hosting/manage_5">체크인</a></h6>
	<h6><a href="${context}/hosting/manage_6">예약취소내역</a></h6><br>
	<h5>숙소</h5>
	<h6><a href="${context}/hosting/manage_7">기본 설정</a></h6>
	<h6><a href="${context}/hosting/manage_8">설명</a></h6>
	<h6><a href="${context}/hosting/manage_9">위치</a></h6>
	<h6><a href="${context}/hosting/manage_10">편의시설</a></h6>
	<h6><a href="${context}/hosting/manage_11">사진</a></h6>
	<h6><a href="${context}/hosting/manage_12">숙소 안전</a></h6><br>
	<h5>게스트 자료</h5>
	<h6><a href="${context}/hosting/manage_13">가이드북</a></h6><br>	
</div>
<div id="host_manage_detail_right1">
	<div id="host_manage_detail_right2">
			<div class="column_right_grid calender">
                  <div class="cal1"><div class="clndr">
                  <div class="clndr-controls">
                  <div class="clndr-control-button">
                  <p class="clndr-previous-button">previous</p>
                  </div>
                  <div class="month">September 2015</div>
                  <div class="clndr-control-button rightalign">
                  <p class="clndr-next-button">next</p></div>
                  </div><table class="clndr-table" border="0" cellspacing="0" cellpadding="0">
                  <thead><tr class="header-days">
                  <td class="header-day">S</td>
                  <td class="header-day">M</td>
                  <td class="header-day">T</td>
                  <td class="header-day">W</td>
                  <td class="header-day">T</td>
                  <td class="header-day">F</td>
                  <td class="header-day">S</td></tr>
                  </thead>
                  <tbody><tr><td class="day past adjacent-month last-month calendar-day-2015-08-30">
                  <div class="day-contents">30</div></td>
                  <td class="day past adjacent-month last-month calendar-day-2015-08-31">
                  <div class="day-contents">31</div></td>
                  <td class="day past calendar-day-2015-09-01">
                  <div class="day-contents">1</div></td>
                  <td class="day past calendar-day-2015-09-02">
                  <div class="day-contents">2</div></td>
                  <td class="day past calendar-day-2015-09-03">
                  <div class="day-contents">3</div></td>
                  <td class="day past calendar-day-2015-09-04">
                  <div class="day-contents">4</div></td>
                  <td class="day past calendar-day-2015-09-05">
                  <div class="day-contents">5</div></td></tr>
                  <tr><td class="day past calendar-day-2015-09-06">
                  <div class="day-contents">6</div></td>
                  <td class="day past calendar-day-2015-09-07">
                  <div class="day-contents">7</div></td>
                  <td class="day past calendar-day-2015-09-08">
                  <div class="day-contents">8</div></td>
                  <td class="day past calendar-day-2015-09-09">
                  <div class="day-contents">9</div></td>
                  <td class="day past event calendar-day-2015-09-10">
                  <div class="day-contents">10</div></td>
                  <td class="day past event calendar-day-2015-09-11">
                  <div class="day-contents">11</div></td>
                  <td class="day past event calendar-day-2015-09-12">
                  <div class="day-contents">12</div></td></tr>
                  <tr><td class="day past event calendar-day-2015-09-13">
                  <div class="day-contents">13</div></td>
                  <td class="day past event calendar-day-2015-09-14">
                  <div class="day-contents">14</div></td>
                  <td class="day past calendar-day-2015-09-15">
                  <div class="day-contents">15</div></td>
                  <td class="day past calendar-day-2015-09-16">
                  <div class="day-contents">16</div></td>
                  <td class="day past calendar-day-2015-09-17">
                  <div class="day-contents">17</div></td>
                  <td class="day past calendar-day-2015-09-18">
                  <div class="day-contents">18</div></td>
                  <td class="day past calendar-day-2015-09-19">
                  <div class="day-contents">19</div></td></tr>
                  <tr><td class="day past calendar-day-2015-09-20">
                  <div class="day-contents">20</div></td>
                  <td class="day past event calendar-day-2015-09-21">
                  <div class="day-contents">21</div></td>
                  <td class="day past event calendar-day-2015-09-22">
                  <div class="day-contents">22</div></td>
                  <td class="day past event calendar-day-2015-09-23">
                  <div class="day-contents">23</div></td>
                  <td class="day past calendar-day-2015-09-24">
                  <div class="day-contents">24</div></td>
                  <td class="day past calendar-day-2015-09-25">
                  <div class="day-contents">25</div></td>
                  <td class="day today calendar-day-2015-09-26">
                  <div class="day-contents">26</div></td></tr>
                  <tr><td class="day calendar-day-2015-09-27">
                  <div class="day-contents">27</div></td>
                  <td class="day calendar-day-2015-09-28">
                  <div class="day-contents">28</div></td>
                  <td class="day calendar-day-2015-09-29">
                  <div class="day-contents">29</div></td>
                  <td class="day calendar-day-2015-09-30">
                  <div class="day-contents">30</div></td>
                  <td class="day adjacent-month next-month calendar-day-2015-10-01">
                  <div class="day-contents">1</div></td>
                  <td class="day adjacent-month next-month calendar-day-2015-10-02">
                  <div class="day-contents">2</div></td>
                  <td class="day adjacent-month next-month calendar-day-2015-10-03">
                  <div class="day-contents">3</div></td></tr>
                  </tbody></table></div></div>
			</div>
	</div>
	<div id="host_manage_detail_right3">
		<div id="host_manage_detail_right4">
			<h4><b>예약 불가능일자 설정</b></h4><br>
			<h5>시작일자</h5>
			<input type="text">
			<h5>종료일자</h5>
			<input type="text"><br>
		</div>
	</div>
</div>
</div>
	