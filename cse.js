const entries = [
    {
        name: "Sayan Biswas",
        github: "https://github.com/Sbiswas001",
        linkedin: "https://www.linkedin.com/in/sbiswas001",
        instagram: "https://www.instagram.com/sbiswas001",
        website: "https://sbiswas001.weebly.com/",
    },
    {
        name: "Bidwattar Kar",
        github: "https://github.com/Sbiswas001",
        linkedin: "https://www.linkedin.com/in/sbiswas001",
        instagram: "https://www.instagram.com/sbiswas001",
        website: "https://sbiswas001.weebly.com/",
    },
];

const tbody = document.getElementById("table-body");

entries.forEach((entry) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const githubCell = document.createElement("td");
    const socialCell = document.createElement("td");
    const websiteCell = document.createElement("td");

    nameCell.textContent = entry.name;
    githubCell.innerHTML = `<a href="${entry.github}">Github</a>`;
    socialCell.innerHTML = `<a href="${entry.linkedin}">Linkedin</a><br><a href="${entry.instagram}">Instagram</a>`;
    websiteCell.innerHTML = `<a href="${entry.website}">Website</a>`;

    row.appendChild(nameCell);
    row.appendChild(githubCell);
    row.appendChild(socialCell);
    row.appendChild(websiteCell);

    tbody.appendChild(row);
});