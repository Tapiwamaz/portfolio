import "./Home.css";
import Insta from "../../assets/Instagram.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import Github from "../../assets/Github.svg";
import Image from "../../assets/Image.jpg";

const Home = () => {
  return (
    <main className="homePage">
      <section className="infoSectionLeft">
        <h1 className="name">Hi, I'm Tapiwa Mazarura.</h1>
        <h2 className="title">I am a Fullstack Developer</h2>
        <p className="paragraph">
          loremReprehenderit veniam qui laboris occaecat occaecat. Nisi ullamco
          adipisicing laboris fugiat nisi proident laboris anim deserunt sint.
          Commodo duis Lorem incididunt esse id non reprehenderit laborum veniam
          non anim duis laborum exercitation. Elit proident minim laboris elit
          reprehenderit exercitation amet sint laboris eu velit dolore commodo.
        </p>
        <section className="buttons">
          <button className="button"><p className="box">Hire Me</p></button>
          <button className="button"><p className="box">Lets talk</p></button>
        </section>

        <section className="buttons">
          <a
            className="linkSocial"
            href="https://www.instagram.com/tapiwa.maz"
          >
            <img className="button social" src={Insta} alt="Instagram" />
          </a>
          <a
            className="linkSocial"
            href="https://github.com/Tapiwamaz"
          >
            <img className="button social" src={Github} alt="Github" />
          </a>
          <a
            className="linkSocial"
            href="https://www.linkedin.com/in/TapiwaMazarura"
          >
            <img className="button social" src={LinkedIn} alt="LinkedIn" />
          </a>
        </section>
      </section>
      <section className="infoSectionRight">
        <img className="Image" src={Image} alt="Profile" />
      </section>
    </main>
  );
};

export default Home;
