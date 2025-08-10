//  let button = document.getElementById("heading");
//  console.dir(button);

//  let heading = document.getElementsByClassName("myClass");
//  console.dir(headings);
//  console.log(headings);
//  let element = document.querySelector(".myclass");
//  console.dir(element);

//  let allEl = document.querySelectorAll(".myclass");
//  console.dir(allEl);
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from DOM Demo";
// let divs = document.querySelectorAll(".box");
// let idx =1;
// for (div of divs)
// {
//     div.innerText = `new value ${idx}`;
//     idx++;
// }

// ATTRIBUTES
//  let div = document.querySelector("div");
//  console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

//  let name = div.getAttribute("name ");
//  console.log(name );
//  let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";
// div.innerText = "hello!"
//  let newBtn = document.createElement("button");
//  newBtn.innerText = "click me!";
//  console.log(newBtn);
//  let div=document.querySelector("div");
//  div.append(newBtn);
// let div=document.querySelector("div"); 
//  div.prepend(newBtn);
// let p=document.querySelector("p");  -- newbtn after paragraph.
//  p.after(newBtn);
// let newHeading = document.createElement("h1");
// newHeading.innerHTML={hi}
// document.querySelector("body").prepend(newHeading);


// practice:
// create a new btn element.give it a text "click me",
// bg-color of red and text color of white
// insert the btn as the first element inside the body tag.


//  let newBtn = document.createElement("button");
//  newBtn.innerText = "Click here!";
//  newBtn.style.color ="white";
//  newBtn.style.backgroundColor ="red";

//  document.querySelector("body").prepend(newBtn);

// //  que 2.
// let para =document.querySelector("p");
//handling 
//  let btn1 = document.querySelector("#btn1");

//  btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     comsole.log(evt.target);
//     console.log(evt.clickX,evt.clickY);
//     // console.log("btn1 was clicked");
//     // let a = 25;
//     // a++;
//     // console.log(a);
//     // let b = 3;
//     // b++;
//     // console.log(b);
//  };
//  let box = document.querySelector("div");
//  div.onmouseover=() =>
// {
//     console.log("u are inside div")
// };
btn1.addEventListener("click",(evt) => {
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clickX,evt.clickY);
});

btn1.addEventListener("click",() => {
    console.log("button1 was clicked - handler2");
});

let div=document.querySelector("div");
