import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "./index";

describe("Login", () => {
  it("fill in login fields", () => {
    const { getByText, getByLabelText} = render(<Login />);
    
    const emailInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const submitButton = getByText("Entrar");

    userEvent.type(emailInput, "elsonaraujojr");
    userEvent.type(passwordInput, "qwe123qwe");
    userEvent.click(submitButton);

    expect(emailInput).not.toHaveValue("elsonaraujojr");
    expect(passwordInput).not.toHaveValue("qwe123qwe");
  });

  // it("deve enviar o formulário com nome de usuário, senha e lembre-se", () => {
  //   const onSubmit = jest.fn();
  //   const { getByLabelText, getByText } = render(<Login />);
    
  //   const emailInput = getByLabelText("Username");
  //   const passwordInput = getByLabelText("Password");
  //   const addButton = getByText('Entrar');

  //   userEvent.type(emailInput, "elsonaraujojr");
  //   userEvent.type(passwordInput, "qwe123qwe");
  //   userEvent.click(addButton);

  //   expect(onSubmit).toHaveBeenCalledWith("elsonaraujojr", "qwe123qwe");
  // });
})
