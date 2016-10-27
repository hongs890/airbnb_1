package com.airbnb.web.domains;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Lazy
@Data
public class SearchVal {
	@Getter @Setter private String longitude,latitude,country,state,city,street,checkin,checkout,roomType,convenience,safetyFac;
	@Getter @Setter private int guestCnt,pageNum,count,start,end,minPrice,maxPrice,bedCnt,bathroomCnt,nights,addrDepth;
	@Getter @Setter private List<String> stateList,cityList,streetList;
}
