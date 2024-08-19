const dropbtn = document.getElementsByClassName("dropbtn");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", displayDropdownItems);

function displayDropdownItems () {
    console.log("clicked");
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdownContent");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}