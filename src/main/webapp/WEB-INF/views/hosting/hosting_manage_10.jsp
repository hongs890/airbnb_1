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
<div id="host_regist_div_page9">
<div id="host_manage_detail_left1_2">
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
			<h3><b>여행객들에게 회원님의 숙소에 대해서 알려주세요.</b></h3><br>
			<h6>에어비앤비에 등록된 모든 숙소는 각자의 개성이 있습니다. 회원님 숙소의 장점을 부각시켜 회원님 지역에서 머물 예정인 게스트에게 숙소를 어필하세요.</h6>
			<hr><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">필수 품목</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">무선인터넷</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">샴푸</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">옷장/서랍장</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">TV</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">난방</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">에어컨</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">조식,커피,차</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">책상/작업공간</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">벽난로</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">다리미</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">헤어 드라이기</span><br><br>
			<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">집에서 키우는 반려동물</span><br><br>
			<hr><a href="${context}/hosting/regist_12"><input type="button" value="수정" class="btn btn-danger" id="host_regist_next"></a>
		</div>
	</div>
	<div id="host_manage_detail_right3_2">
	&nbsp;
	</div>
</div>
</div>