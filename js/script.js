
let cormL = 4300
let balans = 10000;
let pet = confirm("У вас есть питомец?");
if (pet === true) {
   let listpet = prompt("Какой ваш петомец? Варианты:собака;кошка;хомяк;мыш").trim().toLowerCase();
   switch (listpet) {
      case "собака":
         let corm = confirm("Цена корма 4300 сум. Ваш баланс:10000 Купите корм?");
         if (corm === true) {
            let cormB = balans - cormL;
            alert("Всё прошло успешно!")
            alert(`Вы потратили ${cormL}сум`)
            alert(`У вас осталось ${cormB} сум`)
         } else {
            alert("Пока!")
         }
         break;
      case "кошка":
         let cormOne = confirm("Цена корма 4300 сум. Ваш баланс:10000 Купите корм?");
         if (cormOne === true) {
            let cormB = balans - cormL;
            alert("Всё прошло успешно!")
            alert(`Вы потратили ${cormL}сум`)
            alert(`У вас осталось ${cormB} сум`)
         } else {
            alert("Пока!")
         }
         break;
      case "хомяк":
         let cormtwo = confirm("Цена корма 4300 сум. Ваш баланс:10000 Купите корм?");
         if (cormtwo === true) {
            let cormB = balans - cormL;
            alert("Всё прошло успешно!")
            alert(`Вы потратили ${cormL}сум`)
            alert(`У вас осталось ${cormB} сум`)
         } else {
            alert("Пока!")
         }
         break;
      case "мыш":
         let cormtre = confirm("Цена корма 4300 сум. Ваш баланс:10000 Купите корм?");
         if (cormtre === true) {
            let cormB = balans - cormL;
            alert("Всё прошло успешно!")
            alert(`Вы потратили ${cormL}сум`)
            alert(`У вас осталось ${cormB} сум`)
         } else {
            alert("Пока!")
         }
         break;
      default:
         alert("К сожилению у нас нету корма для вашего петомца!")
         break;
   }
} else {
   alert("Тогда вам здесь нечего делать!")
}