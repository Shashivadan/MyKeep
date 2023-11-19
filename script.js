// "use strict";

// input varables

const title = document.getElementById("note_name");
const description = document.getElementById("description");
const form = document.getElementById("form");

//warning div
const warning = document.querySelector(".warning_center");

//displaying data 
const display_data = document.querySelector(".notes")


//for editing
let edit_botton ;

// for deleting 
let delete_botton ;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submiit")
    formValudation()
})

function formValudation(){
    if (title.value === "" && description.value === ""){
        console.log("submiit")
        warning.classList.remove("invisible")
        warning.innerHTML = `<div class="warning w-5/12  bg-slate-50 drop-shadow-xl h-9 flex justify-center items-center rounded-xl max-sm:w-9/12 ">please fill the title and description</div>`
    }else{
        warning.classList.add("invisible")
        addNote()
        displayNoteData()
        deleting()
        editing()
        title.value = ""
        description.value = ""
    }
}

let note_data = {}


function addNote(){
    note_data = {
        title: title.value,
        description: description.value
    }
}


function displayNoteData(){
   let displayNote = `<div class="note_taken h-fit w-80  bg-slate-100 drop-shadow-lg rounded-xl border-2 p-3 flex flex-col justify-between max-sm:w-full">
    <div class="content">
      <div class="display_title font-mono font-extrabold bg-slate-300 px-2 w-fit rounded-lg">${note_data.title}</div>
      <div class="content_description w-72 bg-slate-100 resize-none h-fit my-3 max-sm:w-full" contenteditable="false" >${note_data.description}</div>
     </div>
    <div class="icons flex  justify-end">
      <div class="delete mr-3 ">
        <svg class="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
      </div>
      <div class="edit mr-3">
        <svg class="h-6 w-6 text-black" <svg  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
      </div>
    </div>
</div>`
    display_data.innerHTML += displayNote
}


function deleting(){
    delete_botton = document.querySelectorAll(".delete") 
    delete_botton.forEach((del ,i)=>{ 
        del.addEventListener("click", ()=>{
            del.parentElement.parentElement.remove()

        })
    })
}

function editing(){
    let edit_botton = document.querySelectorAll(".edit")
    let content_description = document.querySelectorAll(".content_description")
    edit_botton.forEach((ele , i) => {
        ele.addEventListener("click",()=>{
            content_description[i].setAttribute("contenteditable","true")
        })
    })
}