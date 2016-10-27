package com.airbnb.web.domains;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component @Lazy @Data
public class GuideDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String place,Major_Category,Minor_Category,Host_Comment,email,guide_seq;
}
