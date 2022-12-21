quote = document.getElementById('living-life')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting){
            entry.target.classList.add('show');
            console.log('show')
            }
            else{
                entry.target.classList.remove('show');
            }
        });
    });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
async function getQuote(){
    let response = await fetch(`https://n5ekou.deta.dev/api/quotes`)
    data = await response.json()
    quote.innerText = `${data.Quote} -${data.Author}`
}
getQuote()