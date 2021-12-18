function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UZ7QkDAoY/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("modelLoaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1; 
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b")";
    
    Img=document.getElementById("alien1");
    Img1=document.getElementById("alien2");
    Img2=document.getElementById("alien3");
    Img3=document.getElementById("alien4");
    
    if(results[0].label=="Clap"){
        Img.src='aliens-01.gif';
        Img1.src='aliens-02.png';
        Img2.src='aliens-03.png';
        Img3.src='aliens-04.png';
    }
    else if(results[0].label=="Clinking"){
        Img.src='aliens-01.png';
        Img1.src='aliens-02.gif';
        Img2.src='aliens-03.png';
        Img3.src='aliens-04.png';
    }
    else if(results[0].label=="Bell"){
        Img.src='aliens-01.png';
        Img1.src='aliens-02.png';
        Img2.src='aliens-03.gif';
        Img3.src='aliens-04.png';
    }
    else{
        Img.src='aliens-01.png';
        Img1.src='aliens-02.png';
        Img2.src='aliens-03.png';
        Img3.src='aliens-04.gif';
    }

}
}