import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'

function Demo({ e }) {
  const [togglev, settogglev] = useState(false)
  return (
    <Col lg={3} >
      <Card className='card_column' onClick={() => settogglev((e) => !e)}>
        <div className='card_inner_img'>
          {/* {console.log(e.img)} */}
          {togglev ? e.title : e.img}
        </div>
      </Card>
    </Col>
  )
}

export default Demo
