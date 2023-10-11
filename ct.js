const entries = [
    {
        name: "Subhankar Roy",
        instagram: "https://www.instagram.com/subhankar6273/",
    },
    {
        name: "Saiba Khatun",
        instagram: "https://instagram.com/iam__roshnii__?igshid=OGQ5ZDc2ODk2ZA==",
        linkedin: "https://www.linkedin.com/in/saiba-khatun-761359295/",
    },
    {
        name: "Akash Dutta",
        facebook: "https://www.facebook.com/profile.php?id=100080718425398",
        linkedin: "https://www.linkedin.com/in/akash-dutta-a6867028b/",
    },
    {
        name: "Karandeep Biswas",
        instagram: "https://www.instagram.com/karandeepbiswas",
    },
    {
        name: "Rishika Roy",
    },
    {
        name: "Kashak Nonia",
    },
    {
        name: "Md Amir Sk",
        facebook: "https://www.facebook.com/profile.php?id=100014273439782&mibextid=ZbWKwL",
    },
    {
        name: "Srit Biswas",
        instagram: "https://www.instagram.com/srit_owo/",
        github: "https://github.com/GAMINEM/op",
    },
    {
        name: "Ezaz Ul Haque",
        instagram: "https://instagram.com/ezaz.hq?igshid=YTQwZjQ0NmI0OA==",
        linkedin: "https://www.linkedin.com/in/ezaz-ul-haque-102a05275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
        name: "Rahini Ghosh",
        instagram: "https://instagram.com/rahinighosh?igshid=NGVhN2U2NjQ0Yg==",
    },
    {
        name: "Sushanta Pal",
        instagram: "https://www.facebook.com/profile.php?id=100070106557654&mibextid=ZbWKwL",
        linkedin: "http://www.linkedin.com/in/sushanta-pal-59836b293",
    },
    {
        name: "Rohan Dogra ",
    },
    {
        name: "Ankit Das",
    }
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