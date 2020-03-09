// console.log("hello world")

// function setText(tag, text)
// {
//    let headers = document.getElementsByTagName(tag)

//     for (var i = 0; i < headers.length; i = i + 1) {
//         console.log(headers[i].textContent);
//         // headers[i].textContent = text
//     }
// }

// setText("h2", "Bloopering");
// setText("p", "aw, man....")

// var buttons = document.getElementsByTagName(""); // getElementsByClassName("btn-blue");

// var firstButton = buttons[0];

// firstButton.onclick = function(event) {
//     console.log("I got clicked!!!!")

    var allboxes = document.getElementsByClassName("box");
 
    var player = "X";

    // //even and odd function
    // function isOdd(s) 
    // {
    //      return s % 2;
    // } 
``
    for (var s of allboxes) {
        s.onclick = function(){
            this.textContent = player;
            if (player === "X"){
                player = "O";
                }
            else {
                player = "X";
            }
               
        }
    }
// }