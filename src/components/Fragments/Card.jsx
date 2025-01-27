
import Button from './../Elements/MyButton';

const Card = ({ headerImg, titleBody, descBody, footerPrice, id, handletoCart}) => {
  return (
      <div className="flex items-center mt-8 justify-center bg-gray-400 h-[70%] rounded-lg max-w-64">
        <div className='h-full'>
          <HeaderCard imageUrl={headerImg}/>
          <BodyCard title={titleBody} desc={descBody}/>
          <FooterCard price={footerPrice} id={id} handletoCart={handletoCart}/>
        </div>
      </div>
  )
}

const HeaderCard = ({imageUrl}) => {
  return (
      <div className='w-64 h-[50%] div-img'>
        <img src={`images/${imageUrl}.webp`} className="rounded-lg z-50 top-0 w-full h-full img-hov" alt="" />
      </div>
  )
}

const BodyCard = ({title, desc}) => {
  return (
    <div className='mt-4'>
      <h1 className="px-4 py-2 text-xl font-medium">{title}</h1>
        <p className="px-4 py-2 text-sm text-slate-900">
        {desc}
        </p>
    </div>
  )
}

const FooterCard = ({price, id, handletoCart}) => {
  return (
    <div className='flex items-center justify-between px-4 py-4'>
      <span className='font-semibold'>${price}</span>
      <Button style={"bg-slate-300 px-4 py-2 hover:bg-slate-400"} text={"Buy Now"} onclick={() => handletoCart(id)}/>
    </div>
  )
}


export default Card;
