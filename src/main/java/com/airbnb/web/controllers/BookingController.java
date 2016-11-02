package com.airbnb.web.controllers;




import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.airbnb.web.constants.Values;
import com.airbnb.web.domains.BookingDTO;
import com.airbnb.web.domains.CancelPagination;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HouseDTO;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Pagination;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.domains.SearchVal;
import com.airbnb.web.services.BookingService;


@Controller
@SessionAttributes("user")
@RequestMapping("/booking")
public class BookingController {
		
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired BookingService bService;
	@Autowired Command command;
	@Autowired Retval retval; 
	
	@RequestMapping(value="/search",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<String, Object> search(@RequestBody SearchVal sVal) {
		
		logger.info("예약 컨트롤러 {}.",sVal);
		//====================DATE(날짜 차이)=====================
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		sVal.setNights(LocalDate.parse(sVal.getCheckin(), formatter).until(LocalDate.parse(sVal.getCheckout(), formatter)).getDays());
		//==================PAGINATION=============================
		int totCount = bService.listCount(sVal);
		int pgNum = sVal.getPageNum();
		int totPg = Pagination.getTotPg(totCount);
		int startPg = Pagination.getStartPg(pgNum);
		int lasgPg = Pagination.getLastPg(totPg, startPg);
		int[] rows = Pagination.getStartEndRow(totCount, pgNum, Values.PG_SIZE);
		sVal.setStart(rows[0]);
		sVal.setEnd(rows[1]);
		logger.info("예약 컨트롤러  totCount {}.",totCount);
		logger.info("예약 컨트롤러  totPg {}.",totPg);
		logger.info("예약 컨트롤러  startPg {}.",startPg);
		logger.info("예약 컨트롤러  lasgPg {}.",lasgPg);
		logger.info("예약 컨트롤러  rows {}.",rows);
		
		//==================RESULT=================================
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("country", sVal.getCountry());
		retMap.put("state", sVal.getState());
		retMap.put("city", sVal.getCity());
		retMap.put("street", sVal.getStreet());
		
		retMap.put("convenience", sVal.getConvenience());
		retMap.put("safetyFac", sVal.getSafetyFac());
		retMap.put("bedCnt", sVal.getBedCnt());
		retMap.put("bathroomCnt", sVal.getBathroomCnt());
		retMap.put("minPrice", sVal.getMinPrice());
		retMap.put("maxPrice", sVal.getMaxPrice());
		retMap.put("roomType", sVal.getRoomType());
		retMap.put("lng", sVal.getLongitude());
		retMap.put("lat", sVal.getLatitude());
		retMap.put("checkIn", sVal.getCheckin());
		retMap.put("checkOut", sVal.getCheckout());
		retMap.put("guestCnt", sVal.getGuestCnt());
		retMap.put("locList", bService.getLocList(sVal));
		
		retMap.put("start", rows[0]);
		retMap.put("end", rows[1]);
		retMap.put("totCount", totCount);
		retMap.put("pgSize", Values.PG_SIZE);
		retMap.put("pgNum", pgNum);
		retMap.put("startPg",startPg);
		retMap.put("lastPg",lasgPg);
		retMap.put("totPg",totPg);
		retMap.put("list", bService.list(sVal));
		retMap.put("groupSize",Values.GROUP_SIZE);
		logger.info("예약 컨트롤러  list {}.",bService.list(sVal));
		return retMap;
	}
	@RequestMapping("/main")
	public String main() {
		logger.info("예약 컨트롤러 {}.","booking");
		return "public:booking/booking.tiles";
	}
	@RequestMapping("/detail")
	public String detail() {
		int seq = 12;
		logger.info("예약 컨트롤러 {}.","booking");
		return "public:booking/detail.tiles";
	}
	
	
	
	// ======================================sang ho line========================================= //
	
	@RequestMapping(value = "/detail/{houseSeq}", method = RequestMethod.GET)
	public @ResponseBody HashMap<String, Object>detail(@PathVariable String houseSeq){
		HashMap<String, Object> map = new HashMap<>();
		command.setKeyField("house_seq");
	    command.setKeyword(houseSeq);
	    HouseDTO houseDto = bService.findOne(command);
		map.put("house", houseDto);

		System.out.println(houseDto);
		return map;
}
@RequestMapping(value = "/GoPay", method = RequestMethod.POST, consumes = "application/json")
   public @ResponseBody HouseDTO GoPay(@RequestBody SearchVal sVal) {
      logger.info("BookingController :: Detail :: checkIn :: {}", sVal.getCheckin());
      logger.info("BookingController :: Detail :: checkOut :: {}", sVal.getCheckout());
      logger.info("BookingController :: Detail :: guestCnt :: {}", sVal.getGuestCnt());
      command.setKeyField("house_seq");
      command.setKeyword("12");
      HouseDTO houseDto = bService.findOne(command);
      System.out.println(houseDto);
      return houseDto;
   }
   @RequestMapping(value="/payment", method=RequestMethod.POST, consumes = "application/json")
   public @ResponseBody Retval payment(@RequestBody BookingDTO param,@ModelAttribute("user") MemberDTO user){
      logger.info("BookingController :: Payment :: card_num :: {}", param.getCardNum());
      param.setPrice(30000);
      param.setResvSeq(1);
      retval.setMessage("ok");
      bService.regist(param);
      System.out.println(retval);
      return retval;
   }
   @RequestMapping("/cancel")
   public String cancel() {
      logger.info("예약 컨트롤러 {}.","cancel");
      return "member:booking/cancel.tiles";
   }
   @RequestMapping("/list/{pgNum}")
   public @ResponseBody HashMap<String, Object>list(@PathVariable String pgNum,Model model) {
      logger.info("LIST pgNum {}",pgNum);
      int[]rows = new int[2];
      int[]pages = new int[3];
      HashMap<String, Object> map = new HashMap<String,Object>();
      command.setKeyField("email");
      command.setKeyword("hongs890@gmail.com");
      int totCount = bService.resvCount(command).getCount();
      pages = CancelPagination.getPages(totCount, Integer.parseInt(pgNum));
      rows = CancelPagination.getRows(totCount,Integer.parseInt(pgNum),Values.RESV_PG_SIZE);
      command.setStart(rows[0]);
      command.setEnd(rows[1]);
      logger.info("LIST pgSize {}",Values.RESV_PG_SIZE);
      logger.info("LIST totCount {}",totCount);
      logger.info("LIST totPg {}",pages[2]);
      logger.info("LIST pgNum {}",pgNum);
      logger.info("LIST startPg {}",pages[0]);
      logger.info("LIST lastPg {}",pages[1]);
      map.put("list", bService.resvList(command));
      map.put("pgSize", Values.RESV_PG_SIZE);
      map.put("totCount", totCount);
      map.put("totPg", pages[2]);
      map.put("pgNum", Integer.parseInt(pgNum));
      map.put("startPg", pages[0]);
      map.put("lastPg", pages[1]);
      map.put("groupSize", Values.GROUP_SIZE);
      return map;
   } 

	
}