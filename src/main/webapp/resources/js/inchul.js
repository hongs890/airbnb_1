var admin =(function(){
     var init =function(){
           onCreate();};
     var setContentView =function(){
     };
     var onCreate =function(){
           setContentView();
           $('#admin_main').click(function(){
                $.ajax({
                     url:app.context()+'/admin/admin_main',
                     success:function(data){
                           if(data.message ==='success'){
                                $('#admin_article').empty().html(ADMIN_MAIN);
                                $('#admin_main_mlist').click(function() {
                                      $.ajax({ 
                                            url: app.context()+'/admin/list',
                                              datatype: "json",
                                          mtype: "get",
                                          success: function(data) {
                                                     console.log(data);
                                                     admin.mlist();
                                                },
                                                error: function(x,h,m) {
                                                     alert('error'+m)
                                                }
                                            });
                                      $('#admin_article').empty().html(TEST_LIST);
                                });
                                $('#admin_main_hlist').click(function() {
                                     admin.hlist();
                                });
                               $('#admin_main_rlist').click(function() {
                                     alert('click admin_main_rlist');
                                     admin.rlist();
                                });
                           }else{
                                alert('sucess error');
                           }
                     },
                     error:function(x,e,m){
                           alert("admin nav errror "+m);
                     }
                });
                
           });
           $('#admin_nav_mlist').click(function(){
                 $.ajax({ 
                      url: app.context()+'/admin/list',
                        datatype: "json",
                     mtype: "get",
                     success: function(data) {
                                console.log(data);
                                admin.mlist();
                           },
                           error: function(x,h,m) {
                                alert('error'+m)
                           }
                      });
                 $('#admin_article').empty().html(TEST_LIST);
                     alert('click testlist');
     
           });
           $('#admin_main_mlist').click(function(){
                 $.ajax({ 
                      url: app.context()+'/admin/list',
                        datatype: "json",
                     mtype: "get",
                     success: function(data) {
                    	/* var totcount=data.count;*/
                    	 alert('get data count='+data.count);
                                console.log(data);
                                admin.mlist();
                           },
                           error: function(x,h,m) {
                                alert('error'+m)
                           }
                      });
           
                 $('#admin_article').empty().html(TEST_LIST);
           
           });
           
           $('#admin_nav_hlist').click(function(){
                admin.hlist();
           });
           $('#admin_main_hlist').click(function(){
                alert('click hlist');
                admin.hlist();
           });
           $('#admin_nav_rlist').click(function(){
                admin.rlist();
           });
           $('#admin_main_rlist').click(function(){
                alert('click hlist');
                admin.rlist();
           });
           $('#admin_nav_chart').click(function(){
                $.ajax({
                     url:app.context()+'/admin/chart',
                     success:function(data){
                    	 
                           if (data.message==="success") {
                                $('#admin_article').empty().html(ADMIN_MCHART);
                           }else{
                                ALERT('SUCCESS ERROR chart ')
                           }
                     },
                     error:function(x,e,m){
                           alert("admin nav chart error : " +m)
                     }
                });
           });
           $('#admin_nav_search').click(function(){
                $.ajax({
                     url:app.context()+'/admin/search',
                     success:function(data){
                           if (data.message==="success") {
                                $('#admin_article').empty().html(ADMIN_SEARCH);
                           }else{
                                ALERT('SUCCESS ERROR search ')
                           }
                     },
                     error:function(x,e,m){
                           alert("admin nav search error : " +m)
                     }
                });  
           });
           
     };
       return{
          init : init,
          onCreate : onCreate,
          setContentView : setContentView,
          mlist:     (function() {
                     $Grid=$('#grid')
                     $("#grid").jqGrid({
                    
                     url: app.context()+'/admin/list',
                     datatype: "json",
                     Height:250,
                     rowNum : 10,
                     rowList:[10,20,30],
                     mtype: "get",
                     jsonReader : {
                            email : "email" // 대표 아이디를 설정
                            ,root : "list" // 데이터의 시작을 설정
                       },
                     colNames : ['email',
                         'name',
                         'phone',
                         'proFileIMG',
                         'regDate'
                              ],
                     colModel : [
                      { name : 'email', index:'email', sorttype:"int",  align:'center',search:true},
                         { name : 'name',  index:'name',     sorttype:"int",   align:'right'},
                         { name : 'phone',  index:'phone',     sorttype:"int",  align:'right' },
                         { name : 'profileImg', index:'profileImg',      sorttype:"int",  align:'right' },
                         { name : 'regDate',  index:'regDate',    sorttype:"int",   align:'right' },
                     ],
                     pager : "#jqGridPager",
                     toppager:true,
                     autowidth:true,
                     viewrecords:true,
                     sortable: true,  
                     loadonce:true,//페이지를 넘길 수 있음
                     caption :'회원리스트',
                     hidegrid:false,
                     altRow:true
                     
                    
                    
                 });
                     $Grid=$('#grid')
                     /* .jqGrid('filterToolbar',{defaultSearch:true,stringResult:true})*/
                      .jqGrid('setSelection','1');
                }),
      
          hlist:function(){
                $.ajax({
                     url:app.context()+'/admin/hlist',
                
                     success:function(data){
                           if (data.message==="success") {
                                $('#admin_article').empty().html(ADMIN_HLIST);
                           }
                           else{
                                ALERT('SUCCESS ERROR HLIST')
                           }
                     },
                     error:function(x,e,m){
                           alert("admin nav Hlist error" +m)
                     }
                });
          },
          rlist:function(){
             $.ajax({
                     url:app.context()+'/admin/rlist',
                     success:function(data){
                           if (data.message==="success") {
                                $('#admin_article').empty().html(ADMIN_RLIST);
                           }else{
                                ALERT('SUCCESS ERROR RLIST')
                           }
                     },
                     error:function(x,e,m){
                           alert("admin nav Rlist error : " +m)
                     }
                });
          },
           testlist:function(){
               $("#list1").jqGrid({
                   //ajax 호출할 페이지
                   url:app.context()+'/admin/mlist',
                   //로딩중일때 출력시킬 로딩내용
                   loadtext : '로딩중..',
                   //응답값
                   datatype: "json",
                   height: 250,
                   colNames:['예약번호','체크인일자', '체크아웃일자', '투숙자수','호스팅번호','예약자이메일'],
                   colModel:[
                       {name:'resv_seq'},
                       {name:'checkin_date'},
                       {name:'checkout_date'},
                       {name:'guest_cnt'},
                       {name:'house_seq'},   
                       {name:'email'}   
                   ],
                   caption: "그리드 목록"
               });
           }
     
      
  }
})();

