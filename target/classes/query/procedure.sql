--- procedure mysql Airbnb
select * from reservation;
select * from member;
select count(*) from member;
show tables;
show procedure ststaus;
alter table member add column ssn varchar(15);
/*
=============== META_GROUP ===============
@AUTHOR :math89@gmail.com
@CREATE DATE: 2016-10-25
@UPDATE DATE: 2016-10-25
@DESC :procedure mysql Airbnb
=============== MEMBER ===============
*/
--- DEF_COUNT_MEMBER     
show procedure status;
DELIMITER //
DROP PROCEDURE IF EXISTS mcount //
CREATE PROCEDURE mcount()
BEGIN
SELECT COUNT(*) count FROM member;
END//
DELIMITER ;
--EXE_COUNT_MEMBER
call mcount();

---DEF LIST MEMBER 
DROP PROCEDURE IF EXISTS mlist ;
CREATE PROCEDURE mlist()
BEGIN
  SELECT
  m.email email,
  m.name name,
  m.phone phone,
  m.profileImg profileImg,
  m.reg_date regDate
  from member m order by reg_date desc;
   END;
--EXE_LIST_MEMBER
   call mlist();
   
---DEF CHART MEMBER  월별회원 가입수 
DROP PROCEDURE IF EXISTS mchart ;
CREATE PROCEDURE mchart()
begin
   SELECT DATE_FORMAT(reg_date,'%2016-%m') mchart_month, COUNT(*) mchart_count
      from   member
      GROUP BY mchart_month;
end;
--EXE_CHART_MEMBER
call mchart;
/*
=============== META_GROUP ===============
@AUTHOR :math89@gmail.com
@CREATE DATE: 2016-10-25
@UPDATE DATE: 2016-10-25
@DESC :procedure mysql Airbnb
=============== HOUSES ===============
*/
--- houses housting count   
DELIMITER //
DROP PROCEDURE IF EXISTS hcount //
CREATE PROCEDURE hcount()
BEGIN
SELECT COUNT(*) count FROM houses ;
END//
DELIMITER ;
--EXE_COUNT_HOUSES
call hcount();

--- houses list 
DROP PROCEDURE IF EXISTS hlist ;
CREATE PROCEDURE hlist()
BEGIN
  SELECT
  h.house_seq house_seq,
  h.room_type room_type,
  h.title title,
  h.max_nights max_nights,
  h.price price,
  h.email email,
  h.building_seq building_seq,
  h.reg_date regDate
  from houses h order by reg_date desc;
   END;
--EXE_LIST_HOUSES
   call hlist();
   --- houses chart list 월별회원 가입수 
DROP PROCEDURE IF EXISTS hchart ;
CREATE PROCEDURE hchart()
begin
   SELECT DATE_FORMAT(reg_date,'%2016-%m') hchart_month, COUNT(*) hchart_count
      from   houses
      GROUP BY hchart_month;
end;
--EXE_CHART_HOUSES
call hchart;
/*
=============== META_GROUP ===============
@AUTHOR :math89@gmail.com
@CREATE DATE: 2016-10-25
@UPDATE DATE: 2016-10-25
@DESC :procedure mysql Airbnb
=============== RESERVATION ===============
*/
--- reservation housing count 
DELIMITER //
DROP PROCEDURE IF EXISTS rcount //
CREATE PROCEDURE rcount()
BEGIN
SELECT COUNT(*) count FROM reservation ;
END//
DELIMITER ;
--EXE_COUNT_RESERVATION
call rcount();
--- reservation list 
DROP PROCEDURE IF EXISTS rlist ;
CREATE PROCEDURE rlist()
BEGIN
  SELECT
  r.resv_seq resv_seq,
  r.checkin_date checkin_date,
  r.checkout_date checkout_date,
  r.guest_cnt guest_cnt,
  r.house_seq house_seq,
  r.email email 
  from reservation r order by checkin_date desc;
   END;
--EXE_LIST_RESERVATION
   call rlist();
--- reservation Rchart list 월별 예약 가입수 
DROP PROCEDURE IF EXISTS rchart ;
CREATE PROCEDURE rchart()
begin
   SELECT DATE_FORMAT(checkin_date,'%2016-%m') rchart_month, COUNT(*) rchart_count
      from   reservation
      GROUP BY rchart_month;
end;
--EXE_CHART_RESERVATION
call rchart;


