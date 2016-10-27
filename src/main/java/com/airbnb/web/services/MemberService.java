/**
 * 
 */
package com.airbnb.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;

@Component @Lazy
public interface MemberService{
	//  CREATE
	public String signup(MemberDTO param);
	//  UPDATE
	public Retval update(MemberDTO param);
	//  DELETE
	public Retval delete(MemberDTO param);
	// SELECT
	public Retval count();
	public List<MemberDTO> find(Command command);//한사람 정보(키워드 걸림)
	public List<MemberDTO> list(Command command);//전체 정보 페이지네이션
	public MemberDTO signin(MemberDTO member);
	public int existId(String id);
	
}