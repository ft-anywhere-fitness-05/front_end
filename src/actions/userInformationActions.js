import axios from 'axios'

export const STASH_USER_DATA = "STASH_USER_DATA"

export const stashUserData = (userData) => {
  return { type: STASH_USER_DATA, payload: userData }
}

export const fetchLogin = (credentials) => {
  return (dispatch) => {
    console.log("We are inside fetchLogin")
    axios
      .post(
        "https://fitnessapplambda5.herokuapp.com/api/auth/login",
        credentials
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        dispatch(stashUserData(res.data))
        // props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
