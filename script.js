const add = document.getElementById("add");

const notes = JSOn.parse(localStorage.getItem("notes"));

function addNote(text=""){
    const note = document.createElement("div");
    note.classList.add("note");

     note.innerHTML = `
        <div class="notes">
            <div class = "tools">
                <button class="edit"> <i class="fa fa-edit></i></button>
                <button class="delete"> <i class="fa fa-trash-alt></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}></textarea>
        </div>
     `;

      const edit = document.querySelector(".edit");
      const deleteBtn = document.querySelector(".delete");

      const main = document.querySelector("main");
      const textarea = document.querySelector("textarea");

      textarea.value = text;
      main.innerHTML = marked(text);
    }

if(notes){
    notes.forEach((note)=>{
        addNewNote(note);
    });
}

add.addEventListener("click", () =>{
    addNewNote();
});