import React from 'react';


function HomePage(props) {
  document.title = "Task description";
  return (
      <div className='container'>
        <h2 className="text-center mt-3">Task description</h2>
        <ol>
          <li>Створити проект з роутером зі сторінками ‘registration’, ‘login’, ‘users’, ‘users/active’ та ‘users/:id’;</li>
          <li>Сторінка ‘registration’ повинна мати два інпути для логіна (емейла) і пароля.
           Введені данні повинні зберігатись в LocalStorage. У поля логін повинна бути
           перевірка на валідність емейлу, у поля пароль на довжину пароля (6 символів).</li>
          <li>Сторінка логін повинна мати два інпути для логіна (емейла) і пароля. У поля
            логін повинна бути перевірка на валідність емейлу, у поля пароль на довжину
            пароля (6 символів). Після вводу данних потрібно перевірити чи юзер
            зареєстрований, якщо так то додати мітку в LocalStorage про вдалу
            авторизацію. Сторінки ‘registration’, ‘login’ повинні відкриватись тільки якщо
            юзер не залогінений.</li>
          <li>В хедері проекту повинна бути кнопка виходу та інформація про кількість
            знайдених елементів після пошуку, якщо поле пошуку пусте то і поля цього не
            повинно бути.</li>
          <li>На сторінці ‘users’ вивести всіх юзерів у таблиці. Для цієї сторінки створити мок-
            сервіс який буде повертати масив юзерів.</li>
          <li>При кліку по назві колонки, таблиця повинна сортуватись по цьому полю, якщо
            поле number то від більшого до меншого або навпаки, якщо string, то по
            алфавіту в обох напрямках, якщо boolean то по значенню.</li>
          <li>В рядку isActive повинен бути чек-бокс який буде міняти значення на протилежне.</li>
          <li>Вище таблиці повинен бути інпут для пошуку по усіх полях юзера. При пошуку
            таблиця динамічно повинна відображати знайдені данні.</li>
          <li>При кліку по рядку юзера повинна відкриватись сторінка деталей цього юзера.</li>
          <li>На сторінці ‘users/active’ повинні відображатись тільки юзери у яких поле active
            === true. Пошук та сортування повинні бути тільки по name та surname.</li>
          <li>Потрібно дотримуватись суворої типізації.</li>
        </ol>
        <h5>Додаткове завдання (не обов&#39;язкове) :</h5>
        <h6>Створити додаткову сторінку ‘administration’ яка буде конфігурувати таблиці.</h6>
        <ol>
          <li>Відключати та включати колонки.</li>
          <li>Міняти кольори для тексту у колонках.</li>
        </ol>
        <p>Модель юзера: <br/>
          <code>
            {'{'}<br/>
              &nbsp;&nbsp;name: string,<br/>
              &nbsp;&nbsp;surname: string,<br/>
              &nbsp;&nbsp;age: string,<br/>
              &nbsp;&nbsp;isActive: boolean<br/>
            {'}'}
          </code>
        </p>
      </div>
  )
}

export default HomePage;
