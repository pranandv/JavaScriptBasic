const colorbtn=document.querySelector('.colorbtn');
const colorBcg=document.querySelector('body');

const colors=['yellow','red','green','blue' ];

colorbtn.addEventListener('click',changeColor);

function changeColor(){
    let random=Math.floor(Math.random()*colors.length)

    colorBcg.style.backgroundColor = colors[random];
}
