package com.airbnb.web.controllers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
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
import org.springframework.web.bind.annotation.RequestParam;
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
	@Autowired
	BookingService bService;
	@Autowired
	Command command;
	@Autowired
	Retval retval;

	@ModelAttribute("user")
	   public MemberDTO checkNull() {
	       return new MemberDTO(); 
	   }
	@RequestMapping(value = "/search", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<String, Object> search(@RequestBody SearchVal sVal) {

		logger.info("예약 컨트롤러 {}.", sVal);
		// ====================DATE(날짜 차이)=====================
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		sVal.setNights(LocalDate.parse(sVal.getCheckin(), formatter)
				.until(LocalDate.parse(sVal.getCheckout(), formatter)).getDays());
		// ==================PAGINATION=============================
		int totCount = bService.listCount(sVal);
		int pgNum = sVal.getPageNum();
		int totPg = Pagination.getTotPg(totCount);
		int startPg = Pagination.getStartPg(pgNum);
		int lasgPg = Pagination.getLastPg(totPg, startPg);
		int[] rows = Pagination.getStartEndRow(totCount, pgNum, Values.PG_SIZE);
		sVal.setStart(rows[0]);
		sVal.setEnd(rows[1]);
		logger.info("예약 컨트롤러  totCount {}.", totCount);
		logger.info("예약 컨트롤러  totPg {}.", totPg);
		logger.info("예약 컨트롤러  startPg {}.", startPg);
		logger.info("예약 컨트롤러  lasgPg {}.", lasgPg);
		logger.info("예약 컨트롤러  rows {}.", rows);

		// ==================RESULT=================================
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("country", sVal.getCountry());
		retMap.put("state", sVal.getState());
		retMap.put("city", sVal.getCity());
		retMap.put("street", sVal.getStreet());

		retMap.put("nights", sVal.getNights());
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
		retMap.put("startPg", startPg);
		retMap.put("lastPg", lasgPg);
		retMap.put("totPg", totPg);
		retMap.put("list", bService.list(sVal));
		retMap.put("groupSize", Values.GROUP_SIZE);
		logger.info("예약 컨트롤러  list {}.", bService.list(sVal));
		return retMap;
	}
	
	// ======================================sang ho
	// line========================================= //

	@RequestMapping(value = "/detail/{seq}", method = RequestMethod.GET)
	public @ResponseBody HashMap<String, Object> detail(@PathVariable String seq,
			@RequestParam("check_in") String checkIn, @RequestParam("check_out") String checkOut,
			@RequestParam("guest_cnt") String guestCnt, @RequestParam("nights") String nights) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		if (checkIn.equalsIgnoreCase("NONE")) {
			command.setKeyword(seq);
			BookingDTO bDto = bService.findResv(command);
			map.put("bDto", bDto);
			map.put("check_in", bDto.getCheckinDate());
			map.put("check_out", bDto.getCheckoutDate());
			map.put("guest_cnt", bDto.getGuestCnt());
			command.setKeyword(String.valueOf(bDto.getHouseSeq()));
		} else {
			command.setKeyField("house_seq");
			command.setKeyword(seq);
			List<String> list = bService.getBlockList(command);
			map.put("blockDate", list);
			map.put("check_in", checkIn);
			map.put("check_out", checkOut);
			map.put("guest_cnt", Integer.parseInt(guestCnt));
			map.put("nights", Integer.parseInt(nights)); // 합친 뒤 고칠부분

		}
		command.setKeyField("house_seq");
		HouseDTO houseDto = bService.findOne(command);
		MemberDTO host = bService.findHost(command);
		map.put("house", houseDto);
		map.put("host", host);
		return map;
	}

	@RequestMapping(value = "/GoPay/{nights}", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<String, Object> GoPay(@RequestBody BookingDTO bDto, @PathVariable String nights,
			@ModelAttribute("user") MemberDTO user) {
		Map<String, Object> retMap = new HashMap<String, Object>();
		if (user.getEmail() == null) {
			retMap.put("logined", false);
			return retMap;
		}
		retMap.put("logined", true);
		logger.info("BookingController :: Detail :: checkIn :: {}", bDto.getCheckinDate());
		logger.info("BookingController :: Detail :: checkOut :: {}", bDto.getCheckoutDate());
		logger.info("BookingController :: Detail :: guestCnt :: {}", bDto.getGuestCnt());
		logger.info("BookingController :: Detail :: price :: {}", bDto.getPrice());
		logger.info("BookingController :: Detail :: houseSeq :: {}", bDto.getHouseSeq());
		logger.info("BookingController :: Detail :: nights :: {}", nights);
		command.setKeyword(String.valueOf(bDto.getHouseSeq()));
		MemberDTO host = bService.findHost(command);
		command.setKeyField("house_seq");
		HouseDTO house = bService.findOne(command);
		retMap.put("bDto", bDto);
		retMap.put("host", host);
		retMap.put("house", house);
		retMap.put("nights", Integer.parseInt(nights));
		return retMap;
	}

	@RequestMapping(value = "/payment", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Retval payment(@RequestBody BookingDTO bDto, @ModelAttribute("user") MemberDTO user) {
		logger.info("BookingController :: Payment :: card_num :: {}", bDto.getCardNum());
		bDto.setEmail(user.getEmail());
		bService.payment(bDto);
		retval.setMessage("SUCCESS");
		return retval;
	}

	@RequestMapping("/list/{pgNum}")
	public @ResponseBody HashMap<String, Object> list(@PathVariable String pgNum,
			@ModelAttribute("user") MemberDTO user) {
		logger.info("LIST pgNum {}", pgNum);
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String, Object> map = new HashMap<String, Object>();
		command.setKeyField("email");
		command.setKeyword(user.getEmail());
		int totCount = bService.resvCount(command).getCount();
		pages = CancelPagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = CancelPagination.getRows(totCount, Integer.parseInt(pgNum), Values.RESV_PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		logger.info("LIST pgSize {}", Values.RESV_PG_SIZE);
		logger.info("LIST totCount {}", totCount);
		logger.info("LIST totPg {}", pages[2]);
		logger.info("LIST pgNum {}", pgNum);
		logger.info("LIST startPg {}", pages[0]);
		logger.info("LIST lastPg {}", pages[1]);
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

	@RequestMapping(value = "/bookingCancel", method = RequestMethod.POST)
	public @ResponseBody Retval bookingCancel(@RequestParam("resvSeq") String resvSeq) {
		logger.info("RESVSEQ {}", resvSeq);
		command.setKeyword(resvSeq);
		bService.resvCancel(command);
		retval.setMessage("SUCCESS");
		return retval;
	}

}