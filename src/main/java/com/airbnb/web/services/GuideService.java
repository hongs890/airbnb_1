package com.airbnb.web.services;
import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.GuideDTO;
import com.airbnb.web.domains.Retval;

@Component @Lazy
public interface GuideService{
	
	// CREATE
	public String g_insert(GuideDTO gdto);
	// UPDATE
	public String update(GuideDTO gdto);
	// DELETE
	public String delete(GuideDTO gdto);
	// SELECT
	public Retval count();
	public Retval gcount();
	public List<GuideDTO> find(Command command);
	public List<GuideDTO> list();
	public List<GuideDTO> glist();
}	