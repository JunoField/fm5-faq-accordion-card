const noOfAnswers = 5;

//input 0 for close *all*
function closeAllOthers(desiredPair, noOfAnswers){
    for (let i = 1; i <= noOfAnswers; i++){
        if (i != desiredPair){
            document.getElementById("question-" + i).classList.remove("question-open");
            document.getElementById("answer-" + i).classList.remove("answer-open");
        }
        
    }
}

function processClick(qaNo){
    
    if (document.getElementById("question-" + qaNo).classList.contains("question-open")){
        document.getElementById("question-" + qaNo).classList.remove("question-open");
        document.getElementById("answer-" + qaNo).classList.remove("answer-open");
    } else{
        closeAllOthers(qaNo, noOfAnswers); //close all open qa pairs
        document.getElementById("question-" + qaNo).classList.add("question-open");
        document.getElementById("answer-" + qaNo).classList.add("answer-open");
    }
    
}