/*
=============== META_GROUP ===============
@AUTHOR :math89@gmail.com
@CREATE DATE: 2016-10-25
@UPDATE DATE: 2016-10-25
@DESC :procedure mysql Airbnb
=============== GUIDE ===============
*/   
--DEF_COUNT_GUIDE
DELIMITER //
DROP PROCEDURE IF EXISTS gcount ;//
CREATE PROCEDURE gcount()
BEGIN
SELECT COUNT(*) count FROM guide_view;
END//
DELIMITER ;
--EXE_COUNT_GUIDE
call gcount;
=================Booking===================
DROP PROCEDURE IF EXISTS sp_house_cnt;
CREATE PROCEDURE sp_house_cnt(
   IN in_country VARCHAR(30),
   IN in_state VARCHAR(200),
   IN in_city VARCHAR(200),
   IN in_street VARCHAR(200),
   IN in_checkin VARCHAR(30),
   IN in_checkout VARCHAR(30),
   IN in_nights INT,
   IN in_guestCnt INT,
   IN in_roomType INT,
   IN in_minPrice INT,
   IN in_maxPrice INT,
   IN in_bedCnt INT,
   IN in_bathroomCnt INT,
   IN in_convenience VARCHAR(30),
   IN in_safetyFac VARCHAR(30)
)
BEGIN
    SET @COUNTRY = in_country;
    SET @STATE = in_state;
    SET @CITY = in_city;
    SET @STREET = in_street;
    SET @CHECK_IN = in_checkin;
    SET @CHECK_OUT = in_checkout;
    SET @NIGHTS = in_nights;
    SET @GUEST_CNT = in_guestCnt;
    SET @ROOM_TYPE = in_roomType;
    SET @MIN_PRICE = in_minPrice;
    SET @MAX_PRICE = in_maxPrice;
    SET @BED_CNT = in_bedCnt;
    SET @BATH_CNT = in_bathroomCnt;
    SET @CONVEN = in_convenience;
    SET @SAFETY_FAC = in_safetyFac;
    SET @SQL = 'SELECT count(*) as count FROM houses_view WHERE country = @COUNTRY';
    IF (@STATE != "NONE") THEN
      SET @SQL = CONCAT(@SQL,' AND FIND_IN_SET(state,@STATE)');
    END IF;
    IF (@CITY != "NONE") THEN
      SET @SQL = CONCAT(@SQL,' AND FIND_IN_SET(city,@CITY)');
    END IF;
    IF (@STREET != "NONE") THEN
      SET @SQL = CONCAT(@SQL,'AND FIND_IN_SET(street,@STREET)');
    END IF;
    
    SET @SQL = CONCAT(@SQL,' AND DATE_FORMAT(DATE_ADD(CURDATE(),INTERVAL checkin_term DAY), "%Y/%m/%d") <= STR_TO_DATE(@CHECK_IN, "%Y/%m/%d")');
    SET @SQL = CONCAT(@SQL,' AND house_seq not in (SELECT house_seq FROM block WHERE block_date between STR_TO_DATE(@CHECK_IN, "%Y/%m/%d") AND STR_TO_DATE(@CHECK_OUT, "%Y/%m/%d"))');
    SET @SQL = CONCAT(@SQL,' AND house_seq not in (SELECT house_seq FROM reservation WHERE STR_TO_DATE(@CHECK_IN, "%Y/%m/%d %H:%i:%s") BETWEEN checkin_date AND checkout_date');
    SET @SQL = CONCAT(@SQL,' OR STR_TO_DATE(@CHECK_OUT, "%Y/%m/%d %H:%i:%s") BETWEEN checkin_date AND checkout_date');
    SET @SQL = CONCAT(@SQL,' OR (STR_TO_DATE(@CHECK_IN, "%Y/%m/%d %H:%i:%s") < checkin_date AND  STR_TO_DATE(@CHECK_IN, "%Y/%m/%d %H:%i:%s") > checkout_date))');
    SET @SQL = CONCAT(@SQL,' AND min_nights <= @NIGHTS and max_nights >= @NIGHTS');
    SET @SQL = CONCAT(@SQL,' AND guest_cnt >= @GUEST_CNT');
    
    IF in_roomType%2=1 THEN
      SET @SQL = CONCAT(@SQL,' AND (room_type = "집전체"');
      IF in_roomType=3 or in_roomType=7 THEN
        SET @SQL = CONCAT(@SQL,' OR room_type = "개인실"');
      END IF;
      IF in_roomType > 4 THEN
        SET @SQL = CONCAT(@SQL,' OR room_type = "다인실"');
      END IF;
      SET @SQL = CONCAT(@SQL,')');
    ELSE 
      IF in_roomType=2 THEN
        SET @SQL = CONCAT(@SQL,' AND room_type ="개인실"');
      END IF;
      IF in_roomType=4 THEN
        SET @SQL = CONCAT(@SQL,' AND room_type ="다인실"');
      END IF;
      IF in_roomType=6 THEN
        SET @SQL = CONCAT(@SQL,' AND (room_type ="개인실" OR room_type ="다인실")');
      END IF;
    END IF;
    
    IF (@MIN_PRICE !=0 AND @MAX_PRICE !=0) THEN
      SET @SQL = CONCAT(@SQL,' AND price*@NIGHTS BETWEEN @MIN_PRICE AND @MAX_PRICE');
    END IF;
    IF (@MIN_PRICE=0 AND @MAX_PRICE!=0) THEN
      SET @SQL = CONCAT(@SQL,' AND price*@NIGHTS <= @MAX_PRICE');
    END IF;
     IF (@MIN_PRICE!=0 AND @MAX_PRICE=0) THEN
      SET @SQL = CONCAT(@SQL,' AND price*@NIGHTS >= @MIN_PRICE');
    END IF;
    IF(@BED_CNT > 0) THEN
      SET @SQL = CONCAT(@SQL,' AND bed_cnt = @BED_CNT');
    END IF;
    IF(@BATH_CNT > 0) THEN
      SET @SQL = CONCAT(@SQL,' AND bathroom_cnt = @BATH_CNT');
    END IF;
    IF(@CONVEN != NULL) THEN
      SET @SQL = CONCAT(@SQL,' AND convenience like @CONVEN');
    END IF;
    IF(@SAFETY_FAC != NULL) THEN
      SET @SQL = CONCAT(@SQL,' AND safety_fac like @SAFETY_FAC');
    END IF;
    PREPARE stmt FROM @SQL;
    EXECUTE stmt;
    DEALLOCATE  PREPARE stmt;
