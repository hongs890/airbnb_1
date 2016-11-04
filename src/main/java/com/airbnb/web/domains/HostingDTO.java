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
	@Getter @Setter private String roomType, type, country, state, city, street, optional, zipCode, convenience, safetyFac,
	space, explaination, title, rules, otherRule, checkinTerm, checkinTime, latitude, longitude, picture, blockDate, email, regDate;
	@Getter @Setter private int guestCnt, bedCnt, bathroomCnt, minNights, maxNights, price, buildingSeq, houseSeq, addressSeq;
	
}
