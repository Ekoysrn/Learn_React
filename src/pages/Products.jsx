import { useState } from "react";
import Cart from "../components/Elements/Cart.jsx";
import NavProduct from "../components/Elements/Navbar.jsx";
import { iphone } from "../data.js";
import Card from "./../components/Fragments/Card";
import TotalCart from './../components/Elements/TotalCart';

const Products = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false)

  const handleCartBtn = () => {
    setShow(!show);
  }

  const addToCart = (id) => {
    const product = iphone.find((item) => item.id === id);

    setCart((prevCart) => {
      const theSameItems = prevCart.find((items) => items.id === product.id);

      if (theSameItems) {
        return prevCart.map((items) =>
          items.id === product.id ? { ...items, qty: items.qty + 1 } : items
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const changeProductQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: newQuantity } : item
      )
    );
  };

  const totalPriceCart = () => {
      const total = cart.reduce((total, items) => total + (items.price * items.qty), 0);
      return total;
  }


  const deleteProductCart = (id) => {
    setCart( prevCart => prevCart.filter(item => item.id != id));
  }

  return (
    <div className="h-full bg-slate-950">
      <NavProduct showBtn={handleCartBtn}/>
      <h1 className="text-slate-100 text-xl px-8 font-medium">Product</h1>
      <div className="flex px-4">
        <div className="flex flex-wrap h-screen w-[60%] gap-4 px-4 bg-slate-950">
          {iphone.map((iphone) => {
            return (
              <div key={iphone.id}>
                <Card
                  headerImg={iphone.img}
                  titleBody={iphone.title}
                  descBody={iphone.desc}
                  footerPrice={iphone.price}
                  id={iphone.id}
                  handletoCart={addToCart}
                />
              </div>
            );
          })}
        </div>
        <div className={`bg-slate-900 w-[40%] relative ${show && 'hidden' }`}>
          <h1 className="text-slate-100 text-xl px-4 font-medium my-4">Cart</h1>
          {cart.map((item) => {
            if(!item.id) return null;
            return (
                <Cart
                key={item.id}
                img={item.img}
                name={item.title}
                price={item.price}
                qty={item.qty}
                plus={() => changeProductQuantity(item.id, item.qty + 1)}
                min={() => changeProductQuantity(item.id, item.qty - 1)}
                del={() => deleteProductCart(item.id)}
              />
            );
          })}
          <TotalCart total={totalPriceCart()}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
