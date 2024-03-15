
const btn = document.getElementById('btn');
const counted = document.getElementById('counted');
const title = document.getElementsByTagName('h1')[0];
const par = document.getElementsByTagName('p')[0];
const moneyContainer = document.getElementById('money');

let count = 0;

// TODO: Initially hide the money container
moneyContainer.style.display = 'none';

// TODO addeventListener.
btn.addEventListener('click', function(e){
    count++;
    counted.innerText = `Clicked ${count} times`;


    if(count === 100) {
        btn.disabled = true;
        title.style.display = 'none';
        par.style.display = 'none';
        btn.style.display = 'none';
        counted.style.display = 'none';
        moneyContainer.style.display = 'block';
 
        
    //   TODO: this iterates within 2849 times the icon
        for(let i = 0; i < 2849; i++) {
            const moneyIcon = document.createElement('i');
            moneyIcon.classList.add('fa-solid', 'fa-money-bill-wave');
            moneyContainer.appendChild(moneyIcon);
            moneyIcon.style.color = 'green';
        }
        // TODO: this styles the icon and the name of "Congratulations" in js
        const congrats = document.createElement('h1');
        congrats.innerText = 'Congratulations!';
        document.body.appendChild(congrats);
        congrats.style.textAlign = 'center';
        congrats.style.color = 'white'; 
        congrats.style.position = 'fixed'; 
        congrats.style.top = '50%'; 
        congrats.style.left = '50%'; 
        congrats.style.transform = 'translate(-50%, -50%)';
        congrats.style.zIndex = '999'; 
        congrats.style.fontSize = '100px'; 

    }
})