END;

CALL sp_house_cnt('대한민국','NONE','강남구,','NONE','2016/11/04','2016/11/06',3,2,2,0,0,0,0,'T-_-_-_-_-_-_-_-_-_-_-_-_','T-_-_-_-_-_');


DROP PROCEDURE IF EXISTS sp_house_list;
CREATE PROCEDURE sp_house_list(
   IN in_country VARCHAR(30),
   IN in_state VARCHAR(200),
   IN in_city VARCHAR(200),
   IN in_street VARCHAR(200),
   IN in_checkin VARCHAR(30),
   IN in_checkout VARCHAR(30),
   IN in_nights INT,
   IN in_guestCnt INT,
   IN in_roomType INT,
   IN in_minPrice INT,
   IN in_maxPrice INT,
   IN in_bedCnt INT,
   IN in_bathroomCnt INT,
   IN in_convenience VARCHAR(30),
   IN in_safetyFac VARCHAR(30),
   IN in_start INT,
   IN in_end INT
)
BEGIN
  SET @COUNTRY = in_country;
  SET @STATE = in_state;
  SET @CITY = in_city;
  SET @STREET = in_street;
  SET @CHECK_IN = in_checkin;
  SET @CHECK_OUT = in_checkout;
  SET @NIGHTS = in_nights;
  SET @GUEST_CNT = in_guestCnt;
  SET @ROOM_TYPE = in_roomType;
  SET @MIN_PRICE = in_minPrice;
  SET @MAX_PRICE = in_maxPrice;
  SET @BED_CNT = in_bedCnt;
  SET @BATH_CNT = in_bathroomCnt;
  SET @CONVEN = in_convenience;
  SET @SAFETY_FAC = in_safetyFac;
  SET @START = in_start;
  SET @END = in_end;
    
  SET @SQL = 'SELECT @RNUM := @RNUM +1 AS ROWNUM,h.* FROM (';
  SET @SQL = CONCAT(@SQL,'SELECT house_seq,room_type,guest_cnt,bed_cnt,bathroom_cnt,picture,explaination,title,other_rule,checkin_term,checkin_time,period,min_nights,max_nights,');
  SET @SQL = CONCAT(@SQL,'price*@NIGHTS as price,reg_date,rules,convenience,safety_fac,space,email,type,country,state,city,street,optional,zip_code,latitude,longitude');
  SET @SQL = CONCAT(@SQL,' FROM houses_view WHERE country = @COUNTRY');
  IF (@STATE != "NONE") THEN
    SET @SQL = CONCAT(@SQL,' AND FIND_IN_SET(state,@STATE)');
  END IF;
  IF (@CITY != "NONE") THEN
    SET @SQL = CONCAT(@SQL,' AND FIND_IN_SET(city,@CITY)');
  END IF;
  IF (@STREET != "NONE") THEN
    SET @SQL = CONCAT(@SQL,'AND FIND_IN_SET(street,@STREET)');
  END IF;
    
  SET @SQL = CONCAT(@SQL,' AND DATE_FORMAT(DATE_ADD(CURDATE(),INTERVAL checkin_term DAY), "%Y/%m/%d") <= STR_TO_DATE(@CHECK_IN, "%Y/%m/%d")');
  SET @SQL = CONCAT(@SQL,' AND house_seq not in (SELECT house_seq FROM block WHERE block_date between STR_TO_DATE(@CHECK_IN, "%Y/%m/%d") AND STR_TO_DATE(@CHECK_OUT, "%Y/%m/%d"))');
  SET @SQL = CONCAT(@SQL,' AND house_seq not in (SELECT house_seq FROM reservation WHERE STR_TO_DATE(@CHECK_IN, "%Y/%m/%d %H:%i:%s") BETWEEN checkin_date AND checkout_date');
  SET @SQL = CONCAT(@SQL,' OR STR_TO_DATE(@CHECK_OUT, "%Y/%m/%d %H:%i:%s") BETWEEN checkin_date AND checkout_date');
  SET @SQL = CONCAT(@SQL,' OR (STR_TO_DATE(@CHECK_IN, "%Y/%m/%d %H:%i:%s") < checkin_date AND  STR_TO_DATE(@CHECK_IN, "%Y/%m/%d %H:%i:%s") > checkout_date))');
  SET @SQL = CONCAT(@SQL,' AND min_nights <= @NIGHTS and max_nights >= @NIGHTS');
  SET @SQL = CONCAT(@SQL,' AND guest_cnt >= @GUEST_CNT');
    
  IF in_roomType%2=1 THEN
    SET @SQL = CONCAT(@SQL,' AND (room_type = "집전체"');
    IF in_roomType=3 or in_roomType=7 THEN
      SET @SQL = CONCAT(@SQL,' OR room_type = "개인실"');
    END IF;
    IF in_roomType > 4 THEN
      SET @SQL = CONCAT(@SQL,' OR room_type = "다인실"');
    END IF;
    SET @SQL = CONCAT(@SQL,')');
  ELSE 
    IF in_roomType=2 THEN
      SET @SQL = CONCAT(@SQL,' AND room_type ="개인실"');
    END IF;
    IF in_roomType=4 THEN
      SET @SQL = CONCAT(@SQL,' AND room_type ="다인실"');
    END IF;
    IF in_roomType=6 THEN
      SET @SQL = CONCAT(@SQL,' AND (room_type ="개인실" OR room_type ="다인실")');
    END IF;
  END IF;
    
  IF (@MIN_PRICE !=0 AND @MAX_PRICE !=0) THEN
    SET @SQL = CONCAT(@SQL,' AND price*@NIGHTS BETWEEN @MIN_PRICE AND @MAX_PRICE');
  END IF;
  IF (@MIN_PRICE=0 AND @MAX_PRICE!=0) THEN
    SET @SQL = CONCAT(@SQL,' AND price*@NIGHTS <= @MAX_PRICE');
  END IF;
   IF (@MIN_PRICE!=0 AND @MAX_PRICE=0) THEN
    SET @SQL = CONCAT(@SQL,' AND price*@NIGHTS >= @MIN_PRICE');
  END IF;
  IF(@BED_CNT > 0) THEN
    SET @SQL = CONCAT(@SQL,' AND bed_cnt = @BED_CNT');
  END IF;
  IF(@BATH_CNT > 0) THEN
    SET @SQL = CONCAT(@SQL,' AND bathroom_cnt = @BATH_CNT');
  END IF;
  IF(@CONVEN != NULL) THEN
    SET @SQL = CONCAT(@SQL,' AND convenience like @CONVEN');
  END IF;
  IF(@SAFETY_FAC != NULL) THEN
    SET @SQL = CONCAT(@SQL,' AND safety_fac like @SAFETY_FAC');
  END IF;
  SET @SQL = CONCAT(@SQL,') h, (SELECT @RNUM :=0 )R LIMIT ?,?');
  
  PREPARE stmt FROM @SQL;
  EXECUTE stmt USING @START,@END;
  DEALLOCATE  PREPARE stmt;
