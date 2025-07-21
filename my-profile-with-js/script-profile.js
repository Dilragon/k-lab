// Declare elements
const box1 = document.createElement('div');
const box2 = document.createElement('div');
const img1 = document.createElement('img');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const p1 = document.createElement('p');
const ul = document.createElement('ul');

// Edit page
box1.setAttribute('class', 'profile-card');
img1.setAttribute('src', 'images/my-photo.jpg'); img1.setAttribute('class', 'profile-img'); img1.setAttribute('alt', 'My profile picture');
h1.textContent = 'John Doe';
h2.textContent = 'Web Developer — Student';
p1.textContent = `I'm 17 years old, from Uzekistan, Tashkent.`;
ul.setAttribute('class', 'skills-list');
ul.innerHTML = `
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
`;
box2.setAttribute('class', 'contact-links');
box2.innerHTML = `
    <a href="mailto:dilmurodabdujalilov0305@gmail.com" target="_blank">Email me</a>
    <a href="https://github.com/Dilragon/k-lab" target="_blank">Github profile</a>
    <a href="https://t.me/dilragon" target="_blank">Telegram</a>
`

// Append the new elements to the body of the document
box1.appendChild(img1);
box1.appendChild(h1);
box1.appendChild(h2);
box1.appendChild(p1);
box1.appendChild(ul);
document.body.appendChild(box1);
document.body.appendChild(box2);
