

function consoleBishBosh() {
for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Bish') + (i % 4 ? '' : 'Bosh') || i)
}


function bishBosh() {
    let looplength = document.getElementById('loopLength').value;
    let bishnumber = document.getElementById('bishNumber').value;
    let boshnumber = document.getElementById('boshNumber').value;

    

    let display = document.getElementById('display');
    let displayHTML = '';
    for (let i = 0; i < looplength;) displayHTML += "<p>" + ((++i % bishnumber ? '' : 'Bish') + (i % boshnumber ? '' : 'Bosh') || i) + "</p>";
    
    display.innerHTML = displayHTML;
}

const element1 = document.getElementById("consolebutton");
element1.addEventListener("click", consoleBishBosh);

const element = document.getElementById("myBtn");
element.addEventListener("click", bishBosh);



