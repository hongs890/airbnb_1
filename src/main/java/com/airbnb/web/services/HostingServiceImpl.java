package com.airbnb.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.airbnb.web.domains.BookingDTO;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HostingDTO;
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
	public Integer regist_block(Command command) {
		return sqlSession.getMapper(HostingMapper.class).regist_block(command);
	}
	@Override
	public Integer delete_block(Command command){
		return sqlSession.getMapper(HostingMapper.class).delete_block(command);
	}
	@Override
	public Integer update_price(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_price(param);
	}
	@Override
	public Integer update_rules(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_rules(param);
	}
	@Override
	public Integer update_checkin(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_checkin(param);
	}
	@Override
	public Integer update_house_option(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_house_option(param);
	}
	@Override
	public Integer update_explaination(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_explaination(param);
	}
	@Override
	public Integer update_googleMap(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_googleMap(param);
	}
	@Override
	public Integer update_convenience(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_convenience(param);
	}
	@Override
	public Integer update_picture(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_picture(param);
	}
	@Override
	public Integer update_safety_fac(HostingDTO param) {
		return sqlSession.getMapper(HostingMapper.class).update_safety_fac(param);
	}
	
	@Override
	public Integer house_count(Command command) {
		return sqlSession.getMapper(HostingMapper.class).house_count(command);
	}
	@Override
	public Integer exist_block(Command command) {
		return sqlSession.getMapper(HostingMapper.class).exist_block(command);
	}
	@Override
	public Integer exist_cancel(Command command) {
		return sqlSession.getMapper(HostingMapper.class).exist_cancel(command);
	}
	@Override
	public Integer hosting_delete_ad(Command command) {
		return sqlSession.getMapper(HostingMapper.class).hosting_delete_ad(command);
	}
	@Override
	public Integer hosting_delete_bl(Command command) {
		return sqlSession.getMapper(HostingMapper.class).hosting_delete_bl(command);
	}
	@Override
	public Integer hosting_delete_ho(Command command) {
		return sqlSession.getMapper(HostingMapper.class).hosting_delete_ho(command);
	}

	@Override
	public List<HostingDTO> house_list(Command command) {
		return sqlSession.getMapper(HostingMapper.class).house_list(command);
	}
	@Override
	public List<BookingDTO> host_resv_cancel(Command command) {
		return sqlSession.getMapper(HostingMapper.class).host_resv_cancel(command);
	}
	@Override
	public List<String> block_list(Command command) {
		return sqlSession.getMapper(HostingMapper.class).block_list(command);
	}
	@Override
	public List<String> house_seq(Command command) {
		return sqlSession.getMapper(HostingMapper.class).house_seq(command);
	}
	@Override
	public List<String> building_list() {
		return sqlSession.getMapper(HostingMapper.class).building_list();
	}



}
