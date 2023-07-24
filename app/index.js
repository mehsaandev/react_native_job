import { useState } from "react";
import { View,ScrollView,SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import React from 'react'


import {Nearbyjobs, Popularjobs,ScreenHeaderBtn,Welcome} from '../components'


import {COLORS,icons,images,SIZES} from '../constants'
import { SearchBar } from "react-native-screens";

const Home = () => {

  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")


  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
      options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,

       headerTitle: '',
        headerLeft : ()=>(
          <ScreenHeaderBtn iconsUrl = {icons.menu} dimention = "60%"/>
        ),
        headerRight : ()=>(
          <ScreenHeaderBtn iconsUrl = {images.profile} dimention = "100%"/>
        )
      }}
      />
       <ScrollView showsVerticalScrollIndicator = {false}>
      <View
      style={{
        flex: 1,
        padding: SIZES.medium
      }}
      >
        <Welcome
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
        handleClick = {()=>{
          if(searchTerm){
            router.push(`/search/${searchTerm}`)
          }
         
        }}
        />

        <Popularjobs/>
        <Nearbyjobs/>

      </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home;