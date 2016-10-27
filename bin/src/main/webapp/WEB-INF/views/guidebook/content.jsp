<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js" />
<link href="https://a1.muscache.com/airbnb/static/packages/common_o2.1-50a45a2f41dab81f98765e60188dc94c.css" 	media="all" rel="stylesheet" type="text/css">
<link
	href="https://a1.muscache.com/airbnb/static/packages/manage_listing-5a21a78e524e212ada30b6a27fa6a498.css"
	media="screen" rel="stylesheet" type="text/css">
<link
	href="https://a0.muscache.com/airbnb/static/packages/guidebook_new_guest_page-db43b7573ef62e14d129030f0166e840.css"
	media="screen" rel="stylesheet" type="text/css">

<div style="margin-top: 2%;">
	<div class="col-md-12" id = "g_article">
		<h2>
			<span>가이드북</span>
		</h2>
		<div>
			<span>에어비앤비 호스트가 추천하는 도시별 최고의 장소만을 모았습니다. 커피숍, 공원, 숨겨진 명소 등
				무엇이든 원하는 정보를 찾아보세요.</span>
			<hr>
		</div>
		<div>
		<div>
			<h2>
				<span>아시아</span>
			</h2>
			<div>
				<div>
					<div>
						<div>
							<div>
								<div>
									<div >
										
											<h4><a  id="g_Seoul"><img src="${img}/guide/guide_seoul.PNG" 
											alt="Seoul" style="width: 25%; height: 25%;"> </a></h4>
											<span>숙소 1111개</span>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h2>
				<span>북아메리카</span>
			</h2>
			<div>
				<div>
					<div>
						<div>
							<div>
								<div>
									<div>
										<img src="${img}/public/guide_sanfran.png" id="g_sacfran" alt="Sanfran" style="width: 25%; height: 25%;"> 
											<!-- <a href="/guidebook/g_Sanfrancisco"> -->
											<a href="#">
											<h4>샌프란시스코</h4>
										</a>
											<span>숙소 6237개</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>