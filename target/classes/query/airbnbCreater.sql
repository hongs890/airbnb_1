show tables;
select * from reservation;
select * from resv_view;
select * from member;
select * from block;
select * from building;
select * from houses;
select * from Guide_Major;
select * from Guide_minor;
 select * from information_schema.referential_constraints
where constraint_schema = 'review'
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS
where constraint_schema = 'member'
-- houses
DROP TABLE IF EXISTS houses RESTRICT;

-- address
DROP TABLE IF EXISTS address RESTRICT;

-- building
DROP TABLE IF EXISTS building RESTRICT;

-- block
DROP TABLE IF EXISTS block RESTRICT;

-- reservation
DROP TABLE IF EXISTS reservation RESTRICT;

-- payment
DROP TABLE IF EXISTS payment RESTRICT;

-- Guide_Major
DROP TABLE IF EXISTS Guide_Major RESTRICT;

-- Guide_Minor
DROP TABLE IF EXISTS Guide_Minor RESTRICT;

-- member
DROP TABLE IF EXISTS member RESTRICT;

-- review
DROP TABLE IF EXISTS review RESTRICT;

-- houses
CREATE TABLE houses (
	house_seq    INT          NOT NULL, -- house_seq
	room_type    VARCHAR(10)  NOT NULL, -- 방 유형
	guest_cnt    INT          NOT NULL, -- 손님수
	bed_cnt      INT          NULL,     -- 침대수
	bathroom_cnt INT          NULL,     -- 욕실 수
	picture      VARCHAR(40)  NULL,     -- picture
	explaination TEXT         NULL,     -- explaination
	title        VARCHAR(50)  NULL,     -- title
	other_rule   VARCHAR(100) NULL,     -- 입력하는 룰
	checkin_term INT          NULL,     -- 체크인 가능 날짜
	checkin_time VARCHAR(15)  NULL,     -- 체크인 가능 시간
	period       DATE         NULL,     -- 체크인 가능 기간
	min_nights   INT          NULL,     -- 최소숙박가능 일수
	max_nights   INT          NULL,     -- max_nights
	price        INT          NULL,     -- price
	reg_date     DATE         NULL,     -- reg_date
	rules        VARCHAR(20)  NULL,     -- T/F로 입력하는 룰
	convenience  VARCHAR(30)  NULL,     -- 편의시설
	safety_fac   VARCHAR(20)  NULL,     -- 안전 시설
	space        VARCHAR(20)  NULL,     -- 공간(빨래방,공부방 etc..)
	email        VARCHAR(50)  NOT NULL, -- email
	building_seq INT          NULL      -- 집 유형(아파트,단독주택 등)_seq
);

-- houses
ALTER TABLE houses
	ADD CONSTRAINT PK_houses -- houses 기본키
		PRIMARY KEY (
			house_seq -- house_seq
		);

ALTER TABLE houses
	MODIFY COLUMN house_seq INT NOT NULL AUTO_INCREMENT;

-- address
CREATE TABLE address (
	address_seq INT          NOT NULL, -- 주소_seq
	country     VARCHAR(20)  NULL,     -- 국가
	state       VARCHAR(50)  NULL,     -- 주
	city        VARCHAR(50)  NULL,     -- 도시
	street      VARCHAR(100) NULL,     -- 가
	optional    VARCHAR(100) NULL,     -- 이하주소
	zip_code    VARCHAR(15)  NULL,     -- 우편번호
	latitude    VARCHAR(30)  NULL,     -- 위도
	longitude   VARCHAR(30)  NULL,     -- 경도
	house_seq   INT          NULL      -- house_seq
);

-- address
ALTER TABLE address
	ADD CONSTRAINT PK_address -- address 기본키
		PRIMARY KEY (
			address_seq -- 주소_seq
		);

ALTER TABLE address
	MODIFY COLUMN address_seq INT NOT NULL AUTO_INCREMENT;

-- building
CREATE TABLE building (
	building_seq INT         NOT NULL, -- 집 유형(아파트,단독주택 등)_seq
	type         VARCHAR(20) NULL      -- 집 유형(아파트,단독주택 등)
);

