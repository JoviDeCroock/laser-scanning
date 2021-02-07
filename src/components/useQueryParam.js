  
import queryString from 'query-string'

const inBrowser = typeof document !== 'undefined'

export const useQueryParam = (key, defaultState) => {
  const searchParams = inBrowser ? queryString.parse(document.location.search) : {}
  return searchParams[key] ? searchParams[key] : defaultState ? defaultState : null;
}
