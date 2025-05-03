import { Forward, Gauge, MessageSquare, ThumbsUp } from "lucide-react";
import React from "react";

const Cards = () => {
  return (
    <div className="flex h-1/3 w-full flex-col gap-4 px-16 py-4 font-bold">
      <div className="flex items-center gap-4">
        <Gauge />
        <h3 className="text-xl">Dashboard</h3>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex h-full w-1/5 flex-col items-center rounded-2xl bg-[#C1DFFF] p-20">
          <ThumbsUp size={40} />
          Total Likes
          <p className="text-4xl">50,120</p>
        </div>
        <div className="flex h-full w-1/5 flex-col items-center rounded-2xl bg-[#C1DFFF] p-20">
          <ThumbsUp size={40} />
          Total Likes
          <p className="text-4xl">50,120</p>
        </div>
        <div className="flex h-full w-1/5 flex-col items-center rounded-2xl bg-[#FFF3D7] p-20">
          <MessageSquare size={40} />
          Comments
          <p className="text-4xl">25,120</p>
        </div>
        <div className="flex h-full w-1/5 flex-col items-center rounded-2xl bg-[#EFE1FD] p-20">
          <Forward size={40} />
          Share
          <p className="text-4xl">10,320</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
