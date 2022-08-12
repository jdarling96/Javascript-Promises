const numBtn = document.getElementById("num-btn");
const factDiv = document.getElementById("nums-div");
let factsArr = []

async function number(){
    let res = await axios.get('http://numbersapi.com/6/')
    console.log(res.data)
}
//number()
async function sequentialNums() { 
for(let i = 0; i < 6; i++){
    let nums = await axios.get(`http://numbersapi.com/${i}/`)
    console.log(nums)

}
};
sequentialNums()

async function multipleNums() {
    let facts = await Promise.all([
        axios.get('http://numbersapi.com/6/'),
        axios.get('http://numbersapi.com/6/'),
        axios.get('http://numbersapi.com/6/'),
        axios.get('http://numbersapi.com/6/')
    ]);

    facts.forEach(res => {
        factsArr.push(res.data)
    })

    
}
multipleNums()

displayFacts = (el) => {
  let p = document.createElement("p");
  p.innerText = el;
  factDiv.append(p);
}


numBtn.addEventListener('click', () => {
    factsArr.forEach(res => {
        displayFacts(res)
    })
        
})