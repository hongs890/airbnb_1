package com.airbnb.web.domains;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
@Lazy
public class MchartDTO implements Serializable {/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String mchart_year,mchart_month;
	@Getter @Setter private int mchart_count;
	

}
