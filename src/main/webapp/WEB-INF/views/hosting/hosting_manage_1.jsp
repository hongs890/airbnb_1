<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css"/>
<c:set var="js" value="${context}/resources/js"/>
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="${css}/hosting.css" />
<div id="host_regist_div_page6">
<div id="host_manage_div_left1">
	<div id="host_manage_div_left2">
		<h4><b>숙소 목록</b></h4><br>
		<h4>예약 관리</h4>
		<h4>예약 필수 조건</h4><br>
		<input type="button" value="새로운 숙소 추가" class="btn btn-primary">
	</div>
</div>
<div id="host_manage_div_right1">
	<div id="host_manage_div_right2">
		<h6 style="padding-left:3%;">운영 중</h6>
	</div>
		<div id="host_manage_div_right3">
	 		<div id="host_manage_div_right4">
				<img src="${img}/hosting/host_main.jpg" alt="" style="width:100%; height:200px;">
			</div>
			<div id="host_manage_div_right5">
				<h6><b>숙소 타이틀</b></h6><br>
				<h6>숙소 주소</h6>
				<h6>최종 업데이트 : 2016년 10월 11일</h6><br>
				<a href="${context}/hosting/manage_2"><input type="button" value="달력 관리 및 설정" class="btn btn-default"></a>
				<input type="button" value="미리보기" class="btn btn-default">
			</div> 
		</div>
</div>
</div>