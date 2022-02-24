const EYE_ICON = "bi-eye-fill";
const EYE_SLASH_ICON = "bi-eye-slash-fill"

class EyeIconView {
    #containerEyeIcon = document.querySelector(".input-group-text")
    #iconEL = this.#containerEyeIcon.querySelector(".bi")

    #openEyeIcon() {
        this.#iconEL.classList.remove(EYE_SLASH_ICON)
        this.#iconEL.classList.add(EYE_ICON)
    }

    #closeEyeIcon() {
        this.#iconEL.classList.remove(EYE_ICON)
        this.#iconEL.classList.add(EYE_SLASH_ICON)
    }

    toggleIcon(show) {
        if (show) this.#openEyeIcon()
        else this.#closeEyeIcon()
    }

    iconCnClickHandler(handler){
        this.#containerEyeIcon.addEventListener("click", handler)
    }
}

export default new EyeIconView()