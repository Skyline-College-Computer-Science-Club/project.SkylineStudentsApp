import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const eventsData = [
  {
    id: '1',
    title: 'Computer Science Club Meeting',
    time: '1:10 PM - 2:00 PM',
    location: 'Building 7, Room 7-324',
    img: require('@/assets/images/cscMeeting.png'),
  },
  {
    id: '2',
    title: 'STEM Clubs Boba Social',
    time: '3:00 PM - 4:00 PM',
    location: 'STEM Center',
    img: require('@/assets/images/bobaSocial.jpg'),
  },
  {
    id: '3',
    title: 'Tech Career Fair',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Hall',
    img: require('@/assets/images/bobaSocial.jpg'),
  },
  // Add more events here...
];

function EventCard({ title, time, location, img }: { title: string; time: string; location: string; img: ImageSourcePropType }) {
  return (
    <View style={styles.eventCard}>
      <Image source={img} style={styles.eventImage} resizeMode="cover" />
      <View style={styles.eventInfo}>
        <ThemedText style={styles.eventTitle}>{title}</ThemedText>
        <View style={styles.eventDetails}>
          <ThemedText style={styles.eventLocation}>📍 {location}</ThemedText>
          <ThemedText style={styles.eventTime}>{time} ⏰</ThemedText>
        </View>
      </View>
    </View>
  );
}

const AllEventsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredEvents(eventsData); // Reset to all events if search query is empty
    } else {
      // Filter events based on the query (case-insensitive)
      const filtered = eventsData.filter((event) =>
        event.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  };

  const renderEvent = ({ item }: { item: typeof eventsData[0] }) => (
    <EventCard title={item.title} time={item.time} location={item.location} img={item.img} />
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        All Events
      </ThemedText>

      <TextInput
        placeholder="Search events..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchBar}
      />

      <FlatList
        data={filteredEvents}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 16,
  },
  eventCard: {
    height: 128,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
    position: 'relative',
  },
  eventImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  eventInfo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  eventTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  eventLocation: {
    fontSize: 12.5,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  eventTime: {
    fontSize: 12.5,
    color: '#A0FF95',
    fontWeight: '600',
  },
});

export default AllEventsScreen;
