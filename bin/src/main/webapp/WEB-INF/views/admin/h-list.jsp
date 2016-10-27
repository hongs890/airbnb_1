<%-- <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>"/>
<c:set var="img" value="${context}/resources/img"/>	
<c:set var="css" value="${context}/resources/css"/>	
<c:set var="js" value="${context}/resources/js"/>

        <div id="page-wrapper" >
            <div id="page-inner">
			 <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
                            	호스팅  <small>현황 리스트</small>
                        </h1>
                    </div>
                </div> 
                 <!-- /. ROW  -->
            <div class="row">
                <div class="col-md-12">
                    <!-- Advanced Tables -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            호스팅현황리스트
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                 <table class="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>house_seq</th>
                                                <th>Room_type</th>
                                                <th>체크인 시작 가능일자 </th>
                                                <th>최소숙박가능일</th>
                                                <th>최대 숙박가능일</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Reg date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1000</td>
                                                <td>아파트</td>
                                                <td>2016-10-09</td>
                                                <td>1</td>
                                                <td>10</td>
                                                <td>멋진 도쿄 호스팅</td>
                                                <td>50000</td>
                                                <td>2016-10-09</td>
                                            </tr>
                                            <tr>
                                                <td>1000</td>
                                                <td>아파트</td>
                                                <td>2016-10-09</td>
                                                <td>1</td>
                                                <td>10</td>
                                                <td>멋진 도쿄 호스팅</td>
                                                <td>50000</td>
                                                <td>2016-10-09</td>
                                            </tr>
                                            <tr>
                                                 <td>1001</td>
                                                <td>빌라</td>
                                                <td>2016-10-09</td>
                                                <td>1</td>
                                                <td>10</td>
                                                <td>멋진 도쿄 호스팅</td>
                                                <td>50000</td>
                                                <td>2016-10-09</td>
                                            </tr>
                                            <tr>
                                                 <td>1000</td>
                                                <td>아파트</td>
                                                <td>2016-10-09</td>
                                                <td>1</td>
                                                <td>10</td>
                                                <td>멋진 도쿄 호스팅</td>
                                                <td>50000</td>
                                                <td>2016-10-09</td>
                                            </tr>
                                            <tr>
                                                <td>1000</td>
                                                <td>아파트</td>
                                                <td>2016-10-09</td>
                                                <td>1</td>
                                                <td>10</td>
                                                <td>멋진 도쿄 호스팅</td>
                                                <td>50000</td>
                                                <td>2016-10-09</td>
                                            </tr>
                                            <tr>
                                                <td>1000</td>
                                                <td>아파트</td>
                                                <td>2016-10-09</td>
                                                <td>1</td>
                                                <td>10</td>
                                                <td>멋진 도쿄 호스팅</td>
                                                <td>50000</td>
                                                <td>2016-10-09</td>
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
                <!-- /. ROW  -->
        </div>
               

 --%>