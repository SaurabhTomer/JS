//Generate a random color

const randomColor = function(){
    const hex= "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];   
        // # is added before this generated number
    }
    return color;
};

let intervalId;

const StartChangingcolor = function(){

    // Checks if the intervalId is null or not if yes then modified it
    // intervalId is null bcoz optimized in Stop button
    
    if(!intervalId){
        intervalId =  setInterval(changeBG , 1000);
    }
    
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
};

const StopChangingcolor = function(){

    clearInterval(intervalId);
    intervalId = null; 
    //optimized
};

document.querySelector('#Start').addEventListener('click' , StartChangingcolor);

document.querySelector('#Stop').addEventListener('click' , StopChangingcolor);
