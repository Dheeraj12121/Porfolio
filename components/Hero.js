import Image from "next/image";


const Hero = () => {
  return (
    <div className=" grid sm:grid-cols-1  md:grid-cols-2 h-[91vh]  items-center  font-serif ">
      <div className="grid pl-6 sm:justify-center">
        <h1 className="text-5xl font-bold ">Hi,I'm Dheeraj</h1>
        <p className="leading-9 ">
         A website developer who is passionate about my work. I enjoy creating websites that are both aesthetically pleasing and user-friendly. I strive to stay up-to-date on the latest web development trends and technologies so that I can provide my clients with the best possible results.
        </p>
        <a className="mt-2" href="https://drive.google.com/file/d/1xTsxILUY-nIvXT8TqE5IDgmei14vj-On/view" download>
        <button className="  text-purple-800 bg-purple-300 px-2 rounded-full w-[90px]">
          Resume
        </button>
        </a>
        
      </div>

      <div className=" flex justify-center ">
        <div className=" relative w-[350px] h-[350px]  grid justify-center  items-center">
          <div className=" w-[297px] h-[297px] bg-white grid justify-center  py-10 rounded-lg shadow-2xl">
            <div className=" w-[187px] h-[187px]  rounded-full shadow-2xl flex justify-center  items-end">
              <Image
              title="Dheeraj Kumar"
                className=" rounded-full "
                objectFit="responsive"
                height={187}
                width={187}
                src={require("../images/pro.jpg")}
              />

              {/* <div className=""> */}
              {/* </div> */}
            </div>
            <span className="ml-14 bg-purple-400 rounded-2xl w-16 z-50  flex justify-center  items-center ">
              UI/UX
            </span>
          </div>

          
            <span title="Figma" className="w-[59px] h-[59px] z-10 shadow-xl flex justify-center items-center bg-white absolute top-14 rounded-lg  ">
              {/* <Image\\ */}
              <Image height={49} width={49}  objectFit="contain" src={require("../images/figma.png")} />
            </span>

            <span title="TailwindCss" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute top-0 left-16 rounded-lg flex justify-center items-center  ">
              <Image height={59} width={49}  objectFit="contain" src={require("../images/tailwinf.svg")} />
            </span>

            <span title="MongoDB" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute top-1 left-[60%] rounded-lg flex justify-center items-center  ">
              <Image height={49} width={39}  objectFit="contain" src={require("../images/mongo.svg")} />
            </span>

            <span title="HTML" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center items-center top- ">
              <Image alt="html" height={49} width={39} objectFit="contain" src={require("../images/html.png")} />
            </span>

            <span title="CSS3" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center bottom-10 items-center  ">
              <Image height={49} width={39}  objectFit="contain" src={require("../images/css.png")} />
            </span>

            <span title="JavaScript" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center bottom-0 left-16 items-center  ">
              <Image height={49} width={49}  objectFit="contain" src={require("../images/js.png")} />
            </span>

            <span title="ReactJs" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center bottom-0 right-36 items-center  ">
              <Image height={49} width={39}  objectFit="contain" src={require("../images/react18.png")} />
            </span>

            <span title="NextJs" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center bottom-14 right-1 items-center  ">
              <Image height={49} width={39}  objectFit="contain" src={require("../images/next.svg")} />
            </span>

            <span title="Firebase" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center bottom-0 right-14 items-center  ">
              <Image height={49} width={39}  objectFit="contain" src={require("../images/firebase.svg")} />
            </span>
            
            <span title="NodeJs" className="w-[59px] h-[59px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center  right-1 items-center  ">
              <Image height={49} width={39}  objectFit="contain" src={require("../images/node.png")} />
            </span>
            
            <span  data-bs-toggle="tooltiop" title="ExpressJs" className="w-[79px] h-[49px] z-10 shadow-xl bg-white absolute  rounded-lg flex justify-center  top-16 right-0   items-center  ">
              <Image height={49} width={79}  objectFit="contain" src={require("../images/express.svg")} />
            </span>
          

        </div>
      </div>
    </div>
  );
};

export default Hero;
