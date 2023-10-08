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
    {
        name: "Bishal Begani",
        linkedin: "https://www.linkedin.com/in/bishal-begani-0a333a1ba",
        github: "https://github.com/NormseCoder",
    },
    {
        name: "Soujatya Chowdhury",
        instagram: "https://instagram.com/soujatyachowdhury_13?igshid=OGQ5ZDc2ODk2ZA==",
        linkedin: "https://www.linkedin.com/in/soujatya-chowdhury-94124b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Agnik Manna",
    },
    {
        name: "Monmohan Ghosh",
    },
    {
        name: "Nilesh Kr. Majumder",
    },
    {
        name: "Tilottama Sarkar",
        instagram: "https://instagram.com/___tilottama___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
    {
        name: "Raj Kumar Mura",
        facebook: "https://www.facebook.com/profile.php?id=100074110506900",
    },
    {
        name: "Arnab Chatterjee",
        instagram: "https://instagram.com/the_name_is_arnab?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
    },
    {
        name: "Epsita Dutta",
        instagram: "https://instagram.com/epsita.25?igshid=NjIwNzIyMDk2Mg==",
    },
    {
        name: "Rohit Saha",
        facebook: "https://www.facebook.com/profile.php?id=100092588995489&mibextid=9R9pXO",
        linkedin: "https://www.linkedin.com/in/rohit-saha-a22615279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Aarya Sinha",
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