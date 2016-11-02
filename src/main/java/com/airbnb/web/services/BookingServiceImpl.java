package com.airbnb.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.airbnb.web.domains.BookingDTO;
import com.airbnb.web.domains.Command;
import com.airbnb.web.domains.HouseDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.domains.SearchVal;
import com.airbnb.web.mappers.BookingMapper;

@Service
@Lazy
public class BookingServiceImpl implements BookingService{

	private static final Logger logger = LoggerFactory.getLogger(BookingServiceImpl.class);
	@Autowired
	private SqlSession sqlSession;
	@Autowired
	private SearchVal sVal;
	@Autowired Retval retVal;
	
	@Override
	public Retval regist(BookingDTO param) {
		   retVal.setMessage( sqlSession.getMapper(BookingMapper.class).payInsert(param)  == -1 ? "success":"fail");
		   return retVal;
	}

	@Override
	public Retval update(BookingDTO param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Retval delete(BookingDTO param) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public List<HouseDTO> list(SearchVal sVal) {
		return sqlSession.getMapper(BookingMapper.class).find(sVal);
	}
	@Override
	public List<String> getLocList(SearchVal sVal) {
		if(sVal.getState().equals("NONE")){
			sVal.setAddrDepth(1);
		}else if(sVal.getCity().equals("NONE")){
			sVal.setAddrDepth(2);
		}else if(sVal.getStreet().equals("NONE")){
			sVal.setAddrDepth(3);
		}else{
			sVal.setAddrDepth(4);
		}
		return sqlSession.getMapper(BookingMapper.class).findLoc(sVal);
	}
	@Override
	public Integer listCount(SearchVal sVal) {
		// TODO Auto-generated method stub
		return sqlSession.getMapper(BookingMapper.class).listCount(sVal).getCount();
	}
	// ---------------- SANGHO LINE -------------------- //
	@Override
	   public Command resvCount(Command command) {
	      return sqlSession.getMapper(BookingMapper.class).resvCount(command);
	   }
	 @Override
	   public HouseDTO findOne(Command command) {
	      return sqlSession.getMapper(BookingMapper.class).findOne(command);
	   }
	 @Override
	   public List<BookingDTO> resvList(Command command) {
	      BookingMapper mapper = sqlSession.getMapper(BookingMapper.class);
	      return mapper.resvList(command);
	   }

	/*@Override
	public Integer listCount(SearchVal sVal) {
	
		return sqlSession.getMapper(BookingMapper.class).listCount(sVal);
	}
	 
	*/
	


}