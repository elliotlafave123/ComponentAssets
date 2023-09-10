import { Modal } from "./modal";

const confirmModal = new Modal("Are you sure?", "This action cannot be undone.", "Yes", "No");

document.addEventListener("DOMContentLoaded", function () {
  const buttonElements = document.querySelectorAll(".c-button.openModal");

  buttonElements.forEach((button) => {
    button.addEventListener("click", function () {
      confirmModal
        .open({
          title: "Delete file",
          ariaLabel: "Confirmation modal",
          paragraph:
            "You are about to permanently delete a file. Once the file has been deleted it can not be recovered.",
          size: button.getAttribute("data-size"),
          corner: button.getAttribute("data-corner"),
          colour: button.getAttribute("data-colour"),
          withBorder: true,
          confirmText: "Delete",
          cancelText: "Cancel",
        })
        .then((result) => {
          // console.log(result);
        })
        .catch((error) => {
          // console.log(error);
        });
    });
  });
});
