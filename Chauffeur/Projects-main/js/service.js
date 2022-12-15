let myBox = document.querySelectorAll(".hover-text .hover-container div");
console.log(myBox);


// myBox.forEach((e)=>{
//     e.onmouseover = function() { 
//         e.classList.toggle("bg-hover");
//         for (let index = 1; index < e.children.length; index++) {
//             console.log(e.children[index])
//             e.children[index].classList.toggle("text-block");
//         }
//     }
//     e.onmouseout = function() { 
//         e.classList.toggle("bg-hover");
//         for (let index = 1; index < e.children.length; index++) {
//             console.log(e.children[index])
//             e.children[index].classList.toggle("text-none");
//         }
//     }
// })
myBox.forEach((e)=>{
    e.addEventListener("mouseover", 
        function(){
            e.classList.toggle("bg-hover");
            for (let index = 1; index < e.children.length; index++) {
                console.log(e.children[index])
                e.children[index].classList.toggle("text-block");
            }
        }
    );
    e.addEventListener("mouseout", 
        function() { 
            e.classList.toggle("bg-hover");
            for (let index = 1; index < e.children.length; index++) {
                console.log(e.children[index])
                e.children[index].classList.toggle("text-none");
            }
        }
    );
})