// let heading = document.getElementById("heading")
// console.log(heading)
// heading.innerText = "<h1>Welcome to DOM</h1>"
// heading.innerHTML = "<h1>Welcome to DOM</h1>"


//innerText - add only the string
//innerHTML - add string as well as html element


//creating 
// let main = document.getElementById("main");

// main.append("appendChild() will append only dom node")

// let h1 = document.createElement("h1");
// h1.innerText = "Element created using JS";
// h1.setAttribute("style","text-align:center;color:blue;")

// main.appendChild(h1);

// main.append("append() will Append String as well as DOM Node")

// let h11 = document.createElement("h1");
// h11.innerText = "Element created using JS";
// h11.setAttribute("style","text-align:center;color:blue;")

// main.append(h11)

// // h1.innerText = " Appended using append()";
// h1.append(" Appended using append()");\

// let listItems = document.getElementsByClassName("list-items")
// console.log(listItems)

// for(let i = 0; i<listItems.length;i++)
// {
//     listItems[i].append(i)
// }

// let h1s = document.getElementsByTagName("h1")
// for(let h1 of h1s)
// {
//     console.log(h1)
// }

// let list = document.querySelector(".list-items")
// console.log(list)

// let list = document.querySelectorAll("*")
// console.log(list)

// let main = document.getElementById("main")

// let h1 = document.createElement("h1")
// h1.innerText = "DOM Manipulation is fun"
// h1.setAttribute("style","text-align:center")

// let p = document.createElement("p");
// p.innerHTML = `
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iusto numquam! Odit cupiditate atque alias tempora blanditiis facere officiis excepturi beatae. Totam minima amet soluta. Illo commodi vel a numquam!
//     <strong>psum dolor sit amet consectetur</strong>
//     <u> Quae, iusto numquam! Odit cupiditate</u>
//     <i>ipsum dolor sit amet consectetur</i>
//     <sup>Thisd is djnsjk nunn wijnwnl</sup>
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magnam molestias fugit nulla obcaecati dicta deleniti omnis beatae reiciendis, in necessitatibus eaque, impedit dignissimos nihil molestiae repudiandae, voluptatem libero dolorum.
// `

// main.appendChild(h1);
// main.appendChild(p);


// let names = ["Virat Kohli","Shewag","Ghambir","MS Dhoni","Ashwin","Pujara","Dravid"]

// let main = document.getElementById("main");

// let ul = document.createElement("ul")

// for(let name of names)
// {
//     let li = document.createElement("li")
//     li.innerText = name
//     ul.appendChild(li)
// }

// main.appendChild(ul)