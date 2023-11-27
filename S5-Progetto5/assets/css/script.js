
 
window.addEventListener('scroll', function() {
console.log(window.pageYOffset + 'px');
let numeroPxSoglia = 350;
    let button = document.querySelector('#btn1');
   let myHeader = document.querySelector('.header');
 
   if (myHeader.style.backgroundColor === 'white' && window.pageYOffset < numeroPxSoglia) {
        myHeader.style.backgroundColor = '#FFC017';
        button.style.backgroundColor = 'black';
    } else if (window.pageYOffset >= numeroPxSoglia){
        myHeader.style.backgroundColor = 'white'; 
        button.style.backgroundColor = 'green';
    }
});


/*function disappear (){
    let animazione = document.querySelector(#)
}*/