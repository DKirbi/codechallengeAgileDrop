

window.onload = function() {
    //Replace the correct ID so the navigation works again
    document.getElementById('block-adchallenge-content').id = 'challenge-news';
    
    

    const box1Div = document.createElement("div");
    const box2Div = document.createElement("div");
    box1Div.classList.add('box1');
    box2Div.classList.add('box2');
    const aboutMeImg = document.getElementsByClassName('img-right');
    console.log(aboutMeImg);
    aboutMeImg[0].appendChild(box1Div);
    aboutMeImg[0].appendChild(box2Div);
   
   
}

window.addEventListener('hashchange', function() {

    const navMenu = document.getElementById('block-adchallenge-main-menu');
    const navItem = navMenu.getElementsByTagName('a');
    // const links = navItem.document.getElementsByTagName('a');
    // console.log(links);
    let hash = window.location.hash;

    console.log(hash);
    for(let i = 0; i < navItem.length; i++) {
        if(hash == navItem[i].getAttribute('href')) { 
        navItem[i].classList.add("active");
        }
        else {
            navItem[i].classList.remove("active");
        } 
       

        
    }
    
});



// function setActive() {
//    const navItem = document.getElementsByClassName('menu-item').getElementsByTagName('a');
//     console.log('something3');
//     for(let i = 0; i < navItem.length; i++) {
//         if(document.location.href.indexOf(navItem[i].href)>=0) {
//              navItem[i].className='active';
//         }
//     }
    
// }
// window.onload = setActive;




