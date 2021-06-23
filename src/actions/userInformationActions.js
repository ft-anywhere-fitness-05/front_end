export const STASH_USER_DATA = "STASH_USER_DATA"

export const stashUserData = (userData) => {
  return { type: STASH_USER_DATA, payload: userData }
}
