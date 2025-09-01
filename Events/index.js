//not best approach

// document.getElementById("owl").onclick = function(){
//     alert('owl clicked');
// }


// document.getElementById('owl').addEventListener('click' , function( e ){
//    console.log(e);

//  } , false );  
//  default Bubbling Phase

//type , timestamp , defaultPrevented , target , srcElement , currentTarget , 
// clientX , client Y , screen X , screen Y , altKey , ctrlKey , shiftKey , 
//  KeyCode , 



// Event Propagation 

// document.getElementById('images').addEventListener('click' , function( e ){
//    console.log("clicked inside ul");

//  } , false );  


//  document.getElementById('owl').addEventListener('click' , function( e ){
//    console.log('owl');


//  } , true );
//  Capturing Phase

//  document.getElementById('owl').addEventListener('click' , function( e ){
//    console.log('owl');
//    e.stopPropagation();

//  } , false );


document.getElementById('images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    let removeIt = e.target.parentNode;
    // removeIt.parentNode.removeChild(removeIt);

    // removeIt.remove();
})
document.getElementById('google').addEventListener('click', function (e) {
    e.preventDefault();
})




