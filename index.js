import EyeIconView from "./iconView.js"
import InputView from "./inputView.js"

let show = false;

const toggleState = function () {
    show = !show;
    EyeIconView.toggleIcon(show);
    InputView.toggleInput(show)
}

EyeIconView.iconCnClickHandler(() => {
    toggleState();
    if(!show) return
    setTimeout(toggleState, 2000)
})

