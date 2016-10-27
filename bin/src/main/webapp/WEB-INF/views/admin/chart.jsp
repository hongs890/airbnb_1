<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js" />

<div id="page-wrapper">
	<div id="page-inner">
		<div class="row">
			<div class="col-md-12">
				<h1 class="page-header">
					통계<small>회원 호스팅 예약 관련 통계 자료 </small>
				</h1>
			</div>
		</div>
		<!-- /. ROW  -->
		<div class="row">
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">2016년 월별 회원 가입 현황</div>
					<div class="panel-body">
						<div id="morris-bar-chart"></div>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">2016년 월별 회원 및 호스팅 가입,예약 통계</div>
					<div class="panel-body">
						<div id="morris-area-chart"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /. ROW  -->
		<div class="row">

			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">연도별 회원 및 호스팅 가입 통계</div>
					<div class="panel-body">
						<div id="morris-line-chart"></div>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">순수 회원 및 호스팅 회원 통계</div>
					<div class="panel-body">
						<div id="morris-donut-chart"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /. ROW  --> --%>