-- building
ALTER TABLE building
	ADD CONSTRAINT PK_building -- building 기본키
		PRIMARY KEY (
			building_seq -- 집 유형(아파트,단독주택 등)_seq
		);

ALTER TABLE building
	MODIFY COLUMN building_seq INT NOT NULL AUTO_INCREMENT;

-- block
CREATE TABLE block (
	block_seq  INT  NOT NULL, -- 이용 불가능 날짜 설정
	block_date DATE NULL,     -- block_date
	house_seq  INT  NULL      -- house_seq
);

-- block
ALTER TABLE block
	ADD CONSTRAINT PK_block -- block 기본키
		PRIMARY KEY (
			block_seq -- 이용 불가능 날짜 설정
		);

ALTER TABLE block
	MODIFY COLUMN block_seq INT NOT NULL AUTO_INCREMENT;

-- reservation
CREATE TABLE reservation (
	resv_seq      INT         NOT NULL, -- resv_seq
	checkin_date  DATE        NOT NULL, -- checkin_date
	checkout_date DATE        NOT NULL, -- checkout_date
	guest_cnt     INT         NOT NULL, -- guest_cnt
	house_seq     INT         NULL,     -- house_seq
	email         VARCHAR(50) NULL      -- email
);

-- reservation
ALTER TABLE reservation
	ADD CONSTRAINT PK_reservation -- reservation 기본키
		PRIMARY KEY (
			resv_seq -- resv_seq
		);

ALTER TABLE reservation
	MODIFY COLUMN resv_seq INT NOT NULL AUTO_INCREMENT;

-- payment
CREATE TABLE payment (
	payment_seq  INT  NOT NULL, -- payment_seq
	card_num     INT  NOT NULL, -- card_num
	price        INT  NOT NULL, -- price
	payment_date DATE NOT NULL, -- payment_date
	resv_seq     INT  NOT NULL  -- resv_seq
);

-- payment
ALTER TABLE payment
	ADD CONSTRAINT PK_payment -- payment 기본키
		PRIMARY KEY (
			payment_seq -- payment_seq
		);

ALTER TABLE payment
	MODIFY COLUMN payment_seq INT NOT NULL AUTO_INCREMENT;

-- Guide_Major
CREATE TABLE Guide_Major (
	Guide_seq      INT         NOT NULL, -- 상위카테고리_seq
	place          VARCHAR(15) NULL,     -- 도시위치
	Major_Category VARCHAR(15) NULL,     -- Major_Category
	email          VARCHAR(50) NOT NULL  -- email
);

-- Guide_Major
ALTER TABLE Guide_Major
	ADD CONSTRAINT PK_Guide_Major -- Guide_Major 기본키
		PRIMARY KEY (
			Guide_seq -- 상위카테고리_seq
		);

ALTER TABLE Guide_Major
	MODIFY COLUMN Guide_seq INT NOT NULL AUTO_INCREMENT;

-- Guide_Minor
CREATE TABLE Guide_Minor (
	Minor_category_seq INT          NOT NULL, -- 하위카테고리_seq
	Minor_category     VARCHAR(15)  NOT NULL, -- Minor_Category
	Host_Comment       VARCHAR(150) NULL,     -- Host_Comment
	Guide_seq          INT          NOT NULL  -- 상위카테고리_seq
);

-- Guide_Minor
ALTER TABLE Guide_Minor
	ADD CONSTRAINT PK_Guide_Minor -- Guide_Minor 기본키
		PRIMARY KEY (
			Minor_category_seq -- 하위카테고리_seq
		);

ALTER TABLE Guide_Minor
	MODIFY COLUMN Minor_category_seq INT NOT NULL AUTO_INCREMENT;

-- member
CREATE TABLE member (
	email      VARCHAR(50) NOT NULL, -- email
	pw         VARCHAR(30) NOT NULL, -- pw
	name       VARCHAR(20) NOT NULL, -- name
	phone      VARCHAR(15) NOT NULL, -- phone
	profileImg VARCHAR(40) NULL,     -- profileImg
	reg_date   DATE        NULL      -- reg_date
);

