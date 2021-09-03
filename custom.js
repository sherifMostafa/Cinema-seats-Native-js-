const res = document.getElementById('result'),
    val = document.getElementById('val');
let co = 0;

function sel() {
    const selecttag = document.querySelector('.choose-seat');

    const span = selecttag.querySelectorAll('.nk');

    res.innerHTML = `You have selected ${co} seats for a price of $${co * val.value}`;

    for (let i = 0; i < span.length; i++) {
        span[i].onclick = function() {
            let ee = this.getAttribute('class');

            if (ee === 'nk') {
                co++;
                this.className = 'se';
                res.innerHTML = `You have selected <span>${co}</span> seats for a price of $<span>${co*val.value}</span>`;
            } else {
                co--;
                this.className = 'nk';
                res.innerHTML = `You have selected <span>${co}</span> seats for a price of $<span>${co*val.value}</span>`;
            }

        }
    }


}

val.onchange = function() {
    // You have selected <span>0</span> seats for a price of $<span>0</span>
    res.innerHTML = `You have selected <span>${co}</span> seats for a price of $<span>${co*val.value}</span>`;
}


sel();