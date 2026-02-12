# Backend для записи пользователей на выбранные даты

![Bun](https://img.shields.io/badge/Bun-000?logo=bun)
![Elysia](https://img.shields.io/badge/Elysia-8A2BE2)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![LowDB](https://img.shields.io/badge/LowDB-FF6B6B?)

**Установка:**

```bash
bun install
```

**Чтобы запустить сервер:**

```bash
bun run start:api
```

**Для проверки API:**

```bash
1 - http://localhost:3000
2 - http://localhost:3000/api/dictionaries/activity-types 
3 - http://localhost:3000/api/employees
4 - http://localhost:3000/api/schedule/all
```

## О проекте

- Сервер для системы бронирования дат.
Фронтенд присылает айди сотрудников и период — бэкенд получает/отдает отфильтрованное расписание.

**Что внутри:**

1. Сервер на Elysia (Bun)
2. Данные в LowDB — JSON-файл с моками
3. Пустой массив schedule — сюда фронт будет писать записи
4. CORS настроен (порт 5173)

**Эндпоинты:**

1. /employees — мок сотрудников
2. /activity-types — мок активностей
3. /schedule/all — всё расписание (для отладки)
4. /schedule — с фильтрацией по датам и сотрудникам

**Фильтрация для:**
Фронт запрашивает только нужный диапазон — сервер отдает уже отфильтрованные данные.
