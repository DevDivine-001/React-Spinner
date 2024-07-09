import { useEffect, useState } from "react"
import svg from "../../public/Spinner@1x-1.0s-200px-200px.svg"

export default function Spinner() {
  const [text, setText] = useState('');
  const [showImg, setShowImg] = useState(true)
  useEffect(() => {
    setShowImg(false)
    setTimeout(() => {
      setText('i wanted for 3 seconds to be loaded, did you see the spinner')
    }, 3000)
  }, [])
  return (
    <>
      <div>
        {
          showImg ? (
            <img src={svg} />
          ) : (
            <h1>{text}</h1>
          )
        }
      </div>
    </>
  )
}




// function SpinnerLoaded() {
//   const [text, setText] = useState('')
//   useEffect(() => {
//     setTimeout(() => {
//       setText('i wanted for 3 seconds to be loaded, did you see the spinner')
//     })
//   }, 3000)
//   return (
//     <div>

//     </div>
//   )
// }

// export default SpinnerLoaded
