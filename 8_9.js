function drawTree(rowNumber) {
  
    var stars = "*",
        spaces = " ",
        bombs= "o",
        picture = "";
  
    for ( var value = 1 ; value <= rowNumber ; value++) {
      
        picture = spaces.repeat(rowNumber - value) + bombs;
        picture = picture + stars.repeat(value *2 -1);
        picture = picture + bombs + spaces.repeat(rowNumber - value);
        console.log(picture);
        
    }
}

drawTree(10)

function drawTree2(rowNumber) {
  
    var stars = "*",
        spaces = " ",
        bombs = "o",
        picture = "";
    
    for(var value = 1 ; value < rowNumber ; value++) {
     
        picture = spaces.repeat(rowNumber - value) + bombs;

        for (var i = 0  ; i < (value * 2 - 1) ; i++  ) {
      
            picture = picture + stars
        
        }
    
        picture = picture + bombs + spaces.repeat(rowNumber - value);
        console.log(picture);
    
    }
    
}

drawTree2(10)
