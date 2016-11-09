package com.airbnb.web.controllers;


import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
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
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.services.HostingService;
@Controller
@Lazy
@RequestMapping("/hosting")
@SessionAttributes({"user", "pgNum", "houseSeq"})
public class HostingController {
	private static final Logger logger = LoggerFactory.getLogger(HostingController.class);
	@Autowired private HostingService service;
	@Autowired private Retval retval;
	@Autowired private Command command;
	
	@ModelAttribute("user")
	   public MemberDTO checkNull() {
	       return new MemberDTO(); 
	   }
	@RequestMapping(value="/regist_building", method=RequestMethod.POST)
	public @ResponseBody List<String> hostingRegistBuilding(){
		logger.info("HostingController :: {}", "regist_building");
		return service.building_list();
	}	
	@RequestMapping(value="/regist_login", method=RequestMethod.POST)
	public @ResponseBody Retval hostingRegistLogin(@ModelAttribute("user") MemberDTO memberParam){
		logger.info("HostingController :: {}", "regist_login");
		if (memberParam.getEmail() == null) {
			retval.setMessage("fail_login");
		}else{
			retval.setMessage("success_login");
		}
		return retval;
	}	
	@RequestMapping(value="/regist_insert", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegistInsert(@RequestBody HostingDTO param, @ModelAttribute("user") MemberDTO memberParam){
		logger.info("HostingController :: {}", "regist_insert");
		String date = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		param.setRegDate(date);
		param.setEmail(memberParam.getEmail());
		logger.info("HostingController :: regist :: reg_date :: {}", param.getRegDate());
		logger.info("HostingController :: regist :: email :: {}", param.getEmail());
		logger.info("HostingController :: regist :: room_type :: {}", param.getRoomType());
		logger.info("HostingController :: regist :: guest_cnt :: {}", param.getGuestCnt());
		logger.info("HostingController :: regist :: building_seq :: {}", param.getBuildingSeq());
		logger.info("HostingController :: regist :: bed_cnt :: {}", param.getBedCnt());
		logger.info("HostingController :: regist :: bathroom_cnt :: {}", param.getBathroomCnt());
		logger.info("HostingController :: regist :: convenience :: {}", param.getConvenience());
		logger.info("HostingController :: regist :: safety_fac :: {}", param.getSafetyFac());
		logger.info("HostingController :: regist :: space :: {}", param.getSpace());
		logger.info("HostingController :: regist :: picture :: {}", param.getPicture());
		logger.info("HostingController :: regist :: explaination :: {}", param.getExplaination());
		logger.info("HostingController :: regist :: title :: {}", param.getTitle());
		logger.info("HostingController :: regist :: rules :: {}", param.getRules());
		logger.info("HostingController :: regist :: other_rule :: {}", param.getOtherRule());
		logger.info("HostingController :: regist :: checkin_term :: {}", param.getCheckinTerm());
		logger.info("HostingController :: regist :: checkin_time :: {}", param.getCheckinTime());
		logger.info("HostingController :: regist :: min_nights :: {}", param.getMinNights());
		logger.info("HostingController :: regist :: max_nights :: {}", param.getMaxNights());
		logger.info("HostingController :: regist :: price :: {}", param.getPrice());
		logger.info("HostingController :: regist :: country :: {}", param.getCountry());
		logger.info("HostingController :: regist :: state :: {}", param.getState());
		logger.info("HostingController :: regist :: city :: {}", param.getCity());
		logger.info("HostingController :: regist :: street :: {}", param.getStreet());
		logger.info("HostingController :: regist :: optional :: {}", param.getOptional());
		logger.info("HostingController :: regist :: zip_code :: {}", param.getZipCode());
		logger.info("HostingController :: regist :: latitude :: {}", param.getLatitude());
		logger.info("HostingController :: regist :: longitude :: {}", param.getLongitude());
		service.regist_houses(param);
		command.setKeyword(memberParam.getEmail());
		param.setHouseSeq(Integer.parseInt(service.house_seq(command).get(service.house_seq(command).size()-1)));
		logger.info("HostingController :: regist :: house_seq :: {}", param.getHouseSeq());
		service.regist_address(param);
		retval.setMessage("success_insert");
		return retval;
	}
	@RequestMapping("/delete")
	public @ResponseBody Retval hostingDelete(@RequestParam("houseSeq") String houseSeq){
		command.setKeyword(houseSeq);
		service.hosting_delete_ad(command);
		service.hosting_delete_bl(command);
		service.hosting_delete_ho(command);
		retval.setMessage("delete");
		return retval;
	}
	@RequestMapping(value="/manage1/{pgNum}", method=RequestMethod.GET)
	public @ResponseBody HashMap<String,Object> hostingManage1(@PathVariable String pgNum, @ModelAttribute("user") MemberDTO memberParam
			, Model model){
		logger.info("HostingController :: manage :: pgNum :: {}", pgNum);
		command.setKeyword(memberParam.getEmail());
		HashMap<String,Object> map = new HashMap<>();
		List<?> list = service.house_seq(command);
		int totCount = service.house_count(command);
		if (totCount == 0) {
			command.setStart(1);
		} else {
			command.setStart(Integer.parseInt(String.valueOf(list.get(Integer.parseInt(pgNum)-1))));
			model.addAttribute("pgNum", Integer.parseInt(String.valueOf(list.get(Integer.parseInt(pgNum)-1))));
		}
		map.put("list", service.house_list(command));
		map.put("pgSize", Values.PG_SIZE);
		map.put("totPg", totCount);
		map.put("pgNum", Integer.parseInt(pgNum));
		map.put("startPg",1);
		map.put("lastPg", totCount);
		return map;
	}
	@RequestMapping(value="/manage2", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage2(@RequestBody HostingDTO param, Model model){
		String[] date = param.getBlockDate().split(",");
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	    int temp = LocalDate.parse(date[0], formatter).until(LocalDate.parse(date[1], formatter)).getDays();  
		LocalDate minDate = LocalDate.parse(date[0], formatter);
		command.setKeyword(String.valueOf(param.getHouseSeq()));
		model.addAttribute("houseSeq", param.getHouseSeq());
		retval.setTemp(String.valueOf(minDate));
		service.delete_block(command);
	    for (int i = 0; i <= temp; i++) {
			logger.info("HostingController :: manage :: blockdate :: {}", minDate);
			command.setOption(String.valueOf(minDate));
			service.regist_block(command);
			minDate = minDate.plusDays(1);
		}
		retval.setMessage("manage2");
		retval.setTemp2(String.valueOf(minDate.minusDays(1)));
		return retval;
	}
	@RequestMapping("/manage2_2")
	public @ResponseBody Retval hostingManage2_2(@RequestParam("houseSeq") String houseSeq){
		logger.info("HostingController :: manage :: {}", "2");
		command.setKeyword(houseSeq);
		if (service.exist_block(command) == 0) {
			retval.setTemp("설정된 값이 없습니다");
			retval.setTemp2("설정된 값이 없습니다");
		}else{
			List<String> list = service.block_list(command);
			retval.setTemp(String.valueOf(list.get(0)));
			retval.setTemp2(String.valueOf(list.get(list.size()-1)));
		}
		return retval;
	}
	
	@RequestMapping("/manage_list")
	public @ResponseBody List<HostingDTO> hostingManageList(Model model, @RequestParam("houseSeq") String houseSeq, @ModelAttribute("user") MemberDTO memberParam){
		logger.info("HostingController :: manage :: {}", "list");
		command.setStart(Integer.parseInt(houseSeq));
		command.setKeyword(memberParam.getEmail());
		List<HostingDTO> param = service.house_list(command);
		return param;
	}
	@RequestMapping(value="/manage3", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage3(@RequestBody HostingDTO param){
		logger.info("HostingController :: manage :: price :: {}",param.getPrice());
		service.update_price(param);
		retval.setMessage("manage3");
		retval.setCount(param.getPrice());
		return retval;
	}
	@RequestMapping(value="/manage4", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage4(@RequestBody HostingDTO param, @ModelAttribute("user") MemberDTO memberParam, @ModelAttribute("pgNum") int pgNum){
		logger.info("HostingController :: manage :: rules :: {}",param.getRules());
		logger.info("HostingController :: manage :: other_rule :: {}",param.getOtherRule());
		command.setKeyword(memberParam.getEmail());
		command.setStart(pgNum);
		String otherRule = service.house_list(command).get(0).getOtherRule().toString();
		if (param.getOtherRule() == "") {
			param.setOtherRule(otherRule);
		}
		service.update_rules(param);
		System.out.println("other_rule : "+param.getOtherRule());
		retval.setTemp(param.getOtherRule());
		retval.setTemp1(service.house_list(command).get(0).getRules().toString());
		retval.setMessage("manage4");
		return retval;
	}
	@RequestMapping(value="/manage5", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage5(@RequestBody HostingDTO param){
		logger.info("HostingController :: manage :: checkin_time :: {}",param.getCheckinTime());
		service.update_checkin(param);
		retval.setMessage("manage5");
		retval.setTemp(param.getCheckinTime());
		return retval;
	}
	@RequestMapping(value="/manage6", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody HashMap<String,Object> hostingManage6(@RequestBody HostingDTO param){
		command.setKeyword(String.valueOf(param.getHouseSeq()));
		HashMap<String,Object> map = new HashMap<>();
		if (service.exist_cancel(command) == 0) {
			map.put("list", "fail");
		}else{
			map.put("list", service.host_resv_cancel(command));
		}
		return map;
	}
	@RequestMapping(value="/manage7", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage7(@RequestBody HostingDTO param, @ModelAttribute("user") MemberDTO memberParam){
		logger.info("HostingController :: manage :: building_seq :: {}",param.getBuildingSeq());
		logger.info("HostingController :: manage :: room_type :: {}",param.getRoomType());
		logger.info("HostingController :: manage :: guest_cnt :: {}",param.getGuestCnt());
		logger.info("HostingController :: manage :: bed_cnt :: {}",param.getBedCnt());
		logger.info("HostingController :: manage :: bathroom_cnt :: {}",param.getBathroomCnt());
		service.update_house_option(param);
		command.setStart(param.getHouseSeq());
		command.setKeyword(memberParam.getEmail());
		retval.setTemp(service.house_list(command).get(0).getType().toString());
		retval.setTemp2(param.getRoomType());
		retval.setTemp3(String.valueOf(param.getGuestCnt()));
		retval.setTemp4(String.valueOf(param.getBedCnt()));
		retval.setTemp5(String.valueOf(param.getBathroomCnt()));
		retval.setMessage("manage7");
		return retval;
	}
	@RequestMapping(value="/manage8", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage8(@RequestBody HostingDTO param, @ModelAttribute("user") MemberDTO memberParam){
		logger.info("HostingController :: manage :: title :: {}",param.getTitle());
		logger.info("HostingController :: manage :: explaination :: {}",param.getExplaination());
		command.setKeyword(memberParam.getEmail());
		if (param.getTitle() == "") {
			param.setTitle(service.house_list(command).get(0).getTitle().toString());
		}
		if (param.getExplaination() == "") {
			param.setExplaination(service.house_list(command).get(0).getExplaination().toString());
		}
		service.update_explaination(param);
		retval.setTemp(param.getTitle());
		retval.setTemp2(param.getExplaination());
		retval.setMessage("manage8");
		return retval;
	}
	@RequestMapping(value="/manage9", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage9(@RequestBody HostingDTO param){
		logger.info("HostingController :: manage :: latitude :: {}",param.getLatitude());
		logger.info("HostingController :: manage :: longitude :: {}",param.getLongitude());
		command.setKeyword(String.valueOf(param.getHouseSeq()));
		
		
		service.update_googleMap(param);
		retval.setMessage("manage9");
		return retval;
	}
	@RequestMapping(value="/manage10", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage10(@RequestBody HostingDTO param, @ModelAttribute("user") MemberDTO memberParam){
		logger.info("HostingController :: manage :: convenience :: {}",param.getConvenience());
		command.setKeyword(memberParam.getEmail());
		service.update_convenience(param);
		retval.setTemp(service.house_list(command).get(0).getConvenience().toString());
		retval.setMessage("manage10");
		return retval;
	}
	@RequestMapping(value="/manage11", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage11(@RequestBody HostingDTO param){
		logger.info("HostingController :: manage :: picture :: {}",param.getPicture());
		service.update_picture(param);
		retval.setMessage("manage11");
		return retval;
	}
	@RequestMapping(value="/manage12", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage12(@RequestBody HostingDTO param, @ModelAttribute("user") MemberDTO memberParam){
		logger.info("HostingController :: manage :: safety_fac :: {}",param.getSafetyFac());
		service.update_safety_fac(param);
		command.setKeyword(memberParam.getEmail());
		retval.setTemp(service.house_list(command).get(0).getSafetyFac());
		retval.setMessage("manage12");
		return retval;
	}

}
