export class Modal {
  constructor(titleText, messageText, confirmText, cancelText) {
    this.titleText = titleText;
    this.messageText = messageText;
    this.confirmText = confirmText;
    this.cancelText = cancelText;
  }

  createAndOpen(onConfirm, onCancel, args) {
    // Create modal element
    this.modalElement = document.createElement("div");
    this.modalElement.classList.add("c-modal");
    this.modalElement.classList.add(`c-modal--${args.size}`);
    this.modalElement.classList.add(`c-modal--${args.corner}`);
    this.modalElement.classList.add(`c-modal--${args.colour}`);
    if (args.withBorder) {
      this.modalElement.classList.add(`c-modal--${args.colour}--with-border`);
    }
    this.modalElement.setAttribute("aria-label", args.ariaLabel);

    // Create modal header
    const header = document.createElement("div");
    header.classList.add("c-modal__header");

    const title = document.createElement("h2");
    title.classList.add("c-modal__title");
    title.textContent = args.title;

    header.appendChild(title);
    this.modalElement.appendChild(header);

    // Create modal body
    const body = document.createElement("div");
    body.classList.add("c-modal__body");

    const paragraph = document.createElement("p");
    paragraph.classList.add("c-modal__paragraph");
    paragraph.textContent = args.paragraph;

    body.appendChild(paragraph);
    this.modalElement.appendChild(body);

    // Create modal footer
    const footer = document.createElement("div");
    footer.classList.add("c-modal__footer");

    const deleteButtonHtml = `<button class="c-button c-button--small c-button--semi-round c-button--red c-button--red--with-border" aria-label="Aria label">
    <i class="fa-sharp fa-solid fa-trash" aria-hidden="true"></i>
    ${args.confirmText}</button>`;
    const cancelButtonHtml = `<button class="c-button c-button--small c-button--semi-round c-button--gray c-button--gray--with-border" aria-label="Aria label">${args.cancelText}</button>`;

    footer.innerHTML = deleteButtonHtml + cancelButtonHtml;
    this.modalElement.appendChild(footer);
    this.modalElement.style.display = "flex";

    // create overlay
    const overlay = document.createElement("div");
    overlay.classList.add("c-modal__overlay");

    // append overlay to body
    document.body.appendChild(overlay);

    // Append modal to body
    document.body.appendChild(this.modalElement);

    // Add event listeners
    const confirmButton = this.modalElement.querySelector(".c-button--red"),
      cancelButton = this.modalElement.querySelector(".c-button--gray");

    confirmButton.addEventListener("click", () => {
      onConfirm("confirm");
      this.close();
    });

    cancelButton.addEventListener("click", () => {
      onCancel("cancel");
      this.close();
    });
  }

  open(args) {
    return new Promise((resolve, reject) => {
      this.createAndOpen(resolve, reject, args);
    });
  }

  close() {
    this.modalElement.remove();
    document.querySelector(".c-modal__overlay").remove();
  }
}
