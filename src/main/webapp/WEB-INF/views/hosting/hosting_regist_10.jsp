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
		<h2>게스트가 지켜야 할 숙소 이용규칙을 정하세요</h2><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">어린이(2~12세) 숙박에 적합함</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">유아(2세 미만) 숙박에 적합함 </span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">반려동물 동반에 적합함 </span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">흡연 가능 </span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">행사나 파티 허용 </span><br><br>
		<h2>기타 규칙 추가하기</h2><br>
		<input type="text" placeholder="그 밖에 게스트가 알아두어야 하는 사항" id="host_regist_count2">
		<hr>
		<a href="${context}/hosting/regist_9"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_11"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>에어비앤비의 필수 요건을 충족하고 숙소 이용규칙에 동의해야 숙소를 예약할 수 있습니다.
			즉시 예약으로 숙소를 예약한 게스트가 숙박 전이나 도중에 숙소 이용규칙을 어기면 페널티 없이 예약을 취소할 수 있습니다.</h5><br>
		</div>
	</div>
</div>
</div>