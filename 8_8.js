//function parrot() { 

  var  text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach",
       animal = "Zielone słonie",
       animalUp = text2.toUpperCase(),	
       newText = text.replace("Papugi", animalUp), 
       newTexthalf = newText.slice( 0, ((newText.length/2) + 1) );

  console.log(newTexthalf);

//}

//parrot()