import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JournalHeader from './Journal.header';
import Journal from '../../types/Journal.type';

const JournalCard: React.FC<{
  journal: Journal;
  menuVisible: boolean;
  toggleMenu: () => void;
  onDelete: (articleId: string) => void;
}> = ({ journal, menuVisible, toggleMenu, onDelete }) => {
  return (
    <View style={styles.card}>
      <JournalHeader
        date={journal.date}
        onEdit={() => {}}
        onToggleVisibility={() => {}}
        onDelete={() => onDelete(journal.id)}
        toggleMenu={toggleMenu}
        menuVisible={menuVisible}
        bookMark={journal.bookMark}
      />
      <View style={styles.boundary}></View>
      <Text style={styles.journalContent}>{journal.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    marginLeft: 3,
    marginRight: 3,
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
  },
  boundary: {
    padding: '0.2%',
    backgroundColor: '#BBAB8C',
    marginBottom: '2%',
    marginTop: '1.5%',
    opacity: 0.5,
  },
  journalContent: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 23,
    color: '#535247',
  },
});

export default JournalCard;
