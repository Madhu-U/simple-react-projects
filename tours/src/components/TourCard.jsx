import React, { useState } from "react";

const TourCard = ({ tourData, handleRemove }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, info, image, price } = tourData;

  return (
    <div className='w-[352px] bg-white shadow-md'>
      <div className='relative'>
        <p className='bg-[#10B981] text-white absolute top-0 right-0 px-2 text-sm'>
          ${price}
        </p>
        <img src={image} alt={name} className='' />
      </div>

      <div className='p-5 flex flex-col'>
        <h2 className='text-center my-3 capitalize'>{name}</h2>
        <p className='text-[#64748B] text-sm'>
          {!readMore ? info.substring(0, 200) : info}...
          <span
            className='text-[#10B981] cursor-pointer'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </span>
        </p>
        <button
          className='bg-transparent border border-[#10B981] text-xs py-1 text-[#10B981] my-4 hover:bg-[#10B981] hover:text-white cursor-pointer rounded'
          onClick={() => handleRemove(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;
