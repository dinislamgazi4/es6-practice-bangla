const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 13, 12];
const ages3 = [25, 33, 32];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 =[...ages, ...ages2, 5, ...ages3]
//console.log(allAges2);

const dinislam = 450;
const hossain = 390;
const mama = 680;
const takapoisa = [680, 390,460];
//const maximum = Math.max(dinislam, hossain, mama);
const maximum = Math.max(...takapoisa);
console.log(maximum);