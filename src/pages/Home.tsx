import { StyleSheet, Text, View, Button } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/routes";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>Diário de Viagem</Text>
      <Button
        title="Ir para Gps"
        onPress={() => navigation.navigate("Gps")}
      />

      <Button
        title="Ir para Camera"
        onPress={() => navigation.navigate("Camera")}
      />

      <Button
        title="Ir para Accelerometer"
        onPress={() => navigation.navigate("Accelerometer")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
