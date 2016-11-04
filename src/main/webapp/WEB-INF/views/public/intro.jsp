<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<script src="${js}/application.js "></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<body id="intro" style="width:100%; height:700px;background-image: url(/web/resources/img/public/airIntro.png);background-repeat:no-repeat;background-size:100% 100%;">
<h1 style="padding-top:5%; text-align:center;color:blue">팀장:박승주</h1>
<h3 style="padding-top:5%; text-align:center;color:blue">호스팅:배근홍
검색:이현우
예약:한상호
멤버:최희선
어드민:최인철
main page 구성:최미화
</h3>
<h2 style="margin-top:30% ; text-align:center;color: red">저희는 숙박 공유 사이트 Airbnb를 모델로 만들었고, 상업적인 용도로는 쓰지않습니다.</h2>
</body>
<script>
$('#intro').css('cursor','pointer');
$('#intro').on('click','#nobody',function(){
	location.href=('/web/home')
});
</script>
