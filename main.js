activateShowCards();



function activateReset() {
reset.onclick = function(){
  var cardContainer = document.getElementById('container');
  if(cardContainer !== ""){
    cardContainer.innerHTML = "";
  }
  buttonReset();
  activateShowCards();
};
};

function activateRedeal(){
redeal.onclick = function(){
  var cardContainer = document.getElementById('container');// finds card container id.
  cardContainer.innerHTML = ""; //and sets it to "";
  displayCards();
};
};

function activateShowCards(){
  createButton('Deal', 'cards');
var showCards = document.getElementById('cards');
showCards.onclick = function(){
  var cardContainer = document.getElementById('container');// finds card container id.
  cardContainer.innerHTML = ""; //and sets it to "";
  displayCards();
  buttonReset();
  var reset = createButton('Reset', 'reset');
  activateReset();
  var reDeal = createButton('ReDeal', 'redeal');
  activateRedeal();
};
};

function createButton(text, id){
  var newButton = document.createElement('button');
  newButton.id = id;
  newButton.innerHTML = text;
  var buttonContainer = document.getElementById('controls');
  buttonContainer.appendChild(newButton);
}



function buttonReset (){
  var buttonContainer = document.getElementById('controls');
  while(buttonContainer.firstChild){
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}


function displayCards(){
  var deck = newDeck(); //creates a deck object
  var numCards = prompt("How many cards do you want?");
  var shuffledCards = shuffleCards(deck,numCards);// will shuffle deck object as new variable

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
function shuffleCards(cardDeck, num){
  var deckCopy = cardDeck;
  var shuffledDeck = [];
  var count = 52;
    for (var i = 0; i < num; i++) {
      var randNum = Math.floor(Math.random() * deckCopy.length);
      var randCard = deckCopy.splice(randNum,1);
      shuffledDeck.push(randCard);
      count--;
    }
    return shuffledDeck;
}
