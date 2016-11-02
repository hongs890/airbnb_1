package com.airbnb.web.controllers;


import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.airbnb.web.constants.Values;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.services.HostingService;
@Controller
@Lazy
@RequestMapping("/hosting")
@SessionAttributes({"user"})
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
	public @ResponseBody Retval hostingRegistLogin(@ModelAttribute("user") MemberDTO dto){
		logger.info("HostingController :: {}", "regist_login");
		if (dto.getEmail() == null) {
			retval.setMessage("fail_login");
		}else{
			retval.setMessage("success_login");
		}
		return retval;
	}	
	@RequestMapping(value="/regist_insert", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegistInsert(@RequestBody HostingDTO param, @ModelAttribute("user") MemberDTO dto){
		logger.info("HostingController :: {}", "regist_insert");
		String date = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		param.setReg_date(date);
		param.setEmail(dto.getEmail());
		logger.info("HostingController :: regist :: reg_date :: {}", param.getReg_date());
		logger.info("HostingController :: regist :: email :: {}", param.getEmail());
		logger.info("HostingController :: regist :: room_type :: {}", param.getRoom_type());
		logger.info("HostingController :: regist :: guest_cnt :: {}", param.getGuest_cnt());
		logger.info("HostingController :: regist :: building_seq :: {}", param.getBuilding_seq());
		logger.info("HostingController :: regist :: bed_cnt :: {}", param.getBed_cnt());
		logger.info("HostingController :: regist :: bathroom_cnt :: {}", param.getBathroom_cnt());
		logger.info("HostingController :: regist :: convenience :: {}", param.getConvenience());
		logger.info("HostingController :: regist :: safety_fac :: {}", param.getSafety_fac());
		logger.info("HostingController :: regist :: space :: {}", param.getSpace());
		logger.info("HostingController :: regist :: picture :: {}", param.getPicture());
		logger.info("HostingController :: regist :: explaination :: {}", param.getExplaination());
		logger.info("HostingController :: regist :: title :: {}", param.getTitle());
		logger.info("HostingController :: regist :: rules :: {}", param.getRules());
		logger.info("HostingController :: regist :: other_rule :: {}", param.getOther_rule());
		logger.info("HostingController :: regist :: checkin_term :: {}", param.getCheckin_term());
		logger.info("HostingController :: regist :: checkin_time :: {}", param.getCheckin_time());
		logger.info("HostingController :: regist :: min_nights :: {}", param.getMin_nights());
		logger.info("HostingController :: regist :: max_nights :: {}", param.getMax_nights());
		logger.info("HostingController :: regist :: price :: {}", param.getPrice());
		logger.info("HostingController :: regist :: country :: {}", param.getCountry());
		logger.info("HostingController :: regist :: state :: {}", param.getState());
		logger.info("HostingController :: regist :: city :: {}", param.getCity());
		logger.info("HostingController :: regist :: street :: {}", param.getStreet());
		logger.info("HostingController :: regist :: optional :: {}", param.getOptional());
		logger.info("HostingController :: regist :: zip_code :: {}", param.getZip_code());
		logger.info("HostingController :: regist :: latitude :: {}", param.getLatitude());
		logger.info("HostingController :: regist :: longitude :: {}", param.getLongitude());
		service.regist_houses(param);
		command.setKeyword(dto.getEmail());
		param.setHouse_seq(service.house_seq_max(command));
		logger.info("HostingController :: regist :: house_seq :: {}", param.getHouse_seq());
		service.regist_address(param);
		retval.setMessage("success_insert");
		return retval;
	}
	@RequestMapping(value="/manage1/{pgNum}", method=RequestMethod.GET)
	public @ResponseBody HashMap<String,Object> hostingManage1(@PathVariable String pgNum, @ModelAttribute("user") MemberDTO dto){
		logger.info("HostingController :: manage :: pgNum :: {}", pgNum);
		command.setKeyword(dto.getEmail());
		HashMap<String,Object> map = new HashMap<>();
		List<?> list = service.house_seq(command);
		int totCount = service.house_count(command);
		command.setStart(Integer.parseInt(String.valueOf(list.get(Integer.parseInt(pgNum)-1))));
		map.put("country", service.address_country(command));
		map.put("list", service.house_list(command));
		map.put("pgSize", Values.PG_SIZE);
		map.put("totPg", totCount);
		map.put("pgNum", Integer.parseInt(pgNum));
		map.put("startPg",1);
		map.put("lastPg", totCount);
		return map;
	}
	@RequestMapping(value="/manage2", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage2(@RequestBody HostingDTO hostingDTO){
		String[] date = hostingDTO.getBlock_date().split(",");
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	    int temp = LocalDate.parse(date[0], formatter).until(LocalDate.parse(date[1], formatter)).getDays();  
		LocalDate minDate = LocalDate.parse(date[0], formatter);
		command.setKeyword(String.valueOf(hostingDTO.getHouse_seq()));
		service.delete_block(command);
	    for (int i = 0; i <= temp; i++) {
			logger.info("HostingController :: manage :: blockdate :: {}", minDate);
			command.setOption(String.valueOf(minDate));
			service.regist_block(command);
			minDate = minDate.plusDays(1);
		}
		retval.setMessage("manage2");
		return retval;
	}
	@RequestMapping("/manage_list")
	public @ResponseBody List<HostingDTO> hostingManageList(@RequestParam("house_seq") String house_seq, @ModelAttribute("user") MemberDTO dto){
		logger.info("HostingController :: manage :: {}", "list");
		command.setStart(Integer.parseInt(house_seq));
		command.setKeyword(dto.getEmail());
		List<HostingDTO> param = service.house_list(command);
		System.out.println(param);
		return param;
	}
	
	@RequestMapping(value="/manage3", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage3(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: price :: {}",hostingDTO.getPrice());
		service.update_price(hostingDTO);
		retval.setMessage("manage3");
		return retval;
	}
	@RequestMapping(value="/manage4", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage4(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: rules :: {}",hostingDTO.getRules());
		logger.info("HostingController :: manage :: other_rule :: {}",hostingDTO.getOther_rule());
		service.update_rules(hostingDTO);
		retval.setMessage("manage4");
		return retval;
	}
	@RequestMapping(value="/manage5", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage5(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: checkin_time :: {}",hostingDTO.getCheckin_time());
		service.update_checkin(hostingDTO);
		retval.setMessage("manage5");
		return retval;
	}

	@RequestMapping(value="/manage7", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage7(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: building_seq :: {}",hostingDTO.getBuilding_seq());
		logger.info("HostingController :: manage :: room_type :: {}",hostingDTO.getRoom_type());
		logger.info("HostingController :: manage :: guest_cnt :: {}",hostingDTO.getGuest_cnt());
		logger.info("HostingController :: manage :: bed_cnt :: {}",hostingDTO.getBed_cnt());
		logger.info("HostingController :: manage :: bathroom_cnt :: {}",hostingDTO.getBathroom_cnt());
		service.update_house_option(hostingDTO);
		retval.setMessage("manage7");
		return retval;
	}
	@RequestMapping(value="/manage8", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage8(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: title :: {}",hostingDTO.getTitle());
		logger.info("HostingController :: manage :: explaination :: {}",hostingDTO.getExplaination());
		service.update_explaination(hostingDTO);
		retval.setMessage("manage8");
		return retval;
	}
	@RequestMapping(value="/manage9", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage9(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: latitude :: {}",hostingDTO.getLatitude());
		logger.info("HostingController :: manage :: longitude :: {}",hostingDTO.getLongitude());
		service.update_googleMap(hostingDTO);
		retval.setMessage("manage9");
		return retval;
	}
	@RequestMapping(value="/manage10", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage10(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: convenience :: {}",hostingDTO.getConvenience());
		service.update_convenience(hostingDTO);
		retval.setMessage("manage10");
		return retval;
	}
	@RequestMapping(value="/manage11", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage11(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: picture :: {}",hostingDTO.getPicture());
		service.update_picture(hostingDTO);
		retval.setMessage("manage11");
		return retval;
	}
	@RequestMapping(value="/manage12", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage12(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: safety_fac :: {}",hostingDTO.getSafety_fac());
		service.update_safety_fac(hostingDTO);
		retval.setMessage("manage12");
		return retval;
	}

}
