<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js" />
<!doctype html>
<html lang="en">
<head>
<link
	href="https://a2.muscache.com/airbnb/static/rooms/index-7374baadc22324be8518327ace801b29.css"
	media="screen" rel="stylesheet" type="text/css" />
<title>Your Listings</title>
</head>
<body>
	<div class="page-container-responsive space-top-4 space-4">


		<div class="row">
			<div class="col-md-3 space-sm-3">
				<ul class="sidenav-list">
					<li><a href="${context}/member/rooms" aria-selected="true" class="sidenav-item">Your
							Listings</a></li>
					<li><a href="#" aria-selected="false"
						class="sidenav-item">Your Reservations</a></li>
					<li><a href="#" aria-selected="false"
						class="sidenav-item">Reservation Requirements</a></li>

					<div class="space-top-4 space-4">
						<a href="#" aria-selected="false" class="btn btn-host">Add
							New Listings</a>
					</div>
				</ul>
			</div>
			<div class="col-md-9">
				<div class="your-listings-flash-container"></div>
				<div class="h3 space-3">You don’t have any listings!</div>
				<p>Make money by renting out your extra space on Airbnb. You’ll
					also get to meet interesting travelers from around the world!</p>
				<a class="btn btn-primary" href="#" id="post-listing-new">
					Post a new listing </a>
			</div>
		</div>
	</div>
</body>
</html>