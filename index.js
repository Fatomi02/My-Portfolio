let click = document.getElementById('toggle-button')
let x = document.getElementById('x')

function show() {
        document.querySelector('.nav-item-2').style.display = 'block';
        document.querySelector('.nav-item-3').style.display = 'block';
        click.style.visibility = 'hidden';
        x.style.display = 'inline-block';
    }
click.addEventListener('click', show)

x.addEventListener('click', function()  {
    click.style.visibility = 'visible';
    x.style.display = 'none';
    document.querySelector('.nav-item-2').style.display = 'none';
    document.querySelector('.nav-item-3').style.display = '';
})





const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 200;
        if(count < target){
            counter.innerText = `${Math.ceil(count + increment)}`;
        
        setTimeout(updateCounter, 150);
        }
        else {counter.innerText = target};
    }
    updateCounter();
});
