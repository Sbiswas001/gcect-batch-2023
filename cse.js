const entries = [
    {
        name: "Sayan Biswas",
        github: "https://github.com/Sbiswas001",
        linkedin: "https://www.linkedin.com/in/sbiswas001",
        instagram: "https://www.instagram.com/sbiswas001",
        website: "https://sbiswas001.weebly.com/",
    },
    {
        name: "Kasif Nehal",
        facebook: "https://www.facebook.com/profile.php?id=100052353751238&mibextid=ZbWKwL",
    },
    {
        name: "Souhardya Bhattacharjee",
        instagram: "https://instagram.com/shouhardo_07?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
        name: "Serma Tudu",
        instagram: "https://instagram.com/natshoot_photography?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
        name: "Arkapravo Roy",
    },
    {
        name: "Yuvraj Shaw",
        instagram: "https://instagram.com/yuvrajshaw?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
        linkedin: "https://www.linkedin.com/in/yuvraj-shaw-57bb85294",
    },
    {
        name: "Riyanka Nandi",
    },
    {
        name: "Riya Choudhury",
        instagram: "https://www.instagram.com/__choudhuryriya__",
    },
    {
        name: "Koustav Naskar",
        instagram: "https://instagram.com/koustav.naskar.3194?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
        name: "Arghya Saha",
        instagram: "https://instagram.com/010arghya?igshid=MzMyNGUyNmU2YQ==",
    },
    {
        name: "Wangmi Lama",
    },
    {
        name: "Sneha Mandal",
        instagram: "https://instagram.com/snehamandal0001?igshid=OGQ5ZDc2ODk2ZA==",
        linkedin: "https://www.linkedin.com/in/sneha-mandal-a7581228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Subhadip Biswas",
        instagram: "https://www.instagram.com/subhadip_2004/",
        linkedin: "www.linkedin.com/in/subhadip-biswas-7824a2283",
    },
    {
        name: "Debrup Das",
        instagram: "instagram.com/debrup_077",
    },
    {
        name: "Arkonil Sarkar",
        facebook: "https://www.facebook.com/profile.php?id=100080332436969&mibextid=ZbWKwL",
        linkedin: "https://www.linkedin.com/in/arkonil-sarkar-005a1326a",
    },
    {
        name: "Souvik Modak",
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