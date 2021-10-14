import * as React from 'react';
import { Button, StyleSheet, TextInput,ScrollView } from 'react-native';
import {useEffect} from 'react'
import { Text, View } from '../components/Themed';
import { useActions, useState } from '../overmind';
import { RootTabScreenProps } from '../types';
import { RefunderStore } from '../overmind/state';
import { StoreComponent } from '../components/StoreComponent';


export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { stores } = useState();
  const [localStores, setLocalStores] = React.useState<RefunderStore[] | null>()
  const [searchText, setSearchText] = React.useState<string>('')
  const { getStores, getStoreInfo } = useActions();

  useEffect(() => {
    let asyncCallStores = async () => {
      await getStores(searchText)
      if (stores){
        setLocalStores(stores)
      }
    }
    asyncCallStores()
    console.log(localStores, 'localstores')
    
  }, [searchText])

  return (
    <View style={styles.container}>
      <View style={{marginTop: 30}}>
        <TextInput  style={{ width: 200, fontSize: 30, borderBottomWidth: 1, borderBottomColor: 'black', alignSelf: 'center'}} 
        onChangeText={text => setSearchText(text)} />
        {/* <Button title='store info get' onPress={()=>getStoreInfo('1')}></Button> */}
        <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
        {
          localStores ? localStores.map(store => {
              return <StoreComponent store={store}></StoreComponent>
            }
          ) : null
        }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
