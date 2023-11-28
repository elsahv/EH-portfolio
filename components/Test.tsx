import React from 'react'


interface CardProps {
  myProp: string;
}
const Test:React.FC<CardProps> = ({myProp}) => {
  return (
    <div>
      <p>{myProp}</p>
    </div>
  )
}

export default Test