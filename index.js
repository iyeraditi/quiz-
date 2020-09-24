function quiz(){
    alert("Hey lets start the quiz");
    var a1 = prompt("How many bones are there in human body");
    var score = 0;
    if(a1=="206"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a2 = prompt("Capital of India");
    a2 = a2.towLowerCase();
    if(a2=="new delhi"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a3 = prompt("Capital of Australia");
    a3 = a3.toLowerCase();
    if(a3=="canberra"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a4 = prompt("Capital of Assam");
    a4 = a4.toLowerCase();
    if(a4=="dispur"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a5 = prompt("Capital of karnataka");
    a5 = a5.toLowerCase();
    if(a5=="bengaluru"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    } 
    var a6 = prompt("Capital of Arunachal pradesh");
    a6 = a6.toLowerCase();
    if(a6=="itanagar"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    } 
    var a7 = prompt("state flower of Haryana");
    a7 = a7.toLowerCase();
    if(a7=="lotus"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    } 
    var a8 = prompt("what is the main language in Meghalaya");
    a8 = a8.toLowerCase();
    if(a8=="khasi"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    } 
    var a9 = prompt("which is the largest coffee producing state of India");
    a9 = a9.toLowerCase();
    if(a9=="karnataka"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    } 
    var a10 = prompt("which state has the largest land in india");
    a10 = a10.toLowerCase();
    if(a10=="rajasthan"){
        alert("correct answer")
        score++;
    }
    else{
        alert("wrong answer");
    } 

    alert("YOUR SCORE IS "+score+" out of 10")
}
