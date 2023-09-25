import Image from 'next/image';
import LeftSide from '../components/LeftSide'
import Websites from '../components/Websites'
import { getResources } from '@/sanity/actions'
 
interface Props {
  id: string;
  title: string;
  image: string;
 
}



export default async function Home({
  id,
  title,
  image
}: Props) {
 const resources = await getResources({
  query: '',
  category: '',
  page: '1',
 })


  return (
    <main>
     <LeftSide />

     {/* //*RIGHTSIDE v */}
     <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden p-5"
      id="right-side"
    >
     <Websites />
      <>
      {resources.map((resource:any) => (
        <div key={resource._id}>
          <h2>{resource.title}</h2>
          <Image
             src={resource.image}
             alt={resource.name}
             width={450}
             height={400}
             className="border border-black"
             />
        </div>
      ))}
      </>
    </section>
 
    </main>
  )
}
