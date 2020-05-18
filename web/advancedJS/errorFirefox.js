async run(context) {
  if (somethingIsWrong) {
    const e = new Error("No such element");
    e.displayMessage = "Nothing makes sense anymore!";
    throw e;
  }
}