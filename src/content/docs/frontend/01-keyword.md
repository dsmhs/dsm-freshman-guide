---
title: 01. 공부 키워드
---
## 로드맵

### 입문

꼭 입문할 때부터 자신이 해온 공부와 모든 코드들을 `절대` 버리지 마세요.

꼭꼭 년도별로 저장해서 관리하시는 것을 강력하게 추천합니다.

알고리즘(및 자료구조)와 운영체제, 네트워크, DB 같은 지식들은 열심히 배우셔도 과하지 않습니다. 오랫동안 개발자를 하고 싶다면 깊은 지식들은 매우 매우 중요합니다. 저런 지식들은 벼락치기가 정말 힘드니 재미를 붙이시는 것을 추천합니다. 

그리고 꼭 수학은 버리지 마세요… 컴퓨터의 기초 중의 기초 중의 기초입니다. 개발자는 수학 같은거 어디에 쓰냐고 할 수가 없습니다… 조금만 깊이 들어가면 범람하는 수학에 멘탈 공격을 당할 수도 있으니 꼭 수학은 포기하지 맙시다. (수학은 즐기는게 편해요~)

많은 기술과 언어를 아는 것이 절대 좋은 것이 아닙니다. 깊이 있는 학습을 해야하고 빠르다고 다 좋은 것이 아니에요. 

배우는데 시간이 걸려서 남들보다 뒤쳐지는 거 같고 그래도 꾸준하고 깊게 하는 사람이 가장 높은 자리에 있습니다.

