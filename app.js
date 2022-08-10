let baseUrl = 'http://numbersapi.com/';
 axios.get(`${baseUrl}6?json`)
.then(res =>{
    console.log(res.data)
    return axios.get(`${baseUrl}5?json`)

})
.then(res =>{
    console.log(res.data)
})
.catch(err => {
    console.log(err)
}) 

/* let multipleNumbers = []

for(let i = 0; i < 6; i++){
    multipleNumbers.push(
        axios.get(`${baseUrl}${i}?json`)
    )
    Promise.all(multipleNumbers)
    .then(nums => {
        console.log(nums)
    })
    .catch(err => {
        console.log(err)
    })
} */