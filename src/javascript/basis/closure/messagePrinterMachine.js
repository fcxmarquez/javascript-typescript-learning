function messagePrinterMachine(type, style) {
  return function message(str) {
    console.log(`%c ${type}: ${str}`, style);
  };
}

const error = messagePrinterMachine("Error", "background: red; color: white;");
error("This is an error");
