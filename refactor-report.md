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
