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
<div id="host_regist_div_left5"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>
<div id="host_regist_div_center1">
	<div id="host_regist_div_center2">
		<img alt="" src="${img}/host_regist_right.jpg" style="float:right;">
		<h3>사진</h3><br><br><br><br><br><br><br>사진 등록<br><br><br><br><br><br><br>
		
		<hr>
		<a href="${context}/hosting/regist_6"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev2"></a>
		<a href="${context}/hosting/regist_8"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next2"></a>
	</div>
</div>
<div id="host_regist_div_right5">&nbsp;</div>
</div>