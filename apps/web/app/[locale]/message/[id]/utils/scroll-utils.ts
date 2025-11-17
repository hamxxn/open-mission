/**
 * 컨테이너 크기 위치, 중앙 좌표와 그 안의 자식들 반환하는 유틸
 */
export function getScrollContainerInfo(containerElement: HTMLElement | null) {
  if (!containerElement) return null;

  const children = Array.from(containerElement.children) as HTMLElement[];
  if (!children.length) return null;

  const containerRect = containerElement.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  return {
    containerRect,
    containerCenter,
    children,
  };
}

/**
 * child의 컨테이너 기준 중앙 좌표 반환하는 유틸
 */
export function getChildCenterInContainer(
  childElement: HTMLElement,
  containerRect: DOMRect
): number {
  const childRect = childElement.getBoundingClientRect();
  const leftWithinContainer = childRect.left - containerRect.left;

  return leftWithinContainer + childRect.width / 2;
}
