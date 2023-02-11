const formInputs = document.querySelectorAll("[required]");


formInputs.forEach((input) => {
  input.addEventListener("blur", () => verifyInput(input));
  input.addEventListener("invalid", (ev) => ev.preventDefault());
});

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const errorMessages = {
  name: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  password: {
    valueMissing: "O campo de senha não pode estar vazio.",
    tooShort: "Por favor, preencha uma senha maior.",
  },
};

// recebe o campo que foi "blur"
function verifyInput(input) {
  let message = "";
  input.setCustomValidity("");

  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessages[input.name][error];
    }
  });

  const showErrorMessage = input.parentNode.querySelector(
    `.error-message.${input.name}-error`
  );
  const validityInput = input.checkValidity();

  if (!validityInput) {
    showErrorMessage.textContent = message;
  } else {
    showErrorMessage.textContent = "";
  }
}

const checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener("blur", () => {
  if (!checkbox.checked) {
    const showErrorMessage = checkbox.parentNode.querySelector(".terms-error");
    showErrorMessage.textContent =
      "Você precisa aceitar os termos e condições para continuar.";
  } else {
    const showErrorMessage = checkbox.parentNode.querySelector(".terms-error");
    showErrorMessage.textContent = "";
  }
});
