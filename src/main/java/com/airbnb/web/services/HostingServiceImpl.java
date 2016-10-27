package com.airbnb.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.mappers.HostingMapper;

@Service
@Lazy
public class HostingServiceImpl implements HostingService{
	@Autowired SqlSession sqlSession;
	
	@Override
	public Integer regist_houses(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).regist_houses(param);
	}
	@Override
	public Integer regist_address(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).regist_address(param);
	}
	@Override
	public Integer manage2(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).manage2(param);
	}
	@Override
	public Retval update(HostingDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval delete(HostingDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval count() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<HostingDTO> find(Command command) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<String> building_list() {
		return sqlSession.getMapper(HostingMapper.class).building_list();
	}
	@Override
	public Integer house_seq(Command command) {
		return sqlSession.getMapper(HostingMapper.class).house_seq(command);
	}

}
