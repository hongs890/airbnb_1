-- houses
ALTER TABLE houses
	DROP FOREIGN KEY FK_member_TO_houses; -- member -> houses

-- houses
ALTER TABLE houses
	DROP FOREIGN KEY FK_building_TO_houses; -- building -> houses

-- address
ALTER TABLE address
	DROP FOREIGN KEY FK_houses_TO_address; -- houses -> address
-- block
ALTER TABLE block
	DROP FOREIGN KEY FK_houses_TO_block; -- houses -> block

-- reservation
ALTER TABLE reservation
	DROP FOREIGN KEY FK_houses_TO_reservation; -- houses -> reservation

-- reservation
ALTER TABLE reservation
	DROP FOREIGN KEY FK_member_TO_reservation; -- member -> reservation

-- payment
ALTER TABLE payment
	DROP FOREIGN KEY FK_reservation_TO_payment; -- reservation -> payment

-- Guide_Major
ALTER TABLE Guide_Major
	DROP FOREIGN KEY FK_member_TO_Guide_Major; -- member -> Guide_Major

-- Guide_Minor
ALTER TABLE Guide_Minor
	DROP FOREIGN KEY FK_Guide_Major_TO_Guide_Minor; -- Guide_Major -> Guide_Minor

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

-- houses
CREATE TABLE houses (
	house_seq    INT          NOT NULL, -- house_seq
	room_type    VARCHAR(10)  NOT NULL, -- room_type
	guest_cnt    INT          NOT NULL, -- guest_cnt
	bed_cnt      INT          NULL,     -- bed_cnt
	bathroom_cnt INT          NULL,     -- bathroom_cnt
	picture      VARCHAR(40)  NULL,     -- picture
	explaination TEXT         NULL,     -- explaination
	title        VARCHAR(50)  NULL,     -- title
	other_rule   VARCHAR(100) NULL,     -- other_rule
	checkin_term INT          NULL,     -- checkin_term
	checkin_time VARCHAR(15)  NULL,     -- checkin_time
	period       DATE         NULL,     -- period
	min_nights   INT          NULL,     -- min_nights
	max_nights   INT          NULL,     -- max_nights
	price        INT          NULL,     -- price
	reg_date     DATE         NULL,     -- reg_date
	rules        VARCHAR(20)  NULL,     -- rules
	convenience  VARCHAR(20)  NULL,     -- convenience
	safety_fac   VARCHAR(20)  NULL,     -- safety_fac
	space        VARCHAR(20)  NULL,     -- space
	email        VARCHAR(30)  NOT NULL, -- email
	building_seq INT          NULL      -- building_seq
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
	address_seq INT          NOT NULL, -- address_seq
	country     VARCHAR(20)  NULL,     -- country
	state       VARCHAR(50)  NULL,     -- state
	city        VARCHAR(50)  NULL,     -- city
	street      VARCHAR(100) NULL,     -- street
	optional    VARCHAR(100) NULL,     -- optional
	zip_code    VARCHAR(15)  NULL,     -- zip_code
	latitude    VARCHAR(20)  NULL,     -- latitude
	longitude   VARCHAR(20)  NULL,     -- longitude
	house_seq   INT          NULL      -- house_seq
);

-- address
ALTER TABLE address
	ADD CONSTRAINT PK_address -- address 기본키
		PRIMARY KEY (
			address_seq -- address_seq
		);

ALTER TABLE address
	MODIFY COLUMN address_seq INT NOT NULL AUTO_INCREMENT;

-- building
CREATE TABLE building (
	building_seq INT         NOT NULL, -- building_seq
	type         VARCHAR(20) NULL      -- type
);

-- building
ALTER TABLE building
	ADD CONSTRAINT PK_building -- building 기본키
		PRIMARY KEY (
			building_seq -- building_seq
		);

ALTER TABLE building
	MODIFY COLUMN building_seq INT NOT NULL AUTO_INCREMENT;

-- block
CREATE TABLE block (
	block_seq  INT  NOT NULL, -- block_seq
	block_date DATE NULL,     -- block_date
	house_seq  INT  NULL      -- house_seq
);

-- block
ALTER TABLE block
	ADD CONSTRAINT PK_block -- block 기본키
		PRIMARY KEY (
			block_seq -- block_seq
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
	email         VARCHAR(30) NULL      -- email
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
	Guide_seq      INT         NOT NULL, -- Guide_seq
	Place          VARCHAR(15) NULL,     -- Place
	Major_Category VARCHAR(15) NULL,     -- Major_Category
	email          VARCHAR(30) NOT NULL  -- email
);

-- Guide_Major
ALTER TABLE Guide_Major
	ADD CONSTRAINT PK_Guide_Major -- Guide_Major 기본키
		PRIMARY KEY (
			Guide_seq -- Guide_seq
		);

ALTER TABLE Guide_Major
	MODIFY COLUMN Guide_seq INT NOT NULL AUTO_INCREMENT;

-- Guide_Minor
CREATE TABLE Guide_Minor (
	Minor_seq      INT          NOT NULL, -- Minor_seq
	Minor_category VARCHAR(15)  NOT NULL, -- Minor_Category
	Host_Comment   VARCHAR(150) NULL,     -- Host_Comment
	Guide_seq      INT          NOT NULL  -- Guide_seq
);

-- Guide_Minor
ALTER TABLE Guide_Minor
	ADD CONSTRAINT PK_Guide_Minor -- Guide_Minor 기본키
		PRIMARY KEY (
			Minor_seq -- Minor_seq
		);

ALTER TABLE Guide_Minor
	MODIFY COLUMN Minor_seq INT NOT NULL AUTO_INCREMENT;

-- member
CREATE TABLE member (
	email      VARCHAR(30) NOT NULL, -- email
	pw         VARCHAR(20) NOT NULL, -- pw
	name       VARCHAR(10) NOT NULL, -- name
	phone      VARCHAR(15) NOT NULL, -- phone
	profileImg VARCHAR(20) NULL,     -- profileImg
	reg_date   DATE        NULL      -- reg_date
);

-- member
ALTER TABLE member
	ADD CONSTRAINT PK_member -- member 기본키
		PRIMARY KEY (
			email -- email
		);

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
			building_seq -- building_seq
		)
		REFERENCES building ( -- building
			building_seq -- building_seq
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
			Guide_seq -- Guide_seq
		)
		REFERENCES Guide_Major ( -- Guide_Major
			Guide_seq -- Guide_seq
		)
		ON DELETE CASCADE;