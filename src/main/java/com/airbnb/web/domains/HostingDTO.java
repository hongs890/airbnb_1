package com.airbnb.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Component
@Lazy
@Data
public class HostingDTO {
	@Getter @Setter private String room_type, type, country, state, city, street, optional, zip_code, convenience, safety_fac,
	space, explaination, title, rules, other_rule, checkin_term, checkin_time, latitude, longitude, picture, block_date, email, reg_date;
	@Getter @Setter private int guest_cnt, bed_cnt, bathroom_cnt, min_nights, max_nights, price, building_seq, house_seq, address_seq;
	
}
