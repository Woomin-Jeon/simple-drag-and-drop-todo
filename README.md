# TodoList - J181

스프린트 3-4주차 웹 프로젝트 - 할일관리

## 배포 URL

[http://106.10.49.222:3000/](http://106.10.49.222:3000/)

## Getting Start

```bash
$ cd public
$ npm install
$ npm run build
$ cd ..
$ npm install
$ npm start
```

```bash
# .env example
PORT=0000
DB_HOST_IP=127.0.0.1
DB_ID=your_db_id_here
DB_PASSWORD=your_db_password_here
SESSION_SECRET=session_secret_key
```

---

## FrontEnd 요구사항

- Webpack과 Babel을 활용해서 기본적인 환경을 구성한다.
- sourceMap 설정을 해서 디버깅이 가능해야 함
- babel에서 전세계 2%이상의 점유율을 가진 브라우저에서 동작 가능하도록 설정한다.
- 환경설정이 끝나는 시점에는, 본인만의 boilerplate를 만들어서 개인 계정의 github에 올린다.(선택)
- DOM 조작과정에서 template literal 을 활용한 문자열 기반의 파싱을 권장한다.
- Drag and Drop API를 사용하여 구현한다.
- (권장) Drag and Drop API를 사용하지 않고 직접 구현한다.
- 이벤트 위임방식을 적극 활용한다.
- 코드 구현에 도움이 되는 외부 라이브러리를 사용할 수 없다.
- css 와 image도 import 되도록 한다.
- ES Mdoules방식으로 모듈화를 구성한다.
- 각각의 모듈은 함수와 더불어 ES Classes도 활용하며 개발 한다.
- 하나의 모듈(파일)에는 가급적 하나의 클래스만 구현한다.
- 비동기 통신은 fetch API를 활용하고 then 메서드를 통해서 통신 이후의 처리를 한다.
- CSS(CSS가 약간 익숙하다면, SASS와 같은 pre-processor 를 사용할 수 있다.)

#### Day 1

- [x] README 작성
- [x] sourceMap 설정을 해서 디버깅이 가능해야 함
- [x] babel에서 전세계 2%이상의 점유율을 가진 브라우저에서 동작 가능하도록 설정한다.
- [x] 환경설정이 끝나는 시점에는, 본인만의 boilerplate를 만들어서 개인 계정의 github에 올린다.(선택)
- [x] 모달 컴포넌트 구현
- [x] 모달창이 뜨면 뒷배경은 어둡게 처리된다.
- [ ] header 레이아웃 구현
- [x] 컬럼 제목 수정 모달 구현
- [ ] 칼럼 제목 수정에 관한 api 구현
- [ ] 바꿀 칼럼 제목을 입력하고 Save를 누르면 모달 레이어는 사라지고 바뀐 제목이 반영된다.
- [x] Edit note 모달 구현 (노트를 더블클릭)
- [x] Edit note 모달 레이어에서 Save note를 누르면 모달 레이어는 사라지고, 할 일 카드에 수정한 내용이 반영된다.

#### Day 2

- [ ] 노트(카드) 추가 버튼(+)을 클릭하면 추가 영역(입력창, Add 버튼, Cancel 버튼)이 노출되고, +버튼을 한 번 더 클릭하면 추가 영역이 다시 사라진다.
- [ ] 입력창에 글자를 입력하면 Add 버튼이 활성화된다.
- [ ] 입력창에 글자가 길어지면 입력창 오른쪽에 스크롤이 생긴다.
- [ ] 입력창에 글자를 작성하다 전부 지우면 다시 placeholder가 나타나고 Add 버튼도 다시 비활성화된다.
- [ ] 노트(카드) 추가 영역에서 Cancel 버튼을 클릭하면 추가 영역이 사라진다.
- [ ] 팝업 컴포넌트 구현
- [ ] 카드 삭제 팝업창 구현
- [ ] 헤더 CSS 적용
- [ ] 칼럼 CSS 적용
- [ ] 카드 CSS 적용
- [ ] 모달창 CSS 적용
- [ ] 팝업창 CSS 적용

#### Day 3

- [ ] 액티비티(로그) 레이아웃 구현
- [ ] header의 menu를 누르면 우측에 숨겨진 메뉴가 펼쳐진다.
- [ ] 사용자가 액션을 할 때마다 동시에 액티비티(로그)에 기록이 표시된다.
- [ ] 로그 관련 api 구현
- [ ] 중요 키워드는 디자인의 변경을 줘서 하이라이트 시켜서 표현한다.
- [ ] 기록이 많아지면 레이어 오른쪽에 스크롤이 생긴다.
- [ ] 엑티비티(로그) CSS 적용 (애니메이션 효과)
- [ ] x 버튼을 클릭하면 애니메이션 효과와 함께 다시 오른쪽 방향으로 레이어가 숨겨진다.

#### Day 4

- [ ] (도전) 드래그 앤 드랍 이벤트 구현 (같은 컬럼 끼리)
- [ ] (도전) Drag and Drop API를 사용하지 않고 직접 구현한다.
- [ ] (도전) 컬럼 추가/삭제

#### Day 5

- [ ] (도전) 팝업창 애니메이션 효과 적용
- [ ] (도전) 모달창 애니메이션 효과 적용

---

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

- [x] 로그인 및 세션 구현
- [x] 아이템 생성 api
- [x] 아이템 조회 api
- [x] 아이템 수정 api
- [x] 아이템 삭제 api
- [ ] 아이템 순서 변경 api

#### Day 3

- [ ] 기본 3가지 카테고리 생성
- [ ] 카테고리 생성 api
- [ ] 카테고리 조회 api
- [ ] 카테고리 수정 api
- [ ] 카테고리 삭제 api
- [ ] 사용자 액션 기록 생성 api
- [ ] 사용자 액션 기록 조회 api
- [x] 다른 카테고리로 아이템 이동 api

#### Day 4

- [x] 전반적인 코드의 리팩터링

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
| todoid       | varchar(32)  |
| nextid       | varchar(32)  |
|              |              |
| **activity** |              |
| date         | varchar(24)  |
| userid       | varchar(20)  |
| statement    | varchar(128) |
|              |              |
| **category** |              |
| element      | varchar(64)  |
