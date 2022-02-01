// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Hugo Hernandez" 

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
//variable to use total quantity element
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
//ginger bread cookie - plus and minus button
const gbSubtractBtn = document.querySelector('#minus-gb')
const gbPlusBtn = document.querySelector('#add-gb')
//chocolate chip cookie - plus and minus button
const ccSubtractBtn = document.querySelector('#minus-cc')
const ccPlusBtn = document.querySelector('#add-cc')
//sugar sprinkle - plus and minus button
const ssSubtractBtn = document.querySelector('#minus-sugar')
const ssPlusBtn = document.querySelector('#add-sugar')

//selecting elements for our gingerbread cookie quantity
//function to update gingerbread cookie quantity
function updateGB(displayQuality){
    let gbQuantity = document.querySelector('#qty-gb')
    gbQuantity.innerHTML = displayQuality
    //console.log(displayQuality)
}
//function to update chocolate chip cookie quantity
function updateCC(displayQuality){
    let ccQuantity = document.querySelector('#qty-cc')
    ccQuantity.innerHTML = displayQuality
    //console.log(displayQuality)
}
//function to update sugar sprinke cookie quantity
function updateSS(displayQuality){
    let ssQuantity = document.querySelector('#qty-sugar')
    ssQuantity.innerHTML = displayQuality
    //console.log(displayQuality)
}
//function to update total quantity of cookies
function updateTotal(displayTotal){
    let totalQuantity = document.querySelector('#qty-total')
    totalQuantity.innerHTML = displayTotal
}


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')
    gb++
    total++
    updateGB(`${gb}`)
    updateTotal(`${total}`)
    console.log(gb)
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbSubtractBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
    gb--
    total--
    updateGB(`${gb}`)
    updateTotal(`${total}`)
    console.log(gb)
})


// Event listener for clicks on the "+" button for Chocolate chip cookies
ccPlusBtn.addEventListener('click', function(){
    console.log('Chocolate chip cookie + button was clicked!')
    cc++
    total++
    updateCC(`${cc}`)
    updateTotal(`${total}`)
})

// Event listener for clicks on the "-" button for Chocolate chip cookies
ccSubtractBtn.addEventListener('click', function(){
    console.log('Chocolate chip cookie - button was clicked!')
    cc--
    total--
    updateCC(`${cc}`)
    updateTotal(`${total}`)
})

ssPlusBtn.addEventListener('click', function(){
    console.log('Sugar Sprinkle cookie + button was clicked!')
    sugar++
    total++
    updateSS(`${sugar}`)
    updateTotal(`${total}`)
})

ssSubtractBtn.addEventListener('click', function(){
    console.log('Sugar Sprinkle cookie - button was clicked!')
    sugar--
    total--
    updateSS(`${sugar}`)
    updateTotal(`${total}`)

})