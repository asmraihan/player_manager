//selecting all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


//click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else{
            button.classList.remove('disabled');
            alert('5 Player already Selected');
        }
    })
} 

//common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = ''
    if(isNaN(inputFieldValue)){
        return alert('please give me a valid number')
    } else{
        return inputFieldValue;
    }
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// budget
document.getElementById('calculate_budget').addEventListener('click', function(){
    // console.log(selectedPlayer.innerText.length)
    if(selectedPlayer.innerText.length !== 0){
        const perPlayerBudget = getInputValue('per_player_budget');
    let totalPlayerExpense =  perPlayerBudget * 5;
    if(isNaN(totalPlayerExpense)){
        return totalPlayerExpense = 0;
    } else{

        getValueOfElement( 'player_expense', totalPlayerExpense)
    }
    }else{
        return alert('Please select player first')
    }
    
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget = getInputValue('manager_budget');
    const coachBudget = getInputValue('coach_budget');

    let totalExpense = playerTotalBudget + managerBudget + coachBudget;
    if(isNaN(totalExpense)){
        return totalExpense = 00;
    } else{
        getValueOfElement( 'player_total_expense', totalExpense)
    }

})

