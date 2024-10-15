import { View, Text, ImageSourcePropType, TextInput } from 'react-native'
import { Image as ExpoImage } from 'expo-image'
import { FlashList } from '@shopify/flash-list'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { UserConfig } from '@/constants/UserConfig'
import { useState } from 'react'

import Feather from '@expo/vector-icons/Feather';

function ClubCard({ title, time, location, backdrop, logo }: { title: string, time: string, location: string, backdrop: ImageSourcePropType, logo: ImageSourcePropType }) {
    return (
        <View className='flex flex-row items-center h-28 rounded-2xl overflow-hidden'>

            {/* club card backdrop img */}
            <ExpoImage source={backdrop} contentFit='cover' style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 8 }} />

            {/* dark contrast overlay */}
            <View className='absolute w-full h-full bg-black/50' />

            {/* club title and club logo */}
            <View className='flex flex-row w-full justify-between items-center p-4'>
                <Text className='text-white text-2xl font-bold'>{title}</Text>
                <ExpoImage source={logo} style={{ width: 80, height: 80, borderRadius: 9999 }} />
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

export default function Clubs() {

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

                <View className='flex flex-row gap-2'>
                    <View className='flex flex-row gap-1 items-center rounded-full bg-neutral-600 px-4 py-1'>
                        <Feather name='filter' size={18} color='white' />
                        <ThemedText className='font-bold'>Filter</ThemedText>
                    </View>
                    <View className='flex flex-row gap-2'>
                        <ThemedText className='font-bold rounded-full text-white bg-lime-600 px-4 py-1'>STEM</ThemedText>
                        <ThemedText className='font-bold rounded-full bg-amber-600 px-4 py-1'>Hobby</ThemedText>
                        <ThemedText className='font-bold rounded-full bg-violet-600 px-4 py-1'>Culture</ThemedText>
                    </View>
                </View>

                {/* club listing */}
                <ThemedView className='gap-2'>
                    <ClubCard
                        title='Computer Science Club'
                        time='1:10 PM - 2:00 PM'
                        location='Building 7, Room 7-324'
                        backdrop={require('@/assets/images/clubs/photos/computer_science_club/backdrop.png')}
                        logo={require('@/assets/images/clubs/logos/computer_science_club.png')}
                    />
                    <ClubCard
                        title='Data Science Club'
                        time='12:00 PM - 1:00 PM'
                        location='Building 7, Room 7-324'
                        backdrop={require('@/assets/images/clubs/photos/data_science_club/backdrop.png')}
                        logo={require('@/assets/images/clubs/logos/data_science_club.png')}
                    />
                    <ClubCard
                        title='Engineering Robotics Club'
                        time='1:00 PM - 2:00 PM'
                        location='Building 7, The Fab Lab'
                        backdrop={require('@/assets/images/clubs/photos/engineering_robotics_club/backdrop.jpg')}
                        logo={require('@/assets/images/clubs/logos/engineering_robotics_club.webp')}
                    />
                    <ClubCard
                        title='Photography Club'
                        time='3:00 PM - 5:00 PM'
                        location='Building 4, The Intercultural Center'
                        backdrop={require('@/assets/images/clubs/photos/photography_club/backdrop.jpg')}
                        logo={require('@/assets/images/clubs/logos/photography_club.webp')}
                    />
                    <ClubCard
                        title='Filipino Student Union'
                        time='3:00 PM - 5:00 PM'
                        location='Building 4, The Intercultural Center'
                        backdrop={require('@/assets/images/clubs/photos/filipino_student_union/backdrop.jpg')}
                        logo={require('@/assets/images/clubs/logos/filipino_student_union.webp')}
                    />
                    <ClubCard
                        title='Physics Astronomy Club'
                        time='3:00 PM - 5:00 PM'
                        location='Building 4, The Intercultural Center'
                        backdrop={require('@/assets/images/clubs/photos/physics_astronomy_club/backdrop.jpg')}
                        logo={require('@/assets/images/clubs/logos/physics_astronomy_club.webp')}
                    />
                    <ClubCard
                        title='Honors Club'
                        time='3:00 PM - 5:00 PM'
                        location='Building 4, The Intercultural Center'
                        backdrop={require('@/assets/images/clubs/photos/honors_club/backdrop.jpg')}
                        logo={require('@/assets/images/clubs/logos/honors_club.png')}
                    />
                </ThemedView>

                <ThemedText className='w-full h-24 text-center font-semibold'>
                    Return to Home
                </ThemedText>

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