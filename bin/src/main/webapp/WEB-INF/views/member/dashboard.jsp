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
<title>Dashboard</title>
</head>
<body>
		
	<div class="page-container-responsive space-top-4 space-4">
		<div class="row">
			<div class="col-md-3">
			
			<!-- profile  -->
				<div class="panel space-4">
					<div class="media media-photo-block">
						<a href="${context}/member/show/" title="View Profile"><img
							alt="hollyQueen" class="img-responsive" height="190"
							src="${img}/member/hollyQueen.jpg" title="hollyQueen" width="190" /></a>
					</div>
					<div class="panel-body">
						<h2 class="text-center">hollyQueen</h2>
						<ul class="list-unstyled text-center">
							<li><a href="${context}/member/show/">View Profile</a></li>
							<li><a href="${context}/member/edit/" id="edit-profile">Edit Profile</a>
							</li>
						</ul>
					</div>
				</div>

 <div class="panel space-4 verifications-panel-vertical ">
  <div class="panel-header row">
    <div class="pull-left">
      Verifications
    </div>
    <div class="pull-right">
      <i class="icon icon-question" id="tooltip-trigger"></i>
      <div class="tooltip tooltip-right-middle" role="tooltip" aria-hidden="true"
          data-trigger="#tooltip-trigger" data-sticky="true">
        <p class="panel-body">
          Verifications help build trust between guests and hosts and can make booking easier.
          <a href="/help/article/336">Learn more »</a>
        </p>
      </div>
    </div>
  </div>
  <div class="panel-body">
      <ul class="list-unstyled ">
      <li class="row row-condensed">
        <div class="media">
          <i class="icon icon-ok icon-lima h3 pull-left"></i>
          <div class="media-body">
            <div>
              Email address
            </div>
            <div class="text-muted">
              Verified
            </div>
          </div>
        </div>
      </li>
      <li class="row row-condensed">
        <div class="media">
          <i class="icon icon-ok icon-lima h3 pull-left"></i>
          <div class="media-body">
            <div>
              Phone number
            </div>
            <div class="text-muted">
                (▒▒▒) ▒▒▒-▒▒45
            </div>
          </div>
        </div>
      </li>
      <li class="row row-condensed">
        <div class="media">
          <i class="icon icon-ok icon-lima h3 pull-left"></i>
          <div class="media-body">
            <div>
              Reviewed
            </div>
            <div class="text-muted">
              2 Reviews
            </div>
          </div>
        </div>
      </li>
      <li class="row row-condensed">
        <div class="media">
          <i class="icon icon-ok icon-lima h3 pull-left"></i>
          <div class="media-body">
            <div>
              Personal info
            </div>
            <div class="text-muted">
              Verified
            </div>
          </div>
        </div>
      </li>
  </ul>

    <a href="#">
      Add Verifications
    </a>
  </div>
</div>


      <div class="panel space-4">
        <div class="panel-header">
          Quick Links
        </div>
        <div class="panel-body">
          <ul class="list-unstyled">
              <li class="space-2">
                <a href="${context}/member/trips">Upcoming Trips</a>
              </li>
              <li class="space-2">
                <a href="#">Hosting on Airbnb</a>
              </li>
              <li class="space-2">
                <a href="#">Traveling on Airbnb</a>
              </li>
              <li class="space-2">
                <a href="#">Help Center</a>
              </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="col-md-9">

      <div class="panel space-4">
        <div class="panel-header">
          Messages (1 new)
        </div>
          <ul class="list-layout">
              <li class="panel-body thread-read thread" id="thread_172155785">
  <div class="row">
    <div class="col-3">
      <div class="row row-table">
        <div class="col-5">
          <a href="#" target="_blank"><img alt="Ajit" class="img-round" height="50" src="https://a1.muscache.com/im/users/863155/profile_pic/1311564603/original.jpg?aki_policy=profile_small" title="Ajit" width="50" /></a>
        </div>
        <div class="col-7">
          Ajit
          <br/>
          Feb 16
        </div>
      </div>
    </div>
    <a href="#" class="link-reset text-muted">
      <div class="col-7">
        
          Oknp. Sorry to hear about that. :(
You were going t...
        
        <br/>
        <span class="text-muted">
            <span class=street-address>Norwalk Lane</span>, <span class=locality>Austin</span>, <span class=region>TX</span>
              (Mar 9 - 16, 2016)
        </span>
      </div>
</a>    <div class="col-2">
        <span class="label label-gray label-info">Canceled</span>
        <br/>
        $1588
    </div>

  </div>
</li>

              <li class="panel-body thread-read thread" id="thread_166764939">
  <div class="row">
    <div class="col-3">
      <div class="row row-table">
        <div class="col-5">
          <a href="#" target="_blank"><img alt="Richard" class="img-round" height="50" src="https://a0.muscache.com/im/users/15396185/profile_pic/1400523583/original.jpg?aki_policy=profile_small" title="Richard" width="50" /></a>
        </div>
        <div class="col-7">
          Richard
          <br/>
          Feb 09
        </div>
      </div>
    </div>
    <a href="#" class="link-reset text-muted">
      <div class="col-7">
        
          :)
        
        <br/>
        <span class="text-muted">
            <span class=street-address>Angell Street</span>, <span class=locality>Providence</span>, <span class=region>RI</span>
              (Feb 4 - 8, 2016)
        </span>
      </div>
