(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    document.querySelector(".explore-btn").addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".active-btn").classList.remove("active-btn");
        let btnTarget = document.querySelector(".explore-target");
        btnTarget.classList.add("active-btn");
        document.getElementById(btnTarget.dataset.id).classList.add("active");
    })
})();

