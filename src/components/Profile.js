import React from "react";
import "./Profile.css";

// components

export default function Profile() {
  return (
    <>
      <div
        className="relative flex flex-col min-w-0 break-words rounded-2xl profile-card w-full mb-6 shadow-xl mt-16"
        style={{ fontFamily: "Roboto" }}
      >
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <img
                alt="Profile"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQE0cMVjrtZM5g/profile-displayphoto-shrink_400_400/0/1623149468525?e=1649894400&v=beta&t=_7VIy8Yi3-lhb2a1ajsxgmzqh8iY_rNhAw19Meju8lU"
                className="shadow-5 rounded-full h-auto align-middle lg:-mt-24 border-none absolute"
                style={{ width: "200px" }}
              />
            </div>
            <div className="text-center mt-24 pt-4">
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                Hong Kong
              </div>
              <div className="mb-2 text-blueGray-600 ">
                <i className="fas fa-industry mr-2 text-lg text-blueGray-400"></i>
                Hi! My name is Raushan Kurmangali
              </div>
            </div>
            <div className="mt-2 py-3 border-t border-white text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-10/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    I am a student at The Hong Kong Polytechnic University,
                    studying Accounting Finance. I love solving unusual problems
                    that require out of the box thinking. I thrive to become a 
                    versatile person. That's why I am interested in programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
