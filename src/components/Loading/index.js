import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as colors from '../../utils/colors';

const Loading = () => {
   return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.darkBlue}}>
         <ActivityIndicator size={50} color={colors.ligthBlue} />
      </View>
   )
}

export default Loading
