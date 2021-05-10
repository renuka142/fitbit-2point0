let parameter=["weights","reps","distance"];
let standard=[];
let resistance=[];
let cardio=[]; 

function display(){

    standard.push(document.getElementById("ws").value);
    standard.push(document.getElementById("rs").value);
    standard.push(document.getElementById("ds").value);


    resistance.push(document.getElementById("wr").value);
    resistance.push(document.getElementById("rr").value);
    resistance.push(document.getElementById("dr").value);


    cardio.push(document.getElementById("wc").value);
    cardio.push(document.getElementById("rc").value);
    cardio.push(document.getElementById("dc").value);


    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
        type:'line',
        data:{
            //labels: for X axis 
            labels:parameter,
            datasets:[
                {
                    data:standard,
                    label:"Standard",
                    borderColor:"yellow",
                    fill: false,
                },
                {
                    data:resistance,
                    label:"Resistance",
                    borderColor:"red",
                    fill:false,
                },
                {
                    data:cardio,
                    label:"Cardio",
                    borderColor:"lightgreen",
                    fill:false,
                }
            ]
        }
    });

}
