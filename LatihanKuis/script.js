const btnLogout = document.getElementById('btnLogout')
const btnTheme = document.getElementById('btnTheme')

let theme = "light"

const navbar = document.getElementById('navbar')
const tableData = document.getElementById('tableData')
const body = document.body

btnLogout.addEventListener('click', function() {
    if (confirm("Are you sure want to log out?")) {
        window.location.href = 'index.html'
    }
})

btnTheme.addEventListener('click', function() {
  if (theme === "light") {
    navbar.classList.remove("bg-body-tertiary");
    navbar.classList.add("navbar-dark","bg-dark");

    body.style.backgroundColor = "black";
    body.style.color = "white";

    btnTheme.classList.remove("btn-outline-dark")
    btnTheme.classList.add("btn-outline-secondary")
    btnTheme.textContent = "Dark Mode"

    btnLogout.classList.add("btn-light")
    btnLogout.classList.remove("btn-dark")

    tableData.classList.add("table-dark")
    tableData.classList.remove("table-light")
    tableData.style.color = "white"

    theme = "dark";
  } else {
    navbar.classList.remove("navbar-dark","bg-dark");
    navbar.classList.add("bg-body-tertiary");

    body.style.backgroundColor = "white";
    body.style.color = "black";

    btnTheme.classList.add("btn-outline-dark")
    btnTheme.classList.remove("btn-outline-secondary")
    btnTheme.textContent = "Light Mode"

    btnLogout.classList.add("btn-dark")
    btnLogout.classList.remove("btn-light")

    tableData.classList.add("table-light")
    tableData.classList.remove("table-dark")
    tableData.style.color = ""
    
    theme = "light";
  }
})