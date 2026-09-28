// import { useState } from "react"


// function Count(){

//     const [isCount,setIsCount] = useState(0)

//     const Increament = () =>{
//        setIsCount(isCount + 1)
//     }
    
//     return (
//         <div>
//             <h1 className="font-bold py-10">Counting number</h1>
             
//              <div className="flex items-center gap-10">
//                 <button onClick={()=>setIsCount(isCount -1)} className="bg-red-600 text-white px-5 py-2 rounded-sm">-</button>
//                 <h3 className="text-3xl font-bold">{isCount}</h3>
//                 <button onClick={Increament} className="bg-green-600 text-white px-5 py-2 rounded-sm">+</button>
//              </div>
//         </div>
//     )
// }

// export default Count

import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Count() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
     setCalculation(() => count * 2);
   
    
  }, [count]);

  return (
    <div className='flex gap-30 justify-center items-center h-[30vh]'>
      <p>Count: {count}</p>
      <button className='bg-green-600 text-white px-10 rounded-md py-2'onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Count />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
);


 export default Count



