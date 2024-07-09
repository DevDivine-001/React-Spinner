import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners";


// export default function Spinner() {
//   const [text, setText] = useState('');
//   const [showImg, setShowImg] = useState(false)
//   useEffect(() => {
//     setShowImg(false)
//     setTimeout(() => {
//       setShowImg(true)
//       setText('i wanted for 3 seconds to be loaded, did you see the spinner')
//     }, 3000)
//   }, [])
//   return (
//     <>
//       <div>
//         {
//           showImg ? 
//         <ClipLoader color={'#D00218'}/>
//            : (
//             <h1>{text}</h1>
//           )
//         }
//       </div>
//     </>
//   )
// }




// import { useEffect, useState } from "react"
// import { ClipLoader } from "react-spinners";


export default function Spinner() {

  const [showImg, setShowImg] = useState(false)
  useEffect(() => {
    setShowImg(true)
    setTimeout(() => {
      setShowImg(false)
    
    }, 3000)
  }, [])
  return (
    <>
      <div className="justify-center items-center flex w-[30%] p-3">
        {
          showImg ?
            <ClipLoader color={'#D00218'} />
            :
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur dolorem officia voluptatibus fugit, rerum sint corrupti itaque possimus quam sed temporibus praesentium architecto ducimus tenetur voluptatum magnam amet! Quod.</div>
        }
      </div>
    </>
  )
}
