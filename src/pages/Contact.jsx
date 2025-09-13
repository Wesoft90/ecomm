import React from 'react'
import { useParams } from 'react-router';

const Contact = () => {
  const {work} = useParams();

  return(
    <div>
      Contact:{work}
    </div>
  )
}

export default Contact;