const quiz = [
  {q:"Что такое инфляция?", a:["Рост цен","Падение зарплат","Рост производства"], c:0},
  {q:"Что происходит при инфляции?", a:["Деньги дешевеют","Деньги дорожают","Нет изменений"], c:0},
  {q:"Какая инфляция нормальная?", a:["Умеренная","Гиперинфляция","Нулевая"], c:0},
  {q:"Самая опасная инфляция?", a:["Гиперинфляция","Умеренная","Скрытая"], c:0},
  {q:"Инфляция измеряется чем?", a:["Индексом цен","Валютой","Зарплатой"], c:0},
  {q:"Причина инфляции?", a:["Эмиссия денег","Рост товаров","Падение населения"], c:0},
  {q:"Что падает при инфляции?", a:["Покупательная способность","Зарплата всегда","Количество товаров"], c:0},
  {q:"Кто регулирует инфляцию?", a:["Центробанк","Школа","Бизнес"], c:0},
  {q:"Галопирующая инфляция — это?", a:["Быстрый рост цен","Медленный рост","Нет роста"], c:0},
  {q:"Скрытая инфляция — это?", a:["Дефицит товаров","Рост зарплат","Снижение налогов"], c:0},
  {q:"Инфляция вредит кому больше всего?", a:["Людям с фикс. доходом","Бизнесу","Банкам"], c:0},
  {q:"Что может вызвать инфляцию?", a:["Кризис","Рост производства","Экспорт"], c:0},
  {q:"Инфляция всегда плохая?", a:["Нет","Да","Всегда да"], c:0},
  {q:"Что происходит с ценами?", a:["Растут","Падают","Не меняются"], c:0},
  {q:"Где инфляция самая опасная?", a:["Гиперинфляция","Умеренная","Низкая"], c:0}
];


function changeTab(event,tabId){

let sections=document.querySelectorAll(".content-section");
sections.forEach(s=>s.classList.remove("active"));

let buttons=document.querySelectorAll(".menu-btn");
buttons.forEach(b=>b.classList.remove("active"));

document.getElementById(tabId).classList.add("active");
event.currentTarget.classList.add("active");

}

function calculate(){

let money=document.getElementById("money-input").value;
let inflation=document.getElementById("inflation-input").value;

let real=money/(1+inflation/100);
let loss=money-real;

document.getElementById("calc-result").innerHTML=
"Реальная стоимость: <b>"+real.toFixed(2)+"</b><br>Потеря: <b>"+loss.toFixed(2)+"</b>";
}

let current = 0;
let score = 0;

function loadQuestion(){
  let q = quiz[current];

  let html = `<h3>${q.q}</h3>`;

  q.a.forEach((ans,i)=>{
    html += `<button onclick="answer(${i})">${ans}</button>`;
  });

  document.getElementById("quiz-box").innerHTML = html;
}

function answer(i){
  if(i === quiz[current].c){
    score++;
  }

  current++;

  if(current < quiz.length){
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = "";
    document.getElementById("quiz-result").innerHTML =
      `Тест завершён!<br>Результат: <b>${score}/15</b>`;
  }
}

function nextQuestion(){
  if(current === 0){
    loadQuestion();
  }
}