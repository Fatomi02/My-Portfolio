let click = document.getElementById('toggle-button')

function show() {
    if(document.getElementsByClassName('nav-item-2')[0].style.display === 'block'){
        document.getElementsByClassName('nav-item-2')[0].style.display = 'none';
        document.getElementsByClassName('nav-item-3')[0].style.display = 'none';
        document.getElementById('toggle-button').style.border = 'none';
    }
    else{
        document.getElementsByClassName('nav-item-2')[0].style.display = 'block';
        document.getElementsByClassName('nav-item-3')[0].style.display = 'block';
        document.getElementById('toggle-button').style.border = '3px solid #f5f5f5';
        document.getElementById('toggle-button').style.borderRadius = '4px';
    }
  
}


click.addEventListener('click', show)





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