const Cart = ({ img, name, qty, price, plus, min }) => {

  return (
    <div className="bg-transparent backdrop-blur-2xl">
      <div className="bg-slate-400 flex items-center my-2 rounded-lg">
        <div className="">
          <img
            src={`images/${img}.webp`}
            className="size-28 div-img rounded-lg"
            alt=""
          />
        </div>
        <div className="px-4">
          <h1 className="py-2 text-lg font-medium text-slate-800">{name}</h1>
          <div className="flex gap-2">
            <p className="font-medium">${price} x</p>
            <button className="bg-slate-900 text-slate-50 pt-[0px] pb-1 px-2 rounded-sm" onClick={plus}>
              +
            </button>
            <p className="font-medium">{qty}</p>
            <button className="bg-slate-900 text-slate-50 pt-[0px] pb-1 px-[10px] rounded-sm" onClick={min} disabled={qty <= 1}>
              -
            </button>

            <p className="font-medium"> = ${price * qty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
