--- procedure mysql Airbnb
select * from reservation;
select * from member;
select count(*) from member;
show tables;
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








   




