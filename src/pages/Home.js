import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Flatcards from '../components/Flatcards';
import ElevatedCard from '../components/ElevatedCard';
import FancyCard from '../components/FancyCard';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';

const Home = () => {
  return (
    <View>
      <ScrollView>
        <Flatcards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </View>
  );
};

export default Home;
