const inBrowser = typeof document !== 'undefined'

export const useQueryParam = (key, defaultState) => {
  if (!inBrowser) return defaultState ?? null
  const params = new URLSearchParams(document.location.search)
  const value = params.get(key)
  return value !== null ? value : defaultState ?? null
}
