package com.airbnb.web.services;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.airbnb.web.controllers.MemberController;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.mappers.MemberMapper;

@Service @Lazy
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired private SqlSession sqlSession;
	@Autowired Command command;

	@Override
	public String signup(MemberDTO mem) {
		return (sqlSession.getMapper(MemberMapper.class).signup(mem)==1)?"success":"fail";
	}

	@Override
	public String update(MemberDTO param) {
		return (sqlSession.getMapper(MemberMapper.class).update(param)==1)?"success":"fail";
	}

	@Override
	public Retval delete(MemberDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval count() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<MemberDTO> find(Command command) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<MemberDTO> list(Command command) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberDTO signin(MemberDTO member) {
		logger.info("Login Email: {}",member.getEmail());
		logger.info("Login PW: {}",member.getPw());
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class); //??
		command.setKeyword(member.getEmail());
		command.setKeyField("email");
		List<MemberDTO> pw = mapper.find(command);
		if (pw.get(0).getPw().equals(member.getPw())) {
			return pw.get(0);
		} else {
			((MemberDTO) pw).setEmail("NONE");
			return pw.get(0);
		}
	}

	@Override
	public int existId(String email) {
		logger.info("MemberService exist ID = {}",email);
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.existId(email);
	}

}
