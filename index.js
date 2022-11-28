let visibility = false
let dropdown = document.getElementById("menudropdown")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        visibility = false
        dropdown.classList.add("invisible")
        dropdown.classList.remove("visible")
    });
});




document.getElementById("menu").addEventListener("click", () => {
    if(visibility == false){
        visibility = true
        dropdown.classList.add("visible")
        dropdown.classList.remove("invisible")
    }
    else {
        visibility = false
        dropdown.classList.add("invisible")
        dropdown.classList.remove("visible")
    }
    
})