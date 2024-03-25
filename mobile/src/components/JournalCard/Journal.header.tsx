import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import formatJournalDate from '../../utils/formatJournalDate';
import JournalButton from './Journal.button';

export interface JournalHeaderProps {
  date: string;
  onEdit: () => void;
  onToggleVisibility: () => void;
  onDelete: () => void;
  toggleMenu: () => void;
  menuVisible: boolean;
  bookMark: boolean;
}

const JournalHeader: React.FC<JournalHeaderProps> = ({
  date,
  onEdit,
  onToggleVisibility,
  onDelete,
  toggleMenu,
  menuVisible,
  bookMark,
}) => (
  <View style={styles.journalHeader}>
    <Text style={styles.journalDate}>{formatJournalDate(date)}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {bookMark && <JournalButton name="bookmark" onPress={onEdit} />}
      {menuVisible && (
        <>
          <JournalButton name="edit" onPress={onEdit} />
          <JournalButton name="eye" onPress={onToggleVisibility} />
          <JournalButton name="trash-2" onPress={onDelete} />
        </>
      )}
      <JournalButton name="more-horizontal" onPress={toggleMenu} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  journalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  journalDate: {
    marginBottom: 5,
    fontSize: 13, // todo rem 단위 변경
    fontWeight: 'bold',
    color: '#837c6d',
  },
});

export default JournalHeader;
