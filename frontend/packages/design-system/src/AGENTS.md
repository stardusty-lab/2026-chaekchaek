# Figma 기반 디자인 pivot 컴포넌트 스타일 수정 가이드

## 목적
Figma 디자인을 참고하여 기존 디자인 시스템 컴포넌트의 스타일을 수정한다.
기존 컴포넌트의 인터페이스와 동작을 유지하면서 디자인 변경에 필요한 최소한의 코드만 수정하는 것을 원칙으로 한다.

1. 작업 범위

- 지정된 컴포넌트의 스타일만 수정한다.
- 기본 스타일이란 컴포넌트 호출 시 Props를 생략했을 때 적용되는 스타일을 의미한다. 컴포넌트 내부에서 정의한 Props 기본값을 기준으로 판단한다.
- 기본(default) Props 조합에 해당하는 스타일을 우선 수정한다.
- 다른 variant나 size는 별도로 수정하지 않는다. 단, 공통 스타일 변경에 따른 영향은 허용한다.
- Figma에서 확인할 수 없는 디자인 속성은 기존 스타일을 유지한다.

2. 기존 코드 유지

- 기존 컴포넌트의 Props, 구조, 동작을 변경하지 않는다.
- 작업과 무관한 코드 수정이나 리팩터링을 하지 않는다.
- 새로운 Props나 기능을 임의로 추가하지 않는다.

3. CSS 디자인 토큰

다음 파일에 정의된 토큰만 사용해 줘.
- ./frontend/packages/design-system/src/styles/variables/tokens/semantic.css
- ./frontend/packages/design-system/src/styles/variables/tokens/primitive.css
가능하면 semantic 토큰을 우선 사용해 줘.

다음 파일의 토큰은 사용하지 마.
- ./frontend/packages/design-system/src/styles/variables/tokens/layouy.css
- ./frontend/packages/design-system/src/styles/variables/tokens/loading.css
- ./frontend/packages/design-system/src/styles/variables/tokens/typography.css

적절한 토큰이 없다면 임의로 새로운 토큰이나 하드코딩된 값을 추가하지 말고, 작업 완료 후 확인이 필요한 사항으로 알려줘.

4. Storybook

Storybook 수정이 요청된 경우에만 적용한다.

- 변경된 기본 디자인을 확인할 수 있도록 기존 Story를 수정한다.
- Figma의 텍스트 콘텐츠는 재현하지 않아도 된다.
- 기존 텍스트를 유지하거나 Button처럼 일반적인 텍스트를 사용한다.
- 새로운 Props나 Story를 불필요하게 추가하지 않는다.

5. 검증 
- 대상 컴포넌트와 직접 수정한 파일의 타입 오류만 확인한다.
- 컴포넌트를 사용하는 전체 애플리케이션에 대한 타입 검사는 요구하지 않는다.
- 패키지 전체 타입 검사에서 기존 오류가 발견되더라도 작업 범위 밖의 코드는 수정하지 않는다.

6. 작업 완료 보고

다음 사항만 간결하게 보고한다.

- 변경 사항
- 검증 결과
- 확인이 필요한 부분
