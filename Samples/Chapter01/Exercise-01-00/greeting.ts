let greeting = 'Welcome to Unraveling Angular 2 Samples!'

greet(greeting);

function greet(greeting: string) {
  var h1 = document.getElementById('greeting');
  h1.textContent = greeting;
}