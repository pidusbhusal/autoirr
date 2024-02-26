import React from "react";

export default function CropsCard() {
  return (
    <div className="flex max-w-fit  flex-col border-teal-50 p-2 rounded bg-red-700">
      <img
        src="https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c="
        alt="image of rice"
        className="object-scale-down"
      />
      <h5>Field Name</h5>
      <p>Date of plantation : 2022/10/12 </p>
      <div>
        Irrigation status : <span>Needed</span>
        Irrigation Amount : <span>0.2mm</span>
      </div>
      <div></div>
    </div>
  );
}
