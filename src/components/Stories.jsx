import React from "react"
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid"
import { ClockIcon } from "@heroicons/react/24/outline"
import Title from "./utils/Title"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { truncate } from "lodash"
import "@splidejs/react-splide/css"

function Stories({ story: { title, icon, news } }) {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  }

  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-7">
          <Splide hasTrack={false} options={splideOptions}>
            <SplideTrack>
              {news.map((val, i) => (
                <SplideSlide key={i} className="mb-0.5">
                  <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                    <div className="flex items-center justify-center">
                      <img
                        src={val.img}
                        alt={`img/story/${i}`}
                        className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      />
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                      <div className="flex items-center g-0.5">
                        <HeartIcon className="icon-style text-red-500 w-5 -h-5" />
                        <span className="text-xs font-bold">{val.like}</span>
                      </div>
                      <div className="flex items-center g-0.5">
                        <ClockIcon className="icon-style w-4 h-4 text-[#000]" />
                        <span className="text-xs font-bold">{val.time}</span>
                      </div>
                      <div className="flex items-center g-0.5">
                        <HashtagIcon className="icon-style text-blue-600" />
                        <span className="text-xs font-bold text-blue-600">
                          {val.by}
                        </span>
                      </div>
                    </div>
                    <div className="grid items-center justify-items-start px-4">
                      <h1 className="text-base font-semibold lg:text-sm">
                        {val.title}
                      </h1>
                      <p className="text-sm text-justify lg:text-xs">
                        {truncate(val.text, { length: 175 })}
                      </p>
                    </div>

                    <div className="flex items-center justify-center px-4 w-full">
                      <a
                        href={val.url}
                        target="_blank"
                        role={"button"}
                        className="w-full bg-slate-900 bg-gradient-to-b from-slate-900 to-[#000] shadow-md shadow-[#000] text-center text-slate-100 py-1.5 button-theme"
                      >
                        {val.btn}
                      </a>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <img
                  src={icon}
                  alt="img/arrow"
                  className="rotate-[180deg] w-[24px] h-auto"
                />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <img src={icon} alt="img/arrow" className="w-[24px] h-auto" />
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </>
  )
}

export default Stories
