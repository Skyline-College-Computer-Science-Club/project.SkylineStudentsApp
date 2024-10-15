import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'

import Feather from '@expo/vector-icons/Feather';



export default function FilterSelector() {

    const [ filterList, setFilterList ] = useState(Array<string>)
    const [ showList, setShowList ] = useState(false)

    function toggleFilter(filter: string) {
        const found = filterList.findIndex((element) => element == filter)
        if (found) {
            filterList.splice(found, 1)
        }
    }

    return (
        <View className='flex flex-row gap-2'>
            <Pressable onPress={() => {setShowList(!showList)}} className='flex flex-row gap-1 items-center rounded-full bg-neutral-600 px-4 py-1'>
                <Feather name='filter' size={18} color='white' />
                <Text className='font-bold text-white'>Filter</Text>
            </Pressable>
            <View className={(showList ? '' : 'hidden') + ' flex flex-row gap-2'}>
                <Pressable onPress={() => {toggleFilter('STEM')}}>
                    <Text className='font-bold rounded-full text-white bg-lime-600 px-4 py-1'>STEM</Text>
                </Pressable>
                <Pressable onPress={() => {}}>
                    <Text className='font-bold rounded-full text-white bg-amber-600 px-4 py-1'>Hobby</Text>
                </Pressable>
                <Pressable onPress={() => {}}>
                    <Text className='font-bold rounded-full text-white bg-sky-600 px-4 py-1'>Cultural</Text>
                </Pressable>
            </View>
        </View>
    )
}