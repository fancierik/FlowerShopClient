# Flowersmagazine
# FlowerShopServer
Более подробная информация представлена в файле FlowerPZ.docx или [вот тут](https://drive.google.com/file/d/1qSG8Xxs32uh251ATYr9qg69tuSkSNNtJ/view).
Серверная часть представлена [здесь](https://github.com/fancierik/FlowerShopServer).

В ходе выполнения курсовой работы поставленные задачи были достигнуты. После этапа прототипирования, анализа, было разработано клиент-серверное веб-приложения онлайн покупки цветов с использованием фреймворка Angular для разработки клиентского веб-интерфейса и языка программирования Java и СУБД Postgresql для серверной части соответсвенно.

В первую очередь был создан каталог товаров, где пользователь может ознакомиться с информацией о цветах, а также, при нажатии на кнопку, добавить их в свою корзину. Выбранные позиции всегда отображаются в корзине с некоторой краткой. Данные функции доступны и для неавторизованного пользователя. Клиент может зарегистрироваться и авторизоваться. С серверной части приложение сохраняет информацию о пользователе.

Оформление заказа происходит после подтверждения пользователем состава его корзины. На форме заказа клиенту необходимо ввести данные о себе и данные для самого заказа. Он может выбрать дату заказа и способ доставки. Сразу же после оформления клиент получает результат в всплывающем окне, а также письмо с информацией о заказе на свою почту, указанную при оформлении заказа. Со стороны серверной части заказ сохраняется в базе данных и отображается на странице менеджера.


На странице менеджера реализован список заказов с полной информацией. Менеджер может изменить статус заказа или удалить его. У менеджера есть возможность просмотреть информацию о зарегистрированных пользователях. Реализован доступ к созданию заявки на добавление нового товара со стороны менеджера действующему программисту предприятия. После успешного создания заявки приходит письмо на рабочую почту магазина с информацией о товаре.

<img src="https://ie.wampi.ru/2023/08/11/MAGAZIN.jpg" />
<p align="center" > Скриншот полученной страницы</p>

<img src="https://im.wampi.ru/2023/08/11/MENEDZER.jpg" />
<p align="center" > Скриншот полученной страницы</p>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
