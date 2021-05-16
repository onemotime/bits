import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';

import styles from './styles';

const ReusableModal = ({
  message,
  visible,
  onButtonPress
}) => {

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
    >
      <View style={styles.moddalWrapper}>
        <View style={styles.modal}>
          <Text style={styles.infoText}>{message}</Text>
          <Pressable
            style={styles.modalBtn}
            onPress={onButtonPress}
          >
            <Text style={styles.confirmText}>확인</Text>
          </Pressable>
        </View>
      </View>
  </Modal>
  );
};

export default ReusableModal;
