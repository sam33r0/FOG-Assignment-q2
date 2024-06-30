// import React from 'react'
import Grid from "../Components/Grid";
function Home() {
  return <>
    <div className="w-screen min-h-screen bg-lime-900 flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-9">
        <div className="text-pretty text-3xl text-white md:w-[400px] flex flex-row gap-3 justify-between items-center">
          <img src="./fog-logo.webp" alt="" />
          FOG-Assignment
        </div>
        <Grid rows={15} cols={20} />
        <div className="text-pretty text-l text-white md:w-[400px] flex flex-row gap-3 justify-end items-center">
          <div></div>
          <a className="cursor-alias" href="https://github.com/sam33r0">
            -<span className="underline ">Sameer Srivastava</span> (Github)
          </a>
        </div>
      </div>
    </div>
  </>
}

export default Home