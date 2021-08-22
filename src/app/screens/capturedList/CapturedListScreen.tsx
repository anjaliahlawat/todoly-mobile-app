/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { ApiResponse } from "apisauce";
import { FlatList, View } from "react-native";

import AuthContext from "../../auth/context";
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";
import AppButton from "../../components/Button/Button";
import AppText from "../../components/AppText/AppText";
import captureApi from "../../api/capture";
import Card from "../../components/Card/Card";
import Screen from "../../components/screen/Screen";
import styles from "./styles";
import useApi from "../../hooks/useApi";
import AppModal from "../../components/Modal/Modal";

type CapturedTaskType = {
  type: string;
  desc: string;
  _id: string;
};

type ResponseType = {
  data: Array<CapturedTaskType>;
  error: boolean;
  loading: boolean;
  request: (...args: any[]) => Promise<ApiResponse<unknown>>;
};

function CapturedListScreen({
  navigation,
}: {
  navigation?: any;
}): ReactElement {
  const { user } = useContext(AuthContext) as ContextType;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<CapturedTaskType>();

  const {
    data: capturedTasks,
    error,
    loading,
    request: getCapturedList,
  } = useApi(captureApi.getCapturedList) as ResponseType;

  useEffect(() => {
    const formData = {
      user,
    };
    getCapturedList(formData);
    navigation.setParams({
      count: capturedTasks.length,
    });
  }, []);

  const openTaskModal = (task) => {
    if (task) {
      setSelectedItem(task);
      setModalVisible(true);
    }
  };

  const onDescChange = (text) => {
    // eslint-disable-next-line no-console
    console.log(text);
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        <>
          {error && (
            <>
              <AppText> Could not retrieve the listings</AppText>
              <AppButton title="Retry" onPress={getCapturedList} />
            </>
          )}
          <View style={styles.capturedListContainer}>
            <View style={styles.innerContainer}>
              <FlatList<CapturedTaskType>
                data={capturedTasks}
                renderItem={({ item, index }) => (
                  <Card
                    title={item.desc}
                    count={index}
                    onPress={() => openTaskModal(item)}
                  />
                )}
                // eslint-disable-next-line no-underscore-dangle
                keyExtractor={(item) => item._id.toString()}
              />
            </View>
            {modalVisible && (
              <AppModal
                closeModal={() => setModalVisible(false)}
                modalVisible={modalVisible}
                onDescChange={onDescChange}
                title={selectedItem!.desc}
              />
            )}
          </View>
        </>
      </Screen>
    </>
  );
}

export default CapturedListScreen;
