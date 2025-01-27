import { useState } from 'react'

const TotalCart = ({ total }) => {

  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  const handleOrder = async () => {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1)
    setCompleted(c => c + 1);
  }


  return (
    <div className="bg-slate-400 absolute w-full bottom-40 rounded-lg p-6 items-center flex justify-between">
      <h1 className="font-medium">Total : <span>{ total }</span></h1>
      <p>pending : {pending}</p>
      <p>complete : {completed}</p>
      <button className="bg-slate-300 px-4 py-2 rounded-lg font-medium" onClick={handleOrder}>Checkout</button>
    </div>
  )
}

function delay(ms) {
  return new Promise(resolve => 
    setTimeout(resolve, ms)
  )
}

export default TotalCart;