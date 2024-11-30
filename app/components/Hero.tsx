import Image from "next/image";
export default function Hero() {
  return (
    <div className="min-h-96 mt-16 grid grid-cols-2">
        <div>
      <h1 className="text-white ml-32 mt-32 text-4xl font-bold ">
        I`M <span className="text-amber-500">ATTAU REHMAN
        </span>
      </h1>
      <p className="text-white ml-32 text-sm font-bold pt-2">
        Web developer / UI Designer / Graphic Designer
      </p>
      <p className="text-white ml-32 w-96 pt-2 ">
        orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquetodio mattis.
      </p>
      </div>
        <div>
        <Image
          src={"/Designer.jpg"}
          alt="Geeks for Geeks"
          width={400}
          height={400}
          className="rounded-full  mt-15 ml-48 border-4 border-amber-500 shadow-lg  shadow-zinc-500 hover:shadow-zinc-600 hover:shadow-xl "/>
        </div>
        
        <div className="">
        <hr className="border-b border-gray-300 mx-72 w-full " />
        </div>
      </div>
    
  );
}








