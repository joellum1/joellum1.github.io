document.addEventListener("DOMContentLoaded", () => {
    const menu_button = document.getElementById("menu-button");
    console.log("MENU: ", menu_button);
    const dropdown_content = document.querySelector(".mobile-dropdown-content");
    console.log("DROPDOWN: ", dropdown_content);

    menu_button.addEventListener("click", () => {
        dropdown_content.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!menu_button.contains(event.target) && !dropdown_content.contains(event.target)) {
            dropdown_content.classList.remove("active");
        };
    })
});