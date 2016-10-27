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
<link href="https://a2.muscache.com/airbnb/static/packages/common-86180c1646b448bc4a69535df81ff5de.css" media="all" rel="stylesheet" type="text/css">
<link href="https://a2.muscache.com/airbnb/static/packages/profile-13be7842644713c9f17f75d7cdc455ca.css" media="screen" rel="stylesheet" type="text/css">
<title>Rachel's Profile</title>
</head>
<body>

<div class="page-container page-container-responsive space-top-4 space-8">
  <div class="row">
    <div class="col-lg-3 col-md-4 hide-sm">
      <div id="user" class="space-4 ">
        <div>
          <div class="space-2" id="user-media-container">
            <div id="slideshow" class="slideshow">
              <div class="slideshow-preload"></div>
              <ul class="slideshow-images">
                <li class="active media-photo media-photo-block">
                  <img alt="Rachel" class="img-responsive" height="225" src="${img}/member/hollyQueen.jpg" title="Rachel" width="225">
                </li>
                <li class="media-photo media-photo-block"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="panel space-4">
        <div class="panel-header">
          Verified info
        </div>
        <div class="panel-body">
          <ul class="list-unstyled space-3">
      <li class="row row-table space-2">
        <div class="col-12 col-middle">
          Personal info
        </div>
        <div class="col-3 col-middle">
          <i class="icon icon-ok h3"></i>
        </div>
      </li>
      <li class="row row-table space-2">
        <div class="col-12 col-middle">
          Email address
        </div>
        <div class="col-3 col-middle">
          <i class="icon icon-ok h3"></i>
        </div>
      </li>
      <li class="row row-table space-2">
        <div class="col-12 col-middle">
          Phone number
        </div>
        <div class="col-3 col-middle">
          <i class="icon icon-ok h3"></i>
        </div>
      </li>
</ul>

        </div>
      </div>


        <div class="panel space-4">
          <div class="panel-header">
            About Me
          </div>
          <div class="panel-body">
            <dl>
                <dt>School</dt>
                <dd>Brown University</dd>
                <dt>Work</dt>
                <dd>Twitter</dd>

              <dt class="airbnb-symbol-hidden hide space-1">
				Rachel's Airbnb Symbol
			  </dt>
              <dd class="airbnb-symbol-hidden hide">
                
<div class="user-profile-symbol" data-user-id="27430889">
  <img src="https://a0.muscache.com/airbnb/static/profile/symbol-empty-state-d97ee7a003fdab31cfaa9b20bd3a27ff.png" data-default-url="https://a0.muscache.com/airbnb/static/profile/symbol-empty-state-d97ee7a003fdab31cfaa9b20bd3a27ff.png" data-base-url="https://create.airbnb.com/" data-src-url="https://create.airbnb.com/27430889/symbol" alt="Rachel" class="img-responsive">

  
</div>


              </dd>
            </dl>
          </div>
        </div>
    </div>

    <div class="col-lg-9 col-md-8 col-sm-12">
      <div class="row space-4">
        <div class="col-sm-4 show-sm">
          <div class="media-photo media-photo-block media-round">
            <img alt="Rachel" class="img-responsive" height="225" src="${img}/rachel.png" title="Rachel" width="225">
          </div>
        </div>
        <div class="col-sm-8 col-md-12 col-lg-12">
          <h1>
            Hey, I’m hollyQueen!
          </h1>
          <div class="h5 space-top-2">
           San Francisco, California, United States.
            <span class="text-normal">
              Member since February 2015
            </span>
          </div>
          <br/>
          <div class="edit_profile_container space-3">
          <a href="${context}/member/edit">Edit Profile</a></div>
        </div>
      </div>
      <div class="space-top-2">
        <p></p>
      </div>

      <div class="social_connections_and_reviews">
        <div class="report_review_modal_container"><noscript data-reactid=".5"></noscript></div>
        <div class="reviews row-space-4" id="reviews">
          <h2>
            Reviews
            <small>(2)</small>
          </h2>
          <div>
            <div class="reviews_section as_guest space-top-3">
              <h4 class="space-4">
                Reviews From Hosts
              </h4>
              <div class="reviews">
                  <div class="row text-center-sm" id="review-34871708">
    <div class="col-md-2 col-sm-12">
      <div class="avatar-wrapper">
          <div class="media-photo media-round space-1">
            <img alt="Christiane" class="lazy" data-original="https://a2.muscache.com/im/users/2702141/profile_pic/1442827721/original.jpg?aki_policy=profile_medium" height="68" src="https://a2.muscache.com/im/users/2702141/profile_pic/1442827721/original.jpg?aki_policy=profile_medium" title="Christiane" width="68" style="display: inline;">
          </div>
            <div class="text-center profile-name text-wrap">
              Christiane
            </div>
<div class="text-muted date show-sm">June 2015</div>
      </div>
    </div>
    <div class="col-md-10 col-sm-12">
      <div class="space-2">
        <div class="comment-container expandable expandable-trigger-more space-2 expanded">
          <div class="expandable-content">
            <p>Rachel was a great guest! She left our apartment in perfect condition. I would welcome her anytime again when she comes to NYC.</p>
            <div class="expandable-indicator"></div>
          </div>
        </div>


        <span class="text-muted date hide-sm pull-left">
          <span>From New York, NY. June 2015</span>
      </div>
    </div>
  </div>

  <div class="row space-2 line-separation">
    <div class="col-10 col-offset-2">
      <hr>
    </div>
  </div>
  <div class="row text-center-sm" id="review-28129091">
    <div class="col-md-2 col-sm-12">
      <div class="avatar-wrapper">
          <div class="media-photo media-round space-1">
            <img alt="Kirsten" class="lazy" data-original="https://a0.muscache.com/im/users/27500070/profile_pic/1432077249/original.jpg?aki_policy=profile_medium" height="68" src="https://a0.muscache.com/im/users/27500070/profile_pic/1432077249/original.jpg?aki_policy=profile_medium" title="Kirsten" width="68" style="display: inline;">
          </div>
            <div class="text-center profile-name text-wrap">
              Kirsten
            </div>
         <div class="text-muted date show-sm">March 2015</div>
      </div>
    </div>
    <div class="col-md-10 col-sm-12">
      <div class="space-2">
        <div class="comment-container expandable expandable-trigger-more space-2 expanded" %="">
          <div class="expandable-content">
            <p>Rachel was an excellent guest. I would welcome her back anytime! She was easy to communicate with, friendly, and clean!</p>
            <div class="expandable-indicator"></div>
          </div>
        </div>


        <span class="text-muted date hide-sm pull-left">
          <span>From Knoxville, TN. March 2015</span>
      </div>
    </div>
  </div>

  <div class="row space-2 line-separation">
    <div class="col-10 col-offset-2">
      <hr>
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


<div id="staged-photos"></div>

</body>
</html>