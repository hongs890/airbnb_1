package com.airbnb.web.controllers;

import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.mappers.AdminMapper;
import com.airbnb.web.services.AdminService;

@Controller
@Lazy
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
		logger.info("Welcome home! The client locale is 1111{}", "디버깅 모드");
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
	public @ResponseBody Retval adminChart(){
		logger.info("----- ADMIN_CONTOLLER chart -----");
		retval.setMessage("success");
		return retval;
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
		map.put("mcount",service.mcount());
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
	public @ResponseBody HashMap<String, Object> adminMchart(ModelMap model){
		HashMap<String, Object> map = new HashMap<String,Object>();
		
		logger.info("----- ADMIN_CONTOLLER mchart PASS -----{}",service.mchart());
		map.put("mchart", service.mchart());
		return map;
	}
	@RequestMapping("/rchart")
	public @ResponseBody HashMap<String, Object> adminHchart(ModelMap model){
		HashMap<String, Object> map = new HashMap<String,Object>();
		
		logger.info("----- ADMIN_CONTOLLER mchart PASS -----");
		map.put("rchart", service.rchart());
		return map;
	}
	@RequestMapping("/hchart")
	public @ResponseBody HashMap<String, Object> adminRchart(ModelMap model){
		HashMap<String, Object> map = new HashMap<String,Object>();
		
		logger.info("----- ADMIN_CONTOLLER mchart PASS -----");
		map.put("hchart", service.hchart());
		return map;
	}
	@RequestMapping("/hrchart")
	public @ResponseBody HashMap<String, Object> adminHRchart(ModelMap model){
		HashMap<String, Object> map = new HashMap<String,Object>();
		
		logger.info("----- ADMIN_CONTOLLER mchart PASS -----");
		map.put("hchart", service.hchart());
		map.put("rchart", service.rchart());
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
		logger.info("----- ADMIN_CONTOLLER mcount -----");
		Retval retval = service.rcount();
		return retval;
	}
	
}