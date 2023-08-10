# Flowersmagazine
# FlowerShopServer
Более подробная информация представлена в файле FlowerPZ.docx или [вот тут](https://drive.google.com/file/d/1qSG8Xxs32uh251ATYr9qg69tuSkSNNtJ/view).
Клиентская часть представлена [здесь](https://github.com/fancierik/FlowerShopServer).

Задача курсовой работы заключается в разработке клиент-серверного веб-приложения онлайн покупки цветов с использованием фреймворка Angular, языка программирования Java и СУБД Postgresql для серверной части соответственно. В приложении должны быть реализованы основные и обязательные функции веб-магазина. 

В первую очередь пользователь будет взаимодействовать с главной страницей приложения. На ней необходимо создать каталог товаров, где каждый сможет ознакомиться с информацией о цветах, а также, при нажатии на кнопку, добавить их в свою корзину. Выбранные позиции всегда отображаются в корзине с некоторой краткой информацией для удобства клиента. Данные функции должны быть доступны и для неавторизованного пользователя. Клиент может зарегистрироваться и авторизоваться. С серверной части приложение должно сохранить информацию о пользователе.

Оформление заказа происходит после подтверждения пользователем состава его корзины. На форме заказа клиенту необходимо ввести данные о себе и данные для самого заказа. Он может выбрать дату заказа и способ доставки. Сразу же после оформления клиент получит результат в всплывающем окне, а также письмо с информацией о заказе на свою почту, указанную при оформлении заказа. Со стороны серверной части заказ сохраниться в базе данных и будет указан на странице менеджера.

На странице менеджера будет реализован список заказов с полной информацией. Менеджер сможет изменить статус заказа или удалить его. У менеджера будет возможность просмотреть информацию о зарегистрированных пользователях и сделать заявку на новый товар.Также у менеджера будет реализован доступ к созданию заявки на добавление нового товара действующему программисту предприятия. После успешного создания заявки будет приходить письмо с информацией о товаре.

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
