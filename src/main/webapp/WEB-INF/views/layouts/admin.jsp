<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<c:set var="jqgrid" value="${context}/resources/jqgrid"/>
<c:set var="jquery-ui-black" value="${context}/resources/jquery-ui-black"/>
<c:set var="Guriddo_jqGrid_JS" value="${context}/resources/Guriddo_jqGrid_JS"/>
<!doctype html>
<html lang="en">
<head>
<script src="https://www.google.com/jsapi"></script>
	<title><tiles:getAsString name="title"/></title>
	<link rel="stylesheet" href="${css}/application.css" type="text/css"/>
	<link rel="stylesheet" href="${css}/bootstrap.css" type="text/css"/>
	<link rel="stylesheet" href="${css}/custom-styles.css" type="text/css"/>
	<link rel="stylesheet" href="${css}/font-awesome.css" type="text/css"/>
   <link rel="stylesheet" href="${css}/admin/jquery-ui.theme.css" type="text/css" media="screen"/> 
   <link rel="stylesheet" href="${css}/admin/ui.jqgrid.css" type="text/css" media="screen"/> 
   <script src="${js}/jquery-1.10.2.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/free-jqgrid/4.13.4/js/i18n/grid.locale-en.min.js"></script>
<script src="https://cdn.jsdelivr.net/free-jqgrid/4.13.4/js/jquery.jqgrid.min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <!-- Bootstrap Js -->
    <script src="${js}/bootstrap.min.js"></script>
    <!-- Metis Menu Js -->
    <script src="${js}/jquery.metisMenu.js"></script>
 
    <script src="${js}/morris/custom-scripts.js"></script>
<script src="${js}/inchul.js"></script>
<script src="${js}/application.js"></script>
</head>
<body>

	<header>
		<div id="admin_header">
			<tiles:insertAttribute name="header" /> 	
		</div>
	</header>
	<nav>
		<div id="admin_nav">
			<tiles:insertAttribute name="nav" /> 	
		</div>
	</nav>
	<section>
		<article id="admin_article">
			<tiles:insertAttribute name="body" /> 
		</article>
	</section>
	<footer>
		 <div id="admin_footer">
		 	<tiles:insertAttribute name="footer" /> 
		 </div>
	</footer>
</body>


<script type="text/javascript">
	admin.init();
	
</script>

</html>