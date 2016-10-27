<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<!doctype html>
<html lang="en">
<head>
	<title><tiles:getAsString name="title"/></title>
	 <!-- 공통 css -->
	<link rel="stylesheet" href="${css}/application.css" type="text/css"/>
	  <link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a1.muscache.com/airbnb/static/p1/main-98647fa0df25654edefa1bcc99c20a4f.css" media="screen" rel="stylesheet" type="text/css" />
    <!-- 호스팅 css -->
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" href="${css}/hosting/hosting.css" />
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
   <!-- 예약 css --> 

</head>
<body>
	<header>
		<div id="pub_header">
			<tiles:insertAttribute name="header" /> 	
		</div>
	</header>
	<section>
		<article id="pub_article">
			<tiles:insertAttribute name="body" /> 
		</article>
	</section> 
	<footer>
		 <div id="pub_footer">
		 	<tiles:insertAttribute name="footer" /> 
		 </div>
	</footer>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="${js}/application.js"></script>
<script src="${js}/sangho.js"></script>
<script src="${js}/heesun.js"></script>
<script src="${js}/inchul.js"></script>
<script src="${js}/geunhong.js"></script>

<script src="${js}/seungjun.js"></script>
<%-- <script src="${js}/hyunwoo.js"></script>
<script src="${js}/mihwa.js"></script> --%>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"  integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script>
	app.init('${pageContext.request.contextPath}');
</script>
</html>