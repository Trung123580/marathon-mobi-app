import React, { useState } from 'react'
import { FlatList, Image, RefreshControl, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'

const home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const handleRefresh= async () => {
    setRefreshing(true)
    // call lai api
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList 
        data={[{id: 1}, {id: 2 }, {id: 3}, {id: 4}, {id: 5}]}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text className="text-gray-100 text-3xl">{item.id}</Text>}
        ListHeaderComponent={()=> (
          <View className="my-6 px-4 space-y-4">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-semibold text-gray-100 text-2xl">Home</Text>
                <Text className="text-gray-500 text-sm">Welcome, X media!</Text>
              </View>
              <View className="mt-1.5">
                <Image source={images.logoSmall} className="w-9 h-10" resizeMode='contain'/>
              </View>
            </View>
            <SearchInput type="text" placeholder="Search Media"/>
            <Trending posts={['https://cdn.timanh.vn/chay365-long-run---tuan-145-250312/X0900315-thumb.jpg', 'https://cdn.timanh.vn/chay365-long-run---tuan-145-250312/X0900315-thumb.jpg', 'https://cdn.timanh.vn/chay365-long-run---tuan-145-250312/X0900315-thumb.jpg']} />
            
            {/* <View className='w-full flex-1 pt-5 pb-8'>
              <Text className="text-gray-100 text-lg font-pregular">Search Media</Text>
            </View> */}
            {/* <Trending posts={[{id: 1}, {id: 2 }, {id: 3}, {id: 4}, {id: 5}]}/> */}
          </View>
        )} 
        // hien thi khi ko co data 
        ListEmptyComponent={() => (
         <EmptyState title="not media" subtitle="no media x video"/>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}

      />
    </SafeAreaView>
  )
}

export default home
