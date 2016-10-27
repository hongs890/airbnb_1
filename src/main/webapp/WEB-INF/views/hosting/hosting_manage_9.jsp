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
<div id="host_regist_div_page7">
<div id="host_manage_detail_left1">
	<h5>호스팅</h5>
	<h6><a href="${context}/hosting/manage_2">달력</a></h6>
	<h6><a href="${context}/hosting/manage_3">요금 설정</a></h6>
	<h6><a href="${context}/hosting/manage_4">예약</a></h6>
	<h6><a href="${context}/hosting/manage_5">체크인</a></h6>
	<h6><a href="${context}/hosting/manage_6">예약취소내역</a></h6><br>
	<h5>숙소</h5>
	<h6><a href="${context}/hosting/manage_7">기본 설정</a></h6>
	<h6><a href="${context}/hosting/manage_8">설명</a></h6>
	<h6><a href="${context}/hosting/manage_9">위치</a></h6>
	<h6><a href="${context}/hosting/manage_10">편의시설</a></h6>
	<h6><a href="${context}/hosting/manage_11">사진</a></h6>
	<h6><a href="${context}/hosting/manage_12">숙소 안전</a></h6><br>
	<h5>게스트 자료</h5>
	<div ><h6 id="guidebook_go">가이드북</h6></div><br>	
</div>
<div id="host_manage_detail_right1">
	<div id="host_manage_detail_right2">
		<div id="host_manage_detail_right2_2">
			<h3><b>게스트가 숙소를 찾을 수 있도록 위치 정보를 제공하세요.</b></h3><br>
			<h6>게스트는 이 정보를 활용하여 숙소를 찾습니다.</h6>
			<hr><br>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.800141854769!2d126.94011931519535!3d37.55977223227346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989012a611d1%3A0xc5593fcec0823803!2z7Iug7LSM7Jet!5e0!3m2!1sko!2skr!4v1472798523149" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
			<hr><a href="${context}/hosting/regist_12"><input type="button" value="수정" class="btn btn-danger" id="host_regist_next"></a>
		</div>
	</div>
	<div id="host_manage_detail_right3">
	&nbsp;
	</div>
</div>
</div>