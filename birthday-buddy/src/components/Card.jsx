import React, { useState } from "react";
import buddiesInfo from "../lib/data";
import Buddy from "./Buddy";

const Card = () => {
  const [buddies, setBuddies] = useState(buddiesInfo);

  function handleClear() {
    setBuddies([]);
  }

  return (
    <div className='p-4 w-[600px] flex flex-col gap-2 bg-white rounded-md'>
      <h1 className='text-2xl mb-4'>{buddies.length} Birthdays Today</h1>
      {buddies.map((buddy) => (
        <Buddy key={buddy.id} buddyInfo={buddy} />
      ))}
      <button
        onClick={handleClear}
        className='bg-[#D946EF] text-white py-1 my-4 shadow-md hover:bg-[#8c5194] cursor-pointer'
      >
        Clear All
      </button>
    </div>
  );
};

export default Card;
