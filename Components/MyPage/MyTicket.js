import { useNavigation } from '@react-navigation/native'
import React from 'react'
import PrMyTicket from './Presenters/PrMyTicket'
const MyTicket = () => {
    const navigation = useNavigation();
  return <PrMyTicket navigation={navigation}/>
}

export default MyTicket
