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
	<h6><a href="${context}/hosting/manage_13">가이드북</a></h6><br>	
</div>
<div id="host_manage_detail_right1">
	<div id="host_manage_detail_right2">
		<div id="host_manage_detail_right2_1">
			<h2><b>요금 설정이 변경되었습니다.</b></h2><br>
			<h5>숙소 관리의 편의를 돕기 위해 요금 및 예약 가능 설정을 달력으로 옮겼습니다.</h5><br>
			<input type="button" value="요금 설정 보기" class="btn btn-success">
		</div>
		<div id="host_manage_detail_right2_2">
			<h6><b>새로운 기능</b></h6>
			<img src="${img}/host_icon_cal.png" alt="" style="margin-right:3%;"/>요금과 예약 가능 설정을 달력에서 관리하세요.<br><br><br>
			<img src="${img}/host_icon_graph.png" alt="" style="margin-right:3%;"/>수요의 변화에 따라 요금이 자동으로 조정되는 새로운 스마트 요금을 사용해 보세요.<br><br><br>
			<a href="#">요금 책정 방법 알아보기</a><hr>
			<a href="${context}/hosting/regist_12"><input type="button" value="수정" class="btn btn-danger" id="host_regist_next"></a>
		</div>
		
	</div>
	<div id="host_manage_detail_right3">
	&nbsp;
	</div>
</div>
</div>