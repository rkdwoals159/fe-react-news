# Refactor Report (Vercel React Best Practices)

아래 변경은 `vercel-react-best-practices` 규칙에 맞춰 리팩토링한 내역입니다. 각 항목에 대해 적용 규칙, 개선 방식, 개선 이유를 정리했습니다.

## 변경 내역

### 1) 구독 필터 조회 최적화
- 적용 규칙: `js-set-map-lookups`
- 파일: `src/components/main-content/news-view/grid/GridView.tsx`
- 어떻게 개선했는지: `subscription` 배열을 `Set`으로 변환(`subscriptionSet`)하고, 필터링 시 `includes` 대신 `has`를 사용했습니다.
- 왜 개선했는지: 아이템이 많아질수록 `includes`는 O(n)이라 반복 필터링 비용이 커집니다. `Set`의 O(1) 조회로 필터 단계의 비용을 낮췄습니다.

### 2) 그리드 렌더링 분기 명확화
- 적용 규칙: `rendering-conditional-render`
- 파일: `src/components/main-content/news-view/grid/GridView.tsx`
- 어떻게 개선했는지: 현재 페이지 데이터 유무에 따라 `GridCard`/빈 카드 렌더링을 항상 명시적으로 반환하도록 `pageItems` + ternary 구조로 정리했습니다.
- 왜 개선했는지: 렌더링 분기가 명확해져 빈 슬롯 처리와 UI 결과가 일관되고, 불필요한 `undefined` 렌더를 줄일 수 있습니다.

### 3) 2차원 배열 변환 조기 종료
- 적용 규칙: `js-early-exit`
- 파일: `src/utils/convertTo2DArr.ts`
- 어떻게 개선했는지: 입력 배열이 비었거나 `size`가 0 이하일 때 즉시 `[]`를 반환하도록 처리했습니다.
- 왜 개선했는지: 불필요한 `reduce` 수행을 피해서 작은 비용이라도 누적되는 연산을 줄이고, 입력 유효성에 대한 방어도 함께 제공합니다.

### 4) 리스트 뷰 코드 스플리팅
- 적용 규칙: `bundle-dynamic-imports`, `bundle-conditional`
- 파일: `src/components/main-content/MainContent.tsx`
- 어떻게 개선했는지: `ListView`를 `React.lazy`로 지연 로드하고, `list` 탭에서만 로딩되도록 `Suspense`로 감쌌습니다.
- 왜 개선했는지: 초기 진입 시 불필요한 번들을 줄여 TTI/LCP 개선에 도움이 됩니다. 실제 사용 시에만 리스트 뷰 코드를 내려받도록 최적화했습니다.

### 5) 구독 컨텍스트 핸들러 안정화
- 적용 규칙: `rerender-functional-setstate`
- 파일: `src/store/SubscriptionProvider.tsx`
- 어떻게 개선했는지: `subscribe`/`unsubscribe`를 `useCallback`으로 고정하고, 상태 업데이트는 함수형 업데이트로 유지했습니다. `useMemo`로 컨텍스트 값을 안정화했습니다.
- 왜 개선했는지: 함수형 업데이트로 상태 의존성을 제거해 핸들러 재생성을 줄이고, 컨텍스트 소비 컴포넌트의 불필요한 리렌더 가능성을 낮춥니다.

### 6) 데이터 페칭 중복 요청 제거
- 적용 규칙: `js-cache-function-results`
- 파일: `src/api/fetcher.ts`, `src/components/main-content/news-view/grid/GridView.tsx`, `src/components/rolling/Rolling.tsx`
- 어떻게 개선했는지: `fetchGetApi`에 인플라이트 캐시(Map)를 추가해 동일 URL 요청이 동시에 들어오면 첫 요청을 공유하도록 했습니다. 기존 `useEffect` 패턴은 유지하면서 네트워크 중복을 줄였습니다.
- 왜 개선했는지: 라이브러리 추가 없이도 동일 리소스의 동시 요청을 병합해 네트워크 비용과 불필요한 상태 업데이트를 줄입니다.
