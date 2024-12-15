import { TypeAnimation } from "react-type-animation";
import cover from "../../assets/hero.png";

const Header = () => {
  return (
    <div
      id="header"
      className="flex flex-col-reverse justify-center md:flex-row min-h-screen pb-6"
    >
      {/* Text */}
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center text-xl md:text-4xl">
        <p>
          Hello I'm <span className="font-bold">Marvin Lim.</span>
        </p>
        <p>
          <span className="font-bold">
            <TypeAnimation
              sequence={[
                "Jr.Frontend", // First text
                2000, // Pause for 1 second
                "Full Stack Web", // Second text
                2000, // Pause for 1 second
                "Freelance Web", // Third text
                2000, // Pause for 1 second
              ]}
              speed={50} // Typing speed
              repeat={Infinity} // Repeat indefinitely
            />
          </span>
          <span
            className="ml-2"
            style={{
              WebkitTextStroke: "1px black",
              color: "white", // Transparent fill effect
              fontWeight: "bolder",
            }}
          >
            Developer
          </span>
        </p>
        <p>
          Based In <span className="font-bold">Philippines</span>
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-[60%] flex">
        <img
          className="w-full h-full object-scale-down object-center"
          src={cover}
          alt="cover"
        />
      </div>
    </div>
  );
};

export default Header;
