package com.airbnb.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.airbnb.web.constants.Values;

import lombok.Data;
@Component
@Lazy
@Data
public class Pagination {
	public static int[] getStartEndRow(int totCount,int pgNum,int pgSize){
		int[] rows = {totCount <= pgSize ? 0 : (pgNum-1)*pgSize,pgSize};
		return rows;
	}
	public static int getLastPg(int totPg, int startPg) {
		return startPg+Values.GROUP_SIZE-1 <= totPg ? startPg+Values.GROUP_SIZE-1 : totPg;
	}
	public static int getStartPg(int pgNum) {
		return  pgNum-((pgNum-1)%Values.GROUP_SIZE);
	}
	public static int getTotPg(int totCount) {
		return totCount%Values.PG_SIZE==0?totCount/Values.PG_SIZE:totCount/Values.PG_SIZE+1;
	} 
}
