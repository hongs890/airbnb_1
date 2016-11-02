package com.airbnb.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.MemberDTO;

@Repository @Lazy
public interface MemberMapper {
	public boolean login(MemberMapper param);
	public int signup(MemberDTO mem);
	public List<MemberDTO> find(Command command);
	public int existId(String email);
}