var ADMIN_HEAD =
     /*'<div id="wrapper">'
     +*/'<nav id="admin_header" class="navbar navbar-default top-navbar" role="navigation">'
     +'<div class="navbar-header">'
     +'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">'
     +'<span class="sr-only">Toggle navigation</span>'
     +'<span class="icon-bar"></span>'
     +'<span class="icon-bar"></span>'
     +'<span class="icon-bar"></span>'
     +'</button>'
     +'<a id="admin_dashboard" class="navbar-brand" >AIRBNB_JS</a>'
     +'</div>'
     +'<ul class="nav navbar-top-links navbar-right">'
     +'<li class="dropdown">'
     +'<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">'
     +'<i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>'
     +'</a>'
     +'<ul class="dropdown-menu dropdown-user">'
     +'<li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>'
     +'</li>'
     +'<li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>'
     +'</li>'
     +'<li class="divider"></li>'
     +'<li><a href="#"><i class="fa fa-sign-out fa-fw"></i> Logout</a>'
     +'</li>'
     +'</ul>'
     +'<!-- /.dropdown-user -->'
     +'</li>'
     +'<!-- /.dropdown -->'
     +'</ul>'
     +'</nav>'
     +'<!--/. NAV TOP -->'
     +'</div>'
     +'</header>'
