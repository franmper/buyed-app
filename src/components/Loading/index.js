import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loading = () => {
   return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
         <ActivityIndicator size={50} />
      </View>
   )
}

export default Loading