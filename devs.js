document.addEventListener("DOMContentLoaded", function() {
    const entries = [
        {
            image: "img/sayanbiswas-cse.png",
            text: "Hello, I am Sayan Biswas. I am a 1st year college student at GCECT. I aim to become a full stack developer."
        },
        {
            image: "img/bidwattarkar-cse.png",
            text: "I am Bidwattar Kar. I am developing this website."
        }       
    ];

    const tbody = document.getElementById("table-body");

    entries.forEach((entry) => {
        const row = document.createElement("tr");
        const imageCell = document.createElement("td");
        const textCell = document.createElement("td");
        const image = document.createElement("img");

        image.src = entry.image;
        textCell.textContent = entry.text;

        imageCell.appendChild(image);
        row.appendChild(imageCell);
        row.appendChild(textCell);

        tbody.appendChild(row);
    });
});
 