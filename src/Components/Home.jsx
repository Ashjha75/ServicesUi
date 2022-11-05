import React from "react";
import vg from "../Assets/vg.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only Solution to the tech problems you faces
            every day.We are leading tech company whose aim is to increase th
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="About">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            doloremque qui inventore, eius mollitia quod exercitationem
            doloribus delectus alias vel quas ratione architecto consectetur
            autem illum aspernatur quidem, repellendus esse similique
            accusantium veniam, assumenda quis! Odio quos sed voluptatum
            repellat suscipit accusamus, iusto alias tempore placeat esse
            exercitationem. Dolorem, aperiam dolore id aspernatur quis dolorum,
            illo beatae officiis officia tempora expedita quod, commodi debitis
            repellendus esse eaque? Libero ipsa, nostrum odio impedit dolorem
            sit corporis fuga incidunt nobis sapiente dolores odit sint,
            explicabo doloribus eligendi eaque et eos? Error commodi sint atque
            beatae asperiores cum iusto hic dolores odio dolor.
          </p>
        </div>
      </div>

      <div className="home4" id="Brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: ".4s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
