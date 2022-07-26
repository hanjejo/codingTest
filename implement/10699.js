let today = new Date().toISOString();
console.log(today.split('T')[0]);
//console.log(`${today.getFullYear()}-${today.getMonth() < 10 ? '0' + today.getMonth() : today.getMonth()}-${today.getDay() < 10 ? '0' + today.getDay() : today.getDay()}`);