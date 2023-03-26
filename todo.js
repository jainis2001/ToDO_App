const tableTag=document.querySelector('table');
function addData(){
    value=document.getElementById("input-text").value;
    if(value){
        trElement=document.createElement('tr');
        td_data=document.createElement('td');
        td_edit=document.createElement('td');
        td_delete=document.createElement('td');
        td_data.textContent=value;
        td_edit.innerHTML="<input type='button' value='Edit' onclick='findId(this)'>";
        td_delete.innerHTML="<input  type='button' value='Delete' onclick='deleteData(this)'>";
        trElement.appendChild(td_data);
        trElement.appendChild(td_edit);
        trElement.appendChild(td_delete);
        tableTag.appendChild(trElement);
        document.getElementById("input-text").value=null;
        document.getElementById("deleteall").style.display="inline-flex";       
    }else{
        document.getElementById("error").textContent="Please Enter Value";
        document.getElementById("error").style.color="red";
        $("#error").show("fast").delay(1000).hide("fast"); 
    }
}
function findId(td){
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="inline";
    thisRow = td.parentElement.parentElement;
    document.getElementById("input-text").value = thisRow.firstElementChild.textContent;
}
function editData(){
    value=document.getElementById("input-text").value;
    if(value)
    {
        thisRow.firstElementChild.textContent=value;
        document.getElementById("update").style.display="none";
        document.getElementById("add").style.display="inline";
        document.getElementById("input-text").value=null;
    } else{
        document.getElementById("error").textContent="Please Enter Value";
        document.getElementById("error").style.color="red";
        $("#error").show("slow").delay(1000).hide("slow"); 
    }   
}
function deleteData(td){
    thisRow = td.parentElement.parentElement;   
    thisRow.remove();   
    table=document.querySelector('table');
    (table.childNodes.length==1)?
        document.getElementById("deleteall").style.display="none":'';   
}
function deleteAllData(){
    document.querySelector('table').textContent="";
    document.getElementById("deleteall").style.display="none";   
}



