const input = document.getElementById("input");

let a = "";
let b = "";
let operator = "";
//Добавление переменных
function enterNumbers(e) {
  if (e === ".") {
    if ((operator === "" && a === "") || (operator !== "" && b === "")) {
      return;
    }
    if (
      (operator === "" && a.includes(".")) ||
      (operator !== "" && b.includes("."))
    ) {
      return;
    }
  }
  if (operator === "") {
    input.value += e;
    a += e;
  } else {
    input.value += e;
    b += e;
  }
}
//Добавление оператора
function enterOperators(e) {
  if (
    (operator === "" && a.endsWith(".")) ||
    (operator !== "" && b.endsWith("."))
  ) {
    return;
  }
  if (a !== "" && operator == "") {
    input.value += e;
    operator = e;
  } else if (operator !== "" && b == "") {
    input.value = input.value.slice(0, -1) + e;
    operator = e;
  }
}
//Операции
function calc() {
  if (a !== "" && operator !== "" && b !== "") {
    let num1 = Number(a);
    let num2 = Number(b);
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "/":
        if (num2 == 0) {
          alert("Ошибка");
          result = "";
        } else result = num1 / num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      default:
        return;
    }
    input.value = result;
    a = String(result);
    b = "";
    operator = "";
  }
}
//Полностью очищает
function clearCalc() {
  input.value = "";
  a = "";
  b = "";
  operator = "";
  result = "";
}
//удаляет один символ
function deleteOneValue() {
  if (b !== "") {
    b = b.substring(0, b.length - 1);
  } else if (operator !== "") {
    operator = "";
  } else if (a !== "") {
    a = a.substring(0, a.length - 1);
  }
  input.value = a + operator + b;
}
//Удаляет все число
function deleteAllValue() {
  if (b !== "") {
    b = b.substring(0, -1);
  } else if (a !== "" && operator == "") {
    a = a.substring(0, -1);
  }
  input.value = a + operator + b;
}
//Меняет + на - и обратно
function changeSign() {
  if (a !== "" && operator == "" && b == "") {
    a = String(-a);
    input.value = a;
  } else if (a !== "" && operator == "+" && b !== "") {
    operator = "-";
    input.value = a + operator + b;
  } else if (a !== "" && operator == "-" && b !== "") {
    operator = "+";
    input.value = a + operator + b;
  }
}
