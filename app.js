const bars = document.querySelectorAll('.bar');
const amountSpent = document.querySelectorAll('.amount-spent');

fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let daysArray = data;
        const heightArray = [];
       
        
        for (let i = 0; i < daysArray.length; i++) {
           bars[i].style.height = (daysArray[i].amount * 2) + "px";
           amountSpent[i].textContent = daysArray[i].amount;
        }
        
    })


bars.forEach(bar => {
    bar.addEventListener("mouseover", () => {
        bar.parentElement.classList.add('visible')
    })
    bar.addEventListener("mouseout", () => {
        bar.parentElement.classList.remove('visible')
    })
})