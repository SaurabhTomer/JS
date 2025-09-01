// setTimeout(function(){
//     console.log("saurabh");
    
// } , 2000)

// setInterval(function(){
//     console.log("hello");
    
// } , 2000)


const changeText = function(){
    document.querySelector('h1').innerHTML = "Saurabh Tomer";
}

const changeMe = setTimeout(changeText , 2000);

document.querySelector('#stop').addEventListener('click' , function(){
    clearInterval(changeMe);
    console.log("Stopped");
    
})