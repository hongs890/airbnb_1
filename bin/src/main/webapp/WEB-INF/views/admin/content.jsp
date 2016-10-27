<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>"/>
<c:set var="img" value="${context}/resources/img"/>	
<c:set var="css" value="${context}/resources/css"/>	
<c:set var="js" value="${context}/resources/js"/>
<c:set var = "pgSize" value = "5"/>
<c:choose>
   <c:when test = "${totCount %pgSize eq 0}">
      <c:set var = "totPg" value = "${totCount/pgSize}"/>
   </c:when>
   <c:otherwise>
      <c:set var = "tatPg" value = "${totCount/pgSize+1}"/>
   </c:otherwise>
</c:choose>
<c:set var = "starPg" value = "${pgNum - ((pgNum-1)%pgSize)}"/>
<c:choose>
   <c:when test = "${starPg +pgSize-1 le totPg}">
      <c:set var = "lastpg" value = "${starPg + pgSize -1}"/>
   </c:when>
<c:otherwise>
   <c:set var = "lastpg" value = "${totPg}"/>
</c:otherwise>      
</c:choose>  

        <body>
        <div id="page-wrapper">
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="page-header">
                            Dashboard <small>Summary of AIRBNB</small>
                        </h1>
                    </div>
                </div>
                <!-- /. ROW  -->

                <div class="row">
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder bg-color-green">
                            <div  class="panel-body">
                          
                                <i class="fa fa-user fa-5x"></i>
                                <h3>
                                  <a  id="admin_main_mlist">
                                	8,457  
                                </a>
                                </h3>
                            </div>
                            <div class="panel-footer back-footer-green" >
                                가입회원자수

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder bg-color-blue">
                            <div class="panel-body">
                            
                                <i class="fa fa-home fa-5x"></i>
                                <h3>
                                <a  id="admin_main_hlist">
                                52,160 </a>
                                </h3>
                            </div>
                            <div class="panel-footer back-footer-blue">
                                호스팅 회원수</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder bg-color-red">
                            <div class="panel-body">
                            
                                <i class="fa fa-book fa-5x"></i>
                                <h3>
                                <a  id="admin_main_rlist">
                                15,823 </a>
                                </h3>
                            </div>
                            <div class="panel-footer back-footer-red">
                              예약 현황</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div  class="panel panel-primary text-center no-boder bg-color-brown">
                            <div class="panel-body">
                                <i class="fa fa-users fa-5x" ></i>
                                <h3>36,752 </h3>
                            </div>
                            <div class="panel-footer back-footer-brown">
                               Daily Visits

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                               Latest booking status list
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

                    </div>
                </div>
                <!-- /. ROW  -->
