function modalOpen(){
    let modal = document.getElementById('modalOpen');
    modal.classList.remove('hidden');
}


function choiceSeatNumaberElement(event){
    
    let sum = 0;
    let playerPress = event;
    console.log('Player Press : ', playerPress);
    if(playerPress === busSeatName){
        sum = sum + 1 ;
    }
    console.log(sum, 'Sum')
}

document.addEventListener('click', choiceSeatNumaberElement);


let busSeatName = document.getElementsByClassName('bus-seat');
let maxSeatBooked = 0;
for (const singleSeat of busSeatName) {
    
    singleSeat.addEventListener('click', function () {

        if (maxSeatBooked >= 4) {
            alert('Cannot purchase more than 4');
            singleSeat.classList.setAttribute('disabled', true);
        }
        singleSeat.style.backgroundColor = '#1DD100'
        singleSeat.style.color = 'white'

        let seatBook = document.getElementById('seat-book');
        maxSeatBooked++ ;
        seatBook.innerText = maxSeatBooked;

        // available seats

        let totalSeats = document.getElementById('totalSeat');

        let totalCurrent = totalSeats.innerText;
        let currentSeats = parseInt(totalCurrent)
        let availableSeat = currentSeats - 1;
        totalSeats.innerText = availableSeat;


        // seat info container
        let choiceSeatName = document.getElementById('choiceSeatName');
        let seatNmae = document.getElementById('seat-name');
        let economy = document.getElementById('economy');
        let seatVara = document.getElementById('seatVara');


        //seat title add
        let p1 = document.createElement('p')
        p1.innerText = singleSeat.innerText;
        seatNmae.appendChild(p1)
        choiceSeatName.appendChild(seatNmae)


        //seat class add
        let p2 = document.createElement('p')
        p2.innerText = 'Economoy';
        economy.appendChild(p2)
        choiceSeatName.appendChild(economy)
        //seat price add
        let p3 = document.createElement('p')
        p3.innerText = 550;
        seatVara.appendChild(p3)
        choiceSeatName.appendChild(seatVara)


        let totalPrice = document.getElementById('total-price');

        let Price = maxSeatBooked * 550;
        totalPrice.innerText = Price;
        // console.log(Price)
        if (maxSeatBooked >= 1) {
            singleSeat.setAttribute("disabled", true);
        }
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = Price;

        // coupon btn enabled/disabled
        const couponBtn = document.getElementById('couponbtn')
        if (maxSeatBooked < 4) {
            couponBtn.removeAttribute('disabled');

        }
        else if (maxSeatBooked > 1) {
            couponBtn.removeAttribute('disabled');

        }

        else {
            couponBtn.setAttribute('disabled', true);
        }

    })
}


let couponBtn = document.getElementById('couponbtn').addEventListener('click', function () {

    let Price = maxSeatBooked * 550;
    const inputField = document.getElementById('input-field').value;
    if (inputField === 'NEW15') {
        const discount = Price * 0.15;
        const DiscountPrice = Price - discount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = DiscountPrice;

        const discountContainer = document.getElementById('discount-container');

        
        const p = document.createElement('p')
        p.innerText = 'Discount';
        discountContainer.appendChild(p)

        // discount add
        const p2 = document.createElement('p')
        p2.innerText = 'BDT ' + discount;
        discountContainer.appendChild(p2)

        hideElement('input-container')
    }
    else if (inputField === 'Couple 20') {
        const discount = Price * 0.2 ;
        const DiscountPrice = Price - discount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = DiscountPrice;

        const discountContainer = document.getElementById('discount-container');

        
        const p = document.createElement('p')
        p.innerText = 'Discount ';
        discountContainer.appendChild(p)

        // discount add
        const p2 = document.createElement('p')
        p2.innerText = 'BDT' + discount;
        discountContainer.appendChild(p2)

        hideElement('input-container')
    }
    else {
        alert('Invalid Coupon Code')

    }

})


function hideElement(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}