var cash = 1000;
setText("label_money", cash);
onEvent("button_spin", "click", function( ) {
  var bet = getNumber("dropdown_bet");
  var num1 = randomNumber(1, 3);
  var num2 = randomNumber(1, 3);
  var num3 = randomNumber(1, 3);
  if (bet <= cash) {
    if (num1 == 1) {
      setImageURL("image_1", "assets/horseshoe.png");
    } else if ((num1 == 2)) {
      setImageURL("image_1", "assets/grapes.png");
    } else if ((num1 == 3)) {
      setImageURL("image_1", "assets/diamond.png");
    }
    if (num2 == 1) {
      setImageURL("image2", "assets/horseshoe.png");
    } else if ((num2 == 2)) {
      setImageURL("image2", "assets/grapes.png");
    } else if ((num2 == 3)) {
      setImageURL("image2", "assets/diamond.png");
    }
    if (num3 == 1) {
      setImageURL("image3", "assets/horseshoe.png");
    } else if ((num3 == 2)) {
      setImageURL("image3", "assets/grapes.png");
    } else if ((num3 == 3)) {
      setImageURL("image3", "assets/diamond.png");
    }
    if (num1 == num2 && num2 == num3) {
      cash = cash + bet * 2;
    } else {
      cash = cash - bet;
    }
    setText("label_money", cash);
  }
});
onEvent("button_replay", "click", function( ) {
  cash = 1000;
  setText("label_money", cash);
});
