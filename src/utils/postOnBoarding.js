import axiosWithAuth from "./axiosWithAuth"

const postOnBoarding = () => {
  console.log("You are inside postOnBoarding")
  axiosWithAuth()
    .post("https://fitnessapplambda5.herokuapp.com/api/users", {on_boarding: true})
    .then(res => {})
    .catch(err => {})
}

export default postOnBoarding