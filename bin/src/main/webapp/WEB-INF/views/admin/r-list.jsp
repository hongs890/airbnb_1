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
                            	예약  <small>최근 예약 리스트</small>
                        </h1>
                    </div>
                </div> 
                 <!-- /. ROW  -->
            <div class="row">
                <div class="col-md-12">
                    <!-- Advanced Tables -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            예약현황리스트
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                 <table class="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>예약번호</th>
                                                <th>결재일</th>
                                                <th>예약자 ID </th>
                                                <th>Hoisting ID</th>
                                                <th>Check in date</th>
                                                <th>Check out date</th>
                                                <th>Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1000</td>
                                                <td>2016-10-09</td>
                                                <td>Doe</td>
                                                <td>John15482</td>
                                                <td>2016-10-09</td>
                                                <td>2016-10-19</td>
                                                <td>seoul</td>
                                            </tr>
                                            <tr>
                                                <td>1001</td>
                                                <td>2016-10-10</td>
                                                <td>choi Doe</td>
                                                <td>John15482</td>
                                                <td>2016-10-09</td>
                                                <td>2016-10-19</td>
                                                <td>LA</td>
                                            </tr>
                                            <tr>
                                                <td>1002</td>
                                                <td>2016-10-10</td>
                                                <td>choi Doe</td>
                                                <td>John15482</td>
                                                <td>2016-10-09</td>
                                                <td>2016-10-19</td>
                                                <td>LA</td>
                                            </tr>
                                            <tr>
                                                <td>1003</td>
                                                <td>2016-10-10</td>
                                                <td>choi Doe</td>
                                                <td>John15482</td>
                                                <td>2016-10-09</td>
                                                <td>2016-10-19</td>
                                                <td>LA</td>
                                            </tr>
                                            <tr>
                                                <td>1004</td>
                                                <td>2016-10-10</td>
                                                <td>choi Doe</td>
                                                <td>John15482</td>
                                                <td>2016-10-09</td>
                                                <td>2016-10-19</td>
                                                <td>busan</td>
                                            </tr>
                                            <tr>
                                                <td>1006</td>
                                                <td>2016-10-10</td>
                                                <td>choi Doe</td>
                                                <td>John15482</td>
                                                <td>2016-10-09</td>
                                                <td>2016-10-19</td>
                                                <td>LA</td>
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