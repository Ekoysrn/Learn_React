const TotalCart = ({ total }) => {

  return (
    <div className="bg-slate-400 absolute w-full bottom-40 rounded-lg p-6 items-center flex justify-between">
      <h1 className="font-medium">Total : <span>{ total }</span></h1>
      <button className="bg-slate-300 px-4 py-2 rounded-lg font-medium">Checkout</button>
    </div>
  )
}

export default TotalCart;