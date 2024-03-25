import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ModalHeaderProps {
  formattedDate: string;
  onSaveArticle: () => void;
}

const JournalModalHeader: React.FC<ModalHeaderProps> = ({
  formattedDate,
  onSaveArticle,
}) => (
  <View style={styles.modalHeader}>
    <Text style={styles.modalDate}>{formattedDate}</Text>
    <TouchableOpacity onPress={onSaveArticle}>
      <MaterialCommunityIcons
        name="checkbox-marked-outline"
        size={30}
        color="#B7B7B7"
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginRight: 10,
  },
  modalDate: {
    marginLeft: 10,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#B7B7B7',
  },
});

export default JournalModalHeader;
