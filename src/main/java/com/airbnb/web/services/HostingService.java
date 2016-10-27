/**
 * 
 */
package com.airbnb.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;

/**
 *@date   : 2016. 6. 17.
 *@author : 박승주
 *@file   : StudentService.java
 *@story  : 
*/
@Component
@Lazy
public interface HostingService{
	// CREATE
	public Integer regist_houses(HostingDTO param);
	public Integer regist_address(HostingDTO param);
	public Integer manage2(HostingDTO param);
	// UPDATE
	public Retval update(HostingDTO param);
	// DELETE
	public Retval delete(HostingDTO param);
	// SELECT
	public Retval count();
	public List<HostingDTO> find(Command command);
	public List<String> building_list();
	public Integer house_seq(Command command);
}