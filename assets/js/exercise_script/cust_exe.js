      function customize(){
        var one = document.getElementsByName('upper'); 
        var two = document.getElementsByName('lower');
        
        
        for(i = 0; i < one.length; i++){
            
            for(j = 0; j < two.length; j++){
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Shoulder" && two[j].value==="Legs")
                        document.getElementById("resultfour").innerHTML
                            ="<b>"+"Exercises for Shoulder And Legs"+"</b>"+"<br>"+"<br>"+"Back Squat 3 x 8-10 reps"+"<br>"+"Front Squat 2 x 8-10 reps"+"<br>"+"Face Pull 3 x 15 reps"+"<br>"+"Walking Lunge 3 x 8-12 reps"+"<br>"+"<br>"+"<br>"+"Rest 30-45 seconds between sets (60-90 seconds between sets of squats, if neccessary)"+"<br>"
                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Shoulder" && two[j].value==="Glutes")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Shoulder And Glutes"+"</b>"+"<br>"+"<br>"+"Barbell Shoulder Press 1 reps"+"<br>"+"Bulgarian Split Squat 2 x 8 reps"+"<br>"+"Frog Bridge 3 x 4 reps"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Shoulder" && two[j].value==="Upper Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Shoulder And Upper Abdomin Muscles"+"</b>"+"<br>"+"<br>"+"Resisted Plank 2 sets for 40 sec"+"<br>"+"Hollow Hold 2 sets for 20 sec"+"<br>"+"Plank raise tap crunch for 40 sec"+"<br>"+"Dumbbell lateral raise 2 x 8 reps"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Shoulder" && two[j].value==="Lower Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Shoulder And Lower Abdomin Muscles"+"</b>"+"<br>"+"<br>"+"Dead Bug"+"<br>"+"jack Knife"+"<br>"+"Mountain Climber"+"<br>"+"Reverse Fly"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Shoulder" && two[j].value==="nonetwo")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Shoulder"+"</b>"+"<br>"+"<br>"+"Dumbbell lateral raise 2 x 8 reps"+"<br>"+"Reverse Fly"+"<br>"+"Military press"+"<br>"+"Clean squat press"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Arms" && two[j].value==="Legs")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Arms And Legs"+"</b>"+"<br>"+"<br>"+"Chin Ups 5 ft off ground"+"<br>"+"Parallel Dips 2 x 10 reps"+"<br>"+"Diamond Push Up 2 x 5 reps"+"<br>"+"Clean squat press 20(max)"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Arms" && two[j].value==="Glutes")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Arms And Glutes"+"</b>"+"<br>"+"<br>"+"Squat+ Overhead Press"+"<br>"+"Squat Hold + Triceps Pulse"+"<br>"+"Squat + Curl"+"<br>"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Arms" && two[j].value==="Upper Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Arms And Upper Abdominal Muscles"+"</b>"+"<br>"+"<br>"+"Tapping Push-Up 2 x 5 reps"+"<br>"+"Plank Knee Twist 2 x 5 reps"+"<br>"+"Single Leg Dip 1 x 5 reps"+"<br>"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Arms" && two[j].value==="Lower Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Arms And Lower Abdominal Muscles"+"</b>"+"<br>"+"<br>"+"Downward Dog Split to Elbow Knee Hold"+"<br>"+"Side Plank With Reach-Through"+"<br>"+"Slider Plank to Pike"+"<br>"+"Slider Bear Plank"+"<br>"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Arms" && two[j].value==="nonetwo")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Arms"+"</b>"+"<br>"+"<br>"+"InchWorms 5 reps"+"<br>"+"Plank to push-up 10 total, 5 per side"+"<br>"+"Incline push-ups 8 reps"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Upper Back" && two[j].value==="Legs")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Upper Back and Legs"+"</b>"+"<br>"+"<br>"+"Arm balance row"+"<br>"+"Rocket launcher row"+"<br>"+"Resistance rows"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Upper Back" && two[j].value==="Glutes")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Upper Back and Glutes"+"</b>"+"<br>"+"<br>"+"Squat Raise 2 x 10 reps"+"<br>"+"Deadlift Row 2 x 8 reps"+"<br>"+"Plank Bird Dog"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Upper Back" && two[j].value==="Upper Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Upper Back and Upper Abdominal Muscles"+"</b>"+"<br>"+"<br>"+"Dumbbell crunch 10 reps"+"<br>"+"Tuck and crunch 15 reps"+"<br>"+"Modified V-sit 12 reps"+"superman 30 sec"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Upper Back" && two[j].value==="Lower Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Upper Back and Lower Abdominal Muscles"+"</b>"+"<br>"+"<br>"+"Hanging knee raise twist 10 reps each side"+"<br>"+"Garhammer raise 15 reps"+"<br>"+"Hanging knee raise 10 reps"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="Upper Back" && two[j].value==="nonetwo")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Upper Back"+"</b>"+"<br>"+"<br>"+"Arm balance row"+"<br>"+"Rocket launcher row"+"<br>"+"Resistance Row"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="noneone" && two[j].value==="Legs")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Legs"+"</b>"+"<br>"+"<br>"+"Squat 3 x 10 reps"+"<br>"+"Lung 3 x 10 reps"+"<br>"+"Donkey kick 2 x 8 reps"+"<br>"+"Side Lunge 2 x 10 reps"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="noneone" && two[j].value==="Glutes")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Glutes"+"</b>"+"<br>"+"<br>"+"Glute Bridge 2 x 10 reps"+"<br>"+"Reverse Lung 3 x 10 reps"+"<br>"+"Bodyweight Squat 2 x 12"+"<br>"+"Jump Squat 2 x 10"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="noneone" && two[j].value==="Upper Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Upper Abdominal Muscles"+"</b>"+"<br>"+"<br>"+"Dumbbell crunch 10 reps"+"<br>"+"Tuck and crunch 15 reps"+"<br>"+"Modified V-sit 12 reps"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="noneone" && two[j].value==="Lower Abdominal Muscles")
                        document.getElementById("resultfour").innerHTML="<b>"+"Exercises for Lower Abdominal Muscles"+"</b>"+"<br>"+"<br>"+"Heel tap 40 sec"+"<br>"+"Mountain climber 3 x 15"+"<br>"+"Scissor 2 x 20"+"<br>"+"<br>"+"Rest 30-45 seconds between sets "+"<br>"

                }
                if(one[i].checked && two[j].checked){

                    if(one[i].value==="noneone" && two[j].value==="nonetwo")
                        document.getElementById("resultfour").innerHTML="<b>"+"You have to select at least one body area to work on"+"</b>"+"<br>"+"<br>"

                }
            }
        }
    }

  function toggle(){
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
  }
