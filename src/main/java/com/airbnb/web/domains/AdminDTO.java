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
public class AdminDTO implements Serializable {/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String email;
	@Getter @Setter private String pw;
	@Getter @Setter private String name;
	@Getter @Setter private String phone;
	@Getter @Setter private String profileImg;
	@Getter @Setter private String regDate;

}
