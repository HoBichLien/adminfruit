//sale
const salesCtx = document.getElementById('salesChart');
new Chart(salesCtx,{
    type:'line',
    data:{
        labels:['May','Jun','July','Aug','Sep','Oct'],
        datasets:[{
            label:'Revenue',
            data:[5200,7600,6800,9200,8300,12860],
            borderColor:getComputedStyle(document.documentElement).getPropertyValue('--mauchinh').trim()||'#4caf50',
            backgroundColor:'#a5f8aa',
            tension:0.35,fill:true,pointRadius:3
        }]
    },
    options:{
        plugins:{legend:{display:false}},
        scales:{y:{beginAtZero:false,ticks:{color:'#6b7280'}},x:{ticks:{color:'#6b7280'}}}
    }
});

//pie

const pieCtx=document.getElementById('pieChart');
new Chart(pieCtx,{
  type:'pie',
  data:{
    labels:['Apples','Bananas','Oranges','Mixed'],
    datasets:[{data:[35,25,20,20],backgroundColor:['#66bb6a','#ffb74d','#ff8a65','#81c784']}]
  },
  options:{plugins:{legend:{position:'bottom'}}}
});