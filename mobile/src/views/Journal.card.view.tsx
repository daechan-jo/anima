import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import JournalCard from '../components/JournalCard/Journal.card';
import { Feather } from '@expo/vector-icons';
import Journal from '../types/Journal.type';

const JournalCardView: React.FC<{
  journal: Journal[];
  journalMenuVisible: string | null;
  toggleMenu: (id: string) => void;
  deleteJournal: (id: string) => void;
  toggleModal: () => void;
}> = ({
  journal,
  journalMenuVisible,
  toggleMenu,
  deleteJournal,
  toggleModal,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={toggleModal}>
          <Feather name="edit-3" size={24} color="#B7B7B7" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={journal}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JournalCard
            journal={item}
            menuVisible={journalMenuVisible === item.id}
            toggleMenu={() => toggleMenu(item.id)}
            onDelete={deleteJournal}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    height: 50, // todo
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 10, // todo
    marginRight: 20, // todo
  },
  listContainer: {
    padding: 10, // todo
  },
});

export default JournalCardView;
