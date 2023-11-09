import { useContext } from "react"
import { ImageContext } from "../App"
import Image from "./Image";
import Loading from "./Loading";

function ImagesResult() {
  const { response, isPending, } = useContext(ImageContext)
  return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 px-6'>
        {isPending ? <Loading/> : response.map((data) => <Image data={data} />)}     
        </div>  
    </>
  )
}

export default ImagesResult