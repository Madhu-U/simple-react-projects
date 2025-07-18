import React from "react";

const Buddy = ({ buddyInfo }) => {
  const { name, age, image } = buddyInfo;
  return (
    <div className='flex gap-2'>
      <img src={image} alt={name} className='rounded-full w-16 h-16 ' />
      <div className='flex flex-col justify-center items-center'>
        <h2>{name}</h2>
        <p className='text-gray-400 text-sm'>{age} years old</p>
      </div>
    </div>
  );
};

export default Buddy;
