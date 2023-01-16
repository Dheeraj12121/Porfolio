import React from "react";

function Project() {
  return (
    <div className=" space-x-14 grid overflow-scroll scrollbar-hide space sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 ">
      {/* gird 3 */}
      <div className="pl-12 pb-4">
        <iframe
          height="300px"
          width="300px"
          className="shadow-2xl"
          src="https://ntple1.vercel.app/"
          frameborder="0"
        ></iframe>
        <a href="https://ntple1.vercel.app/">
          <h1>NTPLE</h1>
        </a>
      </div>

      <div className=" pb-4">
        <iframe
          height="300px"
          width="300px"
          className="shadow-2xl"
          src="https://airbnb-mern.vercel.app/"
          frameborder="0"
        ></iframe>
        <a href="https://airbnb-mern.vercel.app/">
          <h1>Airbnb Clone</h1>
        </a>
      </div>

      {/* <div className=" pb-4">
        <iframe
          height="300px"
          width="300px"
          className="shadow-2xl"
          src="https://ntple1.vercel.app/"
          frameborder="0"
        ></iframe>
        <a href="https://ntple1.vercel.app/">
          <h1>NTPLE</h1>
        </a>
      </div> */}

     
    </div>
  );
}

export default Project;
