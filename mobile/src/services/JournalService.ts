import AsyncStorage from '@react-native-async-storage/async-storage';
import Journal from '../types/Journal.type';

const generateID = () => Date.now().toString();
const getCurrentDate = () => new Date().toString();
export const createJournal = async (content: string) => {
  const newJournal: Journal = {
    id: generateID(),
    date: getCurrentDate(),
    content: content,
    bookMark: false,
    publish: false,
  };

  await AsyncStorage.setItem(
    `journal:${newJournal.id}`,
    JSON.stringify(newJournal),
  );
  const indexJson = await AsyncStorage.getItem('articleIndex');
  const index = indexJson ? JSON.parse(indexJson) : [];
  const updatedIndex = [...index, newJournal.id];
  await AsyncStorage.setItem('articleIndex', JSON.stringify(updatedIndex));

  return newJournal;
};
