<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>"/>
<%-- <c:set var="mcount" value="<%=request.mcount()%>"/> --%>
<c:set var="img" value="${context}/resources/img"/>	
<c:set var="css" value="${context}/resources/css"/>	
<c:set var="js" value="${context}/resources/js"/>
<c:set var = "pgSize" value = "5"/>
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
                                 
                                	<div id="mcount"></div>
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
                                 <div id="hcount"></div> </a>
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
                                <div id="rcount"></div> </a>
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
                               Latest member status list
                            </div> 
                            <div class="panel-body">
                                <div class="table-responsive">
                                <c:set value="admin.mlist()" var="grid"/>
                               	<table  id="grid"> </table>
              					<div id="jqGridPager"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <!-- /. ROW  -->
               <script type="text/javascript"> 
               $(function(){admin.mlist();});
               $(function(){admin.mcount();});
               $(function(){admin.hcount();});
               $(function(){admin.rcount();});
               </script>
