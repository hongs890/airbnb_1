package com.airbnb.web.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.services.MemberService;
@Lazy
@Controller
@RequestMapping("/member")
@SessionAttributes({"admin","user"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
		@Autowired Retval retval;
		@Autowired MemberDTO member;
		@Autowired MemberService service;
		@Autowired private SqlSession sqlSession; 
	
		@RequestMapping(value = "/signin")
		public @ResponseBody MemberDTO signin(@RequestParam("email") String email, @RequestParam("pw") String pw,Model model) {
			logger.info("SignIn ID IS {}", email);
			logger.info("Signin PW IS {}", pw);
			member.setEmail(email);
			member.setPw(pw);
			 MemberDTO user = service.signin(member);
			logger.info("getEmail value: {}", member.getEmail());
			 if(email.equals("admin")&&pw.equals("1")){
			         logger.info("Controller LOGIN {}","ADMIN");
			         logger.info("Controller LOGIN {}",email);
			         logger.info("Controller LOGIN {}",pw);
			         model.addAttribute("admin", user);
			         return user;
			  }else{ 
			if(user.getEmail().equals("NONE")){
				logger.info("Controller LOGIN IS {}","FAIL");
				return user;
			}else{
				logger.info("Controller LOGIN IS {}","SUCCESS");
				model.addAttribute("user", user);
				return user;
			}
			  }
		}
	   @RequestMapping("/m_signupE")		
		public @ResponseBody Retval membersignupemail(){
			logger.info("MemberController ! signup()");
			retval.setMessage("success");
			return retval;
	}
	   @RequestMapping(value="/signupE",method=RequestMethod.POST,consumes="application/json")
	   public @ResponseBody Retval signUp(@RequestBody MemberDTO param,Locale locale) {
	      logger.info("SIGN UP {}","EXECUTE");
	      logger.info("SIGN UP EMAIL {}",param.getEmail());
	      logger.info("SIGN UP PW {}",param.getPw());
	      logger.info("SIGN UP NAME {}",param.getName());
	      logger.info("SIGN UP SSN {}",param.getSsn());
	      logger.info("SIGN UP PHONE {}",param.getPhone());	   
	      logger.info("SIGN UP DAY {}",param.getDay());	   
	      logger.info("SIGN UP YEAR {}",param.getYear());	   
	      logger.info("SIGN UP MONTH {}",param.getMonth());
	      param.setSsn(param.getYear().substring(2, 4)+param.getMonth()+param.getDay());
	      
	      logger.info(param.getYear().substring(2, 4));
	      Date d = new Date();
	      SimpleDateFormat reg = new SimpleDateFormat("yyyy-MM-dd");
		  param.setRegDate(reg.format(d));	  
		  logger.info(param.getRegDate());
		  param.setProfileImg("default.jpg");
		  logger.info("SIGN UP retval {}",param);
	      retval.setMessage(service.signup(param));
	      logger.info("SIGN UP retval {}",retval.getMessage());
	      return retval;
	   }
	   @RequestMapping(value="/check_dup/{email}",method=RequestMethod.POST,consumes="application/json")
	   public @ResponseBody Retval checkDup(@PathVariable String email) {
	      logger.info("checkDup {}","email");
	      logger.info("checkDup {}",email);
	      if (service.existId(email)==1) {
	    	  retval.setMessage("중복된 아이디입니다.");
	    	  retval.setFlag("TRUE");
		}else{
			retval.setFlag("FALSE");
			retval.setMessage("가입가능합니다.");
			retval.setTemp(email);
		}
		 logger.info("RETVAL FLAG IS {}",retval.getFlag());
		 logger.info("RETVAL MSG IS {}",retval.getMessage());
	      return retval;
	   }
		@RequestMapping("/nav")		
		public String  memberNav(){
			logger.info("GuideController ! nav() ");
			logger.info("----- member_CONTOLLER nav -----");
			return "member:member/nav.tiles";
	}
		@RequestMapping("/main")		
		public @ResponseBody String memberMain(){
			logger.info("GuideController ! Main() ");			
			return "user:public/content.tiles";
	}
		@RequestMapping("/dashboard")
		public String memberHeader(){
			logger.info("----- member_dashboard PASS -----");
			return "member:member/dashboard.tiles";
		}
		@RequestMapping("/logout")
		public  String memberLogout(SessionStatus session){
			logger.info("----- member_CONTOLLER logout PASS -----");
			logger.info("----- member_CONTOLLER logout PASS ----- {}", retval);
			session.setComplete();
			return "public:public/content.tiles";
		}
	
		@RequestMapping("/edit")		
		public @ResponseBody Retval memberEdit(){
			logger.info("GuideController ! Edit() ");
			retval.setMessage("success");
			return retval;
	}
		@RequestMapping("/account")
		public String memberaccount(){
			logger.info("----- member_CONTOLLER accountPASS -----");
			return "member:member/account.tiles";
		}
		@RequestMapping("/logined/header")
		   public String loginedHeader(){
		      logger.info("THIS PATH IS {}","LOGINED_HEADER");
		      return "user/u_header.jsp";
		   }
		@RequestMapping("/logined/main")
		   public String loginedMain(){
		      logger.info("THIS PATH IS {}","LOGINED_MAIN");
		      return "public/content.jsp";
		   }
}