</a>    <div class="col-2">
        <span class="label label-green label-success">Accepted</span>
        <br/>
        $567
    </div>

  </div>
</li>

              <li class="panel-body thread-read thread" id="thread_166762954">
  <div class="row">
    <div class="col-3">
      <div class="row row-table">
        <div class="col-5">
          <a href="#" target="_blank"><img alt="Elizabeth" class="img-round" height="50" src="https://a2.muscache.com/im/pictures/cb376bbf-677e-499a-8d2a-16e14c8e883c.jpg?aki_policy=profile_small" title="Elizabeth" width="50" /></a>
        </div>
        <div class="col-7">
          Elizabeth
          <br/>
          Jan 20
        </div>
      </div>
    </div>
    <a href="#" class="link-reset text-muted">
      <div class="col-7">
        
          Hi I&#x27;m a Brown alum visiting for recruiting events ...
        
        <br/>
        <span class="text-muted">
            <span class=street-address>Benefit Street</span>, <span class=locality>Providence</span>, <span class=region>RI</span>
              (Feb 4 - 8, 2016)
        </span>
      </div>
</a>    <div class="col-2">
        <span class="label label-gray label-info">Canceled</span>
        <br/>
        $480
    </div>

  </div>
</li>

              <li class="panel-body  thread" id="thread_97044264">
  <div class="row">
    <div class="col-3">
      <div class="row row-table">
        <div class="col-5">
          <a href="#" target="_blank"><img alt="Christiane" class="img-round" height="50" src="https://a2.muscache.com/im/users/2702141/profile_pic/1442827721/original.jpg?aki_policy=profile_small" title="Christiane" width="50" /></a>
        </div>
        <div class="col-7">
          Christian
          <br/>
          06/07/2015
        </div>
      </div>
    </div>
    <a href="#" class="link-reset ">
      <div class="col-7">
        <strong>
          Hi! I&#x27;m on the way and will be there in 15
        </strong>
        <br/>
        <span class="text-muted">
            <span class=street-address>West 15th Street</span>, <span class=locality>New York</span>, <span class=region>NY</span>
              (Jun 7 - 12, 2015)
        </span>
      </div>
</a>    <div class="col-2">
        <span class="label label-green label-success">Accepted</span>
        <br/>
        $1724
    </div>

  </div>
</li>

              <li class="panel-body thread-read thread" id="thread_97044261">
  <div class="row">
    <div class="col-3">
      <div class="row row-table">
        <div class="col-5">
          <a href="#" target="_blank"><img alt="Elnaz" class="img-round" height="50" src="https://a2.muscache.com/im/users/15447043/profile_pic/1401289639/original.jpg?aki_policy=profile_small" title="Elnaz" width="50" /></a>
        </div>
        <div class="col-7">
          Elnaz
          <br/>
          05/07/2015
        </div>
      </div>
    </div>
    <a href="#" class="link-reset text-muted">
      <div class="col-7">
        
          Ok!
        
        <br/>
        <span class="text-muted">
            <span class=street-address>West 21st Street</span>, <span class=locality>New York</span>, <span class=region>NY</span>
              (Jun 8 - 12, 2015)
        </span>
      </div>
</a>    <div class="col-2">
        <span class="label label-gray label-info">Canceled</span>
        <br/>
        $1750
    </div>

  </div>
</li>

          </ul>

          <div class="panel-body">
            <a href="${context}/member/inbox">All messages</a>
          </div>
      </div>


    </div>
  </div>
</div>
	
</body>