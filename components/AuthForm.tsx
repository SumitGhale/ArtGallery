import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
export default function AuthForm(props: any) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validInput, setInputAsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  // run validation when user enters data in the respective fields
  useEffect(() => {
    handleValidation();
  }, [email, password, confirmPassword]);

  function handleValidation() {
    // Validation for email
    if (emailTouched && (email.indexOf("@") <= 0 || email.length < 6)) {
      setInputAsValid(false);
      setErrorMessage("Invalid email format");
      return;
    }

    // validation for password
    if (passwordTouched && password.length < 8) {
      setInputAsValid(false);
      setErrorMessage("Invalid password format");
      return;
    }

    // validation for confirm password
    if (props.actionText === "SignUp" && confirmPasswordTouched) {
      if (password !== confirmPassword) {
        setInputAsValid(false);
        setErrorMessage("Passwords do not match");
        return;
      }
    }
    setInputAsValid(true);
    setErrorMessage("");
  }

    return (
      <View style={styles.container}>
        <Text style={styles.title}> {props.title}</Text>

        <Text> Email </Text>
        <TextInput
          inputMode="email"
          placeholder="Username or email"
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailTouched(true);
          }}
        />

        <Text> Password </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordTouched(true);
          }}
          secureTextEntry={false}
        />

        {props.actionText === "SignUp" && (
          <View>
            <Text> Confirm Password </Text>
            <TextInput
              style={styles.input}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setConfirmPasswordTouched(true);
              }}
              secureTextEntry={false}
            />
          </View>
        )}

        <Text style={styles.error}>{errorMessage}</Text>

        <Pressable
          style={validInput ? styles.button : styles.buttonDisabled}
          onPress={() => {
            props.action(email, password);
            console.log(password + " " + confirmPassword);
          }}
        >
          <Text
            style={validInput ? styles.buttonText : styles.buttonDisabledText}
          >
            {props.actionText}
          </Text>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 100,
    padding: 20,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#FF2E63",
    marginHorizontal: 13,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#efefef",
    textAlign: "center",
    padding: 8,
  },
  buttonDisabled: {
    backgroundColor: "grey",
    borderRadius: 4,
  },
  buttonDisabledText: {
    color: "#666666",
    textAlign: "center",
    padding: 8,
  },
  error: {
    color: "#cc0000",
  },
});