var ADMIN_NAV =
     '<nav>'
     +'<div id="admin_nav">'
     +'<head>'
     +'<meta charset="utf-8" />'
     +'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
     +'<title>Airbnb</title>'
     +'<!-- Bootstrap Styles-->'
     +'<link href="/web/resources/css/bootstrap.css" rel="stylesheet" />'
     +'<!-- FontAwesome Styles-->'
     +'<link href="/web/resources/css/font-awesome.css" rel="stylesheet" />'
     +'<!-- Morris Chart Styles-->'
     +'<link href="/web/resources/css/morris/morris-0.4.3.min.css" rel="stylesheet" />'
     +'<!-- Custom Styles-->'
     +'<link href="/web/resources/css/custom-styles.css" rel="stylesheet" />'
     +'<!-- Google Fonts-->'
     +'<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />'
     +'</head>'
     +'<nav id="admin_nav" class="navbar-default navbar-side" role="navigation">'
     +'<div class="sidebar-collapse">'
     +'<ul class="nav" id="main-menu">'
     +'<li>'
     +'<a class="active-menu" id="admin_nav_main"><i class="fa fa-dashboard"></i> Dashboard</a>'
     +'</li>'
     +'<li>'
     +'<a class="active-menu" id="admin_nav_list"><i class="fa fa-desktop"></i> List</a>'
     +'<ul class="nav nav-second-level">'
     +'<li>'
     +'<a id="admin_nav_mlist">회원 리스트</a>'
     +'</li>'
     +'<li>'
     +'<a id="admin_nav_hlist">호스팅 리스트</a>'
     +'</li>'
     +'<li>'
     +'<a id="admin_nav_rlist">예약 현황 리스트</a>'
     +'</li>'
     +'</ul>'
     +'</li>'
     +'<li>'
     +'<a class="active-menu" id="admin_nav_chart"><i class="fa fa-bar-chart-o"></i> Charts</a>'
     +'</li>'
     +'<li>'
     +'<a class="active-menu" id="admin_nav_search"><i class="fa fa-qrcode"></i> Search</a>'
     +'</li>'
     +'</ul>'
     +'</div>'
     +'</nav>'
     +'<!-- /. NAV SIDE -->'
     +'</div>'
     +'</nav>'
var ADMIN_ARTICLE =
     '<section>'
     +'<article id="admin_article">'
     +''
     +'<body>'
     +'<div id="page-wrapper">'
     +'<div id="page-inner">'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<h1 class="page-header">'
     +'Dashboard <small>Summary of AIRBNB</small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW -->'
     +'<div class="row">'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div class="panel panel-primary text-center no-boder bg-color-green">'
     +'<div class="panel-body">'
     +'<a href="/web/admin/list">'
     +'<i class="fa fa-user fa-5x"></i>'
     +'<h3>8,457 </h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-green" >'
     +'가입회원자수</a>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div class="panel panel-primary text-center no-boder bg-color-blue">'
     +'<div class="panel-body">'
     +'<a href="/web/admin/h-list">'
     +'<i class="fa fa-home fa-5x"></i>'
     +'<h3>52,160 </h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-blue">'
     +'호스팅 회원수</a>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div class="panel panel-primary text-center no-boder bg-color-red">'
     +'<div class="panel-body">'
     +'<a href="/web/admin/r-list">'
     +'<i class="fa fa-book fa-5x"></i>'
     +'<h3>15,823 </h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-red">'
     +'예약 현황</a>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div class="panel panel-primary text-center no-boder bg-color-brown">'
     +'<div class="panel-body">'
     +'<i class="fa fa-users fa-5x" ></i>'
     +'<h3>36,752 </h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-brown">'
     +'Daily Visits'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="row">'
     +'<div class="col-md-12 col-sm-12 col-xs-12">'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">'
     +'Latest booking status list'
     +'</div>'
     +'<div class="panel-body">'
     +'<div class="table-responsive">'
     +'<table class="table table-striped table-bordered table-hover">'
     +'<thead>'
     +'<tr>'
     +'<th>예약번호</th>'
     +'<th>결재일</th>'
     +'<th>예약자 ID </th>'
     +'<th>Hoisting ID</th>'
     +'<th>Check in date</th>'
     +'<th>Check out date</th>'
     +'<th>Address</th>'
     +'</tr>'
     +'</thead>'
     +'<tbody>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>2016-10-09</td>'
     +'<td>Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>seoul</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1001</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1002</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1003</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1004</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>busan</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1006</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'</tbody>'
     +'</table>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW -->'
     +'</article>'
     +'</section>'
