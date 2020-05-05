This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React JS Test Task

Тестовое задание в компанию.

Стек технологий:
  1. React JS
  2. Redux
  3. React Router
  4. Redux Thunk
  5. Redux Form
  6. ESLint

## Запуск проекта

### `npm install`
### `npm start`

### [Deploy](https://indiel.github.io/test-react-artjoker/)

## Особенности

Для проверки зарегестрированных пользователей используются тестовые данные [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users). При первом входе вводится любой пароль, после пароль проверяется. Работает регистрация.

## Задание

Создать SPA

### Phase 1. Base app

**Pages:**
  - Home page (use your imagination)
  - Login/Registration
  - News list (only title and small description)

Header (or Side bar) and Footer should have links to all pages and should be presented always.
If user are logged in, logout button should be presented instead link to Login/Registration.
Unregistered/Unlogged users are allowed to view all pages.
After successful Login/Registration user should be redirected to Home page.

**Login form:**
  - email (validation by email regexp)
  - password (> 6 chars)

**Registration form:**
  - Same fields as in Login form
  - checkbox “I’m agree with terms and conditions” (required)

### Phase 2. Profile page, Detailed view for the news

**Task 1:**
Add link to Profile page. This route is protected. If user are not logged in and goes to Profile page, he should be redirected to Login/Registration page.
There is a form in Profile page, where user can add or edit personal info.
After successful Login/Registration user should be redirected to Profile page.

**Profile form:**
  - First name
  - Last name
  - Phone number (allows only 12 digits and ‘+’)
  - Gender radio buttons (male/female)
  - Age (only digits from 10 to 99)
  - Hobbies (It should be Field Array and buttons ‘Add one more’ and ‘Remove’)

User should be informed about status of submitting of the form by pop up (success or with error messages).

**Task 2:**
Add detailed view to News.
If user clicks to one of the news in list, detailed view should be presented in modal window.
If user clicks to one of the news in list with ‘ctrl’ button being pressed, detailed view should be opened in new tab as a page (not modal).

**Detailed view should have:**
  - Title
  - Photo
  - Full description
  - Formatted Date
