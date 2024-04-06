import { FlatList, Image, ImageBackground, StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Test from '../../components/Common/Test'
import { DarkTextLarge, DarkTextSmall, ItemCard, MainContainer } from '../../components/Common/StyledComponent'
import { THEME_COLOR, globalStyles, height, width } from '../../components/Common/Styles'
import ThemeToggle from '../../components/Common/ThemeToggle'
import Loading from '../../components/Common/Loading'
import { fontFamilyVar, imagePaths } from '../../store/utils/CommonVariables'

const data = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/81NSb9Jy0HL._SY522_.jpg',
    title: 'STEVE JOBS (PB): THE EXCLUSIVE BIOGRAPHY',
    author: 'by Walter Isaacson  | 5 February 2015',
    type: 'Paperback',
    Actual_price: '699',
    discount_price: '455',
    discount_percentage: '35%'
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71IIC0n4cBL._SY522_.jpg',
    title: 'Einstein : HIS LIFE AND UNIVERSE',
    author: 'by Walter Isaacson  | 6 May 2008',
    type: 'Paperback',
    Actual_price: '699',
    discount_price: '468',
    discount_percentage: '36%'
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/81KAg5fnOhL._SY522_.jpg',
    title: 'Elon Musk (B)',
    author: 'by Ashlee Vance  | 8 April 2021',
    type: 'Paperback',
    Actual_price: '699',
    discount_price: '414',
    discount_percentage: '21%'
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/51QGnpfjdjL._SX342_SY445_.jpg',
    title: 'The Autobiography of Benjamin Franklin (Deluxe Hardbound Edition)',
    author: 'by Benjamin Franklin (Author)',
    type: 'Hardcover',
    Actual_price: '399',
    discount_price: '289',
    discount_percentage: '28%'
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Wings Of Fire An Autobiography',
    author: 'by Arun Tiwari and A. P. J. Abdul Kalam  | 1 January 1999',
    type: 'Paperback',
    Actual_price: '499',
    discount_price: '299',
    discount_percentage: '40%'
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/31ELXnGpJrL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Leonardo da Vinci: A Memory of His Childhood',
    author: 'by Sigmund Freud  | 24 June 1999',
    type: 'Hardcover',
    Actual_price: '7348',
    discount_price: '5250',
    discount_percentage: '29%'
  },
  {
    id: 7,
    image: 'https://m.media-amazon.com/images/I/81NSb9Jy0HL._SY522_.jpg',
    title: 'STEVE JOBS (PB): THE EXCLUSIVE BIOGRAPHY',
    author: 'by Walter Isaacson  | 5 February 2015',
    type: 'Paperback',
    Actual_price: '699',
    discount_price: '455',
    discount_percentage: '35%'
  },
]

export default function HomeEmployee() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 2000)
  }, [])


  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <MainContainer style={{flex:1}}>
      <ImageBackground style={[{ flex: 1, width: '100%', height: '100%' }]} source={imagePaths.BASE_TEXTURE}>
        <ScrollView>
          <FlatList
             contentContainerStyle={{ flexGrow: 1 }}
            data={data}
            renderItem={({ item, index }) =>
              <ItemCard style={[globalStyles.rowContainer, { backgroundColor: 'transparent' }]} key={index}>
                <View style={{ backgroundColor: 'transparent', padding: 5 }}>
                  <Image style={[{ width: 100, height: 100, borderRadius: 10 }]} resizeMode='contain' source={{ uri: item.image }} />
                </View>
                <View style={[{ flex: 1, backgroundColor: 'transparent', paddingHorizontal: 5 },]}>
                  <DarkTextLarge style={[{ color: THEME_COLOR, fontFamily: fontFamilyVar.BASKER_REGULAR, fontWeight: null, width: '100%' }]}>{item.title}</DarkTextLarge>
                  <DarkTextSmall style={{ color: 'grey', width: '100%' }}>{item.author}</DarkTextSmall>
                  <DarkTextSmall style={{ color: THEME_COLOR, width: '100%', fontSize: 13, fontWeight: '800' ,paddingVertical:5}}>{item.type}</DarkTextSmall>
                  <View style={[globalStyles.rowContainer, { backgroundColor: 'transparent',paddingVertical:5 }]}>
                    <Text style={{ fontSize: 12, color: 'black' }}>₹</Text>
                    <DarkTextSmall style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>{item.discount_price} </DarkTextSmall>
                    <DarkTextSmall style={{ color: 'black', fontSize: 12, fontWeight: '400', marginTop: 3 }}> M.R.P: ₹ {item.Actual_price} ({item.discount_percentage} off)</DarkTextSmall>
                  </View>
                </View>
              </ItemCard>
            }
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </ImageBackground>
    </MainContainer>
  )
}

const styles = StyleSheet.create({})