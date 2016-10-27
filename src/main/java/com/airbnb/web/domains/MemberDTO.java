package com.airbnb.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data @Lazy
public class MemberDTO {
	@Getter @Setter private String ssn,day,year,month,name,email,pw,phone,profileImg,regDate;
}
