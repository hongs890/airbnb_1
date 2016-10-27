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
<div id="host_regist_div_page1">
<div id="host_regist_div_left3">
	<div id="host_regist_div_left4">
		<h2>숙소의 위치를 알려주세요.</h2><br>	
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.800141854769!2d126.94011931519535!3d37.55977223227346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989012a611d1%3A0xc5593fcec0823803!2z7Iug7LSM7Jet!5e0!3m2!1sko!2skr!4v1472798523149" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
		<br><br>
		<h4 style="color:grey;">위치를 변경하려면 핀을 드래그하세요.</h4><br><br><br>
		<hr>
		<a href="${context}/hosting/regist_3"><input type="button" value="뒤로" class="btn btn-info" id="host_regist_prev"></a>
		<a href="${context}/hosting/regist_5"><input type="button" value="다음" class="btn btn-danger" id="host_regist_next"></a>
	</div>
</div>
<div id="host_regist_div_right2_2">
	<div id="host_regist_div_right3">
		<div id="host_regist_div_right4">
			<img src="${img}/host_regist_right.jpg" alt="" /><br><br>
			<h5>정확한 주소는 예약이 확정된 게스트에게만 공개됩니다.</h5><br>
			<img src="${img}/host_regist_map.jpg" alt="" />
		</div>
	</div>
</div>
</div>