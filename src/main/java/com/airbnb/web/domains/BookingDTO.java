package com.airbnb.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
@Lazy
public class BookingDTO {
    @Getter @Setter private String checkinDate, checkoutDate, email, paymentDate, cardNum;
    @Getter @Setter private int resvSeq, guestCnt, houseSeq, paymentSeq, price; 
}