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
		<h2>숙소에 얼마나 많은 인원을 수용할 수 있나요?</h2><br>	
		<input type="text" value="침대 1개" id="host_regist_count">
		<input type="button" value="+" class="btn btn-default" id="host_regist_cal"><input type="button" value="-" class="btn btn-default" id="host_regist_cal"><br><br><br><br><br>
		<h2>욕실은 몇 개인가요?</h2><br>
		<input type="text" value="욕실 1개" id="host_regist_count">
		<input type="button" value="+" class="btn btn-default" id="host_regist_cal"><input type="button" value="-" class="btn btn-default" id="host_regist_cal"><br>
		<br><br><br>
		<hr>
		<a href="${context}/hosting/regist_1"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_3"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" />
			<h5>회원님 숙소의 침대 수와 종류에 따라 몇 명의 인원이 불편함 없이 머물 수 있는지가 결정됩니다.</h5>
		</div>
	</div>
</div>
</div>