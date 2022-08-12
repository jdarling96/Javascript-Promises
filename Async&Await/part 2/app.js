// PART 1
const shuffle = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const drawBtn = document.querySelector("#draw-card");
const cardDisp = document.querySelector("#card-display");
let count = 0;

async function newDeck() {
  let deck = await axios.get("http://deckofcardsapi.com/api/deck/new/");
  let deck_id = deck.data.deck_id;
  let res = await axios.get(
    `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  );
  let {suit, value} = res.data.cards[0];
  console.log(value.toLowerCase() + " of " + suit.toLowerCase());
  
}
newDeck();

/*
PART 2 
async function shuffleCards() {
    let res = await axios.get(shuffle)
    console.log(res.data)
    deckId = res.data.deck_id
    let draw = await Promise.all([
        axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`),
        axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        

    ])
   
    draw.forEach(res => {
        console.log(res.data)
        res.data.cards.forEach(card => {
            console.log(card.value + ' of ' + card.suit)
        })
        
    });
}
shuffleCards() */

//PART 3
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

async function shuffleCards() {
  let res = await axios.get(shuffle);
  console.log(res.data);
  let deckId = res.data.deck_id;

  drawBtn.addEventListener("click", async () => {
    let res = await axios.get(
      `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    if (res.data.error) drawBtn.remove();
    res.data.cards.forEach((card) => {
      createCard(card.suit, card.value, card.image);
    });
  });
}
shuffleCards();
