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
<div id="host_regist_div_page4">
<div id="host_regist_div_left3">
	<div id="host_regist_div_left4">
		<h2>어떤 편의시설을 제공하시나요?</h2><br>	
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
		<h2>안전시설</h2><br>	
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">연기 감지기</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">일산화탄소 감지기</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">구급상자</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">안전 카드</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">소화기</span><br><br>
		<input type="checkbox" id="host_regist_input_box"><span id="host_regist_input_text">침실에 잠금장치 있음</span><br><br>
		<hr>
		<a href="${context}/hosting/regist_4"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_6"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2_3">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>필수품목을 제공하면 게스트가 내 집처럼 편안하게 머물 수 있습니다.<br><br>
			일부 호스트는 조식 또는 커피와 차만 제공하기도 합니다. 필수 사항은 아니지만, 
			이런 서비스를 제공하면 게스트가 보다 환영받는다고 느낄 수 있습니다.</h5><br>
		</div>
	</div>
</div>
</div>