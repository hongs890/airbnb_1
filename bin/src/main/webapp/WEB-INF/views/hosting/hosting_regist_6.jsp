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
		<h2>게스트가 어떤 공간을 사용할 수 있나요?</h2><br>	
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">부엌</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">빨래 - 세탁기</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">빨래 - 건조기</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">주차</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">엘리베이터</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">수영장</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">자쿠지 욕조</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">헬스장</span><br><br>
		<hr>
		<a href="${context}/hosting/regist_5"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_7"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>호스팅하는 공간은 집 안에 있어야 합니다. 집의 일부가 아닌 빨래방이나 주변 시설은 포함하지 마세요. 이웃이 동의하면 수영장이나 자쿠지 등의 단지 공유 시설을 포함할 수 있습니다.</h5><br>

		</div>
	</div>
</div>
</div>