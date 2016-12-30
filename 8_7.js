var femaleNames = ["Suzy", "Lindsay", "Barbara", "Debbie", "tracy"];
    maleNames = ["Robert", "John", "Andrew", "Michael", "Bruce"];
    newName = "Steven";
    allNames = femaleNames.concat(maleNames);

function addingName() {

	if( allNames.indexOf(newName) == -1 ) {
		console.log("Steven is not in Array - adding")
		allNames.push("Steven")	
	}
	else {
		console.log("Steven is in Array - not adding")
	}
}

addingName()
addingName()