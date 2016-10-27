/**
 * 
 */
package com.airbnb.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.BookingDTO;
import com.airbnb.web.domains.HchartDTO;
import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.MchartDTO;
import com.airbnb.web.domains.RchartDTO;
import com.airbnb.web.domains.Retval;


@Component @Lazy
public interface AdminService{
	public Retval count();
	public Retval mcount();
	public Retval hcount();
	public Retval rcount();
	public List<AdminDTO> list();
	public List<HostingDTO> hlist();
	public List<BookingDTO> rlist();
	public List<AdminDTO> find();
	public List<MchartDTO> mchart();
	public List<HchartDTO> hchart();
	public List<RchartDTO> rchart();
	
	public Retval regist(AdminDTO param);
	public Retval update(AdminDTO param);
	public Retval delete(AdminDTO param);
	
	
}