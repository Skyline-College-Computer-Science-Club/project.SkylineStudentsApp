import { View, Text, Image, StyleSheet, Platform, ImageSourcePropType } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

import { UserConfig } from '@/constants/UserConfig';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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

      <View>
        <ThemedText className='text-center mt-2' type='title'>Hello, <Text className='text-red-400'>{UserConfig.displayName}!</Text></ThemedText>
        <ThemedText className='text-center'>Welcome to Your <ThemedText className='font-bold'>Profile</ThemedText>.</ThemedText>
      </View>

      <ThemedText type='subtitle' className='border-b-[1px] border-neutral-200 pb-2'>⚙️ Your Dashboard</ThemedText>
      
      <View className='flex flex-row flex-wrap justify-between items-center gap-2'>
        <View className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 bg-red-900 rounded-2xl'>
          <MaterialCommunityIcons name="information" size={32} color="#FFF" />
          <ThemedText className='font-bold'>My Details</ThemedText>
        </View>
        <View className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 bg-lime-800/85 rounded-2xl'>
          <MaterialCommunityIcons name="account-check" size={32} color="#FFF" />
          <ThemedText className='font-bold'>Preferences</ThemedText>
        </View>
        <View className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 bg-sky-800/50 rounded-2xl'>
          <MaterialIcons name="emoji-events" size={32} color="#FFF" />
          <ThemedText className='font-bold'>Notifications</ThemedText>
        </View>
        <View className='flex justify-center items-center gap-1 w-[49%] h-28 p-2 bg-yellow-900/90 rounded-2xl'>
          <MaterialCommunityIcons name="alien" size={32} color="#FFF" />
          <ThemedText className='font-bold'>Experimental</ThemedText>
        </View>
      </View>

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

      <View>
        <Text className='text-center text-yellow-500'>This is an app preview.</Text>
        <Text className='text-center text-neutral-500'>Report bugs/request features to the Computer Science Club.</Text>
        {/* Add a link to a google form for feedback */}
      </View>
      
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
