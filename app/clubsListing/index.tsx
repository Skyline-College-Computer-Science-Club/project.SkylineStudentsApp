import { View, Text, ImageSourcePropType, TextInput } from 'react-native'
import { Image as ExpoImage } from 'expo-image'
import { FlashList } from '@shopify/flash-list'
import { Link } from 'expo-router'
import { useState } from 'react'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { UserConfig } from '@/constants/UserConfig'
import FilterSelector from '@/components/FilterSelector'

import Feather from '@expo/vector-icons/Feather';

import { Clubs } from '@/constants/Clubs';
import ReturnHome from '@/components/ReturnHome'

function ClubCard({ title, backdrop, logo }: { title: string, time: string, location: string, backdrop: ImageSourcePropType, logo: ImageSourcePropType }) {
    return (
        <View className='flex flex-row items-center h-28 rounded-2xl overflow-hidden'>
            <Link href={`./details/${title}`} className='z-10 absolute w-full h-full' />

            {/* club card backdrop img */}
            <ExpoImage source={backdrop} contentFit='cover' style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 8 }} />

            {/* dark contrast overlay */}
            <View className='absolute w-full h-full bg-black/50' />

            {/* club title and club logo */}
            <View className='flex flex-row w-full justify-between items-center p-4'>
                <Text className='text-white text-2xl font-bold'>{title}</Text>
                <ExpoImage source={logo} style={{ width: 76, height: 76, borderRadius: 9999 }} />
            </View>

            {/* side color tags */}
            <View className='absolute h-full'>
                <View className='absolute border-l-4 border-neutral-300/75 w-full h-[100%]'></View>
                {/* <View className='border-l-4 border-sky-400/75 w-full h-[33%]'></View>
                <View className='border-l-4 border-red-400/75 w-full h-[33%]'></View>
                <View className='border-l-4 border-lime-400/75 w-full h-[33%]'></View> */}
                {/* <View className='border-l-4 border-yellow-300/75 w-full h-[100%]'></View> */}
            </View>
        </View>
    )
}

export default function ClubsListing() {

    const [ searchTerm, setSearchTerm ] = useState('')

    return (
        <View className='w-full h-full'>
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#FF5454FF', dark: '#740101FF' }}
                headerImage={
                    <ExpoImage 
                        source={require('@/assets/images/backdrop.png')}
                        contentFit='cover'
                        contentPosition={{top: '10%'}}
                        style={{ width: '100%', height: '114%' }}
                    />
                }
            >
                {/* title bar, also shows current search term if inputted */}
                <ThemedText type='subtitle' className='border-b-[1px] text-center border-neutral-200 pb-2'>
                    {searchTerm.length > 0 ? `Searching: '${searchTerm}'` : 'Discover Student Clubs'}
                </ThemedText>

                <FilterSelector />

                {/* club listing */}
                <View className='gap-2'>
                    {Object.entries(Clubs).map(([key, value]) => {
                        return (
                            <ClubCard
                                key={key}
                                title={key}
                                backdrop={value.backdropImg}
                                logo={value.logoImg}
                            />
                        )
                    })}
                </View>

                <ReturnHome />

            </ParallaxScrollView>


            {/* overlayed bottom search bar */}
            <TextInput
                onChangeText={setSearchTerm}
                value={searchTerm}
                placeholder='🔎  Search for Clubs'
                placeholderTextColor='gray'
                className='absolute font-bold text-center text-xl bottom-0 w-full rounded-t-3xl text-white p-4 bg-neutral-800'
            />
        </View>
    );
}