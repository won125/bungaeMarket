CREATE TABLE WISH 
(
  ID VARCHAR2(200 BYTE) NOT NULL 
, GOODSCODE VARCHAR2(200 BYTE) NOT NULL 
) 
LOGGING 
TABLESPACE USERS 
PCTFREE 10 
INITRANS 1 
STORAGE 
( 
  BUFFER_POOL DEFAULT 
) 
NOCOMPRESS 
NO INMEMORY 
NOPARALLEL;

COMMENT ON COLUMN WISH.ID IS '찜한 아이디';

COMMENT ON COLUMN WISH.GOODSCODE IS '상품코드';
