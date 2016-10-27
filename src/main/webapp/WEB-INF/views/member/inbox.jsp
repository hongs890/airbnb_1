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
<title>Inbox</title>
<link href="https://a0.muscache.com/airbnb/static/threads-23739502f63a2c47290664ebfb93b415.css" media="screen" rel="stylesheet" type="text/css" /><link href="https://a0.muscache.com/airbnb/static/cohosting/cohost_intro_banner-098855ecb44b7df08cf1a9fd27a673a0.css" media="screen" rel="stylesheet" type="text/css" />


    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="image_src" href="https://a2.muscache.com/airbnb/static/logos/belo-200x200-4d851c5b28f61931bf1df28dd15e60ef.png">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Airbnb">
    
     <meta name="mobile-web-app-capable" content="yes">

    <meta name="theme-color" content="#f5f5f5">

    <link rel="apple-touch-icon" href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png" />
<link rel="apple-touch-icon" sizes="76x76" href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png" />
<link rel="apple-touch-icon" sizes="120x120" href="https://a1.muscache.com/airbnb/static/icons/apple-touch-icon-120x120-52b1adb4fe3a8f825fc4b143de12ea4b.png" />
<link rel="apple-touch-icon" sizes="152x152" href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-152x152-7b7c6444b63d8b6ebad9dae7169e5ed6.png" />
<link rel="apple-touch-icon" sizes="180x180" href="https://a2.muscache.com/airbnb/static/icons/apple-touch-icon-180x180-bcbe0e3960cd084eb8eaf1353cf3c730.png" />
<link rel="icon" sizes="192x192" href="https://a1.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" />
<link rel="shortcut icon" sizes="76x76" type="image/x-icon" href="https://a1.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico" />
    
