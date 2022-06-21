function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'));

    if(basket.length === 0) {
        let alert_div = '';

        alert_div = `
            <div class="alert text-center alert-danger" role="alert">
            Basket is empty!
                </div>
        `
        document.getElementById('list').innerHTML = alert_div
    }
    else{
        let div = '';

        basket.forEach(item => {
            div += `
            <div class="box d-flex justify-content-between align-items-center">
            <div class="col-lg-2">
                <img src=${item.Image} alt="">
            </div>
            <div class="col-lg-3">
                <h5>Mehsulun adi: ${item.Name}</h5>
            </div>
            <div class="col-lg-2">
                <h6>Qiymet: ${item.Price}</h6>
            </div>
            <div class="col-lg-2">
                <span>Count: ${item.Count}</span>
            </div>
        </div>
            `
        })
    
        document.getElementById('list').innerHTML = div;
    }

    
}


GetProducts();


function Clear() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    basket.length = 0;
    localStorage.setItem('basket',JSON.stringify(basket))
    GetProducts()
    CountProduct();
}


function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML = basket.length
}

CountProduct();


function Refresh() {
    document.body.style.opacity = '0'
 
    setTimeout(() => {
        document.body.style.opacity = '1'
        window.location.reload();
    }, 500);
}



