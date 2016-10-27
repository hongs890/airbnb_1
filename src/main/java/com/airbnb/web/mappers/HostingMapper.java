package com.airbnb.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HostingDTO;

@Repository
@Lazy
public interface HostingMapper {
	public Integer regist_houses(HostingDTO param);
	public Integer regist_address(HostingDTO param);
	public Integer manage2(HostingDTO param);
	public List<String> building_list();
	public Integer house_seq(Command command);
}