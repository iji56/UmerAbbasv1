import axios from "axios";
import React from "react";
import { FlatList, Image } from "react-native";

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
    // Handle array buffer link
    // Fetch the image data using the link and convert it to a base64 string
    // Once you have the base64 string, pass it as the source to the Image component
    // Example code to fetch and convert the array buffer to base64:

    axios
      .get(item.url, { responseType: "arraybuffer" })
      .then((response) => {
        console.log("hi");
        console.log(response);
        const base64Image = response.data;
        console.log(base64Image);
        return base64Image;
      })
      // fetch(item.url)
      //   .then((response) => response.arrayBuffer())
      //   .then((buffer) => {
      //     const base64Image = `data:image/jpeg;base64,${Buffer.from(
      //       buffer
      //     ).toString('base64')}`;
      //     return base64Image;
      //   })
      .then((base64Image) => (
        <Image
          source={{ uri: base64Image }}
          style={{ width: 100, height: 100 }}
        />
      ));
  } else {
    // Handle normal URL link
    return (
      <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
    );
  }
};

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default App;
