package com.airbnb.web.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.GoogleChartDTO;
import com.airbnb.web.domains.HchartDTO;
import com.airbnb.web.domains.MchartDTO;
import com.airbnb.web.domains.RchartDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.services.AdminService;

@Controller
@Lazy
@SessionAttributes({"user","context","js","css","img"})
@Scope("session")
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	
	@Autowired Retval retval;
	@Autowired AdminService service;
	@Autowired Command command;
	@Autowired AdminDTO member;

	@RequestMapping("/main")
	public String goMain(){
		logger.info("Welcome home! The client locale is main{}", "디버깅 모드");
		return "admin:admin/content.tiles";
	}
	@RequestMapping(value="/admin_main")
	public @ResponseBody Retval goAdminMain(){
		logger.info("Welcome home! The client locale is admin{}", "  goAdminMain");
		retval.setMessage("success");
		
	
		return retval;
	}
	@RequestMapping("/header")
	public String adminHeader(){
		logger.info("----- ADMIN_CONTOLLER HEADER PASS -----");
		return "admin/header.jsp";
	}
	@RequestMapping("/nav")
	public String adminNav(){
		logger.info("----- ADMIN_CONTOLLER NAV PASS -----");
		return "admin/nav.jsp";
	}
	@RequestMapping("/chart")
	public @ResponseBody HashMap<String, Object> adminChart(){
		GoogleChartDTO go= new GoogleChartDTO();
		HashMap<String, Object> map = new HashMap<String,Object>();
		logger.info("----- ADMIN_CONTOLLER chart -----");
		go.addColumn("month", "String");
		go.addColumn("월간회원가입수", "number");
		
	
		return map;
	}	

	

	@RequestMapping("/search")
	public @ResponseBody Retval adminSearch(){
		logger.info("----- ADMIN_CONTOLLER search -----");
		retval.setMessage("success");
		return retval;
	}
	@RequestMapping("/list")
	public @ResponseBody HashMap<String,Object> list(ModelMap model){
			
		HashMap<String,Object> map = new HashMap<String,Object>();
	
		map.put("list",service.list());
		logger.info("----- ADMIN_CONTOLLER list ----- {}",service.list());
		return map;
	}
	@RequestMapping("/hlist")
	public @ResponseBody HashMap<String,Object> hlist(ModelMap model){
			
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("list",service.hlist());
		logger.info("----- ADMIN_CONTOLLER map size ----- {}",map.size());
		return map;
	}
	@RequestMapping("/rlist")
	public @ResponseBody HashMap<String,Object> rlist(ModelMap model){
		
		HashMap<String,Object> map = new HashMap<String,Object>();
		logger.info("----- ADMIN_CONTOLLER REVlist -----");
		map.put("list",service.rlist());
		return map;
	}
	@RequestMapping("/mchart")
	public @ResponseBody HashMap<String, Object> adminMchart(){
		GoogleChartDTO go= new GoogleChartDTO();
		go.addColumn("month", "string");
		go.addColumn("월간회원가입수", "number");
		logger.info("월간회원가입수");
		List<MchartDTO> list1 = new ArrayList<MchartDTO>();
		list1 = service.mchart();
		logger.info("MchartDTO" +service.mchart());
		for (int i = 0; i < list1.size(); i++) {
			go.addRow(list1.get(i).getMchart_month(), list1.get(i).getMchart_count());
		};
		HashMap<String, Object> map = go.getResult();
		return map;
	}


	@RequestMapping("/hchart")
	public @ResponseBody HashMap<String, Object> adminHchart(){
		GoogleChartDTO go= new GoogleChartDTO();
		go.addColumn("month", "string");
		go.addColumn("월간회원 회원가입수", "number");
		go.addColumn("월간 호스팅가입수", "number");
		logger.info("월간회원 호스팅가입수");
		List<HchartDTO> list1 = new ArrayList<HchartDTO>();
		List<MchartDTO> list = new ArrayList<MchartDTO>();
		list1 = service.hchart();
		list = service.mchart();
		logger.info("MchartDTO" +service.hchart());
		logger.info("MchartDTO" +service.mchart());
		go.createRows(list.size());
		for (int i = 0; i < list.size(); i++) {
			go.addCell(i, list.get(i).getMchart_month());
			go.addCell(i, list.get(i).getMchart_count());
			go.addCell(i, list1.get(i).getHchart_count());
		};
		
		
		HashMap<String, Object> map = go.getResult();
		return map;
	}
	@RequestMapping("/mhchart")
	public @ResponseBody HashMap<String, Object> adminMHchart(){
		GoogleChartDTO go= new GoogleChartDTO();
		go.addColumn("month", "string");
		go.addColumn("월간호스팅가입수", "number");
		logger.info("월간호스팅가입수");
		List<HchartDTO> list1 = new ArrayList<HchartDTO>();
		list1 = service.hchart();
		logger.info("MchartDTO" +service.hchart());
		for (int i = 0; i < list1.size(); i++) {
			go.addRow(list1.get(i).getHchart_month(), list1.get(i).getHchart_count());
		};
		HashMap<String, Object> map = go.getResult();
		return map;
	}
	@RequestMapping("/rchart")
	public @ResponseBody HashMap<String, Object> adminRchart(){
		GoogleChartDTO go= new GoogleChartDTO();
		go.addColumn("month", "string");
		go.addColumn("월간회원 회원가입수", "number");
		go.addColumn("월간 호스팅가입수", "number");
		logger.info("월간회원 호스팅가입수");
		List<MchartDTO> list = new ArrayList<MchartDTO>();
		List<HchartDTO> list1 = new ArrayList<HchartDTO>();
		List<RchartDTO> list2 = new ArrayList<RchartDTO>();
		list = service.mchart();
		list1 = service.hchart();
		list2 = service.rchart();
		logger.info("list" +list);
		logger.info("list1" +list1);
		logger.info("list2" +list2);
		go.createRows(list.size());
	/*	int a=list2.get(0).getRchart_count();*/
			int a=list2.get(0).getRchart_count();
			
		for (int i = 0; i < list.size(); i++) {
		/*	String rmonth=list2.get(i).getRchart_month();
			String mmonth=list.get(i).getMchart_month();*/
			go.addCell(i, list.get(i).getMchart_month());
			go.addCell(i, list.get(i).getMchart_count());
			go.addCell(i, list1.get(i).getHchart_count());
		/*	if (rmonth==mmonth) {
				System.out.println("일치 하는  월 회원 과 예약==================="+mmonth);
				go.addCell(i, list2.get(i).getRchart_count());
			}else {
				System.out.println("mmoth일치 하지 않는다    월 회원 과 예약==================="+mmonth);	
				System.out.println("rmoth일치 하지 않는다    월 회원 과 예약==================="+rmonth);	
				go.addCell(i, '0');
			i=i+1;
				System.out.println("일치 하지 않는다    월 회원 과 예약==================="+list2.get(i).getRchart_count());
			}*/
		/*	go.addCell(i, a);*/
		};
		
		
	/*	go.addCell(0, a);*/
	/*	System.out.println("a==================="+a);*/
		
		
		
		HashMap<String, Object> map = go.getResult();
		return map;
	}
	@RequestMapping("/mcount")
	public @ResponseBody Retval mcount(){
		logger.info("----- ADMIN_CONTOLLER mcount -----{}",service.mcount().getCount());
		Retval retval = service.mcount();
		
		return retval;
	}
	@RequestMapping("/hcount")
	public @ResponseBody Retval hcount(){
		logger.info("----- ADMIN_CONTOLLER hcount -----");
		return service.hcount();
	}
	@RequestMapping("/rcount")
	public @ResponseBody Retval rcount(){
		logger.info("----- ADMIN_CONTOLLER mcount -----{}",service.rcount().getCount());
		Retval retval = service.rcount();
		return retval;
	}
	
	
}