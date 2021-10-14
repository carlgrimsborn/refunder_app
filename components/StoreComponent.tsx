import React from 'react'
import { View ,Text,Image} from 'react-native'
import { RefunderStore } from '../overmind/state'
type Props = {
    store: RefunderStore
}
export const StoreComponent: React.FC<Props> = ({store}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}} key={store.id}>
                <Image style={{height: 30,  width: 50,resizeMode: 'contain' }} source={{uri: store.logo}} ></Image>
                <Text>{store.name}</Text>
                <Text> {store.cashback}</Text>
        </View>
    )
}