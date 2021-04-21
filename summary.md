## Real DOM VS Virtual DOM

---

### Real DOM

1. 만약 10개의 리스트가 있다.
2. 그중에 한가지의 리스트만 Update 한다고 하자.
3. 전체 리스트를 다시 Reload 해야된다.
4. Super Expensive한 작업!!

### Virtual DOM

0. Virtual DOM은 Real DOM과 같은 properties를 가지고 있으며, Real DOM을 Copy한것으로 보면 된다.
1. 만약 10개의 리스트가 있다.
2. 그중에 한가지의 리스트만 Update 한다고 하자.
3. 그 바뀐 한가지 아이템만 DOM에서 바꿔준다.

### Virtual DOM 과정

1. JSX(우선 HTML)을 렌더링 한다. >> Virtual DOM Update
2. Virtual DOM이 이전 Virtual DOM에서 찍어둔 Snapshot과 비교해서 바뀐 부분을 찾는다. >> 이 과정을 "diffing"이라고 부름
3. 그 바뀐 부분만 Real DOM에서 바꿔준다.

### Babel

- 최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형 브라우저에서도 쓸 수 있게 변환 시켜준다.

### Webpack
