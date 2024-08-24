let header = document.querySelector('header');
let pic = document.querySelector('.pic');
let mainButtons = document.querySelector('.btns');
let h1 = document.querySelector('.text h1');
let p = document.querySelector('.text p');
let getCvBtn = document.querySelector('.getMyCv');
let sections = document.querySelectorAll('.sections li');
let scrollBtn = document.querySelector('#scrollBtn');

setTimeout(()=>{
    pic.style.opacity = 1;
},1000);
setTimeout(()=>{
    mainButtons.style.transform = 'translate(-35px,0px)';
    mainButtons.style.opacity = 1;
    h1.style.transform = 'translateY(0)';
    h1.style.opacity = 1;
    p.style.transform = 'translateY(0)';
    p.style.opacity = 1;
    getCvBtn.style.transform = 'translateX(0)';
    getCvBtn.style.opacity = 1;
},2000);
setTimeout(()=>{
    header.style.opacity = 1;
},3000);
document.addEventListener('scroll',()=>{    
    if(window.scrollY>=750){
        header.style.position = 'fixed';
        header.style.width = '100%';
        header.style.margin = '0';
        header.style.padding = '10px 0';
        header.style.justifyContent = 'space-evenly';
    } else {
        header.style.position = '';
        header.style.width = '';
        header.style.margin = '';
        header.style.padding = '';
        header.style.justifyContent = '';
    }
    if(window.scrollY<750){
        sections.forEach((section)=>{
            section.style.color = '#ffffff96';
        });
        sections[0].style.color = 'white';
    }
    else if(window.scrollY>=750 && window.scrollY<1700){
        sections.forEach((section)=>{
            section.style.color = '#ffffff96';
        });
        sections[1].style.color = 'white';
    } else if(window.scrollY>=1700 && window.scrollY<5800){
        sections.forEach((section)=>{
            section.style.color = '#ffffff96';
        });
        sections[2].style.color = 'white';
    } else if(window.scrollY>=5800){
        sections.forEach((section)=>{
            section.style.color = '#ffffff96';
        });
        sections[3].style.color = 'white';
    }
});

scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 850,
        behavior: 'smooth'
    });
});

let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let clients = document.querySelectorAll('.client');
dot1.addEventListener('click',()=>{
        dot1.style.color = 'black';
        dot2.style.color = '#00000081';
        clients.forEach((client)=>{
            client.style.transform = `translateX(0)`;
        })
});
dot2.addEventListener('click',()=>{
    dot1.style.color = '#00000081';
    dot2.style.color = 'black';
    clients.forEach((client)=>{
        client.style.transform = `translateX(-100%)`;
    });
});

let scrollToTopBtn = document.querySelector('.scrollToTop');
scrollToTopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})