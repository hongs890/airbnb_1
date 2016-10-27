<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>"/>
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<link rel="stylesheet" href="${css}/hosting.css" />
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<div id="host_regist_div_page1">
<div id="host_regist_div_left1">
	<div id="host_regist_div_left4">
		<h1>호스트가 될 준비를 시작해보세요.</h1><br>
		<h6 style="color:grey">1단계</h6><br>
		<h3>회원님의 숙소 유형은 무엇인가요?</h3><br>	
		<select id="host_regist_select1">
			<option>집 전체</option>
			<option>개인실</option>
			<option>다인실</option>
		</select><br>
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
		</select><br><br>
		<h3>숙소의 건물 유형을 알려주세요.</h3><br>
		<select id="host_regist_select1">
			<option>하나를 선택해주세요.</option>
		</select><br><br><hr>
		<a href="${context}/"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_2"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right1">
<img src="${img}/host_regist_1.jpg" alt="" style="margin-top:10%; margin-left:10%;"/>
</div>
</div>