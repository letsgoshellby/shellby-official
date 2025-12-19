import Image from "next/image"

export default async function NewsPage() {

  return (
    <section className="mt-16 w-screen text-center">
      <div className="max-w-[768px] mx-auto px-4 md:px-8">
        <div>

        </div>
        <h1 className=" text-3xl font-extrabold">셸비 소식</h1>
        <div>
          <Image 
          src="/shellby.png" 
          alt="셸비" 
          width={256}
          height={256}
          className=" w-20 h-12"
          />

        </div>
      </div>
    </section>
  )
}