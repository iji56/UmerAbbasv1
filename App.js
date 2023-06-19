import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function App() {
  const data = [
    {
      url: "https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/04252023032040_00148466-6020-496d-879a-01edabd564d1",
      type: "arrayBuffer",
    },
    {
      url: "https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61",
      type: "normal",
    },
  ];
  const renderItem = ({ item }) => {
    if (item.type === "arrayBuffer") {
      axios
        .get(item.url, { responseType: "arraybuffer" })
        .then((response) => {
          console.log("hi");
          const blob = new Blob([response.data], { type: "image/jpeg" });
          const base64Image = URL.createObjectURL(blob);
          return base64Image;
        })
        .then((base64Image) => (
          <>
            {base64Image && (
              <Image
                source={{ uri: base64Image }}
                style={{ width: 100, height: 100 }}
              />
            )}
          </>
        ));
    } else {
      return (
        <Image source={{ uri: item.url }} style={{ width: 300, height: 100 }} />
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Images</Text>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  list: { margin: 40, flex: 1 },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: { fontSize: 34, fontWeight: 700 },
});
