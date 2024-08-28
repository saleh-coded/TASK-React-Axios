// import React from "react";
import React, { useState, useSyncExternalStore } from "react";
import petsData from "../petsData";
import { getOnePet } from "../API/pets";

import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const PetDetail = () => {
  // const pet = petsData[0];

  const [pet, setPet] = useState({});
  // const [id, setId] = useState("");

  const { petId } = useParams();
  console.log(petId);
  // if (!pet) {
  //   return <Navigate to="/" />;
  // }

  // const handelIput = (e) => {
  //   setId(e.target.value);
  //   console.log(id);
  // };

  const getPet = async () => {
    const res = await getOnePet(petId);
    setPet(res);
  };

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <Navbar />
      {/* <iput placeholder="Enter an ID" onChange={handelIput} /> */}
      <button onClick={getPet}>Get on Pet</button>
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Adobt
          </button>

          <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
