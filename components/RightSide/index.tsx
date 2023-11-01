import Grid from './Grid'
// import Mindmaps from './Mindmaps'
import Footer from "../Footer";


const RightSide = () => {
  return (
   <section id="right-panel" className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden"> 
   <div className="m-5 pl-3 py-[20px] pr-[10px]">
    <Grid />
    {/* <Mindmaps /> */}
    <Footer />
    </div>
  </section>
  )
}

export default RightSide