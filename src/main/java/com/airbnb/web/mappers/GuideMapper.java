package com.airbnb.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.airbnb.web.domains.GuideDTO;
import com.airbnb.web.domains.Retval;

@Repository
public interface GuideMapper {
	public Retval count();
	public Retval gcount();

	public List<GuideDTO> find(GuideDTO gdto);
	public List<GuideDTO> list();
	public List<GuideDTO> glist();

	public int g_insert(GuideDTO gdto);
	public Retval update(GuideDTO gdto);
	public Retval delete(GuideDTO gdto);
}
