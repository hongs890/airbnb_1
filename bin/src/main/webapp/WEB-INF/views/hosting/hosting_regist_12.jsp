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
<div id="host_regist_div_page1">
<div id="host_regist_div_left3">
	<div id="host_regist_div_left4">
		<h2>게스트가 얼마 동안 숙박할 수 있나요?</h2><br>
		<br><br>
		<input type="text" value="박(최소)" id="host_regist_count">
		<input type="button" value="+" class="btn btn-default" id="host_regist_cal"><input type="button" value="-" class="btn btn-default" id="host_regist_cal"><br><br><br>
		<input type="text" value="박(최대)" id="host_regist_count">
		<input type="button" value="+" class="btn btn-default" id="host_regist_cal"><input type="button" value="-" class="btn btn-default" id="host_regist_cal"><br><br><br><br><br>
		<h5 style="color: grey;">팁: 숙박 기간이 짧으면 예약을 더 많이 받을 수 있지만, 그만큼 예약을 자주 받아야 합니다.</h5><br><br>	
		<hr>
		<a href="${context}/hosting/regist_11"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_13"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2_2">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>temp</h5><br>

		</div>
	</div>
</div>
</div>