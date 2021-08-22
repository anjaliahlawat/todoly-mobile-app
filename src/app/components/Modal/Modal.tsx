import React, { ReactElement } from "react";
import { Modal, Pressable, View } from "react-native";
import AppText from "../AppText/AppText";
import AppTextArea from "../AppTextArea/AppTextArea";
import styles from "./styles";

type AppModalType = {
  closeModal: () => void;
  modalVisible: boolean;
  onDescChange: (text: string) => void;
  title: string;
};

function AppModal({
  closeModal,
  modalVisible,
  onDescChange,
  title,
}: AppModalType): ReactElement {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <AppTextArea
            onChangeText={onDescChange}
            numberOfLines={8}
            value={title}
          />
        </View>
        <Pressable
          style={[styles.button, styles.buttonOrganize]}
          onPress={closeModal}
        >
          <AppText style={styles.textStyle}>Organize</AppText>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={closeModal}
        >
          <AppText style={styles.textStyle}>Close</AppText>
        </Pressable>
      </View>
    </Modal>
  );
}

export default AppModal;
