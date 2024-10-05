let data = 7;

let card = document.querySelector(".galeri");
let pop = document.querySelector(".center");
let dwn = document.querySelector(".btn-download");

for (let i = 0; i < data; i++) {
    let c = document.createElement("div");
    c.className = "card num" + i;

    let h = document.createElement("img");
    h.src = `/image/p${i + 1}.JPG`;
    c.appendChild(h);

    document.querySelector(".galeri").appendChild(c);
}

if (card.children.length > 0) {
    for (let i = 0; i < card.querySelectorAll(".card").length; i++) {
        const cd = card.querySelectorAll(".card")[i];

        cd.addEventListener("click", function () {
            pop.classList.add("active");
            pop.querySelector("img").src = cd.querySelector("img").src;
            dwn.setAttribute("data-img", cd.querySelector("img").src);
        });
    }
}

dwn.addEventListener("click", function () {
    var a = document.createElement("a");
    let name = this.getAttribute("data-img").split("/");
    a.href = this.getAttribute("data-img");
    a.download = "datakitaskenda_" + name[name.length - 1]
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

pop.addEventListener("click", function () {
    pop.classList.remove("active");
});
