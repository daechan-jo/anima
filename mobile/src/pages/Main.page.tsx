import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import JournalCardView from '../views/Journal.card.view';
import JournalModal from '../views/Journal.modal.view';
import Journal from '../types/Journal.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [journal, setJournal] = useState<Journal[]>([]);
  const [journalMenuVisible, setJournalMenuVisible] = useState(null);

  useEffect(() => {
    const loadJournal = async () => {
      const indexJson = await AsyncStorage.getItem('journalIndex');
      const index = indexJson ? JSON.parse(indexJson) : [];
      const loadedJournals = await Promise.all(
        index.map(async (id: string) => {
          const articleJson = await AsyncStorage.getItem(`journal:${id}`);
          return articleJson ? JSON.parse(articleJson) : null;
        }),
      );

      const nonNullJournal = loadedJournals.filter(
        (journal) => journal !== null,
      );

      nonNullJournal.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );

      setJournal(nonNullJournal);
    };
    loadJournal();
  }, []);

  const addNewJournal = (newJournal: Journal) => {
    setJournal((currentJournals) => {
      return [newJournal, ...currentJournals];
    });
  };

  const deleteJournal = async (journalId: string) => {
    const indexJson = await AsyncStorage.getItem('journalIndex');
    let index = indexJson ? JSON.parse(indexJson) : [];

    index = index.filter((id: string) => id !== journalId);

    await AsyncStorage.setItem('journalIndex', JSON.stringify(index));

    await AsyncStorage.removeItem(`journal:${journalId}`);

    setJournal((currentJournals) =>
      currentJournals.filter((journal) => journal.id !== journalId),
    );
  };

  const toggleMenu = (id: any) => {
    journalMenuVisible === id
      ? setJournalMenuVisible(null)
      : setJournalMenuVisible(id);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <JournalCardView
        journal={journal}
        journalMenuVisible={journalMenuVisible}
        toggleMenu={toggleMenu}
        deleteJournal={deleteJournal}
        toggleModal={toggleModal}
      />
      <JournalModal
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        addNewJournal={addNewJournal}
      />
    </GestureHandlerRootView>
  );
};

export default MainPage;
