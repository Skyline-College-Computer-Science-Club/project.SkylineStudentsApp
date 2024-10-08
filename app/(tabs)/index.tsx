import { View, Image, Text, StyleSheet, Platform, ImageSourcePropType } from 'react-native'
// import { Image } from 'expo-image'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

import { UserConfig } from '@/constants/UserConfig'

import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

function EventCard({ title, time, location, img }: { title: string, time: string, location: string, img: ImageSourcePropType }) {  
  return (
    <View className='h-32 overflow-hidden'>
      <Image
        source={img}
        className='absolute w-full h-full rounded-lg'
      />
      <View className='absolute w-full bottom-0 bg-black/75 backdrop-blur-lg py-1 rounded-lg'>
        <Text className='px-2 text-lg text-white font-bold'>{title}</Text>
        <View className='flex flex-row justify-between px-2'>
          <Text className='text-[12.5px] text-white font-bold'>📍 {location}</Text>
          <Text className='text-[12.5px] text-green-100 font-bold'>{time} ⏰</Text>
        </View>
      </View>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF5454FF', dark: '#740101FF' }}
      headerImage={
        <Image
          source={require('@/assets/images/backdrop.png')}
          className='w-full h-[144%]'
        />
      }>

      <ThemedView className='flex flex-row justify-center items-center gap-2'>
        <View>
          <ThemedText className='mt-2' type='title'>Hello, <Text className='text-red-400'>{UserConfig.displayName}!</Text></ThemedText>
          <ThemedText className='text-center'>Let's Explore Your <ThemedText className='font-bold'>Campus</ThemedText>.</ThemedText>
        </View>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedText type='subtitle' className='border-b-[1px] border-yellow-500 pb-2'>🎉 Today's Events</ThemedText>
      <ThemedView className='gap-2'>
        <EventCard
          title='Computer Science Club Meeting Test'
          time='1:10 PM - 2:00 PM'
          location='Building 7, Room 7-324'
          img={require('@/assets/images/cscMeeting.png')}
        />
        <EventCard
          title='STEM Clubs Boba Social'
          time='3:00 PM - 4:00 PM'
          location='STEM Center'
          img={require('@/assets/images/bobaSocial.jpg')}
        />
      </ThemedView>

      <ThemedText type='subtitle' className='border-b-[1px] text-ce border-neutral-200 pb-2'>🔍 Your Campus Insights </ThemedText>

      <View className='flex flex-row flex-wrap justify-between items-center gap-2'>
        <ThemedView darkColor='#7f1d1d' lightColor='#CA4343FF' className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 rounded-2xl'>
          <MaterialIcons name="event" size={32} color="#FFF" />
          <Text className='font-bold text-white'>My Calender</Text>
        </ThemedView>
        <ThemedView darkColor='#385515' lightColor='#689B2AFF' className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 rounded-2xl'>
          <MaterialCommunityIcons name="party-popper" size={32} color="#FFF" />
          <Text className='font-bold text-white'>Upcoming Events</Text>
        </ThemedView>
        <ThemedView darkColor='#00384E' lightColor='#1A7CA3FF' className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 rounded-2xl'>
          <MaterialIcons name="emoji-events" size={32} color="#FFF" />
          <Text className='font-bold text-white'>Opportunities</Text>
        </ThemedView>
        <ThemedView darkColor='#673A15' lightColor='#CA8853FF' className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 rounded-2xl'>
          <FontAwesome6 name="boxes-stacked" size={32} color="#FFF" />
          <Text className='font-bold text-white'>Resources</Text>
        </ThemedView>
      </View>

      <ThemedText>Todo List:</ThemedText>
      <Text className='text-white'>Test</Text>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
