<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
 <div id="cancel_form" class="formbox2">
  <h2>예약취소</h2>
<p class="m_b_5">* <span class="red">예약정보</span>를 잘 확인하여 취소하시기 바랍니다.</p>
	<table class="table table-striped">
 	 <caption><h4 style="text-align:center">예약정보</h4></caption>
					<thead>
						<tr>
							<th scope="col">예약신청일</th>
							<th scope="col">이용기간</th>
							<th scope="col">예약장소</th>
							<th scope="col">취소</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="10"><center>신청하신 내역이 없습니다.</center></td>
						</tr>
					</tbody>
	</table> 
