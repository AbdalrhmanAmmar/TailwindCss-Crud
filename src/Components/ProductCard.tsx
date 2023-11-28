import car from '../../public/car.jpg'
import Button from './Button'
import ImgCard from './ImgCard'
import ProductColorCircle from './ProductColorCircle'
import TextProducts from './TextProducts'
interface Iprops{}
function ProductCard({}:Iprops) {
  return (
      <div className="border rounded-md p-2 flex flex-col py-5 m-2" >
          <ImgCard ImageUrl={car}  alt='car' classname='rounded-md'/>
          <TextProducts header='Prodcuts' text='product information '/>
          <div className='flex gap-3 my-5'>
              <ProductColorCircle />
              <ProductColorCircle bg='red-600' />
              <ProductColorCircle bg='blue-600' />

       
          </div>

          <div className='flex justify-between px-2 items-center'>
              <span>5000$</span>
              <ImgCard ImageUrl={car} alt='car' classname='rounded-full w-10 h-10' />
              

          </div>

          <div className='flex justify-center items-center gap-x-2 my-5'>
              <Button  text='Edit' />
              <Button bg='red-500' text='delete' />
          </div>
          
          
    </div>
  )
}

export default ProductCard