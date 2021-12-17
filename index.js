

let Vitaminny = {
    price: 4290,
    form: 'box',
    color: 'red'
} 
let Aperol = {
    price: 1000,
    form: 'bascet',
    color: 'white'
} 
let Bavaria = {
    price: 2500,
    form: 'box',
    color: 'red'
} 

let Bascet = Array(Vitaminny.price, Aperol.price, Bavaria.price);
alert(Bascet);
let CountBascetPrice = Bascet.reduce ((sum, current) => sum + current);
alert(CountBascetPrice);

let count = prompt("введите число от 0 до 999");
if (count.length > 3 || count.length < 1){
    alert('Вы ввели недопустимое число');
}
else if(count < 0){
    alert('Вы ввели отрицательное число');
}
else{
   alert(count[0] + '-сoтни' +' ' + count[1] + '-десятки' +' ' + count[2] + '-единицы');
}