var ADMIN_FOOTER =
     '<footer>'
     +'<div id="admin_footer">'
     +'<footer><p align="center">All right reserved. HANBIT: CIC </a></p></footer>'
     +'</div>'
     +'<!-- /. PAGE INNER -->'
     +'</div>'
     +'<!-- /. PAGE WRAPPER -->'
     +'</div>'
     +'<!-- /. WRAPPER -->'
     +'<!-- JS Scripts-->'
     +'<!-- jQuery Js -->'
     +'<script src="/web/resources/js/jquery-1.10.2.js"></script>'
     +'<!-- Bootstrap Js -->'
     +'<script src="/web/resources/js/bootstrap.min.js"></script>'
     +'<!-- Metis Menu Js -->'
     +'<script src="/web/resources/js/jquery.metisMenu.js"></script>'
     +'<!-- Morris Chart Js -->'
     +'<script src="/web/resources/js/morris/raphael-2.1.0.min.js"></script>'
     +'<script src="/web/resources/js/morris/morris.js"></script>'
     +'<!-- Custom Js -->'
     +'<script src="/web/resources/js/morris/custom-scripts.js"></script>'
     +'</body>'
     +'</div>'
     +'</footer>'
     +'</body>'
     +'<script src="/web/resources/js/application.js"></script>'
     +'</html>'
var ADMIN_MLIST=
     '<article id="admin_article">'
     +'<div id="page-wrapper" >'
     +'<div id="page-inner">'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<h1 class="page-header">'
     +'회원  <small>가입 리스트</small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<!-- Advanced Tables -->'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">'
     +'회원리스트'
     +'</div>'
     +'<div class="panel-body">'
     +'<div class="table-responsive">'
     +'<table class="table table-striped table-bordered table-hover" id="dataTables-example">'
     +'<thead>'
     +'<tr>'
     +'<th>E-MAIL</th>'
     +'<th>NAME</th>'
     +'<th>PHONE</th>'
     +'<th>PROFILE_IMG</th>'
     +'<th>REG_DATE</th>'
     +'</tr>'
     +'</thead>'
     +'<tbody>'
     +'<tr class="odd gradeX">'
     +'<td>hong@hong.com</td>'
     +'<td>홍길동</td>'
     +'<td>010-5477-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'<tr class="odd gradeX">'
     +'<td>hong1@hong.com</td>'
     +'<td>홍길동1</td>'
     +'<td>010-51277-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'<tr class="odd gradeX">'
     +'<td>choi@hong.com</td>'
     +'<td>홍길동</td>'
     +'<td>010-5477-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'<tr class="odd gradeX">'
     +'<td>choi2@hong.com</td>'
     +'<td>홍길동1</td>'
     +'<td>010-51277-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'</tbody>'
     +'</table>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!--End Advanced Tables -->'
     +'<!--  end  Context Classes  -->'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'</div>'
     +'</article>'
