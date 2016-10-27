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
<div id="host_regist_div_page8">
<div id="host_manage_detail_left1_1">
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
		<div id="host_manage_detail_right2_2">
			<h2><b>숙소</b></h2><br>
			<h4>집 유형</h4>
			<select id="host_regist_select1">
			<option>하나를 선택해주세요.</option>
			</select>
			<h4>숙소 유형</h4>	
			<select id="host_regist_select1">
			<option>집 전체</option>
			<option>개인실</option>
			<option>다인실</option>
			</select><br>
			<h4>수용 인원</h4>
			<select id="host_regist_select1">
			<option>게스트  1명</option>
			<option>게스트  2명</option>
			<option>게스트  3명</option>
			<option>게스트  4명</option>
			<option>게스트  5명</option>
			<option>게스트  6명</option>
			<option>게스트  7명</option>
			<option>게스트  8명</option>
			<option>게스트  9명</option>
			<option>게스트  10명</option>
			<option>게스트  11명</option>
			<option>게스트  12명</option>
			<option>게스트  13명</option>
			<option>게스트  14명</option>
			<option>게스트  15명</option>
		</select>
		</div><hr>
		<div id="host_manage_detail_right2_2">
			<h2><b>침실 및 욕실</b></h2><br>
			<h4>침실 수</h4>
			<select id="host_regist_select1">
			<option>1</option>
			</select>
			<h4>욕실 수</h4>	
			<select id="host_regist_select1">
			<option>1</option>
			</select><br><hr>
			<a href="${context}/hosting/regist_12"><input type="button" value="수정" class="btn btn-danger" id="host_regist_next"></a>
		</div>
	</div>
	<div id="host_manage_detail_right3_1">
	&nbsp;
	</div>
</div>
</div>