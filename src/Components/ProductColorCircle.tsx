interface Iprops{
    bg?:string
}
function ProductColorCircle({bg = 'gray-600'}:Iprops) {
  return (
      <span className={` bg-${bg} rounded-full cursor-pointer w-5 h-5 `} />
  )
}

export default ProductColorCircle