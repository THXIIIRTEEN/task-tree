# Менеджер задач

Это простое приложение для управления задачами, разработанное с использованием React и MobX. Приложение позволяет создавать задачи и добавлять к ним подзадачи. Управление состоянием осуществляется с помощью MobX, что делает приложение реактивным и эффективным.

## Особенности

- Добавление новых задач
- Добавление подзадач к существующим задачам
- Переключение статуса выполнения задачи
- Вложенная структура задач

## Используемые технологии

- React
- MobX
- TypeScript
- SСSS
- ESLint
- Vite

## Начало работы

Эти инструкции помогут вам получить копию проекта и запустить его на вашем локальном компьютере для разработки и тестирования.

### Установка

1. **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```

2. **Установите зависимости:**
    ```bash
    npm install
    ```

3. **Запустите приложение:**
    ```bash
    npm start
    ```

Приложение будет запущено на `http://localhost:5173`.

### Структура проекта

- **src/stores/TaskStore.ts** - Модели и хранилище для задач.
- **src/components/TaskBlock.tsx** - Компонент для отображения отдельной задачи и её подзадач.
- **src/components/TaskList.tsx** - Компонент для отображения списка задач.
- **src/App.tsx** - Главный компонент приложения.

### Использование

1. Введите название задачи в поле ввода и нажмите "Добавить".
2. Для добавления подзадачи введите название подзадачи в поле ввода под соответствующей задачей и нажмите "Добавить".
3. Для изменения статуса выполнения задачи, установите или снимите флажок рядом с её названием.
