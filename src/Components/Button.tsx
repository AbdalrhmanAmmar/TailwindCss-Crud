interface Iprops{
    bg?: string,
    text:string,
}

function Button({bg ='green-500',text}:Iprops) {
  return (
      <button className={`bg-${bg} w-full p-2 rounded-md hover:opacity-90`}>{text}</button>
  )
}

export default Button