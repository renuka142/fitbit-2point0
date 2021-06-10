function quaratine(){
    var three = document.getElementsByName('qlist'); 
    var four = document.getElementsByName('level');
    for(i = 0; i < three.length; i++){
        for(j = 0; j < four.length; j++){
            if(three[i].checked && four[j].checked){
                if(three[i].value==="Immunity Booster At Home" && four[j].value==="Beginner")
                    document.getElementById("result_four").innerHTML="<b>"+"IMMUNITY BOOSTER AT HOME (BEGINNER LEVEL):"+"</b>"+"<br>"+"<br>"+"The best weapon against virus is your immunity.This low impact cardio exercise helps bolster up your immune system"+"<br>"+"<br>"+"1) High Stepping 2 x 20 "+"<br>"+"2) Jumping Squats 2 x 15 "+"<br>"+"3) Flutter Kick Squats 2 x 15 "+"<br>"+"4) Walking Squats 3 x 20"+"<br>"+"5) Plank Jack 5 x 5"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets (60-90 seconds between sets of squats, if neccessary)"+"</em>"
            
                if(three[i].value==="Immunity Booster At Home" && four[j].value==="Advanced")
                    document.getElementById("result_four").innerHTML ="<b>"+"IMMUNITY BOOSTER AT HOME (ADVANCED LEVEL)"+"</b>"+"<br>"+"<br>"+"The best weapon against virus is your immunity.This low impact cardio exercise helps bolster up your immune system"+"<br>"+"<br>"+"1) High Stepping 3 x 20 "+"<br>"+"2) Plank Hip Dips 3 x 10 "+"<br>"+"3) Walking Squats 2 x 20 "+"<br>"+"4) Backward Lunge With Front Kick (Right To Left)"+"<br>"+"5)Adductor Stretch In Standing"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets (60-90 seconds between sets of squats, if neccessary)"+"</em>"
                
                if(three[i].value==="Athletes' choice At Home" && four[j].value==="Beginner")
                    document.getElementById("result_four").innerHTML ="<b>"+"ATHLETES' CHOICE AT HOME (BEGINNER LEVEL)"+"</b>"+"<br>"+"<br>"+"Even while staying at home, you can exercise as effeciently as an athlete, using your weight and simple equip to pump your muscles"+"<br>"+"<br>"+"1) Jumping Jacks 2 x 10 "+"<br>"+"2) Skater Jump 2 x 10 "+"<br>"+"3) Arnold Dumbbell Press 2 x 16 "+"<br>"+"4) Leg In Out 1 x 16"+"<br>"+"5) Wall Sit"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets"+"</em>"
            
                if(three[i].value==="Athletes' choice At Home" && four[j].value==="Advanced")
                    document.getElementById("result_four").innerHTML ="<b>"+"ATHLETES' CHOICE AT HOME (ADVANCED LEVEL)"+"</b>"+"<br>"+"<br>"+"Even while staying at home, you can exercise as effeciently as an athlete, using your weight and simple equip to pump your muscles"+"<br>"+"<br>"+"1) Jumping Jacks 2 x 20 "+"<br>"+"2) Skater Jump 2 x 10 "+"<br>"+"3) Dumbbell Jumping Squats 2 x 5 "+"<br>"+"4) Dumbbell Step Up Onto Chair 1 x 16"+"<br>"+"5) Reverse Flys 1 x 16"+"<br>"+"6) Leaning Dumbbell One Leg Calf Raise(Left and Right)"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets(60-90 seconds between sets of squats, if neccessary)"+"</em>"
            
                if(three[i].value==="Stay In Shape At Home" && four[j].value==="Beginner")
                    document.getElementById("result_four").innerHTML ="<b>"+"STAY IN SHAPE AT HOME (BEGINNER LEVEL)"+"</b>"+"<br>"+"<br>"+"Worry about falling out of shape at home? Follow this workout to get curves and stay in shape"+"<br>"+"<br>"+"1) Jumping Jacks 2 x 20 "+"<br>"+"2) Squat Pulse 2 x 15 "+"<br>"+"3) Wall Push "+"<br>"+"4) Russian Twist x15"+"<br>"+"5) Backward Lunge 1 x 20"+"<br>"+"6) Butt Bridge"+"<br>"+"7) Mountain Climber 3 x 15"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets(60-90 seconds between sets of squats, if neccessary)"+"</em>"
            
                if(three[i].value==="Stay In Shape At Home" && four[j].value==="Advanced")
                    document.getElementById("result_four").innerHTML ="<b>"+"STAY IN SHAPE AT HOME (ADVANCED LEVEL)"+"</b>"+"<br>"+"<br>"+"Worry about falling out of shape at home? Follow this workout to get curves and stay in shape"+"<br>"+"<br>"+"1) Jumping Jacks 2 x 20 "+"<br>"+"2) Backward Lung 2 x 15 "+"<br>"+"3) Butt Bridge x 20 "+"<br>"+"4) Russian Twist x15"+"<br>"+"5) Fire Hydrant (Left and Right)"+"<br>"+"6) Flutter Kick Squats 3 x 15"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets(60-90 seconds between sets of squats, if neccessary)"+"</em>"
            
                if(three[i].value==="Band Workout At Home" && four[j].value==="Beginner")
                    document.getElementById("result_four").innerHTML ="<b>"+"BAND WORKOUT AT HOME (BEGINNER LEVEL)"+"</b>"+"<br>"+"<br>"+"Resistance band is the best choice for strength training at home."+"<br>"+"<br>"+"1) Band Lateral Raises x16 "+"<br>"+"2) Band Seated Rowing With Twist x20 "+"<br>"+"3) Band Triceps Kickback x20 "+"<br>"+"4) Banded Squat Abduction x16"+"<br>"+"5) Band Upright Row x16"+"<br>"+"6) Band Lateral Raises x15"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets"+"</em>"
            
                if(three[i].value==="Band Workout At Home" && four[j].value==="Advanced")
                    document.getElementById("result_four").innerHTML ="<b>"+"BAND WORKOUT AT HOME (ADVANCED LEVEL)"+"</b>"+"<br>"+"<br>"+"Resistance band is the best choice for strength training at home."+"<br>"+"<br>"+"1) Band Lateral Raises x30 "+"<br>"+"2)Band Hammer Grip Curls x25 "+"<br>"+"3) Fire Hydrant With Band (Left and Right)"+"<br>"+"4) Band Tricep Curls x30"+"<br>"+"5) Band Upright Row x16"+"<br>"+"6) Band Lateral Raises x30"+"<br>"+"<br>"+"<em>"+"Rest 45 seconds between sets"+"<em>"
            
            }
        }
    }
}
function toggle(){
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
}

