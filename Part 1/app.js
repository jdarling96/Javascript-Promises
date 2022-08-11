/* Part 1: Number Facts
 */
let baseUrl = "http://numbersapi.com/25";
let factsArr = [];
const numBtn = document.getElementById("num-btn");
const factDiv = document.getElementById("nums-div");

favNumFacts = () => {
  axios
    .get(`${baseUrl}/year?notfound=floor?json`)
    .then((res) => {
      factsArr.push(res.data);
      return axios.get(`${baseUrl}/trivia?notfound=floor?json`);
    })
    .then((res) => {
      factsArr.push(res.data);
      return axios.get(`${baseUrl}/date?notfound=floor?json`);
    })
    .then((res) => {
      factsArr.push(res.data);
      return axios.get(`${baseUrl}/math?notfound=floor?json`);
    })
    .then((res) => {
      factsArr.push(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
favNumFacts();

createEl = (el) => {
  let p = document.createElement("p");
  p.innerText = el;
  factDiv.append(p);
};

numBtn.addEventListener("click", () => {
  if (factsArr.length === 4) {
    factsArr.forEach((fact) => {
      createEl(fact);
    });
  } else {
    const numError = "Error in request to numberAPI";
    createEl(numError);
  }
  console.log("done");
});
