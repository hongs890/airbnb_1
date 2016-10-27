package com.airbnb.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.airbnb.web.controllers.AdminController;
import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.BookingDTO;
import com.airbnb.web.domains.HchartDTO;
import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.MchartDTO;
import com.airbnb.web.domains.RchartDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.mappers.AdminMapper;



@Service @Lazy

public class AdminServiceImpl implements AdminService {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired	private SqlSession sqlSession;
	@Autowired	private AdminDTO email;
/*	@Autowired  private Command command ;*/
	@Autowired  private Retval retval ;
	
	@Override
	public List<AdminDTO> find() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval regist(AdminDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	@Transactional
	public Retval update(AdminDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval delete(AdminDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval mcount() {
		// TODO Auto-generated method stub
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		
		logger.info("----- ADMIN_CONTOLLER mcount -----{}",mapper.mcount().getCount());	
		return  mapper.mcount();
	}
	@Override
	public Retval hcount() {
		// TODO Auto-generated method stub
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		
		
		return mapper.hcount();
	}
	@Override
	public Retval rcount() {
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		
		
		return mapper.rcount();
	}
	@Override
	public Retval count() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<HostingDTO> hlist() {
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		return mapper.hlist();
	
	}
	@Override
	public List<BookingDTO> rlist() {
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		return mapper.rlist();
	
	}

	@Override
	public List<AdminDTO> list() {
		// TODO Auto-generated method stub
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		return mapper.list();
	}
	@Override
	public List<MchartDTO> mchart() {
		AdminMapper mapper =sqlSession.getMapper(AdminMapper.class);
		logger.info("----- ADMIN_CONTOLLER mcount -----{}",mapper.mchart());	
		return mapper.mchart();
	}
	@Override
	public List<HchartDTO> hchart() {
		AdminMapper mapper =sqlSession.getMapper(AdminMapper.class);
		return mapper.hchart();
	}
	@Override
	public List<RchartDTO> rchart() {
		AdminMapper mapper =sqlSession.getMapper(AdminMapper.class);
		return mapper.rchart();
	}

}