END;

CALL sp_house_list('대한민국','NONE','강남구,','NONE','2016/11/04','2016/11/06',3,2,2,0,0,0,0,'T-_-_-_-_-_-_-_-_-_-_-_-_','T-_-_-_-_-_',0,5);

DROP PROCEDURE IF EXISTS sp_addr_list;
CREATE PROCEDURE sp_addr_list(
   IN in_country VARCHAR(30),
   IN in_state VARCHAR(200),
   IN in_city VARCHAR(200),
   IN in_street VARCHAR(200),
   IN in_addrDepth INT
)
BEGIN
  SET @COUNTRY = in_country;
  SET @STATE = in_state;
  SET @CITY = in_city;
  SET @STREET = in_street;
  SET @ADDR_DEPTH = in_addrDepth;

  IF (@ADDR_DEPTH=1) THEN
    SET @SQL = 'SELECT DISTINCT state FROM address WHERE country = @COUNTRY';
  ELSEIF(@ADDR_DEPTH=2) THEN
    SET @SQL = 'SELECT DISTINCT city FROM address WHERE FIND_IN_SET(state,@STATE)';
  ELSEIF(@ADDR_DEPTH=3) THEN
    SET @SQL = 'SELECT DISTINCT street FROM address WHERE FIND_IN_SET(city,@CITY)';
  ELSE
    SET @SQL ='SELECT DISTINCT street FROM address WHERE FIND_IN_SET(street,@STREET)';
  END IF;
  PREPARE stmt FROM @SQL;
  EXECUTE stmt;
  DEALLOCATE  PREPARE stmt;
