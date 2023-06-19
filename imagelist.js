import React, {useEffect, useState} from 'react';
import {FlatList, Image} from 'react-native';
import Base64 from './base64';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // List of image URLs
    const imageUrls = [
      'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/04252023032040_00148466-6020-496d-879a-01edabd564d1',
      'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61',
    ];

    // Fetch image data for each URL
    const fetchImageData = async () => {
      const fetchedImages = await Promise.all(
        imageUrls.map(async url => {
          const response = await fetch(url);
          const data = await response.arrayBuffer();
          return {
            url,
            data,
          };
        }),
      );

      setImages(fetchedImages);
    };

    fetchImageData();
  }, []);

  const renderImage = ({item}) => {
    const {url, data} = item;
    let sourceUri = '';

    if (
      url.includes(
        'execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax',
      )
    ) {
      // URL is an array buffer URL
      const base64Data = Base64.btoa(
        String.fromCharCode.apply(null, new Uint8Array(data)),
      );
      sourceUri = `data:image/jpeg;base64,${base64Data}`;
    } else {
      // URL is a normal URL
      sourceUri = url;
    }

    return (
      <Image source={{uri: sourceUri}} style={{width: 200, height: 200}} />
    );
  };

  return (
    <FlatList
      data={images}
      keyExtractor={item => item.url}
      renderItem={renderImage}
    />
  );
};

export default ImageList;