- HTML
    
    필요 없다고 대충하는 건 추천하지 않습니다. HTML 코드 한줄이 JS 코드 4줄로 될 수도 있습니다. 특히 HTML 태그 이름을 외우지 말고, 태그 안에 속성들을 많이 눈팅 해두면 정말 유용합니다.
    
    [https://tcpschool.com/html/intro](https://tcpschool.com/html/intro)
    
    [https://www.youtube.com/watch?v=tZooW6PritE&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb](https://www.youtube.com/watch?v=tZooW6PritE&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb)
    
- CSS
    
    CSS는 철저하게 배우시는 것을 추천합니다. 단순 그림판으로 생각하시면 큰 오산입니다. 프론트엔드를 깊이 파고 싶으시면 CSS 최적화 관련과 여러 CSS 설계 기법을 찾아보는 것을 추천합니다.
    
    만약 CSS를 배우셨다면 SCSS로 넘어가는 것을 추천합니다.
    
    빠른 스타일링을 하시려면 TailwindCSS를 추천합니다. (협업에서는 활용하지 않는 것을 추천합니다… 이유는 써보시면 바로 알 수 있습니다)
    
    [https://webdesign.tutsplus.com/ko/the-30-css-selectors-you-must-memorize--net-16048t](https://webdesign.tutsplus.com/ko/the-30-css-selectors-you-must-memorize--net-16048t)
    
    [https://tcpschool.com/css/intro](https://tcpschool.com/css/intro)
    
- Javascript
    
    Javascript은 쉽지 않습니다. 단순 스크립팅은 정말 쉽지만, 설계를 고민하는 순간 언어가 매우 어려워집니다. 설계가 아니더라도 모든 라이브러리 혹은 프레임워크의 기초 중에 기초입니다. `매우 중요`
    
    [https://developer.mozilla.org/ko/docs/Web/JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
    
    [https://tcpschool.com/javascript/intro](https://tcpschool.com/javascript/intro)
    
    [강력추천](https://ko.javascript.info/)
    
    어느정도 손에 붙었다면 MVC 패턴에 대해 알아보시는 것을 추천합니다. (Js MVC라고 검색하면 예제가 많이 검색됩니다.)
    
    반드시 알아야 하는 Javascript 기본기 (선택, 눈팅만 하고 나중에 복습하는 것을 추천)
    
    - this
    - call, apply, bind
    - 프로토타입
    - 클로저
    - 콜백, 프로미스, async, await (자바스크립트의 비동기 방식)
- ECMAScript (ES_)
    
    사실 우리가 부르는 자바스크립트는 자바스크립트가 아닙니다. 그저 ECMAScript를 준수 할 뿐이죠. (하지만 편의상 자바스크립트라고 부릅니다, ES6 이후를 보통 ECMAScript 줄여서 ES_ 라고 부릅니다)
    
    ECMAScript는 매년 업데이트 됩니다. 이로 인해서 기존 ~~더러운~~ 자바스크립트를 개선하고 있습니다.
    
    실무에서 매우 매우 자주 사용되는 프로토타입들도 많으니 꼭 공부해야합니다. (ex. map, foreach, filter 등)
    
- DOM(Document Object Model)
    
    [강력추천](https://ko.javascript.info/) ← DOM 챕터 정독을 추천합니다.
    
- Web Component (선택)
    
    [https://developer.mozilla.org/ko/docs/Web/API/Web_components](https://developer.mozilla.org/ko/docs/Web/API/Web_components)
    
    프론트 깊게 할거면 추천드립니다. 표준 웹 기술이여서 어떤 웹 환경에서도 동작한다는 매우 큰 장점이 있는 기술입니다.
    
    Web Component로 간단한 Todo-list를 만드는 것을 추천합니다.
    
    Todo-list를 끝내도 질리지가 않으면 lit이라는 라이브러리를 공부해보시는 것을 추천합니다.
    
- ~~jQuery~~
    
    하지 않는 것을 추천합니다.
    
- React
    
    React의 핵심 개념을 익히시는 것 보다는 하나의 UI들을 어떻게 하면 더 효율적으로 관리할 수 있을지에 대해 고민하는 것을 추천합니다.
    
    React를 SPA의 도구로써 사용하다가 손에 붙으시면 핵심 개념들을 공부해보시는 것을 추천합니다.
    
    만약 중학교 때 영어 문법을 어느정도 알고 계신다면 영어로 읽는 것을 추천합니다. 앞으로 영어 문서는 지겹도록 보게되니 이때부터 연습해 보시는 것을 추천합니다.
    
    [https://react.dev/learn](https://react.dev/learn)
    
    [https://tcpschool.com/react/intro](https://tcpschool.com/react/intro)
    
    [https://velog.io/@velopert](https://velog.io/@velopert)
    
- Vue 혹은 Angular
    
    Vue는 더 가벼운 React, Angular는 기업용 프레임워크로 생각하시면 편합니다. 만약 프론트엔드 기술 스택을 더 쌓고 싶으시다면 이 둘을 해보시는 것을 추천합니다.
    
    참고로 Angular는 Typescript와 RxJS 그리고 OOP(객체지향 프로그래밍)를 사전지식으로 요구합니다. 입문이 빡세지만 객체 지향을 좋아하시면 꽤 좋습니다
    
- Svelte (선택)
    
    순수 DOM을 활용하는 컴파일러입니다. 작고 경량화된 웹 프레임워크로 생각하시면 됩니다. React, Vue, Angular을 이은 점유율을 가지고 있습니다.
    
- Typescript
    
    이제는 필수가 되어버린 Javascript의 확장 언어입니다. 정적 타이핑 언어로 JS의 가장 큰 단점을 해결하고자 하는 언어입니다. 
    
    입문은 쉽지만, 타입 조합 파트가 좀 어렵습니다. 후반부는 천천히 공부하시는 것을 추천합니다.
    
    특히 데코레이터 챕터는 최대한 천천히 읽으시는 것을 추천합니다.
    
    [https://ahnheejong.gitbook.io/ts-for-jsdev/01-introducing-typescript/intro](https://ahnheejong.gitbook.io/ts-for-jsdev/01-introducing-typescript/intro)
    
    [https://typescript-kr.github.io/](https://typescript-kr.github.io/)
    
- Git
    
    버전 관리는 협업의 핵심입니다. 
    
    브랜치 관리 및 여러 기능들을 잘 배워두시면 프로젝트 때 정말 편합니다.
    
    이슈와 pull request를 통한 협업 방법론 또한 잊지 말고 배우시면 정말 좋습니다.
    

### 초급

- 어떤게 마음에 드시나요?
    - 난 React가 좋아
        
        그렇다면 NextJS를 배우시면됩니다.
        
        React 생태계의 기업용 프레임워크입니다. 기존 React 한 단계 위라고 생각하시면 됩니다. 공식문서가 휼륭합니다. 꼭 보시는 것을 추천합니다.
        
        아마 코드 참고하실 때 코드가 다르다면 아마 Page Router 버전일 것입니다. 왼쪽 상단에 토글을 눌러 Page Router 버전을 참고하세요.
        
        [https://nextjs.org/docs](https://nextjs.org/docs)
        
    - 난 Vue가 좋아
        
        [https://nuxt.com/](https://nuxt.com/) ← 그렇다면 Nuxt를 배우시면 됩니다.
        
    - 난 Angular가 좋아
        
        객체 지향 설계, UML 다이어그램과 디자인 패턴, 그리고 여러 Angular 최적화 기법을 공부해보세요.
        
        한국에서는 React와 Vue를 주로 사용하기 때문에 만약에 Angular를 너무 사랑하셔도 둘 중 하나는 배워두는게 좋습니다.
        
        유니버셜 Angular도 공부하시는 것을 추천합니다. (SSR)
        
- 고민하며 토이 프로젝트 해보기
    
    이제는 좀 더 크게 생각할 시간입니다. 토이 프로젝트를 진행하면서 어떻게 하면 더 코드가 효율적으로 작성할 수 있는지에 대해서 고민해보세요. 
    
    방법은 여러가지 입니다. 코드 분리, 구조 설계, 패턴 도입 등이 있을 것입니다.
    
    웬만하면 라이브러리를 사용하지 말고 직접 구현해보세요. 힘든 시간이지만 정말 재미있습니다.
    
    이때부터 Http 통신을 하는 것을 추천합니다.
    
- 상태 관리
    
    props 지옥을 탈출할 차례입니다. 상태 관리를 통해서 복잡한 데이터 흐름을 관리해보세요.
    
    React → Recoil, Redux, Jotai, Zustand 등
    
    Vue → Vuex
    
    Angular → Ngxs
    
- 패턴
    
    프론트엔드 개발에 있어서 유용한 여러 패턴들이 있습니다. 
    
    패턴들을 잘 활용한다면 코드가 더 성숙해진다고 확신합니다. 
    
    꼭 한번은 보시는 것을 추천합니다. 패턴 또한 천천히 읽으시는 것을 추천합니다. 직접 예제를 작성하면 더 공부가 잘 될거라고 확신합니다.
    
    [https://patterns-dev-kr.github.io/](https://patterns-dev-kr.github.io/)
    
    [https://refactoring.guru/ko](https://refactoring.guru/ko) ← 디자인 패턴 소개 사이트 중 원탑입니다.
    
    이외에도 자바스크립트 자체의 패턴들이 많습니다. (ex. 모듈패턴, 믹스인 등). 공부하시면 자바스크립트의 이해도가 깊어질 것입니다.
    
- 개발환경
    
    프로젝트를 진행하다보면 빌드 속도와 번들의 크기, 모듈 등을 최적화를 해야겠다고 느낄 때가 있습니다.
    
    webpack부터 시작해서 번들러의 기초적인 개념을 학습하고 vite, rollup, parcel, esbuild와 같은 번들러들의 특징들을 알아보며 차이점과 상황에 맞는 번들러를 선택할 수 있어야합니다.
    
    또한 코드 포매팅과 스타일을 통합하기 위한 eslint와 prettier를 잘 적용시키면 팀원과의 수월한 협업과 코드의 통일성을 올리는 효과도 기대해볼 수 있습니다.
    
    번들링, 린트, 포메팅 모두 공부하시는 것을 추천합니다. (순서는 상관 없어요)
    
    Babel에 대해서도 공부하시는 것을 추천합니다. JSX 변환과 JS 버전 호환이 Babel을 통해서 이뤄집니다.
    
    [https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
    
    직접 번들링을 통한 라이브러리 배포도 해보시는 것을 추천합니다.
    
- 테스트
    
    고급 프론트엔드 개발자로 가기위해서는 테스트는 필수입니다.
    
    자신이 진행한 프로젝트에서 테스트 코드를 작성해보세요.
    
    [https://mulder21c.github.io/jest/docs/en/next/getting-started](https://mulder21c.github.io/jest/docs/en/next/getting-started)
    
    [https://learn-react-test.vlpt.us/#/](https://learn-react-test.vlpt.us/#/)
    
- React Native 아니면 ionic
    
    아마도 웹만 열심히 공부하셨다면 슬슬 앱도 하고 싶으실 것입니다. 
    
    React Native 혹은 ionic을 이용해서 자신만의 앱을 만들어보세요. (힐링 타임)
    
    [https://reactnative.dev/](https://reactnative.dev/)
    
    [https://expo.dev/](https://expo.dev/)
    
    [https://ionicframework.com/](https://ionicframework.com/)
    

### 중급

여기부터는 좀 복잡합니다.

- Storybook
    
    프로젝트가 커지면서 여러 중복되는 컴포넌트가 많아 질 것입니다.
    
    이럴 때 Storybook을 활용하여 컴포넌트를 관리하며 문서 작성을 해보세요.
    
    [https://storybook.js.org/](https://storybook.js.org/)
    
- 모노레포
    
    모노레포는 절대 성급하게 진행하시면 안됩니다. 천천히 왜 모노레포를 사용할 것인지, 장점이 무엇이며 단점은 무엇인지에 대해서 깊게 생각해보시고 진행하시는 것을 추천합니다.
    
    모노레포 툴
    
    Yarn, lerna, Turborepo, Nx와 같은 모노레포 툴 들이 존재합니다.
    
    각각의 특징을 잘 살핀 후 각자의 상황에 맞게 적절한 툴을 선택하는 것이 중요합니다.
    
    [https://d2.naver.com/helloworld/7553804](https://d2.naver.com/helloworld/7553804)
    
    - Turborepo : Vecel(NextJS 관리 기업)에서 만든 모노레포 툴입니다. Turbopack이라는 자체 번들러를 이용합니다.
    - Nx : 손쉬운 Module federation이 인상적인 툴입니다. 지원하는 플러그인도 다양하며 강력한 cli 툴을 가지고 있습니다.
    - yarn workspace : yarn을 이용한 모노레포 툴입니다. 추가로 yarn berry를 적용한다면 zero install을 통한 강력한 의존성 관리를 지원합니다.
    - pnpm workspace : 패키지 매니저이지만 workspace 기능도 지원합니다. 하드 링크를 활용한 매우 강력한 툴이니 배워두시는 것을 추천합니다.
- CI / CD
    
    자동 통합 및 자동 배포에 대해서 공부하시는 것을 추천합니다. 
    
    추천 → Github Action
    
- 최적화
    
    최적화는 정말 다양합니다. (SEO 최적화, 이미지 최적화, CSS 최적화, JS 최적화 등등)
    
    열심히 검색하시면서 어떻게 하면 더 최적화를 할 수 있을지 고민해보세요.
    
    물론 최적화는 가장 우선이 되면 절대로 안됩니다.
    
    [https://www.youtube.com/watch?v=51OZz0I8REA](https://www.youtube.com/watch?v=51OZz0I8REA) ← 추천 영상 (살짝 따끔합니다.)
    
- 백엔드 (선택)
    
    하나의 분야에 종속되는 것은 좋지 않습니다. 
    
    백엔드를 배우면서 API 설계 및 DB 연동을 해보면서 백엔드 세계에 대해 눈을 넓이는 것을 추천합니다.
    
    NodeJS 추천 (ex. Express + MongoDB)
    
    싫다면 Superbase나 Firebase로 연동하는 것도 좋습니다.
    
- 런타임 엔진들 (Bun, Deno)
    
    NodeJS의 성능보다 뛰어난 런타임 엔진들이 있습니다.
    
    Deno : 안정적인 런타임 엔진을 추구합니다. 
    
    Bun : 최근에 빠른 속도로 주목 받고 있는 엔진중 하나입니다.
    
- 보안
    
    웹에서도 보안을 신경써야 합니다.
    
    깊게 배우는 것도 좋지만 2가지는 알아둬야 합니다.
    
    1. XSS
    2. CSRF (옥션이 이 공격에 당했습니다.)

### 고급 (선택)

여기까지 하지 않으셔도 됩니다. 여기부터는 복잡하며 오랜 시간을 요구 할 것입니다. 

- SEO
    
    검색엔진 최적화를 통해서 웹 사이트가 검색 엔진에 많이 노출 될 수 있게 해보세요.
    
    [https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko)
    
- 설계
    
    아마 여기까지 오셔다면 프론트엔드의 생태계에 적응하셨다고 믿습니다.
    
    이제는 설계를 배우실 차례입니다.
    
    DDD, UML 등을 배우시면서 설계에 대한 지식을 쌓는 것을 추천합니다.
    
    주의) 방법론을 맹신하지 마세요. 설계는 주관적일 수 밖에 없습니다. 팀원과 소통하며 설계를 진행하는 것을 추천합니다.
    
- 마이크로프론트엔드
    
    복잡한 웹 페이지들을 여러 단위로 나눠 관리하는 기법입니다.
    
    매우 이론적인 방법론이며, 토스 정도의 규모에서 이뤄지는 작업이니 연습만 하시는 것을 추천합니다. 팀 프로젝트로 진행하신다면 정말 빡셀 것 입니다.
    
    유튜브에 여러 자료들이 있으니 참고하시면서 천천히 공부해보시는 것을 추천합니다.
    
    아마 입문하신다면 Webpack에 module federation이 매우 중요하게 다뤄질 것입니다. Nx(모노레포 툴)을 활용하셔서 입문하는 것을 추천합니다. 
    
    docker와 docker-compose를 이용하여 페이지를 독립 배포해보시는 것을 추천합니다. (선택)
    
- 웹 어셈블리 (선택)
    
    시간이 지남에 따라 프론트엔드에 더 좋은 성능을 요구하면서 더 빠른 소프트웨어가 필요해졌습니다.
    
    만약 자신이 고성능의 프론트엔드를 개발하고 싶다면 웹 어셈블리를 공부해보세요. 다양한 언어를 지원하며 가장 많이 쓰는 조합은 Rust + WebAssembly 입니다. (꼭 Rust를 공부하지 않으셔도 됩니다. 깊은 지식에 관심이 있으시다면 Rust 강력 추천!)
    
- 소스 코드 분석
    
    자신이 사용하는 라이브러리를 한번 살펴보세요. 어떤 파일 구조인지 어떻게 로직을 구성했는지 보면 큰 도움이 될 것 입니다. 디버깅을 통해 분석하시는 것을 추천합니다.
    
    또한 코드를 보며 수정하고 싶은 부분이 생긴다면 오픈소스에 기여해보는 것을 적극 권장드립니다. (포트폴리오에 도움이 됨)
    
- 끝은 없습니다.
    
    개발자의 배움의 끝은 없습니다. 다시 돌아가서 기본기를 배우셔도 좋고, 새로운 라이브러리를 공부하셔도 좋습니다.
    
    아니면 자신의 포트폴리오 사이트를 멋진 인터렉션을 넣으셔도 좋습니다.
    
    만약 기본기를 더 기르고 싶으시다면, 맨 처음으로 돌아가셔서 바닥부터 직접 하나하나 구현하시는 것도 괜찮은 방법입니다.
    
    꾸준히 그리고 깊이 배우는게 가장 중요합니다. 깊은 지식을 탐구해보세요, 그동안 해왔던 것이 이해가 되며 개발이 즐거워집니다.
    
