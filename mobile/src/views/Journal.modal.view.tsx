import React from 'react';
import JournalModal from '../components/JournalModal/Journal.modal';
import Journal from '../types/Journal.type';

const JournalModalView: React.FC<{
  modalVisible: boolean;
  toggleModal: () => void;
  addNewJournal: (newArticle: Journal) => void;
}> = ({ modalVisible, toggleModal, addNewJournal }) => {
  return (
    <JournalModal
      isVisible={modalVisible}
      onClose={toggleModal}
      addNewJournal={addNewJournal}
    />
  );
};

export default JournalModalView;
