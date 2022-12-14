let shuffleCards =
  "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const drawBtn = document.querySelector("#draw-card");
const cardDisp = document.querySelector("#card-display");
let count = 0;
let deckId = null

createCard = (s, v, img) => {
  let cardDiv = document.createElement("div");
  let cardImg = document.createElement("img");
  cardDiv.className = "cards";
  cardImg.src = img;
  cardImg.id = `${s}-${v}`;
  cardDiv.append(cardImg);
  cardDisp.append(cardDiv);
  count++;
  let deg = count * 10;
  cardDiv.style.transform = "rotate(" + deg + "deg)";
};


axios.get(shuffleCards).then((res) => {
  console.log(res.data);
  deckId = res.data.deck_id;
  
});

drawBtn.addEventListener("click", () => {
    axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => {
      let cards = res.data.cards;
      if (res.data.error) drawBtn.remove();
      cards.forEach((element) => {
        console.log(element.suit, element.value);
        createCard(element.suit, element.value, element.image);
      });
    })
    .catch((err) => {
      console.log(err);
    });

});

