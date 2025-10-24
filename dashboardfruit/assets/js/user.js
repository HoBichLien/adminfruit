const popup=document.getElementById('popup');
const overlay=document.getElementById('overlay');
const title=document.getElementById('popupTitle');
const form=document.getElementById('userForm');
let editingRow=null;

function openPopup(isEdit=false,row=null){
  popup.classList.add('open');
  overlay.classList.add('show');
  if(isEdit&&row){
    editingRow=row;
    const cells=row.querySelectorAll('td');
    document.getElementById('userName').value=cells[1].innerText;
    document.getElementById('userEmail').value=cells[2].innerText;
    document.getElementById('userRole').value=cells[3].innerText;
    document.getElementById('userStatus').value=cells[4].innerText.trim();
    title.innerText="Edit User";
  }else{
    form.reset();
    editingRow=null;
    title.innerText="Add User";
  }
}
function closePopup(){
  popup.classList.remove('open');
  overlay.classList.remove('show');
}
function editUser(btn){openPopup(true,btn.closest('tr'));}
function deleteUser(btn){
  if(confirm("Delete this user?")) btn.closest('tr').remove();
}
form.addEventListener('submit',function(e){
  e.preventDefault();
  const name=document.getElementById('userName').value;
  const email=document.getElementById('userEmail').value;
  const role=document.getElementById('userRole').value;
  const status=document.getElementById('userStatus').value;
  if(editingRow){
    const cells=editingRow.querySelectorAll('td');
    cells[1].innerText=name;
    cells[2].innerText=email;
    cells[3].innerText=role;
    cells[4].innerHTML=`<span class="status ${status.toLowerCase()}">${status}</span>`;
  }else{
    const table=document.getElementById('userTable');
    const newRow=table.insertRow();
    newRow.innerHTML=`
      <td><img src="https://i.pravatar.cc/40?u=${name}" style="border-radius:50%"></td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${role}</td>
      <td><span class="status ${status.toLowerCase()}">${status}</span></td>
      <td>
        <button class="action-btn" onclick="editUser(this)">✏️</button>
        <button class="action-btn" onclick="deleteUser(this)">🗑️</button>
      </td>`;
  }
  closePopup();
});
