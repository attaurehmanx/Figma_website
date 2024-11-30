
export default function contact() {
    return(

        <div className="text-white mt-52 ml-20">
            <h1 className="text-4xl font-bold text-amber-500">Get In Touch</h1>
            <p className="text-balance w-3/5 mt-5 text-stone-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi voluptatum recusandae eveniet earum at temporibus libero architecto incidunt neque.</p>
            <div className="mt-5 ">
            <input type="text" placeholder="Enter your name" className="bg-stone-900 border-2 border-solid border-neutral-100 rounded-md w-2/5 h-10 pl-3" />
            </div>
            <div className="mt-5">
            <input type="email" placeholder="Enter your email" className="bg-stone-900 border-2 border-solid border-neutral-100 rounded-md w-2/5 h-10 pl-3" />
            </div>
            <div className="mt-5">
            <textarea name="" id="" placeholder="Enter Message" className="bg-stone-900 border-2 border-neutral-100 rounded-md w-2/5 h-20 pl-3"></textarea>
            <div className="py-3">
            <button className="bg-amber-500 w-28  rounded-md h-8 p-0 hover:text-stone-900">Send Message</button>
            </div>
            </div>
        </div>
    ) 
}