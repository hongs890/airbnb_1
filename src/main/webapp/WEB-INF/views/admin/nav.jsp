<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>"/>
<c:set var="img" value="${context}/resources/img"/>	
<c:set var="css" value="${context}/resources/css"/>	
<c:set var="js" value="${context}/resources/js"/>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Airbnb</title>
    <!-- Bootstrap Styles-->
    <link href="${css}/bootstrap.css" rel="stylesheet" />
    <!-- FontAwesome Styles-->
    <link href="${css}/font-awesome.css" rel="stylesheet" />
    <!-- Morris Chart Styles-->
    <link href="${css}/morris/morris-0.4.3.min.css" rel="stylesheet" />
    <!-- Custom Styles-->
    <link href="${css}/custom-styles.css" rel="stylesheet" />
    <!-- Google Fonts-->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
</head>
   <nav id="admin_nav" class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">

                    <li>
                        <a class="active-menu" id="admin_main"><i class="fa fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li>
                        <a class="active-menu" href="${context}/admin/list"><i class="fa fa-desktop"></i> List</a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a id="admin_nav_mlist">회원  리스트</a>
                            </li>
                            <li>
                                <a id="admin_nav_hlist">호스팅 리스트</a>
                            </li>
                            <li>
                                <a id="admin_nav_rlist">예약 현황 리스트</a>
                                
                            </li>
                        </ul>
                        
                    </li>
					<li>
                        <a class="active-menu" id="admin_nav_chart"><i class="fa fa-bar-chart-o"></i> Charts</a>
                    </li>
                    <li>
                        <a class="active-menu" id="admin_nav_search"><i class="fa fa-qrcode"></i> Search</a>
                    </li>
                </ul>
            </div>

        </nav>
        <!-- /. NAV SIDE  -->