</head>
<body>
	<div data-hypernova-key="inboxbundlejs">
		<div id="inbox-container"
			class="page-container-responsive page-container-inbox space-7 space-top-7"
			data-reactid=".2eampc3lkw" data-react-checksum="1992513760">
			<div class="row inbox-nav" data-reactid=".2eampc3lkw.0">
				<div class="col-sm-12" data-reactid=".2eampc3lkw.0.0">
					<div class="row" data-reactid=".2eampc3lkw.0.0.0">
						<div class="col-sm-12 col-md-5 space-1"
							data-reactid=".2eampc3lkw.0.0.0.1">
							<div class="select select-large inbox-dropdown"
								data-reactid=".2eampc3lkw.0.0.0.1.0">
								<select data-reactid=".2eampc3lkw.0.0.0.1.0.0"><option
										selected="" value="all"
										data-reactid=".2eampc3lkw.0.0.0.1.0.0.0">All Messages
										(6)</option>
									<option value="starred"
										data-reactid=".2eampc3lkw.0.0.0.1.0.0.1:$starred">Starred
										(0)</option>
									<option value="unread"
										data-reactid=".2eampc3lkw.0.0.0.1.0.0.1:$unread">Unread
										(1)</option>
									<option value="reservations"
										data-reactid=".2eampc3lkw.0.0.0.1.0.0.1:$reservations">Reservations
										(6)</option>
									<option value="pending_requests"
										data-reactid=".2eampc3lkw.0.0.0.1.0.0.1:$pending_requests">Pending
										Requests (0)</option>
									<option value="hidden"
										data-reactid=".2eampc3lkw.0.0.0.1.0.0.1:$hidden">Archived
										(0)</option></select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="" data-reactid=".2eampc3lkw.1">
				<div class="panel" data-reactid=".2eampc3lkw.1.0">
					<ul class="list-layout" data-reactid=".2eampc3lkw.1.0.0">
						<li class="panel-body thread"
							data-reactid=".2eampc3lkw.1.0.0.0:$172155785"><div
								class="row" data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0">
								<div class="col-sm-9 col-md-3 thread-author"
									data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0">
									<div class="row row-table"
										data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0.0">
										<div class="thread-avatar col-md-5"
											data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0.0.0">
											<a class="" href="/users/show/863155"
												data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0.0.0.0"><img
												src="https://a1.muscache.com/im/users/863155/profile_pic/1311564603/original.jpg?aki_policy=profile_small"
												alt="Ajit" height="50" width="50"
												class="media-round media-photo"
												data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0.0.0.0.0" /></a>
										</div>
										<div class="col-sm-7 thread-name text-truncate"
											data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0.0.1">
											<div data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0.0.1.0">Ajit</div>
											<time class="thread-date"
												data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.0.0.1.1">Feb
												16</time>
										</div>
									</div>
								</div>
								<a href="/z/q/172155785"
									class="thread-link link-reset text-muted"
									data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.1"><div
										class="col-sm-7 col-md-5 col-lg-6 thread-body"
										data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.1.0">
										<span class="thread-subject"
											data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.1.0.0">Oknp.
											Sorry to hear about that. :( You were going to be my 1st ev…</span>
										<div class="thread__listing text-muted show-lg"
											data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.1.0.1">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.1.0.1.0">Norwalk
												Lane, Austin, TX</span><span
												data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.1.0.1.1">
												(Mar 9 - 16, 2016)</span>
										</div>
									</div></a>
								<div class="col-sm-7 col-md-4 col-lg-3 thread-label"
									data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2">
									<div class="row"
										data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0">
										<div class="col-sm-12 col-md-6"
											data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.0">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.0.0"><span
												class="label label-gray label-info thread-status--has-tooltip"
												id="thread-172155785-status"
												data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.0.0.0">Canceled</span>
											<noscript
													data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.0.0.1"></noscript></span>
											<div class="hide-sm"
												data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.0.1">$1588</div>
										</div>
										<div class="col-sm-6 options hide-sm"
											data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1">
											<ul class="thread-actions list-unstyled"
												data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0">
												<li class="space-1"
													data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.0"><div
														class="thread-action thread-action-star"
														data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.0.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.0.0.0">
															<i class="icon icon-star-alt icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.0.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.0.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.0.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.0.0.0.2.0">Star</span></span>
														</button>
													</div></li>
												<li
													data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.1"><div
														class="thread-action thread-action-archive"
														data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.1.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.1.0.0">
															<i class="icon icon-archive icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.1.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.1.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.1.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$172155785.0.2.0.1.0.1.0.0.2.0">Archive</span></span>
														</button>
													</div></li>
											</ul>
										</div>
									</div>
								</div>
							</div></li>
						<li class="panel-body thread"
							data-reactid=".2eampc3lkw.1.0.0.0:$166764939"><div
								class="row" data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0">
								<div class="col-sm-9 col-md-3 thread-author"
									data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0">
									<div class="row row-table"
										data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0.0">
										<div class="thread-avatar col-md-5"
											data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0.0.0">
											<a class="" href="/users/show/15396185"
												data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0.0.0.0"><img
												src="https://a0.muscache.com/im/users/15396185/profile_pic/1400523583/original.jpg?aki_policy=profile_small"
												alt="Richard" height="50" width="50"
												class="media-round media-photo"
												data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0.0.0.0.0" /></a>
										</div>
										<div class="col-sm-7 thread-name text-truncate"
											data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0.0.1">
											<div data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0.0.1.0">Richard</div>
											<time class="thread-date"
												data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.0.0.1.1">Feb
												09</time>
										</div>
									</div>
								</div>
								<a href="/z/q/166764939"
									class="thread-link link-reset text-muted"
									data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.1"><div
										class="col-sm-7 col-md-5 col-lg-6 thread-body"
										data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.1.0">
										<span class="thread-subject"
											data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.1.0.0">:)</span>
										<div class="thread__listing text-muted show-lg"
											data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.1.0.1">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.1.0.1.0">Angell
												Street, Providence, RI</span><span
												data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.1.0.1.1">
												(Feb 4 - 8, 2016)</span>
										</div>
									</div></a>
								<div class="col-sm-7 col-md-4 col-lg-3 thread-label"
									data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2">
									<div class="row"
										data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0">
										<div class="col-sm-12 col-md-6"
											data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.0">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.0.0"><span
												class="label label-green label-success thread-status--has-tooltip"
												id="thread-166764939-status"
												data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.0.0.0">Accepted</span>
											<noscript
													data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.0.0.1"></noscript></span>
											<div class="hide-sm"
												data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.0.1">$567</div>
										</div>
										<div class="col-sm-6 options hide-sm"
											data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1">
											<ul class="thread-actions list-unstyled"
												data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0">
												<li class="space-1"
													data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.0"><div
														class="thread-action thread-action-star"
														data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.0.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.0.0.0">
															<i class="icon icon-star-alt icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.0.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.0.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.0.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.0.0.0.2.0">Star</span></span>
														</button>
													</div></li>
												<li
													data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.1"><div
														class="thread-action thread-action-archive"
														data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.1.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.1.0.0">
															<i class="icon icon-archive icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.1.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.1.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.1.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166764939.0.2.0.1.0.1.0.0.2.0">Archive</span></span>
														</button>
													</div></li>
											</ul>
										</div>
									</div>
								</div>
							</div></li>
						<li class="panel-body thread"
							data-reactid=".2eampc3lkw.1.0.0.0:$166762954"><div
								class="row" data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0">
								<div class="col-sm-9 col-md-3 thread-author"
									data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0">
									<div class="row row-table"
										data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0.0">
										<div class="thread-avatar col-md-5"
											data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0.0.0">
											<a class="" href="/users/show/1302156"
												data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0.0.0.0"><img
												src="https://a2.muscache.com/im/pictures/cb376bbf-677e-499a-8d2a-16e14c8e883c.jpg?aki_policy=profile_small"
												alt="Elizabeth" height="50" width="50"
												class="media-round media-photo"
												data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0.0.0.0.0" /></a>
										</div>
										<div class="col-sm-7 thread-name text-truncate"
											data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0.0.1">
											<div data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0.0.1.0">Elizabeth</div>
											<time class="thread-date"
												data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.0.0.1.1">Jan
												20</time>
										</div>
									</div>
								</div>
								<a href="/z/q/166762954"
									class="thread-link link-reset text-muted"
									data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.1"><div
										class="col-sm-7 col-md-5 col-lg-6 thread-body"
										data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.1.0">
										<span class="thread-subject"
											data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.1.0.0">Hi
											I&#x27;m a Brown alum visiting for recruiting events for
											(SENSITIVE…</span>
										<div class="thread__listing text-muted show-lg"
											data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.1.0.1">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.1.0.1.0">Benefit
												Street, Providence, RI</span><span
												data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.1.0.1.1">
												(Feb 4 - 8, 2016)</span>
										</div>
									</div></a>
								<div class="col-sm-7 col-md-4 col-lg-3 thread-label"
									data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2">
									<div class="row"
										data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0">
										<div class="col-sm-12 col-md-6"
											data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.0">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.0.0"><span
												class="label label-gray label-info thread-status--has-tooltip"
												id="thread-166762954-status"
												data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.0.0.0">Canceled</span>
											<noscript
													data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.0.0.1"></noscript></span>
											<div class="hide-sm"
												data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.0.1">$480</div>
										</div>
										<div class="col-sm-6 options hide-sm"
											data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1">
											<ul class="thread-actions list-unstyled"
												data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0">
												<li class="space-1"
													data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.0"><div
														class="thread-action thread-action-star"
														data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.0.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.0.0.0">
															<i class="icon icon-star-alt icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.0.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.0.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.0.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.0.0.0.2.0">Star</span></span>
														</button>
													</div></li>
												<li
													data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.1"><div
														class="thread-action thread-action-archive"
														data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.1.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.1.0.0">
															<i class="icon icon-archive icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.1.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.1.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.1.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$166762954.0.2.0.1.0.1.0.0.2.0">Archive</span></span>
														</button>
													</div></li>
											</ul>
										</div>
									</div>
								</div>
							</div></li>
						<li class="panel-body thread thread-unread"
							data-reactid=".2eampc3lkw.1.0.0.0:$97044264"><div
								class="row" data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0">
								<div class="col-sm-9 col-md-3 thread-author"
									data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0">
									<div class="row row-table"
										data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0">
										<div class="thread-avatar col-md-5"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0.0">
											<a class="" href="/users/show/2702141"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0.0.0"><img
												src="https://a2.muscache.com/im/users/2702141/profile_pic/1442827721/original.jpg?aki_policy=profile_small"
												alt="Christiane" height="50" width="50"
												class="media-round media-photo"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0.0.0.0" /></a>
										</div>
										<div class="col-sm-7 thread-name text-truncate"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0.1">
											<div data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0.1.0">
												<strong
													data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0.1.0.0">Christiane</strong>
											</div>
											<time class="thread-date"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.0.0.1.1">06/07/2015</time>
										</div>
									</div>
								</div>
								<a href="/z/q/97044264" class="thread-link link-reset"
									data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.1"><div
										class="col-sm-7 col-md-5 col-lg-6 thread-body"
										data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.1.0">
										<span class="thread-subject thread-subject--unread"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.1.0.0">Hi!
											I&#x27;m on the way and will be there in 15</span>
										<div class="thread__listing text-muted show-lg"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.1.0.1">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.1.0.1.0">West
												15th Street, New York, NY</span><span
												data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.1.0.1.1">
												(Jun 7 - 12, 2015)</span>
										</div>
									</div></a>
								<div class="col-sm-7 col-md-4 col-lg-3 thread-label"
									data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2">
									<div class="row"
										data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0">
										<div class="col-sm-12 col-md-6"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.0">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.0.0"><span
												class="label label-green label-success thread-status--has-tooltip"
												id="thread-97044264-status"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.0.0.0">Accepted</span>
											<noscript
													data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.0.0.1"></noscript></span>
											<div class="hide-sm"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.0.1">$1724</div>
										</div>
										<div class="col-sm-6 options hide-sm"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1">
											<ul class="thread-actions list-unstyled"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0">
												<li class="space-1"
													data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.0"><div
														class="thread-action thread-action-star"
														data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.0.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.0.0.0">
															<i class="icon icon-star-alt icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.0.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.0.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.0.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.0.0.0.2.0">Star</span></span>
														</button>
													</div></li>
												<li data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.1"><div
														class="thread-action thread-action-archive"
														data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.1.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.1.0.0">
															<i class="icon icon-archive icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.1.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.1.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.1.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044264.0.2.0.1.0.1.0.0.2.0">Archive</span></span>
														</button>
													</div></li>
											</ul>
										</div>
									</div>
								</div>
							</div></li>
						<li class="panel-body thread"
							data-reactid=".2eampc3lkw.1.0.0.0:$97044261"><div
								class="row" data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0">
								<div class="col-sm-9 col-md-3 thread-author"
									data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0">
									<div class="row row-table"
										data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0.0">
										<div class="thread-avatar col-md-5"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0.0.0">
											<a class="" href="/users/show/15447043"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0.0.0.0"><img
												src="https://a2.muscache.com/im/users/15447043/profile_pic/1401289639/original.jpg?aki_policy=profile_small"
												alt="Elnaz" height="50" width="50"
												class="media-round media-photo"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0.0.0.0.0" /></a>
										</div>
										<div class="col-sm-7 thread-name text-truncate"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0.0.1">
											<div data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0.0.1.0">Elnaz</div>
											<time class="thread-date"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.0.0.1.1">05/07/2015</time>
										</div>
									</div>
								</div>
								<a href="/z/q/97044261"
									class="thread-link link-reset text-muted"
									data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.1"><div
										class="col-sm-7 col-md-5 col-lg-6 thread-body"
										data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.1.0">
										<span class="thread-subject"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.1.0.0">Ok!</span>
										<div class="thread__listing text-muted show-lg"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.1.0.1">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.1.0.1.0">West
												21st Street, New York, NY</span><span
												data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.1.0.1.1">
												(Jun 8 - 12, 2015)</span>
										</div>
									</div></a>
								<div class="col-sm-7 col-md-4 col-lg-3 thread-label"
									data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2">
									<div class="row"
										data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0">
										<div class="col-sm-12 col-md-6"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.0">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.0.0"><span
												class="label label-gray label-info thread-status--has-tooltip"
												id="thread-97044261-status"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.0.0.0">Canceled</span>
											<noscript
													data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.0.0.1"></noscript></span>
											<div class="hide-sm"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.0.1">$1750</div>
										</div>
										<div class="col-sm-6 options hide-sm"
											data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1">
											<ul class="thread-actions list-unstyled"
												data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0">
												<li class="space-1"
													data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.0"><div
														class="thread-action thread-action-star"
														data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.0.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.0.0.0">
															<i class="icon icon-star-alt icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.0.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.0.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.0.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.0.0.0.2.0">Star</span></span>
														</button>
													</div></li>
												<li data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.1"><div
														class="thread-action thread-action-archive"
														data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.1.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.1.0.0">
															<i class="icon icon-archive icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.1.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.1.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.1.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$97044261.0.2.0.1.0.1.0.0.2.0">Archive</span></span>
														</button>
													</div></li>
											</ul>
										</div>
									</div>
								</div>
							</div></li>
						<li class="panel-body thread"
							data-reactid=".2eampc3lkw.1.0.0.0:$80149360"><div
								class="row" data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0">
								<div class="col-sm-9 col-md-3 thread-author"
									data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0">
									<div class="row row-table"
										data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0.0">
										<div class="thread-avatar col-md-5"
											data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0.0.0">
											<a class="" href="/users/show/27500070"
												data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0.0.0.0"><img
												src="https://a0.muscache.com/im/users/27500070/profile_pic/1432077249/original.jpg?aki_policy=profile_small"
												alt="Kirsten" height="50" width="50"
												class="media-round media-photo"
												data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0.0.0.0.0" /></a>
										</div>
										<div class="col-sm-7 thread-name text-truncate"
											data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0.0.1">
											<div data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0.0.1.0">Kirsten</div>
											<time class="thread-date"
												data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.0.0.1.1">03/11/2015</time>
										</div>
									</div>
								</div>
								<a href="/z/q/80149360"
									class="thread-link link-reset text-muted"
									data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.1"><div
										class="col-sm-7 col-md-5 col-lg-6 thread-body"
										data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.1.0">
										<span class="thread-subject"
											data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.1.0.0">Perfect.
											Thanks!</span>
										<div class="thread__listing text-muted show-lg"
											data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.1.0.1">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.1.0.1.0">East
												11th Street, Austin, TX</span><span
												data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.1.0.1.1">
												(Mar 13 - 18, 2015)</span>
										</div>
									</div></a>
								<div class="col-sm-7 col-md-4 col-lg-3 thread-label"
									data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2">
									<div class="row"
										data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0">
										<div class="col-sm-12 col-md-6"
											data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.0">
											<span data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.0.0"><span
												class="label label-green label-success thread-status--has-tooltip"
												id="thread-80149360-status"
												data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.0.0.0">Accepted</span>
											<noscript
													data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.0.0.1"></noscript></span>
											<div class="hide-sm"
												data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.0.1">$1946</div>
										</div>
										<div class="col-sm-6 options hide-sm"
											data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1">
											<ul class="thread-actions list-unstyled"
												data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0">
												<li class="space-1"
													data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.0"><div
														class="thread-action thread-action-star"
														data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.0.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.0.0.0">
															<i class="icon icon-star-alt icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.0.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.0.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.0.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.0.0.0.2.0">Star</span></span>
														</button>
													</div></li>
												<li data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.1"><div
														class="thread-action thread-action-archive"
														data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.1.0">
														<button class="btn-link btn-link--icon link-icon"
															data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.1.0.0">
															<i class="icon icon-archive icon-gray"
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.1.0.0.0"></i><span
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.1.0.0.1">
															</span><span class="link-icon__text"
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.1.0.0.2"><span
																data-reactid=".2eampc3lkw.1.0.0.0:$80149360.0.2.0.1.0.1.0.0.2.0">Archive</span></span>
														</button>
													</div></li>
											</ul>
										</div>
									</div>
								</div>
							</div></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>
</html>