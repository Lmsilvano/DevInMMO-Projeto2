import React, { useState } from 'react'
import { StyledDivGallery } from './styles'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function Gallery({ img }) {
  const [indexG, setIndexG] = useState(0)
  const handdleClick = (arg) => {
    if (indexG >= img.length - 1 && arg === 'r') {
      return setIndexG(0)
    } else if (arg === 'r') {
      return setIndexG(indexG + 1)
    } else if (arg === 'l') {
      if (indexG === 0) {
        return setIndexG(img.length - 1)
      } else {
        return setIndexG(indexG - 1)
      }
    }
  }
  if (typeof img != 'object') {
    return (
      <StyledDivGallery>
        <img src={img} alt=""></img>
      </StyledDivGallery>
    )
  } else if (img.length > 1) {
    return (
      <StyledDivGallery>
        {img.map((item, i) => {
          return (
            <React.Fragment key={new Date().getTime() + i}>
              {indexG === i && (
                <div className="MainIMG">
                  <FaArrowAltCircleLeft onClick={() => handdleClick('l')} />
                  <img src={item.image} key={item.id} alt="" />
                  <FaArrowAltCircleRight onClick={() => handdleClick('r')} />
                </div>
              )}
            </React.Fragment>
          )
        })}

        <div className="SecondaryIMG">
          {img.map((item, i) => {
            return (
              <React.Fragment key={new Date().getTime() + i + 1}>
                {indexG !== i && <img src={item.image} key={item.id} alt="" />}
              </React.Fragment>
            )
          })}
        </div>
      </StyledDivGallery>
    )
  }
}

export default Gallery
