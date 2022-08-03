import React, { useEffect } from "react";

const ArrayData = () => {
  return (
    <div className="flex flex-col font-space p-gap border-r-[1px] border-r-border-1 justify-between  border-b-[10px] border-b-cyan-bg">
      <div className="flex justify-between gap-[2rem] text-[15px]">
        <div
          className="flex gap-[0.2rem] text-text-1 flex-wrap text-[1.3rem]"
          id="sorting-array-data"
        ></div>
        <div className="text-green uppercase flex gap-gap">
          Total <span className="text-cyan" id="array-element-count"></span>
        </div>
      </div>
      <div className="flex justify-between pt-[3rem] text-[15px]">
        <div>
          <span className="text-green uppercase">Array</span>
        </div>
        <div className="flex gap-[1rem]">
          <div className="flex gap-gap">
            <span className="text-green uppercase">Random</span>
            <span className="text-cyan uppercase">Gernerated</span>
          </div>
          <span id="sorting-status" className="text-red uppercase">Unsorted</span>
        </div>
      </div>
    </div>
  );
};

export default ArrayData;
