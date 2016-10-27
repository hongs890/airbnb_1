package com.airbnb.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component @Lazy
public class Retval {
   @Getter @Setter private int count;
   @Getter @Setter private String message;
   @Getter @Setter private String flag;
   @Getter @Setter private String temp;
   @Getter @Setter private String temp2;
}