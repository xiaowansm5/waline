export const getQuery = (element: HTMLElement): string | null =>
  element.dataset.path ?? null;
