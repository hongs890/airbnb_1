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
	<link rel="stylesheet" href="${css}/application.css" type="text/css"/>
	<meta charset="utf-8">
    <link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" media="all" rel="stylesheet" type="text/css" />
	<link href="https://a0.muscache.com/airbnb/static/packages/common-c797852784aa37fdff8ec44a848e3d10.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a2.muscache.com/airbnb/static/dashboard_o2-629472c17db71c87ae78cbd9e08ef9d7.css" media="screen" rel="stylesheet" type="text/css" />
</head>
<body>
	<header>
		<div id="pub_header">
			<tiles:insertAttribute name="header" /> 	
		</div>
	</header>
	<nav>
		<div id="mem_nav">
			<tiles:insertAttribute name="nav"/> 
		</div>
	</nav>
	<article>
		<div id="pub_article">
			<tiles:insertAttribute name="body"/> 
		</div>
	</article>
	<footer>
		 <div id="pub_footer">
		 	<tiles:insertAttribute name="footer" /> 
		 </div>
	</footer>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="${js}/heesun.js"></script>
<script src="${js}/application.js"></script>
<script>
	memApp.init('${pageContext.request.contextPath}');
</script>
</html>