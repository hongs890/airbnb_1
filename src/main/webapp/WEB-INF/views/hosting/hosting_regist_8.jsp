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
<div id="host_regist_div_page5">
<div id="host_regist_div_left3">
	<div id="host_regist_div_left4">
		<h2>숙소 설명을 작성하세요</h2><br>
		<input type="text" placeholder="숙소에서 가까운 곳" id="host_regist_count3"><br><br><br><br><br><br>
		<hr>
		<a href="${context}/hosting/regist_7"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_9"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2_5">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>여기에 작성한 설명이 숙소 페이지 맨 위에 표시됩니다. 
			게스트가 숙소를 검색할 때 일반적으로 궁금해 하는 질문 몇 가지를 제시해 보았습니다. 
			내용은 나중에 수정하거나 추가하실 수 있습니다.</h5><br>
		</div>
	</div>
</div>
</div>