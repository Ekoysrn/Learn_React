import image from '../../assets/2.jpg'

const Image = () => {
  return (
    <div className='hidden md:w-1/2 md:block'>
        <img src={image} alt=""></img>
    </div>
  )
}

export default Image;