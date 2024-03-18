const taskForm=document.getElementById("task_form");
const taskInput=document.getElementById("task_input");
const taskList=document.getElementById("task_list");

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskTitle=taskInput.value;
    if(taskTitle==""){
        alert("Please Enter Task")
    }
   else{
    const listItem=document.createElement('li');
    listItem.innerHTML=taskTitle;
    taskList.append(listItem);
    let span=document.createElement('span');
    span.innerHTML=`&times;`
    listItem.appendChild(span);
    taskInput.value="";
    listData();
   }
});
taskList.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked")
        listData();
    }
    if(e.target.tagName=="SPAN"){
        const li=e.target.parentElement;
        li.remove();
        listData();
    }
});
function showList(){
    taskList.innerHTML=localStorage.getItem("listItem");
}
function listData(){
    localStorage.setItem("listItem",taskList.innerHTML);
}
showList();