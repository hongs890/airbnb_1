<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css"/>
<c:set var="js" value="${context}/resources/js"/>
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<div id="host_main_top_pic"><br/>
	<div id="host_main_top1">
		<div id="host_main_top2">
			<h1 style="color:white;"><b><br>에어비앤비<br>호스트가 되어<br>부수입을<br>올리세요.</b><br><br></h1>
			<h4 style="color:white;">집 수리비를 모으고 꿈에 그리던 <br>여행을 떠나는 등 호스팅 부수입으로 <br>꿈을 이루세요.</h4><br><br>
			<a href="${context}/hosting/regist_1"><input type="button" value="호스팅 시작하기" class="btn btn-danger"></a>
			<a href="${context}/hosting/manage_1"><input type="button" value="호스팅 관리하기(임시버튼)" class="btn btn-danger"></a><br><br><br>
		</div>
	</div>
<br/>
</div>
<div id="host_main_type1">
<h2><b>호스팅 예상 수입</b></h2><br>
	<div id="host_main_type2">
		<input type="radio" value="">집 전체<br><br>
		<input type="radio" value="">개인실<br><br>
		<input type="radio" value="">다인실<br><br>
	</div>
		<div id="host_main_type2">
		<input type="text" value="" placeholder="예) 강남구"><br><br><br>
  			<select name="">
	   			<option value="">숙박 인원 1명　　　</option>
	   			<option value="">숙박 인원 2명　　　</option>
	    		<option value="">숙박 인원 3명　　　</option>
	    		<option value="">숙박 인원 4명　　　</option>
	    		<option value="">숙박 인원 5명　　　</option>
	    		<option value="">숙박 인원 6명　　　</option>
	    		<option value="">숙박 인원 7명　　　</option>
	    		<option value="">숙박 인원 8명　　　</option>
	    		<option value="">숙박 인원 9명　　　</option>
	    		<option value="">숙박 인원 10명　　　</option>
	    		<option value="">숙박 인원 11명　　　</option>
	    		<option value="">숙박 인원 12명　　　</option>
	    		<option value="">숙박 인원 13명　　　</option>
	    		<option value="">숙박 인원 14명　　　</option>
	    		<option value="">숙박 인원 15명　　　</option>
	    		<option value="">숙박 인원 16+명　　　</option>
 			</select>
	</div>
	<div id="host_main_type2">
		<div id="host_main_type3" style="text-align:center; color: white;"><br>
			<h1><b>￦249,999</b></h1><br>
			<h4>주간 평균</h4><br>
		</div>
	</div>
</div>
<div id="host_main_way1">
<h4 style="text-align:center; color: grey;">호스팅 방법</h4>
	<div id="host_main_way2">
	<h2>①</h2><br>
	<h2><b>호스트로 등록</b></h2><br>
	<h5>숙소 등록부터 시작해 보세요. 숙소에 대한 프로필을 작성하는 것과 같습니다.</h5><br>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_home.jpg" alt="" /><br>
			<h2>숙소 페이지에 필요한 정보</h2><br>
			<h6>숙소 설명을 입력하고, 사진을 찍어 업로드하고, 가격을 설정하세요. 게스트는 숙소 정보를 보고 회원님의 숙소에 대해 파악할 수 있습니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_member.jpg" alt="" /><br>
			<h2>이용 가능 게스트 요건</h2><br>
			<h6>예약 가능 여부 및 숙소 이용 규칙을 설정하세요. 호스트 설정 및 달력 설정 기능을 통해 호스팅을 보다 쉽게 할 수 있습니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_hand.jpg" alt="" /><br>
			<h2>에어비앤비가 도와드려요</h2><br>
			<h6>숙소 준비부터 요금 선택, 현지 법에 따른 의무에 대한 이해까지 각 단계마다 필요한 도구와 정보를 제공해 드려요.</h6>
		</div>
	</div>
</div>
<div id="host_main_way1">
	<div id="host_main_way2">
	<h2>②</h2><br>
	<h2><b>숙소 검색 및 예약</b></h2>
	<h5>예약 확인과 함께 게스트의 메시지를 받게 됩니다.</h5><br>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_balloon.jpg" alt="" /><br>
			<h2>게스트에게 메시지 보내기</h2><br>
			<h6>온라인이나 앱을 통해 메시지를 보내 게스트에 대해 알아가고 질문에 답할 수 있습니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_checkin.jpg" alt="" /><br>
			<h2>체크인 계획</h2><br>
			<h6>호스트에 따라 게스트를 직접 만나 열쇠를 전달하기도 하고, 출입문 비밀번호를 전달하기도 합니다. 회원님께 편리한 방법을 선택하세요.</h6>
		</div>
	</div>
