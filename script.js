const dropbtn = document.getElementsByClassName("dropbtn");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", displayDropdownItems);

function displayDropdownItems () {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("arrowImage").src="./images/chevron-up.svg"
}

window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdownContent");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document.getElementById("arrowImage").src="./images/chevron-down.svg";
            }
        }
    }
}