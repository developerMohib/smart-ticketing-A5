/**
 * requirement 

    seat seletct kora 
    40 tekee komano 
    right side a 1 kore barano
    coupon if else kora 
    next button ok korte name number seat select kora

 */

function modalOpen(){
    let modal = document.getElementById('modalOpen');
    modal.classList.remove('hidden');
}

/* Bus seat count */
let initialSeatBooked = 0;
let initialTk = 0;
let seatMaxBook = 4 ;
let leftSeat = 40;

// seat excess 

let totalSeat = document.getElementById('totalSeat');
let  seatSongkha = totalSeat.innerText;

console.log(seatSongkha , 'seat songkha ');


let busSeat = document.getElementsByClassName('bus-seat')


// Bus seat selected 


function choiceSeatNumaberElement(elementID){
    let playerPress = elementID.innerText;
    console.log('Player Press : ', playerPress);
}





for (const singleSeat of busSeat) {
    let seatText = singleSeat.innerText;
    console.log(seatText, 'sigle sit');
    
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

let total = userQuantity ;

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