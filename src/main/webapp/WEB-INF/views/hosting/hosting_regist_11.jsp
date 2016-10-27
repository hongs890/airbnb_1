<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<link rel="stylesheet" href="${css}/hosting.css" />
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<div id="host_regist_div_page2">
<div id="host_regist_div_left3">
	<div id="host_regist_div_left4">
		<h2>얼마나 먼 날짜까지 예약할 수 있나요?</h2><br>
		<select id="host_regist_select1">
			<option>항상</option>
			<option>3달</option>
			<option>6달</option>
			<option>1년</option>
			<option>기본적으로 예약 차단</option>
		</select><br><br>
		<h5 style="color: grey;">팁: 호스트 대부분은 최대 6개월간의 달력을 업데이트합니다.</h5><br><br>
		
		<h2>몇 시까지 체크인이 가능한가요?</h2><br>
		<select id="host_regist_select1">
			<option>00:00</option>
			<option>01:00</option>
			<option>02:00</option>
			<option>03:00</option>
			<option>04:00</option>
		</select><br><br>		
		<hr>
		<a href="${context}/hosting/regist_10"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_12"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>temp</h5><br>
		</div>
	</div>
</div>
</div>