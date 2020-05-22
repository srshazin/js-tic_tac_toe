//var row1col1 = document.querySelector("#row1col1")
var myTurn = true
var rowCols = [
    //first row
    {
        element: document.querySelector("#row1col1"),
        filled: false,
        fillByMe: undefined
    },
    {
        element: document.querySelector("#row1col2"),
        filled: false,
        fillByMe: undefined
    },
    {
        element: document.querySelector("#row1col3"),
        filled: false,
        fillByMe: undefined
    },
//sec row
    {
        element: document.querySelector("#row2col1"),
        filled: false,
        fillByMe: undefined
    },
    {
        element: document.querySelector("#row2col2"),
        filled: false,
        fillByMe: undefined
    },
    {
        element: document.querySelector("#row2col3"),
        filled: false,
        fillByMe: undefined
    },
    //Third Row
    {
        element: document.querySelector("#row3col1"),
        filled: false,
        fillByMe: undefined
    },
    {
        element: document.querySelector("#row3col2"),
        filled: false,
        fillByMe: undefined
    },
    {
        element: document.querySelector("#row3col3"),
        filled: false,
        fillByMe: undefined
    }
]
//array for random bot filling indexes
var randomIndex = [0 , 1 , 2 , 3 , 4 , 5 , 6 ,7 , 8]
//Array Ends HERE 

var mySign = "<img src='circle.png' class='asset'>"
var botSign = "<img src='cross.png' class='asset'>"

//Main Game Loop 
var gameLoop =  setInterval(mainGameLoop, 2000)

//This is Main Game Function

function mainGameLoop() {
    //var randomNum = Math.floor(Math.random() * 9);
    var rand = Math.floor(Math.random() * randomIndex.length);
    //console.log(rand)
    if (myTurn == false) {
        if (randomIndex.length > 0) {
            var randomArrayInt = randomIndex[rand]
            console.log(randomArrayInt)
            rowCols[randomArrayInt].filled = true
            rowCols[randomArrayInt].element.innerHTML = botSign
            rowCols[randomArrayInt].fillByMe = false
            myTurn = true
            randomIndex = randomIndex.filter(item => item !== randomIndex[rand])
        }
        
    }

    rowCols[0].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[0].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 0)
            myTurn = false
            rowCols[0].filled = true
            rowCols[0].fillByMe = true
            
        }
    })
    //===========================
    rowCols[1].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[1].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 1)
            myTurn = false
            rowCols[1].filled = true
            rowCols[1].fillByMe = true
        }
    })
    //===========================
    rowCols[2].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[2].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 2)
            myTurn = false
            rowCols[2].filled = true
            rowCols[2].fillByMe = true
        }
    })
    //===========================
    rowCols[3].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[3].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 3)
            myTurn = false
            rowCols[3].filled = true
            rowCols[3].fillByMe = true
        }
    })
    //===========================
    rowCols[4].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[4].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 4)
            myTurn = false
            rowCols[4].filled = true
            rowCols[4].fillByMe = true
        }
    })
    //===========================
    rowCols[5].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[5].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 5)
            myTurn = false
            rowCols[5].filled = true
            rowCols[5].fillByMe = true
        }
    })
    //===========================
    rowCols[6].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[6].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 6)
            myTurn = false
            rowCols[6].filled = true
            rowCols[6].fillByMe = true
        }
    })
    //===========================
    rowCols[7].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[7].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 7)
            myTurn = false
            rowCols[7].filled = true
            rowCols[7].fillByMe = true
        }
    })
    //===========================
    rowCols[8].element.addEventListener("click", function() {
        if (myTurn == true && rowCols[8].filled == false) {
            this.innerHTML = mySign; 
            randomIndex = randomIndex.filter(item => item !== 8)
            myTurn = false
            rowCols[8].filled = true
            rowCols[8].fillByMe = true
        }
    })
    //Checking Result for player winnings
    if (rowCols[0].fillByMe == true && rowCols[1].fillByMe == true && rowCols[2].fillByMe == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";

        
    }
    if (rowCols[3].fillByMe == true && rowCols[4].fillByMe == true && rowCols[5].fillByMe == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";
    }
    if (rowCols[6].fillByMe == true && rowCols[7].fillByMe == true && rowCols[8].fillByMe == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";
    }
    if (rowCols[0].fillByMe == true && rowCols[3].fillByMe == true && rowCols[6].fillByMe == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";
    }
    if (rowCols[1].fillByMe == true && rowCols[4].fillByMe == true && rowCols[7].fillByMe == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";
    }
    if (rowCols[2].fillByMe == true && rowCols[5].fillByMe == true && rowCols[8].fillByMe == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";
    }
    if (rowCols[0].fillByMe == true && rowCols[4].fillByMe == true && rowCols[8].fillByMe == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";
    }
    if (rowCols[2].fillByMe == true && rowCols[4].fillByMe == true && rowCols[6].fillByMe == true) {
        cons
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".winningMsg").style.display = "block";
        document.querySelector(".winningMsg").style.transition = "0.3s";
    }
    //Checking result for bot winning

    if (rowCols[0].fillByMe == false && rowCols[1].fillByMe == false && rowCols[2].fillByMe == false) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[3].fillByMe == false && rowCols[4].fillByMe == false && rowCols[5].fillByMe == false) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[6].fillByMe == false && rowCols[7].fillByMe == false && rowCols[8].fillByMe == false) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[0].fillByMe == false && rowCols[3].fillByMe == false && rowCols[6].fillByMe == false) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[1].fillByMe == false && rowCols[4].fillByMe == false && rowCols[7].fillByMe == false) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[2].fillByMe == false && rowCols[5].fillByMe == false && rowCols[8].fillByMe == false) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[0].fillByMe == false && rowCols[4].fillByMe == false && rowCols[8].fillByMe == false) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[2].fillByMe == false && rowCols[4].fillByMe == false && rowCols[6].fillByMe == false) {
        cons
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".losingMsg").style.display = "block";
        document.querySelector(".losingMsg").style.transition = "0.3s";
    }
    if (rowCols[0].filled == true && rowCols[1].filled == true && rowCols[2].filled == true && rowCols[3].filled == true &&rowCols[4].filled == true && rowCols[5].filled == true && rowCols[6].filled == true && rowCols[7].filled == true && rowCols[8].filled == true) {
        clearInterval(gameLoop)
        document.querySelector(".mainTab").style.display = "none";
        document.querySelector(".mainTab").style.transition = "0.3s";
        document.querySelector(".drawMsg").style.display = "block";
        document.querySelector(".drawMsg").style.transition = "0.3s";
    }
    
}

//Reload button
document.querySelector("#play").addEventListener("click", function() {
    location.reload();
})