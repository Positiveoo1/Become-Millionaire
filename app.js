
const btn = document.getElementById('btn');
const counted = document.getElementById('counted');
const title = document.getElementsByTagName('h1')[0];
const par = document.getElementsByTagName('p')[0];
const moneyContainer = document.getElementById('money');

let count = 0;

// Initially hide the money container
moneyContainer.style.display = 'none';

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
 
        
      
        for(let i = 0; i < 2849; i++) {
            const moneyIcon = document.createElement('i');
            moneyIcon.classList.add('fa-solid', 'fa-money-bill-wave');
            moneyContainer.appendChild(moneyIcon);
            moneyIcon.style.color = 'green';
        }
        const congrats = document.createElement('h1');
        congrats.innerText = 'Congratulations!';
        document.body.appendChild(congrats);
        congrats.style.textAlign = 'center';
        congrats.style.color = 'white'; // Set text color to white
        congrats.style.position = 'fixed'; // Position fixed
        congrats.style.top = '50%'; // Center vertically
        congrats.style.left = '50%'; // Center horizontally
        congrats.style.transform = 'translate(-50%, -50%)'; // Center exactly
        congrats.style.zIndex = '999'; // Set a high z-index
        congrats.style.fontSize = '100px'; // Set font size to 100px

    }
})
