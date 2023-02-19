// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// https://www.youtube.com/watch?v=wFY5HVuQBgw

function letMeSeeYourName(callback) {
  const name = prompt("What is your name?");
  if (!name) {
    return console.log("Ви нічого не ввели.");
  }
  callback(name);
}
function greet(userName) {
  console.log(`Привіт ${userName}`);
}

letMeSeeYourName(greet);
