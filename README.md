## dsm-freshman-guide

대덕SW마이스터고등학교 신입생을 위한 전공 공부 가이드입니다.<br>
**DSM 학생이라면 누구나 pull request**를 통해 내용을 추가하고 변경할 수 있습니다.

### 목적

- 개인적인 의견보단 다수에게 도움될 수 있는 내용으로 작성합니다.
- 모든 개념을 설명하기보단 학습을 시작하기 위한 가이드를 제공하는 것을 목적으로 합니다.

### 작성 규칙

- 굵은 표시(`**`), 기울임 표시(`*`), 목록(`-`, `1.`, `2.`...), 링크 등은 가능한 한 Markdown 문법을 사용해 작성합니다.
- 렌더링 후 표시되지 않는 불필요한 줄바꿈은 지양합니다. markdown에서 줄바꿈 하나는 렌더링 후 줄바꿈으로 표시되지 않습니다.
- 다이어그램은 mermaid 코드 블럭으로 작성합니다.

### 기여 방법

- 문서에 대해 궁금한 점이나 수정되었으면 하는 점이 있는 경우, 이슈를 생성하여 내용을 작성합니다.
- 문서 내용을 수정하고 싶은 경우, 프로젝트를 클론받아 아래 실행 방법으로 실행합니다. 내용을 추가/수정하여 Pull Request를 등록하여 검토받은 후 머지합니다.

## 프로젝트 실행 방법

### 툴 설치
- Windows
  - https://nodejs.org/en/download 에서 node.js 설치
  - pnpm 설치
    ```bash
    npm install -g pnpm
    ```
- macOS
  - node.js 및 pnpm 설치
    ```bash
    brew install node
    npm install -g pnpm
    ```

### 실행
```bash
pnpm install
npx playwright-core install --with-deps chromium
pnpm run dev
```
