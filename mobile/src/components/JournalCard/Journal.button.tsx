import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IconButtonProps {
  name: React.ComponentProps<typeof Feather>['name'];
  onPress: () => void;
  style?: object;
}

const IconButton: React.FC<IconButtonProps> = ({ name, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Feather name={name} style={[styles.icon, style]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    color: '#B7B7B7',
    fontSize: 18,
    marginLeft: 8,
  },
});

export default IconButton;
