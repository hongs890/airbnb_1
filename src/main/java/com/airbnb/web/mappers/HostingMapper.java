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
	public Integer regist_block(Command command);
	public Integer delete_block(Command command);
	public Integer update_price(HostingDTO param);
	public Integer update_rules(HostingDTO param);
	public Integer update_checkin(HostingDTO param);
	public Integer update_house_option(HostingDTO param);
	public Integer update_explaination(HostingDTO param);
	public Integer update_googleMap(HostingDTO param);
	public Integer update_convenience(HostingDTO param);
	public Integer update_picture(HostingDTO param);
	public Integer update_safety_fac(HostingDTO param);
	public List<HostingDTO> house_list(Command command);
	public List<String> address_country(Command command);
	public List<String> building_list();
	public List<String> house_seq(Command command);
	public Integer house_seq_max(Command command);
	public Integer house_count(Command command);
}