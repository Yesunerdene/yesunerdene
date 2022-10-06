import React from 'react'
import config from '../config';
import {Container} from 'react-bootstrap'

function Techlonogy() {
  return (
    <Container className="my-card my-info">
      <p className="card-title">Technological background</p>
      {config?.technologies?.map((item) => (
        <div>
          <p className="title">{item.language}
          {item?.techs?.map((subItem) => (
            <span className="title">{` | ${subItem}`}</span>  
          ))}   
          </p> 
        </div>
      ))}
    </Container>
  )
}

export default Techlonogy;
