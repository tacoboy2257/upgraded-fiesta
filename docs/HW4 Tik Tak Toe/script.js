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
``
    for (var s of allboxes) {
        s.onclick = function(){
            //do something cool here
            console.log("clicked!");
            s.textContent = "X";
        }
    }
// }