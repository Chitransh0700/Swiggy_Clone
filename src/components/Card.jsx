import React from "react";

export default function Card(props) {
  return (
    <div className="w-[273px] shrink-0 grow">
      <div className="h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className="object-cover w-full h-full"
          src={"http://localhost:5000/images/" + props.image}
          alt=""
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
          {props.offer}
        </div>
      </div>
      <div className="mt-3 text-xl font-bold">{props.title}</div>
      <div className="flex items-center">
        <Start /> <span className="ml-1">{props.rating}</span>
        <span className="ml-2 flex">{props.minTime} - {props.maxTime} min</span>
      </div>
      <div>
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  );
}

const Start = (props) => {
  return (
    <svg
    className={props.className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx={10}
        cy={10}
        r={9}
        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
      />
      <path
        d="M10.082 12.865a.16.16 0 00-.164 0l-2.602 1.532a.5.5 0 01-.739-.551l.699-2.822a.16.16 0 00-.054-.162L4.955 8.99a.5.5 0 01.28-.884l3-.232a.16.16 0 00.135-.096l1.17-2.714a.5.5 0 01.92 0l1.17 2.714a.161.161 0 00.135.096l3 .232a.5.5 0 01.28.884l-2.267 1.872a.16.16 0 00-.054.162l.698 2.822a.5.5 0 01-.739.55l-2.601-1.531z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="StoreRating20_svg__paint0_linear_32982_71567"
          x1={10}
          y1={1}
          x2={10}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21973B" />
          <stop offset={1} stopColor="#128540" />
        </linearGradient>
      </defs>
    </svg>
  );
};
