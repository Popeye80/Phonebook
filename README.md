# React phonebook

Технологии: React, React Hooks, React router, Redux Toolkit, Material UI,
styled-components, css modules, AJAX, Axios, WebPack, NPM, GIT, JavaScript,
HTML.

## Запуск проекта

1. Убедитесь что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируйте этот репозиторий.
3. Установите базовые зависимости проекта командой `npm install`.
4. Запустите режим разработки, выполнив команду `npm start`.
5. Перейдите в браузере по адресу [http://localhost:3000](http://localhost:3000).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## О проекте

1. Приложение «Книга контактов» содержит возможность регистрации пользователей и
   работу с приватными коллекциями контактов.

Основные маршруты:

/home - публичный маршрут, который по разному отображается в зависимости от того,
зарегистрирован ли пользователь


/register - публичный маршрут регистрации нового пользователя с формой

/login - публичный маршрут логина существующего пользователя с формой

/contacts - приватный маршрут для работы с коллекцией контактов  пользователя

2. Упавление состоянием происходит с использованием Redux Toolkit. Для
   взаимодействия с бекендом и асинхронными запросами используется
   createAsyncThunk и RTK Query.

3. Реализована возможность регистрации, авторизации, добавления, удаления,
   редактирования контактов, а так же не чувствительный к регистру поиск
   контактов.

4. Оформление выполнено с использованием нескольких подходов, а именно styled
   components, css modules, Material UI styles с целью продемонстрировать навыки
   использования различных технологий.

__________________________________________________________________________________________

# React phonebook
Technologies: React, React Hooks, React router, Redux Toolkit, Material UI,
styled-components, css modules, AJAX, Axios, WebPack, NPM, GIT, JavaScript,
HTML.

## Project launch

1. Make sure that the LTS version of Node.js is installed on your computer.
   [Download and install](https://nodejs.org/en/).
2. Clone this repository.
3. Install the basic project dependencies with the `npm install` command.
4. Start development mode by running the command `npm start`.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser.
   This page will be reloaded automatically after saving changes in
   project files.

## About the project

1. The "Phonebook" application allows you to register users and
   work with private collections of contacts.

The main routes:

The main routes:

/home - public route, which is displayed differently depending on
whether the user is registered or not.

/register is the public route to register a new user with the form

/login - the public route for the login of an existing user with a form

/contacts - private route for working with a collection of user's contacts

2. The state is reduced using the Redux Toolkit. For
   Interaction with the backend and asynchronous requests uses
   createAsyncThunk and RTK Query.

3. Implemented the possibility of registration, authorization, adding, deleting,
   editing contacts and case-insensitive search for contacts.

4. The design is made with the use of several technologies: styled
   Components, css modules, Material UI modules It is made to demonstrate
   the skills of using different technologies.