</div>
<div id="host_main_way1">
	<div id="host_main_way2">
	<h2>③</h2><br>
	<h2><b>게스트 맞이하기</b></h2>
	<h5>아침을 제공하는 호스트도 있고, 보다 자유로운 방식을 선호하는 호스트도 있습니다. 호스팅 방식은 전적으로 회원님이 결정할 수 있습니다.</h5><br>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_towel.jpg" alt="" /><br>
			<h2>기본적인 준비</h2><br>
			<h6>대부분의 호스트는 게스트가 사용할 수 있는 모든 공간을 청소하고 깨끗한 침대 시트, 수건, 화장지와 같은 필수품목을 제공합니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_card.jpg" alt="" /><br>
			<h2>게스트의 숙박 결제</h2><br>
			<h6>에어비앤비가 결제에 관한 모든 부분을 처리하니 회원님이 직접 관여하실 부분은 없습니다. 게스트는 체크인 전에 요금을 납부합니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_card2.jpg" alt="" /><br>
			<h2>대금 수령 방법</h2><br>
			<h6>페이팔, 계좌 입금, 해외 송금 중에서 대금 수령 방법을 선택하실 수 있습니다. 대금은 게스트가 체크인하고 24시간 후에 자동으로 입금됩니다. 간단하죠?</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_import.jpg" alt="" /><br>
			<h2>수입과 수수료</h2><br>
			<h6>에어비앤비에 숙소를 등록하는 것은 무료입니다. 에어비앤비는 모든 예약에 3%의 호스트 서비스 수수료를 부과합니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_charge.jpg" alt="" /><br>
			<h2>요금 설정</h2><br>
			<h6>요금은 회원님이 결정합니다. 숙소를 등록하면 비슷한 숙소의 요금과 여행 트렌드를 고려하여 요금을 제안해 주는 도구를 이용할 수 있습니다.</h6>
		</div>
	</div>
</div>
<div id="host_main_way1" style="margin-top:10%;">
	<div id="host_main_way2">
	<h2>④</h2><br>
	<h2><b>안심하세요</b></h2>
	<h5>에어비앤비가 회원님과 회원님의 집을 보호하기 위한 계획을 미리 세워두었습니다.</h5><br>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_8.jpg" alt="" /><br>
			<h2>₩1,000,000,000 호스트 보호 프로그램</h2><br>
			<h6>호스트 보호 프로그램은 사고로 회원님의 집이나 물건에 피해가 발생할 경우에 대비해 회원님을 보호해주는 프로그램입니다. 에어비앤비에 숙소가 등록된 모든 호스트는 추가 비용 없이 보장을 받을 수 있습니다. 별도의 절차 없이 자동으로 가입됩니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_check.jpg" alt="" /><br>
			<h2>신뢰를 기초로 하는 에어비앤비</h2><br>
			<h6>전화번호를 포함한 게스트와 호스트 양측의 정보를 인증하였습니다. 여행 후에는 게스트와 호스트 모두 서로에 대해 후기를 남기도록 되어 있습니다. 게스트도 후기를 통해 평가를 받으므로 호스트와 숙소를 존중하여 대하게 됩니다.</h6>
		</div>
		<div id="host_main_way3">
			<img src="${img}/hosting/host_icon_tube.jpg" alt="" /><br>
			<h2>수입 이상의 가치</h2><br>
			<h6>호스트는 부수입을 버는 것뿐만 아니라 글로벌 커뮤니티의 일원이 되어 도움을 받을 수 있습니다. 에어비앤비와 다른 호스트에게 배울 수 있는 기회가 언제든 열려 있습니다.</h6>
		</div>
	</div>
</div>
<div id="host_main_media1">
	<div id="host_main_media2">
		<h1 style="color:white; text-align:center;"><b>호스트가 들려주는 호스팅의 매력<br><br></b></h1>
		<h1 style="color:white; text-align:center;"><a href="#">▶</a></h1>
	</div>
</div>
<div id="host_main_bottom1">
	<div id="host_main_bottom2">
		<h1 style="color:white;"><b>게스트를 맞이해 보세요!</b></h1><br>
		<a href="${context}/hosting/regist_1"><input type="button" value="호스팅 시작하기" class="btn btn-danger"></a>
		<img src="${img}/hosting/host_main_bottom2.png" alt="" style="float:right" />
	</div>
</div>