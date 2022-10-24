let ola = document.getElementById('press');
ola.addEventListener('click',function(){
    let x = Math.floor(Math.random()*(256));
    let y = Math.floor(Math.random()*(256));
    let z = Math.floor(Math.random()*(256));
    document.body.style.backgroundColor = `rgb(${x},${y},${z})`;
    document.getElementById('press').innerHTML = `rgb(${x},${y},${z})`;
})