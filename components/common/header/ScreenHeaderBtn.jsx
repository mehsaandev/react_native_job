import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconsUrl,dimention, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
      source = {iconsUrl}
      resizeMode='cover'
      style={styles.btnImg(dimention)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn