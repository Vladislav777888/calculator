# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://parceljs.org/).

## Как запустить проект

1. Склонируй репозиторий себе локально на компьютер и открой проект с помощью
   редактора кода
2. Установи зависимости проекта в терминале командой `npm install` .
3. Запусти режим разработки, выполнив команду `npm start`.
4. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

5. Чтобы открыть живую страницу в интернете перейди по ссылке:
   https://vladislav777888.github.io/calculator/

## Описание задачи:

- Графік вертикальний для вузьких екранів та горизонтальний для широких.
- Дві шкали Storage і Transfer у GB, з кроком в 1 GB та діапазоном від 0 до 1000
  GB.
- Стовпчик з найнижчою ціною кольору провайдера (червоний, оранжевий,
  фіолетовий, блакитний). Інші стовпчики сірі.
- Ціни для калькулятору:

  а. backblaze.com: мінімальний платіж 7$. ціна Storage: $0.005. ціна Transfer:
  $0.01.

  б. bunny.net: має бути можливість переключатись між опціями HDD та SSD.
  максимальний платіж 10$. ціна Storage: HDD - $0.01. SSD - $0.02. ціна
  Transfer: будь-яка опція - $0.01.

  в. scaleway.com: має бути можливість переключатись між опціями Multi та
  Single. ціна Storage: Multi - 75 GB безкоштовно, потім $0.06. Single - 75 GB
  безкоштовно, потім $0.03. ціна Transfer: будь-яка опція - 75 GB безкоштовно,
  потім $0.02.

  г. vultr.com: мінімальний платіж 5$. ціна Storage: $0.01. ціна Transfer:
  $0.01.

- Приклади для перевірки правильності розрахунку: а) Storage 50 GB, Transfer 50
  GB: 1. backblaze.com = 7$.
      2. bunny.net HDD = 1$, SSD =
  1.5$.
      3. scaleway.com Multi = 0$, Single = 0$.
      4. vultr.com = 5$.

  б) Storage 100 GB, Transfer 200 GB: 1. backblaze.com =
  7$.
      2. bunny.net HDD = 3$, SSD = 4$.
      3. scaleway.com Multi = 4$,
  scaleway.com Single = 3.25$.
      4. vultr.com = 5$.

  в) Storage 300 GB, Transfer 300 GB: 1. backblaze.com =
  7$.
      2. bunny.net HDD = 6$, SSD = 9$.
      3. scaleway.com Multi = 18$,
  Single = 11.25$.
      4. vultr.com = 6$.

  г) Storage 1000 GB, Transfer 1000 GB: 1. backblaze.com =
  15$.
      2. bunny.net HDD = 10$, bunny.net SSD =
  10$.
      3. scaleway.com Multi = 74$, Single =
  46.25$.
      4. vultr.com = 20$.
