function toggleSection(i, t){
    let section = document.getElementById(i)
    let text = document.getElementById(t)
    if(section.style.display === "none"){
       section.style.display = 'block'
       text.innerText = "Hide"
    }else{
        section.style.display = 'none'
        text.innerText = "Show"
    }    
}

