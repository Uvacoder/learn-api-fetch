

document.getElementById("button").addEventListener("click", getfetch)
// Capitalize Function

function capitalizeName(str) {
   // create a function that capitalizes a string - we want to make our pokemon names and other contents capitalized! 
   /*
    P - string 
    R - "Ditto"
    E - // Pikachu , Mewtwo and etc
    P {
        get string -> make first letter capital 
        // we can use charAt and to upper case method
        //  slice
    }
   */ 
    return str.charAt(0).toUpperCase() + str.slice(1); // "ditto"

    

}



// array = data.abilities


function abilityMaker(array){
    // create a function that creates a list of abilities. The length of the list will be dependent on the pokemon! 
    // and display it on the dom - -----
    const pokemonAbilities = array.abilities
    const ul = document.querySelector('ul')
    
    ul.innerText = ""
    for(let i = 0; i < pokemonAbilities.length; i++){
        let li = document.createElement('li')
        ul.appendChild(li).innerText = `Ability ${i + 1}: ${capitalizeName(pokemonAbilities[i].ability.name)}`
        // Ability 1 : Freeze 
        // Ability 2: Fire
    }
    // queryselector  => target html => target ul
    // LOOP
    // appendChild() => li to ul
    // innertext 
    // ul.appendChild(li) 
}


//const abilities = data.abilities[0].ability.name

// Ability i:  limber abilityArr[i].ability.name
//   document.getElementById('type').innerText = `Type: ${capitalizeName(type)}`

// limber => Ability 1: Limber
// Ability 1: Lim

const userInput = document.querySelector('input').value.toLowerCase()

async function getfetch(){
    try {
    const userInput =  document.querySelector('input').value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`) 

    
    const data = await response.json() 

        console.log(data)

        const name = data.name
        const type = data.types[0].type.name  

        
        const image = data.sprites.other["official-artwork"]["front_default"] 

        
        const abilities = data.abilities[0].ability.name
        
        // array = data.abilities 
        //for loop 

        // innerText = ability.name
      
        // Display On the DOM
        // document.getElementById('name').innerText = `Name: ${capitalizeName(name)}`

        document.getElementById('name').innerText = ` ${capitalizeName(name)}`

        document.getElementById('type').innerText = ` ${capitalizeName(type)}`

        document.getElementById('pokemonImg').src = image
       
        

        document.getElementById('logo').src = `Assets/logo/${type}.png`
        
        abilityMaker(data)

    }catch(error) {
        //console.log("Harman is eating yummy food"
        const userInput = document.querySelector('input').value.toLowerCase()
        document.querySelector('h1').innerHTML = `Error: ${userInput} not Harman`

        document.getElementById('type').innerText = ""

        document.getElementById('abilities').innerText = ""
        document.getElementById('logo').src = ""
        document.getElementById('pokemonImg').src = 'https://pbs.twimg.com/profile_images/1491205677183815681/SmH0imWH_400x400.jpg'
    }

}
















