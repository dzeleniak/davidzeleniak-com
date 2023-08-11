import Image from 'next/image'
import oldguy from "@/public/oldguy.webp"
import fire from "@/public/fire.png"
import coffee from "@/public/coffee.webp"
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between text-green-500">
        <div className='flex flex-col'>
          <h1 className="m-5 text-2xl">
            David Zeleniak
          </h1>
          <h2 className='m-5'>
          { "// Software Engineer"}
          </h2>
        </div>
        <div className='flex flex-col '>
          <div className='flex flex-row justify-center'>
            <Image className='m-10' src={fire} height={50} alt="asdf"/>
            <Image className='m-10' src={oldguy} height={50} alt="asdf"/>
            <Image className='m-10' src={fire} height={50} alt="asdf"/>
          </div>
          <div className='flex flex-row justify-center my-5'>
            <Image  src={coffee} height={50} alt="asdf"/>
          </div>
          <div>

          </div>
        </div>

        <div className="m-5 self-center">
          work in progres...
        </div>
    </main>
  )
}
