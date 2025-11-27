/*===========toggle icon navbar============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};
/*===========scroll sections active link============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*===========sticky navbar============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*===========remove toggle icon and navber when click navbar link (scroll)============*/  
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

/*=============scroll reveal===============*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .certs-container, .skills-box, .project-card, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=========== Certificate Modal Data ===========*/

const certData = {
    others: [
        { name: "Agile Organizations: DevOps and Agile", link: "assets/agile.pdf" },
        { name: "Scrum Foundations", link: "assets/scrum.pdf" },
        { name: "Waterfall Software Development Model", link: "assets/waterfall.pdf" }
    ],
    linux: [
        { name: "Linux Basics", link: "assets/linux1.pdf" },
        { name: "Linux User Management", link: "assets/linux2.pdf" },
        { name: "File Permissions & Ownership", link: "assets/linux3.pdf" }
    ],
    windows: [
        { name: "Windows Administration: Managing users & Groups", link: "assets/windows_1.pdf" },
        { name: "Windows Administration: System Security & Maintenance", link: "assets/windows_2.pdf" },
        { name: "Windows Administration: Networking & File Sharing", link: "assets/windows_3.pdf" },
        { name: "Windows Administration: Windows Services, Devices, & Storage", link: "assets/windows_4.pdf" }
    ]
};

function openModal(category) {
    document.getElementById("certModal").style.display = "flex";
    document.getElementById("modal-title").innerText = category.toUpperCase() + " Certificates";

    let html = "";
    certData[category].forEach(c => {
        html += `<a href="${c.link}" target="_blank">${c.name}</a>`;
    });

    document.getElementById("modal-list").innerHTML = html;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}
