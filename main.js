var showCards = document.getElementById("cards"); //references button in html
var reset = document.getElementById("reset");

reset.onclick = function(){
  var cardContainer = document.getElementById('container');
  if(cardContainer !== ""){
    cardContainer.innerHTML = "";
    reset.style.visibility = "hidden";
  }
}
showCards.onclick = function(){
  reset.style.visibility = "visible";
  var cardContainer = document.getElementById('container');// finds card container id.
  cardContainer.innerHTML = ""; //and sets it to "";
  displayCards();
};

function displayCards(){
  var deck = newDeck(); //creates a deck object
  var shuffledCards = shuffleCards(deck);// will shuffle deck object as new variable
  debugger;
  for(var i=0; i < shuffledCards.length; i++){
    var card = document.createElement('div'); //creates new div
    card.className = "card";//adds class card to new div
    var cardContainer = document.getElementById('container'); //assigns container section to cardContainer
    cardContainer.appendChild(card);//adds a child(div) to that container section

    card.style.backgroundImage = "url(images/" + shuffledCards[i][0].suit + "-" + shuffledCards[i][0].rank + ".png" + ")";//adds card image to the div
  }
}



// Creates a deck of 52 cards
function newDeck(){
  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];
  function Card(rank, suit){
      this.rank = rank;
      this.suit = suit;
  }
  var count = 0;
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var rank = ranks[j];
      var suit = suits[i];
      deck[count] = new Card(ranks[j].card, suits[i]);
      count++;
    };
  };
  return deck;
}



// Shuffles the Deck
function shuffleCards(cardDeck){
  var deckCopy = cardDeck;
  var shuffledDeck = [];
  var count = 52;
    for (var i = 0; i < 52; i++) {
      var randNum = Math.floor(Math.random() * deckCopy.length);
      var randCard = deckCopy.splice(randNum,1);
      shuffledDeck.push(randCard);
      count--;
    }
    debugger;
    return shuffledDeck;
}
