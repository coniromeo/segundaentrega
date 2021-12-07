const prefe = [];
for (let index = 0; index<5;index++){
    prefe.push(prompt("Ingresa tus frutas y verduras preferidas"))
}
localStorage.setItem('prefe',prefe);