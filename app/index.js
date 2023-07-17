
import { useState } from "react";
import { View,ScrollView,SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import React from 'react'


import {Nearbyjobs, Popularjobs,ScreenHeaderBtn,Welcome} from '../components'


import {COLORS,icons,images,SIZES} from '../constants'

console.log(COLORS)

const Home = () => {

  const router = useRouter()


  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
      <Stack.Screen
      options={{
        headerStyle: {backgroundColor: COLORS.white},
        headerShadowVisible: false,

       headerTitle: '',
        headerLeft : ()=>(
          <ScreenHeaderBtn iconsUrl = {icons.menu} dimention = "60%"/>
        ),
        headerRight : ()=>(
          <ScreenHeaderBtn iconsUrl = {icons.profile} dimention = "100%"/>
        )
      }}
      />
       <ScrollView showsVerticalScrollIndicator = {false}>

       </ScrollView>
    </SafeAreaView>
  )
}

export default Home;