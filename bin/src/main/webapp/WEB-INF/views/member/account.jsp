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
<title>Account</title>
</head>
<body>
<div class="page-container-responsive space-top-4 space-4">
  <div class="row">
    <div class="col-md-3">
      
<ul class="sidenav-list">
  <li>
    <a href="#" aria-selected="false" class="sidenav-item">Payment Methods</a>
  </li>

  <li>
    <a href="#" aria-selected="false" class="sidenav-item">Transaction History</a>
  </li>

  <li>
    <a href="#" aria-selected="false" class="sidenav-item">Change Password</a>
  </li>


  <li>
    <a href="#" aria-selected="false" class="sidenav-item">Remove Account</a>
  </li>

</ul>

    </div>
    <div class="col-md-9">
      <div class="panel">
  <form accept-charset="UTF-8" action="https://www.airbnb.com/users/update_notifications/27430889" id="notification_settings_form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="V4$.airbnb.com$Bs_UKVcOd84$zhU64aViGgU8vqLzRx_UJNSBJvszYBWE7HMICcIe0QQ="></div>
    
        <input id="id" name="id" type="hidden" value="27430889">
          <div class="panel-header">
            Push Notification Settings
          </div>

          <section class="panel-body">
            <div class="row">
              <div class="col-sm-4">
                <p>Receive Push Notifications to your iPhone, iPad or Android device.</p>
              </div>
              <div class="col-sm-8">
                  <div>
                    Download the <a href="/mobile">Airbnb App</a> to receive push notifications instead of plain text messages. Once you enable push notifications on your mobile device, the settings will appear here.
                  </div>
              </div>
            </div>
          </section>
        </form></div>

        <div class="panel space-top-4">
          <div class="panel-header">
            Text Message Settings
          </div>

          <section class="panel-body">
            <div class="row">
              <div class="col-sm-4">
                <p>Receive mobile updates by regular SMS text message.</p>
                  <p><b>Note:</b> For more information, text HELP to 247262. To cancel mobile notifications, reply STOP to 247262. Message and Data rates may apply.</p>
              </div>
              <div class="col-sm-8">
                  <div class="row">
                    <label class="col-sm-6" for="sms_phone_number_id">Receive SMS notifications to:
                      <p><a href="${context}/member/edit">Change phone numbers</a></p>

                    </label>
                    <div class="select">
                      <select id="sms_phone_number_id" name="sms_phone_number_id"><option value="11625073" selected="selected">+1 *** *** 4345</option></select>
                    </div>
                  </div>
                      <label class="col-sm-1 checkbox">
                        <input checked="checked" id="sms_messages" name="sms[messages]" type="checkbox" value="1">
                      </label>
                      <label class="col-sm-11" for="settings_messages">
                        <strong>Messages</strong><br>
                        From hosts and guests
                      </label>
                      <label class="col-sm-1 checkbox">
                        <input checked="checked" id="sms_reservations" name="sms[reservations]" type="checkbox" value="1">
                      </label>
                      <label class="col-sm-11" for="settings_messages">
                        <strong>Reservation Updates</strong><br>
                        Requests, confirmations, changes and more
                      </label>
                      <label class="col-sm-1 checkbox">
                        <input checked="checked" id="sms_other" name="sms[other]" type="checkbox" value="1">
                      </label>
                      <label class="col-sm-11" for="settings_messages">
                        <strong>Other</strong><br>
                        Feature updates and more
                      </label>
              </div>
            </div>
          </section>
        </div>

        <div class="panel space-top-4">
          <div class="panel-header">
            Email Settings
          </div>
          <section class="panel-body">
            <div class="row">
              <div class="col-sm-4">
                <h5>I want to receive:</h5>
                <p>You can disable these at any time.</p>
              </div>
              <div class="col-sm-8">
                <label class="col-sm-1 checkbox">
                  <input name="user_profile_info[receive_promotional_email]" type="hidden" value="0"><input id="user_profile_info_receive_promotional_email" name="user_profile_info[receive_promotional_email]" type="checkbox" value="1">
                </label>
                <label class="col-sm-11" for="user_profile_info_receive_promotional_email">
                  General promotions, updates, news about Airbnb or general promotions for partner campaigns and services, user surveys, inspiration, and love from Airbnb.
                </label>
                <label class="col-sm-1 checkbox">
                  <input name="user_profile_info[receive_informative_email]" type="hidden" value="0"><input id="user_profile_info_receive_informative_email" name="user_profile_info[receive_informative_email]" type="checkbox" value="1">
                </label>
                <label class="col-sm-11" for="user_profile_info_receive_informative_email">
                  Reservation and review reminders.
                </label>
              </div>
            </div>
          </section>
        </div>

          <div class="panel space-top-4">
            <div class="panel-header">
              Phone Preferences
            </div>
            <section class="panel-body">
              <div class="row">
                <div class="col-sm-4">
                  <h5>I want to receive:</h5>
                  <p>You can change this at any time.</p>
                </div>
                <div class="col-sm-8">
                  <label class="col-sm-1 checkbox">
                    <input checked="checked" id="can_receive_phone_call" name="can_receive_phone_call" type="checkbox" value="1">
                  </label>
                  <label class="col-sm-11" for="user_can_receive_phone_call">
                    <strong>Calls about my account, listings, reservations, or the Airbnb community
                    </strong><br>
                      If you opt out, we may still call you about your account if it’s urgent or if previous emails didn’t reach you.
                  </label>
                </div>
              </div>
            </section>
          </div>
         
      <div class="panel-footer">
        <input class="btn btn-primary" id="user_submit" name="commit" type="submit" value="Save">
      </div>
   
</div>

    </div>
  </div>
</body>
</html>