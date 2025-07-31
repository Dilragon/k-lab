import myPhoto from './myPhoto.jpg';
import './App.css';

function App() {
  return (
    <div class='box'>
        <div class="profile-card">
            <img src={myPhoto} alt="My profile picture" class="profile-img" />
            <h1>John Doe</h1>
            <h2>Web Developer — Student</h2>
            <p>I'm 17 years old, from Uzbekistan, Tashkent.</p>
            <ul class="skills-list">
                <li>HTML&CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
            </ul>
        </div>
        <div class="contact-links">
            <a href="mailto:dilmurodabdujalilov0305@gmail.com" target="_blank">Email me</a>
            <a href="https://github.com/Dilragon/k-lab" target="_blank">Github profile</a>
            <a href="https://t.me/dilragon" target="_blank">Telegram</a>
        </div>
    </div>
  );
}

export default App;
