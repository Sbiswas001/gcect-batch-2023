const entries = [
    {
        name: "Amlan Patra",
    },
    {
        name: "SOURIN KAR",
    },
    {
        name: "Agnik Manna",
    },
    {
        name: "Monika Mandal",
        instagram: "https://www.instagram.com/mandalmonika_14/"
    },
    {
        name: "Soham Ghosh",
        facebook: "https://www.facebook.com/soham.ghosh.568089",
        linkedin: "https://www.linkedin.com/in/soham-ghosh-5399a7239",

    },
    {
        name: "Rupankar Saha",
        facebook: "https://www.facebook.com/rupankar.saha.397?mibextid=ZbWKwL",
    },
    {
        name: "Ipsita Majumder",
        instagram: "https://instagram.com/ips16majumder?igshid=OGQ5ZDc2ODk2ZA==",
        linkedin: "https://www.linkedin.com/in/ipsita-majumder-567b66293?trk=contact-info",
    },
    {
        name: "Ananya Mondal",
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
    githubCell.innerHTML = entry.github ? `<a href="${entry.github}">Github</a>` : 'N/A';
    socialCell.innerHTML = '';
    
    if (entry.linkedin) {
        socialCell.innerHTML += `<a href="${entry.linkedin}">Linkedin</a><br>`;
    }
    if (entry.instagram) {
        socialCell.innerHTML += `<a href="${entry.instagram}">Instagram</a>`;
    }
    if (entry.facebook) {
        socialCell.innerHTML += `<a href="${entry.facebook}">Facebook</a>`;
    }
    if(!entry.linkedin && !entry.instagram && !entry.facebook) {
        socialCell.innerHTML = 'N/A';
    }

    websiteCell.innerHTML = entry.website ? `<a href="${entry.website}">Website</a>` : 'N/A';



    row.appendChild(nameCell);
    row.appendChild(githubCell);
    row.appendChild(socialCell);
    row.appendChild(websiteCell);

    tbody.appendChild(row);
});