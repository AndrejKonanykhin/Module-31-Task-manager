import { User } from "../models/User";
import { closeError } from "../utils";

export function createUser(login, password) {
  login = login.trim();
  password = password.trim();

  const errorDiv = document.createElement("div");
  const body = document.querySelector("body");

  try {
    if (!login || !password) {

      errorDiv.classList.add("error-div");
      errorDiv.innerHTML = `<span>Please, enter login and password!</span>`;
      body.after(errorDiv);
      closeError(errorDiv);

      throw new Error("Пожалуйста, введите логин и пароль");
    }

    if (password.includes(" ")) {
      errorDiv.classList.add("error-div");
      errorDiv.innerHTML = `<span>Password shouldn't content spaces!</span>`;
      body.after(errorDiv);
      closeError(errorDiv);
      throw new Error("Пароль не может содержать пробелы");
    }

    const user = new User(login, password);
    User.save(user, user.storageKey);
  } catch (error) {
    console.error(error.message);
    return false;
  }

  return true;
}
