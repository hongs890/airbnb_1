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
			<div class="col-md-6">
				<h1 class="page-header">
					관련 정보 검색 <small>검색</small>
				</h1>
			</div>
		</div>
		<!-- /. ROW  -->
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<label>Selects</label> <select class="form-control">
						<option>회원 이메일</option>
						<option>주소</option>
						<option>이름</option>
						<option>예약번호</option>
						<option>결재일</option>
					</select>
				</div>
				<h4>Input Groups</h4>
				<div class="form-group input-group">
					<input type="text" class="form-control"> <span
						class="input-group-btn">
						<button class="btn btn-default" type="button">
							<i class="fa fa-search"></i>
						</button>
					</span>
				</div>
			</div>
		</div>
	<!-- 	<div id="page-wrapper">
		<div id="page-inner"> -->
			<div class="row">
				<div class="col-md-12">
					<h1 class="page-header">
						목록 <small>회원 리스트</small>
					</h1>
				</div>
			</div>
			<!-- /. ROW  -->

			<div  class="row">
				<div class="col-md-12">
					<!-- Advanced Tables -->
					<div  class="panel panel-default">
						<div class="panel-heading">회원리스트</div>
						<div class="panel-body">
							<div class="table-responsive">
								<table class="table table-striped table-bordered table-hover"
									id="dataTables-example">
									<thead>
										<tr>
											<th>E-MAIL</th>
											<th>NAME</th>
											<th>PHONE</th>
											<th>PROFILE_IMG</th>
											<th>REG_DATE</th>
										</tr>
									</thead>
									<tbody>
										<tr class="odd gradeX">
											<td>hong@hong.com</td>
											<td>홍길동</td>
											<td>010-5477-6715</td>
											<td class="center">defaul.jpg</td>
											<td class="center">2016-10-15</td>
										</tr>
										<tr class="odd gradeX">
											<td>hong1@hong.com</td>
											<td>홍길동1</td>
											<td>010-51277-6715</td>
											<td class="center">defaul.jpg</td>
											<td class="center">2016-10-15</td>
										</tr>
										<tr class="odd gradeX">
											<td>choi@hong.com</td>
											<td>홍길동</td>
											<td>010-5477-6715</td>
											<td class="center">defaul.jpg</td>
											<td class="center">2016-10-15</td>
										</tr>
										<tr class="odd gradeX">
											<td>choi2@hong.com</td>
											<td>홍길동1</td>
											<td>010-51277-6715</td>
											<td class="center">defaul.jpg</td>
											<td class="center">2016-10-15</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
					</div>
					<!--End Advanced Tables -->

					<!--  end  Context Classes  -->
				</div>
			</div>
			<!-- /. end list  -->
	</div>
</div>

	 --%>