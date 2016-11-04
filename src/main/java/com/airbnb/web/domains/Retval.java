package com.airbnb.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component @Lazy
public class Retval {
   @Getter @Setter private int count;
   @Getter @Setter private String message,flag,temp,temp1,temp2,temp3,temp4,temp5;
}