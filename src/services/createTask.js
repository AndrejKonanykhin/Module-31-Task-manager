import { Task } from "../models/Task";

export function createTask(title, state, user_id) {
  title = title.trim();
  const errorText = document.querySelector("#error-ready");

  try {
    if (!title) {
      errorText.textContent = "You input nothing";
      errorText.classList.toggle("app-hidden");
      throw new Error("Пожалуйста, введите заголовок задачи");
    }
  } catch (error) {
    console.error(error.message);
    return false;
  }

  const task = new Task(title, state, user_id);
  Task.save(task);

  return task;
}
