export const ROUTE = {
  HOME: '/',
  DICTIONARIES: '/dictionaries',
  DICTIONARY: (id: number) => `${ROUTE.DICTIONARIES}/${id}`
};
