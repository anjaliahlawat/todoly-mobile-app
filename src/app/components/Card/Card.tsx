import React, { ReactElement } from "react";
import { TouchableOpacity, View } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";

type CardProps = {
  count?: number;
  onPress: () => void;
  title: string;
};

function Card({ count, onPress, title }: CardProps): ReactElement {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardIndexBox}>
          <AppText style={styles.cardIndex}>{`${count}`}</AppText>
        </View>
        <View style={styles.cardDetails}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
