import Image from "next/image";

const Header = () => {
  return (
    <div className="border border-b-2 h-16 border-white flex justify-between px-8 items-center  ">
      <div className=" flex">
        <h1 className="text-3xl font-bold">Dheeraj kumar</h1>
        {/* <div className="flex">
          <small className=" pl-2 pr-2 h-5 flex items-center ml-2 text-purple-800 mt-4 bg-purple-300 rounded-full justify-center">
            Now available
          </small>
        </div> */}
      </div>

      <div className="flex space-x-4  ">
        <a href="https://www.instagram.com/dheeraj.dk17/">
          <Image
            objectFit="contain"
            width={49}
            height={39}
            src={require("../images/insta.png")}
          />
        </a>
        <a href="https://github.com/Dheeraj12121">
          <Image
            objectFit="contain"
            width={49}
            height={39}
            src={require("../images/git.png")}
          />
        </a>
        <a href="https://www.linkedin.com/in/dheeraj-kumar-946344206/">
          <Image
            objectFit="contain"
            width={49}
            height={39}
            src={require("../images/link.png")}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
