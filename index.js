

function calculateBMI() {
    let weightRef = document.querySelector("#weight");
    const weight = Number(weightRef.value);
    let heightRef = document.querySelector("#height");
    const height = Number(heightRef.value);

    const divref = document.querySelector("#bmi");
    const bmi = (weight / height*2);
    divRef.innerHTML = "Your bmi " +bmi;

    
}


const names = ["Ali", "Kashan", "Mirpur" , "Cahir"]
const namesDivRef = document.querySelector
("#names")
names.map((nm) => {
    namesDivRef.innerHTML =
    namesDivRef.innerHTML +
   ` <p>${nm}</p>`
    ;
}
);

const products = [
   { id: 1,
    name: "Samsung S26 ultra",
    amount: 435690,
    desc: "good" ,

},
{
id: 1,
    name: "iphone",
    amount: 435690,
    desc: "v.good" 
},
];

const producctDivRef = document.querySelector
("#product");

products.map((pr) => {
    producctDivRef.innerHTML =
    producctDivRef.innerHTML +

    `
    <article>

    <header>
<h2>$(pr.name)</h2>
<p> product ID: <strong>${pr.id}</strong></p>
</header>

<p> <strong> ${pr.amount}</strong></p>
<p>${pr.desc}</p>
</article>
    
    `
}

);