import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { THEME_COLOR, globalStyles } from './Styles'
import { fontFamilyVar, imagePaths } from '../../store/utils/CommonVariables'

export default function Loading() {
  return (
    <ImageBackground style={[{ flex: 1, width: '100%',},globalStyles.flexBox]} source={imagePaths.BASE_TEXTURE}>
        <Image style={{width:60}} resizeMode='contain' source={imagePaths.LOADING_BOOK_GIF} />
        <Text style={{fontSize:10,color:'#946CA3',fontFamily:'LibreBaskerville-Regular'}}>Loading...</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})