package com.airbnb.web.domains;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
public class HouseDTO {
	 @Getter @Setter private int houseSeq,guestCnt,bedCnt,bathroomCnt,checkinTerm,minNights,maxNights,price;
	 @Getter @Setter private String roomType,picture,explaination,title,otherRule,checkinTime,period
     ,regDate,rules,convenience,safetyFac,space,email,type,country,state,city,street,optional,zipCode,latitude,longitude;
}