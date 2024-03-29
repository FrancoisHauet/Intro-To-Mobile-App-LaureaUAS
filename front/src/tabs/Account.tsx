import React, { useState, useEffect } from "react";
import {
  Alert,
  Appearance,
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
import ENV from "../../env";

const colorScheme = Appearance.getColorScheme();

export default function Account({ navigation }) {
  const [tmp, setTmp] = useState(async () => {
    let usr = await AsyncStorage.getItem('@username')
    setUsername(usr);
  })
  const [username, setUsername] = useState<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SignOutUser = async () => {
    navigation.replace('Login')
  };

  const SetNewUsername = async () => {
    if (!newUsername) {
      Alert.alert("Please fill in all fields");
      return;
    }
    if (newUsername === username) {
      Alert.alert("New username is the same as old username");
      return;
    }
    axios.put(`${ENV.BACKEND_URL}/changeUsername`, {
      username: username,
      newUsername: newUsername,
    })
      .then((response) => {
        if (response.status === 200) {
          Alert.alert("Username changed successfully");
          setUsername(newUsername);
        } else {
          Alert.alert("Username change failed");
        }
      });
  };

  const SetNewPassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Alert.alert("Please fill in all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    axios.put(`${ENV.BACKEND_URL}/changePassword`, {
      username: username,
      oldPassword: oldPassword,
      newPassword: newPassword,
    })
      .then((response) => {
        if (response.status === 200) {
          Alert.alert("Password changed successfully");
        } else {
          Alert.alert("Password change failed");
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={colorScheme == "light" ? styles.container : styles.container_dark}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/images/short.png")}
        />
        <Text
          style={colorScheme == "light" ? styles.text_light : styles.text_dark}
        >
          User: {username}
        </Text>
        <View style={styles.loginContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="New username"
              placeholderTextColor="#bbc9bf"
              onChangeText={(newUsername) => setNewUsername(newUsername)}
            />
          </View>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => SetNewUsername()}
          >
            <Text style={styles.loginText}>Change name</Text>
          </TouchableOpacity>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Old Password"
              placeholderTextColor="#bbc9bf"
              secureTextEntry={true}
              onChangeText={(oldPassword) => setOldPassword(oldPassword)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="New Password"
              placeholderTextColor="#bbc9bf"
              secureTextEntry={true}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm New Password"
              placeholderTextColor="#bbc9bf"
              secureTextEntry={true}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
            />
          </View>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => SetNewPassword()}
          >
            <Text style={styles.loginText}>Change password</Text>
          </TouchableOpacity>
        </View>


        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20,
          }}
        >
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => SignOutUser()}
          >
            <Text style={styles.textStyleSignOut}>Sign Out</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={colorScheme == 'light' ? styles.textStyle : styles.textStyle_dark}>About</Text>
          </Pressable>
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  TMDB clone application{"\n"}LAUREA UAS{"\n"}
                </Text>
                <Text style={styles.modalText}>
                  Students:{"\n"}François HAUET{"\n"}
                </Text>
                <Text style={styles.modalText}>
                  This product uses the TMDB API but is not endorsed or certified by TMDB.
                  The information in this application is brought to you by:
                </Text>
                <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.themoviedb.org')}>
                  The Movie Database
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle_dark}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  container_dark: {
    backgroundColor: "#0d253f",
    flex: 1,
    alignItems: "center",
    fontStyle: "normal",
    color: "#fff",
  },

  logo: {
    marginTop: 50,
    marginBottom: 30,
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#0d253f",
    width: "100%",
    height: 45,
    marginBottom: 5,
    alignItems: "center",
    shadowColor: "rgba(13,37,63,0.74)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 25,
    shadowOpacity: 0.5,
  },

  loginContainer: {
    width: "75%",
    borderRadius: 5,
    position: "relative",
    backgroundColor: "#90cea1",
    alignItems: "center",
    padding: 30,
    shadowColor: "#01b4e4",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 33,
    shadowOpacity: 0.74,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 5,
    // marginLeft: 20,
  },

  text_light: {
    marginBottom: 20,
    color: "#000",
  },

  text_dark: {
    marginBottom: 20,
    color: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    width: "50%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    // backgroundColor: "#0d253f",
    shadowColor: "rgba(13,37,63,0.74)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 25,
    shadowOpacity: 0.5,
  },
  buttonClose: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#0d253f",
    shadowColor: "rgba(13,37,63,0.74)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 25,
    shadowOpacity: 0.5,
  },

  textStyle: {
    color: "#0d253",
    fontWeight: "bold",
    textAlign: "center",
  },

  textStyle_dark: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  textStyleSignOut: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 5,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#0d253f",
    shadowColor: "rgba(13,37,63,0.74)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 25,
    shadowOpacity: 0.5,
  },

  loginText: {
    fontStyle: "normal",
    color: "white",
  },
});
