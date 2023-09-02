const home = document.getElementById("home");
const about = document.getElementById("about");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");

home.addEventListener('click', () => {
    document.querySelector(".container.home").scrollIntoView({ behavior: 'smooth' });
});

about.addEventListener('click', () => {
    document.querySelector(".container.about").scrollIntoView({ behavior: 'smooth' });
});

blog.addEventListener('click', () => {
    document.querySelector(".container.blog").scrollIntoView({ behavior: 'smooth' });
});

contact.addEventListener('click', () => {
    document.querySelector(".container.contact").scrollIntoView({ behavior: 'smooth' });
});
