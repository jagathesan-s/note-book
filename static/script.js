let popupoverlay=document.querySelector(".popup-overlay")
let popupbox=document.querySelector(".popup-box")
let addpopupbutton=document.getElementById('add-popup-button')


addpopupbutton.addEventListener("click",()=>{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
     
})

let cancelbutton=document.getElementById('cancel-book')
cancelbutton.addEventListener('click',(event)=>{
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
    booktitleinput.value=""
     bookauthorinput.value=""
      bookdescriptioninput.value=""

})
let container=document.querySelector(".container")
var addbook=document.getElementById('add-book')
var booktitleinput=document.getElementById('book-title-input')
var bookauthorinput=document.getElementById('book-author-input')
var bookdescriptioninput=document.getElementById('book-description-input')


/*
addbook.addEventListener('click',(event)=>{
    event.preventDefault()
    if(booktitleinput.value!="" && bookauthorinput.value!="" &&bookdescriptioninput.value!=""){
   var div=document.createElement("div")
   div.setAttribute("class","books-container")
   div.innerHTML=`<h2>${booktitleinput.value}</h2>
   <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
                <button onclick=deletebooks(event)>Delete</button>`
   container.append(div)
     popupoverlay.style.display="none"
    popupbox.style.display="none"
    booktitleinput.value=""
    bookauthorinput.value=""
     bookdescriptioninput.value=""
    }
    else{
        if(booktitleinput.value=="" && bookauthorinput.value=="" &&bookdescriptioninput.value==""){
            let msg=document.createElement("p")
            msg.innerHTML=" notes can't be empty"
            popupbox.appendChild(msg)
            msg.style.border="solid 2px black"
            msg.style.fontSize="20px"
            msg.style.textTransform="capitalize"
            msg.style.borderRadius="10px"
               msg.style.fontWeight="bold"
            setInterval(()=>msg.style.display="none",3000);
            }
            else{
                
        if(booktitleinput.value==""){
        let msg=document.createElement("p")
        msg.innerHTML="please enter the title"
        popupbox.appendChild(msg)
        msg.style.border="solid 2px black"
            msg.style.fontSize="20px"
            msg.style.textTransform="capitalize"
             msg.style.borderRadius="10px"
        setInterval(()=>msg.style.display="none",3000);
        }
        if(bookauthorinput.value==""){
            let msg=document.createElement("p")
            msg.innerHTML="please enter the  author name"
            popupbox.appendChild(msg)
            msg.style.border="solid 2px black"
            msg.style.fontSize="20px"
            msg.style.textTransform="capitalize"
             msg.style.borderRadius="10px"
            setInterval(()=>msg.style.display="none",3000);
            }
            if(bookdescriptioninput.value==""){
                let msg=document.createElement("p")
                msg.innerHTML=" please write something in description "
                popupbox.appendChild(msg)
                msg.style.border="solid 2px black"
            msg.style.fontSize="20px"
            msg.style.textTransform="capitalize"
             msg.style.borderRadius="10px"
                setInterval(()=>msg.style.display="none",3000);
                }
            }
            
    
    }
})*/


function deletebooks(event){
    event.target.parentElement.remove()
}
