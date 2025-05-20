import React from 'react'

function Card() {
  const data = [
    {image: 'https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Cat", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores qui fuga fugiat?", available: true, conText: true},
    {image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Dog", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores qui fuga fugiat?", available: false, conText: true},
    {image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Monkey", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores qui fuga fugiat?", available: true, conText: false}
  ]
  return (
    <div  className='w-full h-screen flex items-center justify-center gap-4 bg-zinc-200'>
        {data.map((elem)=>(
          <div  className='w-52 bg-zinc-100  rounded overflow-hidden'>
            <div className='w-full h-32  bg-zinc-300 '>
                <img className='w-full h-hull object-cover' src={elem.image} alt="" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold '>{elem.name}</h2>
                <p className='leading-none text-sm mt-3 '>{elem.description}</p>
                <button onClick={()=>{elem.available ? alert("Thank you for calling me") : alert("Sorry! I'm not available right now.")}} className={`mt-3 w-full px-4 py-2 font-semibold text-xs ${elem.available ? 'bg-green-400': 'bg-red-400'} rounded text-zinc-100 `} >
                  {elem.available ? "Contact Me" : "Unavailable"}
                </button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Card