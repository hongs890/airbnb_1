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
public class RchartDTO implements Serializable {/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String rchart_year,rchart_month;
	@Getter @Setter private int rchart_count;

	

}
