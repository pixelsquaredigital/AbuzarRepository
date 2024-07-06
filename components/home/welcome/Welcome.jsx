import React from 'react'
import { View, Text,TextInput,TouchableOpacity,FlatList,Image } from 'react-native'
import { useState } from "react";
import {useRouter } from "expo-router";
import styles from './welcome.style'
import {icons,SIZES } from "../../../constants";



const jobTypes=["Full-time","Part-time","Contractor"]
const Welcome = () => {
  const router= useRouter();
  const [activeJobType,setActiveJobType]=useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value=""
          onChange={()=>{}}
          placeholder="what are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />

  
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}
          renderItem={({item})=>(
          <TouchableOpacity 
          style={styles.tab(activeJobType,item)}
          >
            <Text>
              {item}
            </Text>
          </TouchableOpacity>
          )
          }
          vertical={false}
        />

      </View>

    </View>
    
  )
}

export default Welcome