var ADMIN_HLIST=
     '<article id="admin_article">'
     +'<div id="page-wrapper" >'
     +'<div id="page-inner">'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<h1 class="page-header">'
     +'호스팅  <small>현황 리스트</small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<!-- Advanced Tables -->'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">'
     +'호스팅현황리스트'
     +'</div>'
     +'<div class="panel-body">'
     +'<div class="table-responsive">'
     +'<table class="table table-striped table-bordered table-hover">'
     +'<thead>'
     +'<tr>'
     +'<th>house_seq</th>'
     +'<th>Room_type</th>'
     +'<th>체크인 시작 가능일자 </th>'
     +'<th>최소숙박가능일</th>'
     +'<th>최대 숙박가능일</th>'
     +'<th>Title</th>'
     +'<th>Price</th>'
     +'<th>Reg date</th>'
     +'</tr>'
     +'</thead>'
     +'<tbody>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>아파트</td>'
     +'<td>2016-10-09</td>'
     +'<td>1</td>'
     +'<td>10</td>'
     +'<td>멋진 도쿄 호스팅</td>'
     +'<td>50000</td>'
     +'<td>2016-10-09</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>아파트</td>'
     +'<td>2016-10-09</td>'
     +'<td>1</td>'
     +'<td>10</td>'
     +'<td>멋진 도쿄 호스팅</td>'
     +'<td>50000</td>'
     +'<td>2016-10-09</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1001</td>'
     +'<td>빌라</td>'
     +'<td>2016-10-09</td>'
     +'<td>1</td>'
     +'<td>10</td>'
     +'<td>멋진 도쿄 호스팅</td>'
     +'<td>50000</td>'
     +'<td>2016-10-09</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>아파트</td>'
     +'<td>2016-10-09</td>'
     +'<td>1</td>'
     +'<td>10</td>'
     +'<td>멋진 도쿄 호스팅</td>'
     +'<td>50000</td>'
     +'<td>2016-10-09</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>아파트</td>'
     +'<td>2016-10-09</td>'
     +'<td>1</td>'
     +'<td>10</td>'
     +'<td>멋진 도쿄 호스팅</td>'
     +'<td>50000</td>'
     +'<td>2016-10-09</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>아파트</td>'
     +'<td>2016-10-09</td>'
     +'<td>1</td>'
     +'<td>10</td>'
     +'<td>멋진 도쿄 호스팅</td>'
     +'<td>50000</td>'
     +'<td>2016-10-09</td>'
     +'</tr>'
     +'</tbody>'
     +'</table>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!--End Advanced Tables -->'
     +'<!--  end  Context Classes  -->'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'</div>'
     +'</article>'
var ADMIN_RLIST =
     '<article id="admin_article">'
     +'<div id="page-wrapper" >'
     +'<div id="page-inner">'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<h1 class="page-header">'
     +'예약  <small>최근 예약 리스트</small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<!-- Advanced Tables -->'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">'
     +'예약현황리스트'
     +'</div>'
     +'<div class="panel-body">'
     +'<div class="table-responsive">'
     +'<table class="table table-striped table-bordered table-hover">'
     +'<thead>'
     +'<tr>'
     +'<th>예약번호</th>'
     +'<th>결재일</th>'
     +'<th>예약자 ID </th>'
     +'<th>Hoisting ID</th>'
     +'<th>Check in date</th>'
     +'<th>Check out date</th>'
     +'<th>Address</th>'
     +'</tr>'
     +'</thead>'
     +'<tbody>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>2016-10-09</td>'
     +'<td>Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>seoul</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1001</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1002</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1003</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1004</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>busan</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1006</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'</tbody>'
     +'</table>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!--End Advanced Tables -->'
     +'<!--  end  Context Classes  -->'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'</div>'
     +'</article>'
var ADMIN_CHART=
     '<article id="admin_article">'
     +'<div id="page-wrapper">'
     +'<div id="page-inner">'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<h1 class="page-header">'
     +'통계<small>회원 호스팅 예약 관련 통계 자료 </small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div class="row">'
     +'<div class="col-md-6 col-sm-12 col-xs-12">'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">2016년 월별 회원 가입 현황</div>'
     +'<div class="panel-body">'
     +'<div id="morris-bar-chart"></div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-6 col-sm-12 col-xs-12">'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">2016년 월별 회원 및 호스팅 가입,예약 통계</div>'
     +'<div class="panel-body">'
     +'<div id="morris-area-chart"></div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div class="row">'
     +'<div class="col-md-6 col-sm-12 col-xs-12">'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">연도별 회원 및 호스팅 가입 통계</div>'
     +'<div class="panel-body">'
     +'<div id="morris-line-chart"></div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-6 col-sm-12 col-xs-12">'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">순수 회원 및 호스팅 회원 통계</div>'
     +'<div class="panel-body">'
     +'<div id="morris-donut-chart"></div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'</article>'
