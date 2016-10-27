/**
 * 
 */
package com.airbnb.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.airbnb.web.domains.BookingDTO;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HouseDTO;
import com.airbnb.web.domains.MemberDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.domains.SearchVal;

/**
 *@date   : 2016. 6. 17.
 *@author : 박승주
 *@file   : StudentService.java
 *@story  : 
*/
@Repository
@Lazy
public interface BookingService{
	// CREATE
	public Retval regist(BookingDTO param);
	// UPDATE
	public Retval update(BookingDTO param);
	// DELETE
	public Retval delete(BookingDTO param);
	// SELECT HYUNWOO
	public List<String> getLocList(SearchVal sVal);
	public List<HouseDTO> list(SearchVal sVal);
	public Integer listCount(SearchVal sVal);
	// SELECT SH 
	public Command resvCount(Command command);
	public HouseDTO findOne(Command command);
	public List<BookingDTO> resvList(Command command);
	
}