class InputView {
    #input = document.querySelector("input");
    toggleInput(show) {
        if (show) this.#input.type = "text";
        else this.#input.type = "password";
    }
}

export default new InputView()