var ADMIN_SEARCH=
     '<article id="admin_article">'
     +'<div id="page-wrapper">'
     +'<div id="page-inner">'
     +'<div class="row">'
     +'<div class="col-md-6">'
     +'<h1 class="page-header">'
     +'관련 정보 검색 <small>검색</small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div class="row">'
     +'<div class="col-md-6">'
     +'<div class="form-group">'
     +'<label>Selects</label> <select class="form-control">'
     +'<option>회원 이메일</option>'
     +'<option>주소</option>'
     +'<option>이름</option>'
     +'<option>예약번호</option>'
     +'<option>결재일</option>'
     +'</select>'
     +'</div>'
     +'<h4>Input Groups</h4>'
     +'<div class="form-group input-group">'
     +'<input type="text" class="form-control"> <span'
     +'class="input-group-btn">'
     +'<button class="btn btn-default" type="button">'
     +'<i class="fa fa-search"></i>'
     +'</button>'
     +'</span>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!-- <div id="page-wrapper">'
     +'<div id="page-inner"> -->'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<h1 class="page-header">'
     +'목록 <small>회원 리스트</small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div  class="row">'
     +'<div class="col-md-12">'
     +'<!-- Advanced Tables -->'
     +'<div  class="panel panel-default">'
     +'<div class="panel-heading">회원리스트</div>'
     +'<div class="panel-body">'
     +'<div class="table-responsive">'
     +'<table class="table table-striped table-bordered table-hover"'
     +'id="dataTables-example">'
     +'<thead>'
     +'<tr>'
     +'<th>E-MAIL</th>'
     +'<th>NAME</th>'
     +'<th>PHONE</th>'
     +'<th>PROFILE_IMG</th>'
     +'<th>REG_DATE</th>'
     +'</tr>'
     +'</thead>'
     +'<tbody>'
     +'<tr class="odd gradeX">'
     +'<td>hong@hong.com</td>'
     +'<td>홍길동</td>'
     +'<td>010-5477-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'<tr class="odd gradeX">'
     +'<td>hong1@hong.com</td>'
     +'<td>홍길동1</td>'
     +'<td>010-51277-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'<tr class="odd gradeX">'
     +'<td>choi@hong.com</td>'
     +'<td>홍길동</td>'
     +'<td>010-5477-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'<tr class="odd gradeX">'
     +'<td>choi2@hong.com</td>'
     +'<td>홍길동1</td>'
     +'<td>010-51277-6715</td>'
     +'<td class="center">defaul.jpg</td>'
     +'<td class="center">2016-10-15</td>'
     +'</tr>'
     +'</tbody>'
     +'</table>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<!--End Advanced Tables -->'
     +'<!--  end  Context Classes  -->'
     +'</div>'
     +'</div>'
     +'<!-- /. end list  -->'
     +'</div>'
     +'</div>'
     +'</article>'