END;

CALL sp_addr_list('대한민국','서울특별시','강남구,은평구','언주로 406',4);

DROP PROCEDURE IF EXISTS sp_insert_resv;
CREATE PROCEDURE sp_insert_resv(
  IN in_checkin VARCHAR(30),
  IN in_checkout VARCHAR(30),
  IN in_guest_cnt INT,
  IN in_house_seq INT,
  IN in_email VARCHAR(100),
  IN in_card_num VARCHAR(20),
  IN in_price INT
)
BEGIN
  SET @CHECK_IN = in_checkin;
  SET @CHECK_OUT = in_checkout;
  SET @GUEST_CNT = in_guest_cnt;
  SET @HOUSE_SEQ = in_house_seq;
  SET @EMAIL = in_email;
  SET @CARD_NUM = in_card_num;
  SET @PRICE = in_price;
  PREPARE stmt FROM 'INSERT INTO reservation(checkin_date,checkout_date,guest_cnt,house_seq,email) VALUES(STR_TO_DATE(@CHECK_IN, "%Y/%m/%d %H:%i:%s"), STR_TO_DATE(@CHECK_OUT, "%Y/%m/%d %H:%i:%s"),@GUEST_CNT,@HOUSE_SEQ,@EMAIL)';
  EXECUTE stmt;
  PREPARE stmt FROM 'INSERT INTO payment(card_num,price,payment_date,resv_seq) VALUES(@CARD_NUM,@PRICE,CURDATE(), LAST_INSERT_ID())';
  EXECUTE stmt;
  DEALLOCATE  PREPARE stmt;
END;

CALL sp_insert_resv('2016/12/02 15:00:00','2016/12/05 10:00:00',2,12,'t@naver.com','1111-2222-3333-4444',150000);

DROP PROCEDURE IF EXISTS sp_delete_resv;
CREATE PROCEDURE sp_delete_resv(
  IN in_resv_seq INT  
)
BEGIN
  DELETE FROM payment WHERE resv_seq = in_resv_seq;
  DELETE FROM reservation WHERE resv_seq = in_resv_seq;
END;

CALL sp_delete_resv(15);

DROP PROCEDURE IF EXISTS sp_find_host;
CREATE PROCEDURE sp_find_host(
  IN in_house_seq INT
)
BEGIN
  SELECT email,pw,name,phone,profileImg,reg_date as regDate,ssn
  FROM member 
  WHERE email = (SELECT email FROM houses WHERE house_seq = in_house_seq);
END;

CALL sp_find_host(12);

DROP PROCEDURE IF EXISTS sp_find_resv;
CREATE PROCEDURE sp_find_resv(
  IN in_resv_seq INT
)
BEGIN
  SELECT * FROM resv_view WHERE resvSeq = in_resv_seq;
END;

call sp_find_resv(14);


   




