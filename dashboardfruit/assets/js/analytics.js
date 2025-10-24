const salesCtx = document.getElementById('salesChart');
new Chart (salesCtx,{
    type:'line',
    data:{
        labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
            label:'Sales($)',
            data:[1800,2200,1900,2600,3200,4000,3600,4200,3800,4500,6200,7800],
            borderColor:'#43a047',
            backgroundColor:'rgba(67,160,71,0.15)',
            fill:true,
            tension:0.3
        }]
    },
    options:{
        responsive:true,
        scales:{y:{beginAtZero:true}},
        plugins:{legend:{display:false}}
    }
});

const productCtx = document.getElementById('productChart');
new Chart (productCtx,{
    type:'bar',
    data:{
        labels:['Apples','Bananas','Oranges','Mixed','Mango','Pear','Lemonate'],
        datasets:[{
            label:'Units Sold',
            data:[18,22,190,260,32,40,78],
            backgroundColor:['rgb(109, 109, 238)','rgb(34, 34, 250)','rgb(63, 34, 250)','rgb(36, 9, 210)','rgb(25, 5, 155)','rgb(21, 8, 103)','rgb(22, 9, 105)']
        }]
    },
    options:{
        responsive:true,
        scales:{y:{beginAtZero:true}},
        plugins:{legend:{display:false}}
    }
});