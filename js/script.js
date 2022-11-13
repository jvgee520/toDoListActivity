//Create addEventListener for the button
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", newList);

function newList() {
    //Get Input value
    let itemValue = document.querySelector("#inputItem").value;
    
    //Get Parent Node
    let itemList = document.querySelector("#toDoList");

    //Create Elements (ChildNodes)
    let itemDiv = document.createElement("div");
    itemDiv.style.display = "flex";
    itemDiv.style.width = "50%";
    itemDiv.style.marginLeft = "25%"

    let item = document.createElement("input");
    item.style.color = "black"
    item.className = "form-control-lg m-auto mb-4 text-center fw-bold col-sm"

    //Element Attribute
    item.type = "text";
    item.value = itemValue;
    //disabled to edit the input field.
    item.setAttribute("disabled", "");
    item.value = itemValue;
    item.defaultValue = inputItem;

    

    //Create doneBtn
    // let doneBtn = document.createElement("button");
    // doneBtn.textContent = "Done";
    // doneBtn.addEventListener("click", );


    //Create Remove button
    let remBtn = document.createElement("button");
    //icon here .innerHTML
    remBtn.innerHTML = "<span><i class='fa-1x fa-solid fa-trash-can'></i></span>";
    remBtn.style.color = "red";
    remBtn.style.backgroundColor = "transparent";
    remBtn.style.border = "0";
    // To enable remove button
    remBtn.addEventListener("click", remItem);

    //Create Edit button
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "<span><i class='fa-1x fa-solid fa-pen-to-square'></i></span>"; 
    editBtn.classList = "editBtn";
    editBtn.style.color = "blue";
    editBtn.style.backgroundColor = "transparent";
    editBtn.style.border = "0";
    editBtn.addEventListener("click", editValue);

    //Append Element 
    itemList.appendChild(itemDiv); //ParentNode
    itemDiv.appendChild(item); //Append input
    itemDiv.appendChild(remBtn); //append remove button
    itemDiv.appendChild(editBtn); //append edit button

    //create function for editBtn
        function editValue() {
            item.removeAttribute("disabled", "");

                //Create Save button inside Edit function
                let saveBtn = document.createElement("button");
                saveBtn.innerHTML = "<span><i class='fa-2x fa-solid fa-check'></i></span>";
                saveBtn.style.color = "#39ff14";
                saveBtn.style.backgroundColor = "transparent";
                saveBtn.style.border = "0";
                saveBtn.classList = "saveBtn";
                saveBtn.addEventListener("click", listSave);

                //Append saveBtn
                itemDiv.appendChild(saveBtn);

                //Give Function to saveBtn "saveValue"
                function listSave() {
                    let text = "Are you sure you want to save changes?.";

                    if (confirm(text) == true) {
                        //enable editBtn
                        editBtn.removeAttribute("disabled", "");
                        //get new value
                        let newValue = item.value;

                        item.defaultValue = newValue;

                        //disable input type
                        item.setAttribute("disabled", "");

                        //hide saveBtn
                        itemDiv.removeChild(saveBtn);

                        //Alert text
                        text = "Saved Successfully";
                    }

                    else {
                        text = "Cancelled";
                        //enable editBtn again
                        editBtn.removeAttribute("disabled", "");

                        //disable input type
                        item.setAttribute("disabled", "");

                        //hide saveBtn
                        itemDiv.removeChild(saveBtn);

                        //to change value back to default
                        item.value = item.defaultValue;
                    }
                    alert(text);


                }

        }


    //(To set limit on the new added value)
    let count = itemList.childElementCount;
    //disable addBtn once reached the limit
    if (count === 10) {
        addBtn.setAttribute("disabled", "");
        alert("You've Reached Maximum Errand for Today.")
    }

    //Create function for remBtn
    function remItem() {
        itemDiv.remove();
        // this.parentNode.remove(); (Alternative)
        //Same function since remBtn parent node is itemDiv

        if (count <= 10) {
            addBtn.removeAttribute("disabled", "");
        }// to enable addBtn once item removed

    }

    //To mark list as done

    // let todoList = document.querySelectorAll("input");

    // todoList.forEach(e => {
    //     let listText = e.querySelector("toDoList");
    //     let btnDone = document.createElement("button");
    //     e.appendChild(btnDone);
    //     btnDone.innerHTML = "<i class='fas fa-check'></i>";
    //     btnDone.addEventListener("click", () => {
    //       done();
    //     });


}