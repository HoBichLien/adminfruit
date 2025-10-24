const dailyBtn = document.getElementById('dailyBtn');
const monthlyBtn = document.getElementById('monthlyBtn');
const dailyReport = document.getElementById('dailyReport');
const monthlyReport = document.getElementById('monthlyReport');
const chartContainer = document.getElementById('chartContainer');

function showReport(type){
    if(type=='daily'){
        dailyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        dailyReport.classList.remove('hidden');
        monthlyReport.classList.add('hidden');
    }else{
        monthlyBtn.classList.add('active');
        dailyBtn.classList.remove('active');
        monthlyReport.classList.remove('hidden');
        dailyReport.classList.add('hidden');
    }
}
//data basic
const monthlyData = [10, 15, 8, 20, 17, 12, 25, 18, 22, 14, 19, 23];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
months.forEach((m, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="bar" style="height:${monthlyData[i]*10}px"></div><span>${m}</span>`;
    chartContainer.appendChild(div);
});


//filter
function applyFilter(){
    const from = document.getElementById('fromDate').value;
    const to = document.getElementById('toDate').value;
    if(!from || !to){
        alert('please seclect both From and To dates');
        return;
    }
    alert('Showing reports from ... to ...')
}