import { User } from "../models/User";
import { appState } from "../app";
import { closeError } from "../utils";

export const authUser = function (login, password) {
  const user = new User(login, password);

  if (!user.hasAccess) {
    appState.auth = false;

    const errorDiv = document.createElement("div");
    const body = document.querySelector("body");

    errorDiv.classList.add("error-div");
    errorDiv.innerHTML = `<span>No access! You entered wrong login or password!</span>`;
    body.after(errorDiv);
    closeError(errorDiv);

    return appState.auth;
  }

  appState.auth = true;
  return appState.auth;
};
