


/**
 * requirement 

    seat seletct kora 
    40 tekee komano 
    right side a 1 kore barano
    coupon if else kora 
    next button ok korte name number seat select kora

 */

/* Bus seat count */
let initialSeatBooked = 0;
let initialTk = 0;
let seatMaxBook = 4 ;

// seat excess 

let leftSeat = document.getElementById('totalSeat');
let totalBusSeattText = leftSeat.innerText;
let busSeatTotal = parseInt(totalBusSeattText)
console.log(busSeatTotal, 'busSeatTotal ');


// if( userClick === busSeat ){
//     busSeatTotal--;
// }
// else{
//     alert('booked')
// }


// seat excess 

// Bus seat selected 


function choiceSeatNumaberElement(event){
    let playerPress = event;
    console.log('Player Press : ', playerPress);
}

document.addEventListener('click', choiceSeatNumaberElement)



for (const singleSeat of busSeat) {
    let seatText = singleSeat.innerText;
    // console.log(seatText, 'sigle sit');
    
    singleSeat.addEventListener('click', function(){
        let seatText = singleSeat.innerText;
        console.log(seatText, 'sigle sit');

        let choiceSeatName = document.getElementById('choiceSeatName');
        choiceSeatName.innerText = seatText;

        singleSeat.classList.add("bg-black");

        // create container box

        let containerBox = document.getElementById('seatPriceContainer');
        let createDiv = document.createElement("div");

        div.classList.add("flex", "justify-between", "my-5" );
                div.innerHTML = `
                    <p> ${seatText} </p>
                    <p>Economy</p>
                    <p>550</p>
                `;
                containerBox.appendChild(createDiv);

        // if(singleSeat >= seatMaxBook){
        //     singleSeat.classList.add("bg-black");
        // }
        // else{
        //     alert('plase give up');
        // }


    });

}

let total = 4 ;

let discount15 = total * 0.15 ;
let discount20 = total * 0.15 ;

if(couponInput === "new15"){
    grandTotal = total - discount15 ;
}
else if(couponInput === "couple20"){
    grandTotal = total - discount20 ;
}
else{
    alert('Invalid Coupon');
}