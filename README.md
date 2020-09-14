# TodoList - J181

스프린트 3-4주차 웹 프로젝트 - 할일관리

## 배포 URL

[http://106.10.49.222:3000/](http://106.10.49.222:3000/)

## BackEnd 요구사항

- Node.js와 Express를 활용한다.
- 프론트엔드 기능구현에 필요한 API를 제공한다.
- Mysql2를 사용한다. (딘, ORM은 사용하지 않는다.)
- 템플릿 엔진보다는 json을 응답해주는 API형태로 구현한다.
- express-session을 사용해서 인증을 구현한다. passport는 사용하지 않는다.
- session은 메모리에 저장한다. 별도의 외부 저장장치를 사용하지 않는다.
- 배포는 클라우드 서버의 단일 인스턴스를 이용해서 배포를 진행한다.
- 배포시 깃의 tag를 적극적으로 활용하고, 자주 배포작업을 수행한다.
- <선택> 다사용자가 사용할 수 있도록 설계를 한다.
- <선택> 사용자별로 각 목록에 대한 접근권한 (읽기 / 쓰기) 제한 기능을 구현해 본다.

#### Day 1

- [x] README 작성
- [x] 프로젝트 구성 및 환경 설정
- [x] MYSQL 설정 및 연결
- [x] 사용자 테이블 설계
- [x] 카테고리 테이블 설계
- [x] 게시글 테이블 설계
- [x] 액티비티 테이블 설계
- [x] nCloud를 통한 배포

#### Day 2

- [ ] 로그인 및 세션 구현
- [ ] 아이템 생성 api
- [ ] 아이템 조회 api
- [ ] 아이템 수정 api
- [ ] 아이템 삭제 api

#### Day 3

- [ ] 기본 3가지 카테고리 생성
- [ ] 카테고리 생성 api
- [ ] 카테고리 조회 api
- [ ] 카테고리 수정 api
- [ ] 카테고리 삭제 api
- [ ] 사용자 액션 기록 생성 api
- [ ] 사용자 액션 기록 조회 api
- [ ] 다른 카테고리로 아이템 이동 api

#### Day 4

- [ ] 전반적인 코드의 리팩터링

<br><br>

## DB tables

|              |              |
|--------------|--------------|
| **user**     |              |
| id           | char(20)     |
| password     | char(20)     |
|              |              |
| **todo**     |              |
| content      | varchar(256) |
| date         | varchar(24)  |
| userid       | varchar(20)  |
| category     | varchar(26)  |
|              |              |
| **activity** |              |
| date         | varchar(24)  |
| userid       | varchar(20)  |
| statement    | varchar(128) |
|              |              |
| **category** |              |
| element      | varchar(64)  |
