var inputField = document.getElementById('todo-input-field');

var todoList = document.getElementById('todo-list');


function createTODOCard(msg) {
//     <div id="first-elem" class="todo-item">
//     <div class="horizontal-align todo-message-container">
//         <h3 class="todo-message">Buy Apples</h3>

//         <div>
//             <i class="far fa-edit"></i>
//             <i class="fas fa-trash-alt"></i>
//         </div>
//     </div>

//     <div class="horizontal-align todo-edit-container">
//         <input class="edit-todo" type="text" placeholder="TODO Here" /><button>Update</button>
//     </div>
// </div>

    var mainCard = document.createElement('div');
    mainCard.className = 'todo-item';

    var messageContainer = document.createElement('div');
    messageContainer.className = 'horizontal-align todo-message-container';

  var message1=document.createElement('h3');
  message1.innerHTML=inputField.value;
 message1.className="banana-header"; messageContainer.appendChild(message1);
  
   
    var buttonWrapper = document.createElement('div');
buttonWrapper.className="button-wrapper";
  
  var edit=document.createElement('i');
  edit.className="far fa-edit edit-todo";
  
  buttonWrapper.appendChild(edit);
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    buttonWrapper.appendChild(deleteIcon);
    messageContainer.appendChild(buttonWrapper);
 
  
  var editContainer=document.createElement('div');
  editContainer.style.display="none";
   var message = document.createElement('input');
  
  message.setAttribute("type","text");
  message.setAttribute("placeholder","Edit TODO");
  
    message.innerHTML = msg;
    message.className = 'todo-message'
    editContainer.appendChild(message);

  
  var subtn=document.createElement('button');
  subtn.innerHTML="update";
  subtn.id="subtn";
   editContainer.appendChild(subtn);
 messageContainer.appendChild(editContainer);
    mainCard.appendChild(messageContainer);
  
  deleteIcon.addEventListener('click',function(){
    mainCard.remove();
  });
  
  edit.addEventListener('click',function(){
   editContainer.style.display="block";
    
  })
  
  
  subtn.addEventListener('click',function(){
    message1.innerHTML=message.value;
    editContainer.style.display="none";
  });
  
    return mainCard;
}

function handleTODOCreation() {
    // TASKs:
    // 1.) Add card to the todo list on screen
    // 2.) On successful addition empty the input box
    // 3.) On delete click remove the TODO item
  
  todoList.appendChild(createTODOCard(inputField.value));
  
  
  
}

inputField.onkeyup = function(e) {
    if(e.key === 'Enter') {
        handleTODOCreation();
      inputField.value="";
    }
}

var btnAddTODO = document.getElementById('btn-add-todo');
btnAddTODO.onclick = function(e) {
    handleTODOCreation();
  inputField.value="";
}
