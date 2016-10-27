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
<div id="host_regist_div_page3">
<div id="host_regist_div_left3">
	<div id="host_regist_div_left4">
		<h2>숙소의 위치를 알려주세요.</h2><br>	
		<h4>국가</h4>
		<select id="host_regist_select1">
			<option>한국</option>
		</select><br><br>
		<div style="float:left; width:50%;">
			<h4>도시</h4>
			<input type="text" value="서울특별시" id="host_regist_count2">
		</div>
		<div style="float:left; width:50%;">
			<h4>시 / 군</h4>
			<input type="text" value="" placeholder="예) 강남구" id="host_regist_count2">
		</div><br><br><br><br><br>
		<h4>도로명 / 건물번호 / 아파트 이름 / 건물 이름</h4>
		<input type="text" placeholder="예) 언주로 406" id="host_regist_count2"><br><br><br>
		<h4>빌딩 번호, 빌딩/아파트 이름(및 호실)</h4>
		<input type="text" placeholder="예) 35동 4층 407호" id="host_regist_count2"><br><br><br>
		<h4>우편번호</h4>
		<input type="text" placeholder="예) 135-919" id="host_regist_count2"><br><br><br>
		<hr>
		<a href="${context}/hosting/regist_2"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_4"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2_1">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>정확한 주소는 예약이 확정된 게스트에게만 공개됩니다.</h5><br>
			<img src="${img}/host_regist_map.jpg" alt="" />
		</div>
	</div>
</div>
</div>