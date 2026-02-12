import { Elysia, t } from "elysia";
import { db } from "../controllers/db";

export const ScheduleController = new Elysia()

  .get("/api/schedule/all", () => {
    return { data: db.data.schedule };
  }) // все данные выдает - добавил для понимания и на будующее

  .get(
    "/api/schedule",
    ({ query }) => {
      const { startDate, endDate, employeeIds } = query; //кладем в куери
      const allSchedule = db.data.schedule; // для работы с полным массивом
      const requestedEmployeeIds = employeeIds.split(","); // переобразовываем в массив, без запятых

      const filteredSchedules = allSchedule.filter((schedule) => {
        if (
          !schedule.employeeIds?.length ||
          !schedule.startDate ||
          !schedule.endDate
        ) {
          return false; // Проверяем что есть данные для фильтрации
        }
        return (
          schedule.employeeIds.some((id) =>
            requestedEmployeeIds.includes(id),
          ) &&
          schedule.startDate >= startDate &&
          schedule.endDate <= endDate // Регулировка диапозон дат
        );
      });
      return {
        data: filteredSchedules, // Возвращаем в формате { data: EmployeeSchedule[] } со статусом 200
      };
    },
    {
      // сам куери - проверка правильного формата
      query: t.Object({
        employeeIds: t.String(),
        startDate: t.String({ format: "date" }),
        endDate: t.String({ format: "date" }),
      }),
    },
  );
