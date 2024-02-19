

function modalOpen(){
    let modal = document.getElementById('modalOpen');
    modal.classList.remove('hidden');
}

let totalSeat = document.getElementById('totlaSeat');
let seat = parseInt(totalSeat);

console.log(typeof(seat))

function getElemetTextSeat(elementId){
    let seat = elementId.classList.add('bg-black')
    console.log(seat)
}
let oneSeat = document.getElementById('B3');
getElemetTextSeat(oneSeat)