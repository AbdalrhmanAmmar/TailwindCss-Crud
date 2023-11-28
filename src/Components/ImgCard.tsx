import notfound from '../../public/notfound.jpg' 
interface Iprops{
    ImageUrl?: string,
    alt: string
    classname:string
}
function ImgCard({ImageUrl = notfound, alt, classname}:Iprops) {
  return (
    <img src={ImageUrl} alt={alt} className={classname} />
  )
}

export default ImgCard