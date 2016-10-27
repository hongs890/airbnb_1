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
	public Retval update(MemberDTO param) {
		// TODO Auto-generated method stub
		return null;
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
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class); //??
		List<MemberDTO> list = new ArrayList<MemberDTO>(); //?
		command.setKeyword(member.getEmail());
		command.setKeyField("email");
		list = (List<MemberDTO>) mapper.find(command);
		String pw = list.get(0).getPw(); //?
		logger.info("Login PW: {}",member.getPw());
		logger.info("Database PW: {}",pw);
		if (pw.equals(member.getPw())) {
			logger.info("MemberService Login: {}"+ "success");
			return list.get(0);
		} else {
			logger.info("MemberService Login: {}"+ "fail");
			((MemberDTO) list).setEmail("NONE");
			return list.get(0);
		}
	}

}
