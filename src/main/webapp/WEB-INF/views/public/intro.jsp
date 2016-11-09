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
<h1 style="padding-top:2%;text-align:center;color:blue;">
프로젝트 참가자</h1>
<h3 style="padding-top:2%; text-align:center;color:blue;">
PL:박승주</br></br>
호스팅:배근홍
검색:이현우
예약:한상호</br></br>
멤버:최희선
어드민:최인철
가이드북:오승준
퍼블리셔:최미화</br></br>
</h3>
<h3 style="text-align:center;">클릭시 메인화면이동!!</br>
(사용자ID:t 사용자비번:1)</br>
(어드민:admin 관리자비번:1)</h3>
<h2 style="margin-top:5% ; text-align:center;color: red">저희는 숙박 공유 사이트 <a href=https://www.airbnb.co.kr/>Airbnb</a>를 모델로 만들었고, 상업적인 용도로는 쓰지않습니다.</h2>
</body>
<script>
$('#intro').css('cursor','pointer');
$('#intro').on('click','#nobody',function(){
	location.href=('/web/home')
});
</script>
