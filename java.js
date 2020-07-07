var userChoices = {
    type1lc: ["a","b","c","d","e","f","g","h","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"],
    type2uc: ["A", "B", "C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    type3nm: ["0","1","2","3","4","5","6","7","8","9"],
    type4sc: ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","?",">","<", "/" , "-" ]
};

function infoUser() {

    var howLong = parseInt(prompt("How long do you want your password to be", 12));

    if (howLong < 8) {
        alert ("Your password needs to be longer than 8 characters");
        return;
    }

    if (howLong > 129) {
        alert ("Your password needs to be shorter than 129 characters");
        return;
    }

    var lowerCase = confirm ("Do you want your password to contain lower case characters?");
    var upperCase = confirm ("Do you want your password to contain UPPER CASE characters?");
    var numbers = confirm ("Do you want your password to contain numbers?");
    var specialChar = confirm ("Do you want your password to contain special characters?");

    if(lowerCase == false && upperCase == false && numbers == false && specialChar == false){
        alert ("Your password needs contain at least one of those");
        return;
    }


    var userOptions = {
        lengthChoice: howLong, 
        lowerChoice: lowerCase,
        upperChoice: upperCase,
        numbersChoice: numbers,
        specialChoice: specialChar
    };

    return userOptions;
}

function passwordGenerator() {

    var optionsChosen = infoUser();
    var passwordOptions = [];
    var generatedPassword = '';

    if(optionsChosen.lowerChoice == true) {
        passwordOptions = passwordOptions.concat(userChoices.type1lc);
    }

    if (optionsChosen.upperChoice===true){
        passwordOptions = passwordOptions.concat(userChoices.type2uc);    }

    if (optionsChosen.numbersChoice===true){
        passwordOptions = passwordOptions.concat(userChoices.type3lnm);    }

    if (optionsChosen.specialChoice===true){
        passwordOptions = passwordOptions.concat(userChoices.type4sc);    }

    for (var i = 0; i < optionsChosen.lengthChoice; i++) {
   
     
        generatedPassword += passwordOptions[ Math.floor( Math.random() * passwordOptions.length ) ];
    }

    return generatedPassword;
}


var generatorPush = document.querySelector("#generator");

generator.addEventListener("click", function() {

    var displayedPassword = passwordGenerator();

    var displayer =  document.querySelector("#displayer");
    document.getElementById("displayer").innerHTML = displayedPassword;
 
})

document.querySelector("#displayer").addEventListener("displayer", async event => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return
    }
    const text = event.target.innerText
    try {
      await navigator.clipboard.writeText(text)
      event.target.textContent = 'Copied to clipboard'
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  })