-- member
ALTER TABLE member
	ADD CONSTRAINT PK_member -- member 기본키
		PRIMARY KEY (
			email -- email
		);

-- review
CREATE TABLE review (
	review_seq INT         NOT NULL, -- review_seq
	gpa        INT         NULL,     -- gpa
	content    TEXT        NULL,     -- content
	reg_date   DATE        NULL,     -- reg_date
	house_seq  INT         NULL,     -- house_seq
	email      VARCHAR(50) NULL      -- email
);

-- review
ALTER TABLE review
	ADD CONSTRAINT PK_review -- review 기본키
		PRIMARY KEY (
			review_seq -- review_seq
		);

ALTER TABLE review
	MODIFY COLUMN review_seq INT NOT NULL AUTO_INCREMENT;

-- houses
ALTER TABLE houses
	ADD CONSTRAINT FK_member_TO_houses -- member -> houses
		FOREIGN KEY (
			email -- email
		)
		REFERENCES member ( -- member
			email -- email
		)
		ON DELETE CASCADE;

-- houses
ALTER TABLE houses
	ADD CONSTRAINT FK_building_TO_houses -- building -> houses
		FOREIGN KEY (
			building_seq -- 집 유형(아파트,단독주택 등)_seq
		)
		REFERENCES building ( -- building
			building_seq -- 집 유형(아파트,단독주택 등)_seq
		)
		ON DELETE CASCADE;

-- address
ALTER TABLE address
	ADD CONSTRAINT FK_houses_TO_address -- houses -> address
		FOREIGN KEY (
			house_seq -- house_seq
		)
		REFERENCES houses ( -- houses
			house_seq -- house_seq
		);

-- block
ALTER TABLE block
	ADD CONSTRAINT FK_houses_TO_block -- houses -> block
		FOREIGN KEY (
			house_seq -- house_seq
		)
		REFERENCES houses ( -- houses
			house_seq -- house_seq
		);

-- reservation
ALTER TABLE reservation
	ADD CONSTRAINT FK_houses_TO_reservation -- houses -> reservation
		FOREIGN KEY (
			house_seq -- house_seq
		)
		REFERENCES houses ( -- houses
			house_seq -- house_seq
		)
		ON DELETE SET NULL;

-- reservation
ALTER TABLE reservation
	ADD CONSTRAINT FK_member_TO_reservation -- member -> reservation
		FOREIGN KEY (
			email -- email
		)
		REFERENCES member ( -- member
			email -- email
		)
		ON DELETE SET NULL;

-- payment
ALTER TABLE payment
	ADD CONSTRAINT FK_reservation_TO_payment -- reservation -> payment
		FOREIGN KEY (
			resv_seq -- resv_seq
		)
		REFERENCES reservation ( -- reservation
			resv_seq -- resv_seq
		)
		ON DELETE CASCADE;

-- Guide_Major
ALTER TABLE Guide_Major
	ADD CONSTRAINT FK_member_TO_Guide_Major -- member -> Guide_Major
		FOREIGN KEY (
			email -- email
		)
		REFERENCES member ( -- member
			email -- email
		);

-- Guide_Minor
ALTER TABLE Guide_Minor
	ADD CONSTRAINT FK_Guide_Major_TO_Guide_Minor -- Guide_Major -> Guide_Minor
		FOREIGN KEY (
			Guide_seq -- 상위카테고리_seq
		)
		REFERENCES Guide_Major ( -- Guide_Major
			Guide_seq -- 상위카테고리_seq
		)
		ON DELETE CASCADE;

-- review
ALTER TABLE review
	ADD CONSTRAINT FK_houses_TO_review -- houses -> review
		FOREIGN KEY (
			house_seq -- house_seq
		)
		REFERENCES houses ( -- houses
			house_seq -- house_seq
		)
		ON DELETE CASCADE;

-- review
ALTER TABLE review
	ADD CONSTRAINT FK_member_TO_review -- member -> review
		FOREIGN KEY (
			email -- email
		)
		REFERENCES member ( -- member
			email -- email
		)
		ON DELETE CASCADE;