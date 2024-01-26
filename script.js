const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) =>  {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;

        const id = button.getAttribute("id");

        btn.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src" , `img/img-2-iphone13green_${id}.jpg`);
        
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
      
    });

});

