function func1() {
    let add = prompt("body background color ni kiriting")
    let addSecond = prompt("matn rangini kiriting")
    let change;
    change = document.getElementById("main").style.backgroundColor = add
    change = document.getElementById("text").style.color = addSecond
    
}

func1()