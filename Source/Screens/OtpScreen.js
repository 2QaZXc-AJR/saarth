import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import OtpInputs from "react-native-otp-inputs";

export default function OtpScreen() {
  const login = () => {};
  const [otp, setOtp] = useState();
  const [token, setToken] = useState("");
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Enter OTP</Text>
      <OtpInputs
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "teal",
          borderBottomColor: "black",
          borderWidth: 1,
        }}
        handleChange={(code) => {
          setOtp(code);
          console.log(code);
        }}
        numberOfInputs={6}
      />
      <Button title="Login" onPress={login} />
    </View>
  );
}
