interface Iprops{
    header: string,
    text?:string,
}
function TextProducts({header, text}:Iprops) {
  return (
      <div>
          <h3 className="">{header}</h3>
          <p className="">{text}</p>
    </div>
  )
}

export default TextProducts