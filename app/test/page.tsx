import Test from '@/components/Test'
import React from 'react'

interface ParentProps {
    myProp: string;
}

const ParentComponent: React.FC<ParentProps> = ({myProp}) => {
  return (
    <div>
      <Test myProp={myProp} />
      </div>
  )
}

export default ParentComponent