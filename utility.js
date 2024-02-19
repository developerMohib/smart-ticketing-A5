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
    console.log(sum, 'SOM')
}

document.addEventListener('click', choiceSeatNumaberElement);


let busSeatName = document.getElementsByClassName('bus-seat');

for (const singleSeat of busSeatName) {
    let seatText = singleSeat.innerText;
    // console.log(seatText, 'sigle sit');

    if(singleSeat.classList.contains("bg-slate-400")){
        // console.log('taile vitre jaw');
            
        singleSeat.addEventListener('click', function(){

            let seatText = singleSeat.innerText;

            console.log(seatText, 'sigle sit');

            if(singleSeat <= 4){
                singleSeat.classList.add("bg-black");
            }
            else{
                console.log('bair oia jaw')
            }
        })
    }
    else{
        console.log('taile vitre jaio na');
    }
}