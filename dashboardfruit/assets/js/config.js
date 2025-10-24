const darkToggle = document.getElementById('darkToggle');
const accentInput =document.getElementById('accentColor');
const applyAccent =document.getElementById('applyAccent');

let darkMode = false;
darkToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    darkMode = ! darkMode;
    darkToggle.innerHTML = darkMode
  ? '<i class="fa fa-sun-o" aria-hidden="true"></i> Light Mode'
  : '<i class="fa fa-moon-o" aria-hidden="true"></i> Dark Mode';

});

applyAccent.addEventListener('click',()=>{
    const color = accentInput.value;
    document.documentElement.style.setProperty('#4caf50',color);
    document.querySelectorAll('button').forEach(b=>b.style.background=color);
    alert('Accent color applied:'+ color);
});

//chart

const ctx1 =document.getElementById('lineChart');
new Chart(ctx1,{
    type:'line',
    data:{
        labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
            label:'Sales',
            data:[180,226,378,569,789,845,934,1904,2607,3278,4059,7898],
            borderColor:'rgb(36, 9, 210)',
            borderWidth:3,
            fill:false,
            tension:0.4
        }]
    },
    options:{
        responsive:true,
        plugins:{legend:{labels:{color:'#000'}}},
        scales:{x:{ticks:{color:'#000'},grid:{color:'rgba(255,255,255,0.1'}},
                y:{ticks:{color:'#000'},grid:{color:'rgba(255,255,255,0.1'}}
        }
    }
});

const ctx2 =document.getElementById('pieChart');
new Chart(ctx2,{
    type:'pie',
    data:{
        labels:['Apples','Bananas','Oranges','Mixed'],
        datasets:[{
            data:[18,22,190,260],
            backgroundColor:['rgb(36, 9, 210)','rgb(109, 109, 238)','#ed0a0a','rgb(241, 241, 55)']
        }]
    },
    options:{
        responsive:true,
        plugins:{legend:{labels:{color:'#000'}}}
    }
});