//select
let item = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let calButtonTag = document.querySelector(".btn-primary");
let inputContainerTag = document.querySelector(".inputContainer");
let tableDataTag = document.querySelector(".tableData");
let tabelFootTag = document.querySelector(".tableFoot")

//function
products.forEach((product) => {
    let newOption = new Option(product.name,product.id);
    item.append(newOption);
})

const del = (event) => {
    event.target.parentElement.parentElement.remove();
    let costs = document.querySelectorAll(".cost");
    let costTotal = [...costs].reduce((pv,cv) => pv + Number(cv.innerText),0);
   
    let totalTag = document.querySelector(".total");
    totalTag.innerHTML = costTotal;
    
}


// process


inputContainerTag.addEventListener("submit",(event) => {
    event.preventDefault();
    let currentProduct = products.find(product=>product.id === Number(item.value));
    let newtr = document.createElement("tr");
    newtr.classList.add("now");
        
    newtr.innerHTML = `
    <td>${currentProduct.name}</td>
    <td class="text-end">${quantity.valueAsNumber}</td> 
    <td class="text-end">${currentProduct.price}</td>
    <td class="text-end cost">${currentProduct.price * quantity.valueAsNumber}</td>
    <td class="text-end"><button class="btn btn-danger btn-sm" onclick=del(event)>Del</button></td>
    `;  

    tableDataTag.append(newtr)
    inputContainerTag.reset();

    let costs = document.querySelectorAll(".cost");
    let costTotal = [...costs].reduce((pv,cv) => pv + Number(cv.innerText),0);

      let totalTag = `
    <td class="text-center fw-bold" colspan="4">Total</td>
    <td class="text-end fw-bold total">${costTotal}</td>
    `;
    tabelFootTag.innerHTML = totalTag;
});

