(function () {
  // создаём и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitile = document.createElement("h2");
    appTitile.innerHTML = title;
    return appTitile;
  }

  // создаём и возвращаем форму для создания дела
  function createItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Введите название нового дела";
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавить дело";

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }
});
