var years=["weights","reps","distance"];
var standard=[];
var resistance=[];
var cardio=[]; 

function display(){
var standard=[];
var resistance=[];
var cardio=[]; 

standard.push(document.getElementById("wg").value);
standard.push(document.getElementById("rg").value);
standard.push(document.getElementById("dg").value);


resistance.push(document.getElementById("wo").value);
resistance.push(document.getElementById("ro").value);
resistance.push(document.getElementById("do").value);


cardio.push(document.getElementById("ws").value);
cardio.push(document.getElementById("rs").value);
cardio.push(document.getElementById("ds").value);


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type:'line',
    data:{
        labels:years,
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