var ADMIN_MAIN =
     '<article id="admin_main">'
     +'<div id="page-wrapper">'
     +'<div id="page-inner">'
     +'<div class="row">'
     +'<div class="col-md-12">'
     +'<h1 class="page-header">'
     +'Dashboard <small>Summary of AIRBNB</small>'
     +'</h1>'
     +'</div>'
     +'</div>'
     +'<!-- /. ROW  -->'
     +'<div class="row">'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div class="panel panel-primary text-center no-boder bg-color-green">'
     +'<div  class="panel-body">'
     +'<i class="fa fa-user fa-5x"></i>'
     +'<h3>'
     +'<a id="admin_main_mlist">'
     +'15,823 </a></h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-green" >'
     +'가입회원자수</a>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div class="panel panel-primary text-center no-boder bg-color-blue">'
     +'<div class="panel-body">'
     +'<i class="fa fa-home fa-5x"></i>'
     +'<h3>'
     +'<a  id="admin_main_hlist">'
     +'15,823 </a></h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-blue">'
     +'호스팅 회원수</a>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div class="panel panel-primary text-center no-boder bg-color-red">'
     +'<div class="panel-body">'
     +'<i class="fa fa-book fa-5x"></i>'
     +'<h3>'
     +'<a  id="admin_main_rlist">'
     +'15,823 </a></h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-red">'
     +'예약 현황</a>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="col-md-3 col-sm-12 col-xs-12">'
     +'<div  class="panel panel-primary text-center no-boder bg-color-brown">'
     +'<div class="panel-body">'
     +'<i class="fa fa-users fa-5x" ></i>'
     +'<h3>'
     +'<a  id="admin_main_rlist">'
     +'25,823 </a></h3>'
     +'</div>'
     +'<div class="panel-footer back-footer-brown">'
     +'Daily Visits'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'<div class="row">'
     +'<div class="col-md-12 col-sm-12 col-xs-12">'
     +'<div class="panel panel-default">'
     +'<div class="panel-heading">'
     +'Latest booking status list'
     +'</div>'
     +'<div class="panel-body">'
     +'<div class="table-responsive">'
     +'<table class="table table-striped table-bordered table-hover">'
     +'<thead>'
     +'<tr>'
     +'<th>예약번호</th>'
     +'<th>결재일</th>'
     +'<th>예약자 ID </th>'
     +'<th>Hoisting ID</th>'
     +'<th>Check in date</th>'
     +'<th>Check out date</th>'
     +'<th>Address</th>'
     +'</tr>'
     +'</thead>'
     +'<tbody>'
     +'<tr>'
     +'<td>1000</td>'
     +'<td>2016-10-09</td>'
     +'<td>Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>seoul</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1001</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1002</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1003</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1004</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>busan</td>'
     +'</tr>'
     +'<tr>'
     +'<td>1006</td>'
     +'<td>2016-10-10</td>'
     +'<td>choi Doe</td>'
     +'<td>John15482</td>'
     +'<td>2016-10-09</td>'
     +'<td>2016-10-19</td>'
     +'<td>LA</td>'
     +'</tr>'
     +'</tbody>'
     +'</table>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</div>'
     +'</article>'
     /*
     =============== Mchart_js ===============
     @AUTHOR :math89@gmail.com
     @CREATE DATE: 2016-10-19
     @UPDATE DATE: 2016-10-19
     @DESC :월별 회원 가입
     =============== ADMIN ===============
     */
     
 
     var ADMIN_MCHART=
           '<article id="admin_article">'
           +'<div id="page-wrapper">'
           +'<div id="page-inner">'
           +'<div class="row">'
           +'<div class="col-md-12">'
           +'<h1 class="page-header">'
           +'통계<small>회원 호스팅 예약 관련 통계 자료 </small>'
           +'</h1>'
           +'</div>'
           +'</div>'
           +'<!-- /. ROW -->'
           +'<div class="row">'
           +'<div class="col-md-6 col-sm-12 col-xs-12">'
           +'<div class="panel panel-default">'
           +'<div class="panel-heading">2016년 월별 회원 가입 현황</div>'
           +'<div class="panel-body">'
           +'<div id="chart_div" style="width: 800px; height: 400px;"></div>'
           +'</div>'
           +'</div>'
           +'</div>'
           +'</div>'
           +'<head>'
           +'<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>'
           +'</article>'
           
var TEST_LIST=
                '<article id="admin_article">'
                +'<div id="page-wrapper" >'
                +'<div id="page-inner">'
                +'<div class="row">'
                +'<div class="col-md-12">'
                +'<h1 class="page-header">'
                +'AIRBNB  <small>List</small>'
                +'</h1>'
                +'</div>'
                +'</div>'
                +'<!-- /. ROW  -->'
                +'<div class="row">'
                +'<div class="col-md-12">'
             /*   +'<!-- Advanced Tables -->'
                +'<div class="panel panel-default">'
                +'<div class="panel-heading">'
                +'회원리스트'
                +'</div>'*/
           /*   +'<div class="panel-body">'
                +'<div class="table-responsive">'*/
           /*   +'<table class="table table-striped table-bordered table-hover" id="grid">'*/
                +'<table  id="grid"> </table>'
                +'<div id="jqGridPager"></div>'
            /*    +'</div>'
                +'</div>'
                +'</div>'
                +'<!--End Advanced Tables -->'
                +'<!--  end  Context Classes  -->'
                +'</div>'
                +'</div>'
                +'<!-- /. ROW  -->'
                +'</div>'*/
                +'</article>';