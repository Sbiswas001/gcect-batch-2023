const entries = [
    {
        name: "Bidwattar Kar",
        pic: "img/bidwattarkar-cse.jpg",
        text: "Creating the comprehensive \"GCECT Batch of 2023\" website from the ground up was an amazing experience, our team did a great job ensuring seamless functionality, looking forward towards more projects like this.",
        f1: "Student",
        f2: "Programmer",
        f3: "Photographer",
    },
    {
        name: "Sayan Biswas",
        pic: "img/sayanbiswas-cse.jpg",
        text: "Creating the comprehensive \"GCECT Batch of 2023\" website from the ground up was an amazing experience, our team did a great job ensuring seamless functionality, looking forward towards more projects like this.",
        f1: "Computer Science Student",
        f2: "Coder",
        f3: "Enthusiastic learner",
    },
    {
        name: "Soham Banik",
        pic: "img/sohambanik-cse.png",
        text: "Creating the comprehensive \"GCECT Batch of 2023\" website from the ground up was an amazing experience, our team did a great job ensuring seamless functionality, looking forward towards more projects like this.",
        f1: "Computer Science Student",
        f2: "Baba",
        f3: "All-rounder",
    }
];

const div = document.getElementById("dev-profiles");

entries.forEach((entry) => {
    const div1 = document.createElement("div");
    div1.className = "container";
    const div2 = document.createElement("div");
    div2.className = "image-container";
    const div3 = document.createElement("div");
    div3.className = "description";
    const div4 = document.createElement("div");
    div4.className = "container2";
    const span1 = document.createElement("span");
    span1.className = "text first-text";
    const span2 = document.createElement("span");
    span2.className = "text sec-text";
    const nameCell = document.createElement("h1");
    const paraCell = document.createElement("p");
    const image = document.createElement("img");
    const text = span2; // Use the span2 element for changing text

    image.src = entry.pic;
    span1.textContent = "I am a ";
    nameCell.textContent = entry.name;
    paraCell.textContent = entry.text;
    span2.textContent = entry.f1; // Initial text

    div4.appendChild(span1);
    div4.appendChild(span2);
    div3.appendChild(nameCell);
    div3.appendChild(div4);
    div3.appendChild(paraCell);
    div2.appendChild(image);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div.appendChild(div1);

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = entry.f2;
        }, 4000);
        setTimeout(() => {
            text.textContent = entry.f3;
        }, 8000);
    }

    textLoad();
    setInterval(textLoad, 12000);
});
