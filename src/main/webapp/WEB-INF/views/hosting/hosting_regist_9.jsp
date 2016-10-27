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
		<h2>이름 지정</h2><br>
		<input type="text" placeholder="숙소 제목" id="host_regist_count2"><br>
		<hr>
		<a href="${context}/hosting/regist_8"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_10"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right6">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>주변 숙소의 몇 가지 예를 보여드립니다.</h5><br>
			<div style="float:left; width:50%;">
			<img src="${img}/host_example_1.jpg" alt="" /><br><br><br>
			<img src="${img}/host_example_2.jpg" alt="" /><br><br><br>
			<img src="${img}/host_example_3.jpg" alt="" /><br><br><br>
			</div>
			<div style="float:right; width:50%; margin-top:-7%">
			<h5>고급 스튜디오를 최저가에 @강남역 최고의 위치!!</h5><br>
			<h5>English/中文OK! 1min to subway 3-room huge apartment</h5><br>
			<h5>[Myeongdong] #003 Jongno Hans'house</h5><br>
			</div>
		</div>
	</div>
</div>
</div>