import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const IconButton = ({
  title,
  color,
  icon,
  textColor,
}: {
  title: string;
  color: string;
  icon: any;
  textColor: string;
}) => {
  return (
    <TouchableOpacity style={[styles.iconButton, {backgroundColor: color}]}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: textColor}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Accounts() {
  return (
    <ImageBackground
      source={require('../../resources/background2.png')}
      imageStyle={styles.imageStyle}
      style={styles.container}>
      <View style={styles.banner}>
        <Image source={require('../../resources/my.png')} />
        <Image
          source={require('../../resources/Perfect.png')}
          style={styles.perfect}
        />
      </View>
      <View style={styles.buttons}>
        <IconButton
          title="EMAIL"
          icon={require('../../resources/mail.png')}
          color="#FF8A1F"
          textColor="#ffffff"
        />

        <IconButton
          title="FACEBOOK"
          icon={require('../../resources/fb.png')}
          color="#FF8A1F"
          textColor="#ffffff"
        />

        <IconButton
          title="GOOGLE"
          icon={require('../../resources/google.png')}
          color="white"
          textColor="#000000"
        />
        <Button buttonColor="#ff8b1f0" style={[styles.buttonContainer]}>
          {' '}
        </Button>
        <Button
          textColor="white"
          buttonColor="#1F93FF"
          style={[styles.buttonContainer]}>
          CREATE NEW ACCOUNT
        </Button>
        <Text style={styles.trialText}>Start Your Free 30-Day Trial.</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.6,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  iconButton: {
    width: '80%',
    padding: 12,
    borderRadius: 50,
    marginBottom: 8,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
  },
  buttonContainer: {
    width: '80%',
    padding: 4,
    borderRadius: 50,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  trialText: {
    color: 'white',
    fontWeight: '600',
  },
  banner: {
    flex: 0.8,
    width: '100%',
    justifyContent: 'flex-end',
    padding: 20,
  },
  buttons: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfect: {marginTop: 8},
});
