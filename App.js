import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style = {{ fontSize: 10 }}>      </Text>
      <Text style = {{ fontSize: 10 }}>      </Text>
      <Text style = {{ fontSize: 10 }}>      </Text>
      <Text style = {{ fontSize: 10 }}>      </Text>
      <Text style = {{ fontSize: 10 }}>      </Text>
      <Text style = {{ fontSize: 10 }}>      </Text>
      <Text style = {{ fontSize: 30 }}>Register</Text>
      <Text style = {{ fontSize: 10 }}>First Name</Text>
      <TextInput style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}></TextInput>
      <Text style = {{ fontSize: 10 }}>Last Name</Text>
      <TextInput style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}></TextInput>
      <Text style = {{ fontSize: 10 }}>Email Address</Text>
      <TextInput style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}></TextInput>
      <Text style = {{ fontSize: 10 }}>Password</Text>
      <TextInput style={{ width:200, height: 40, borderColor: 'black',
       borderWidth: 2, color: "Gray" }}>Must be at least 8 characters</TextInput>
       <Text style = {{ fontSize: 10 }}>Mobile</Text>

      <TextInput style={{ width:200, height: 40, borderColor: 'black',
       borderWidth: 2, color: "Gray" }}></TextInput>
       <Text style = {{ fontSize: 10 }}>Address</Text>
      <TextInput style={{ width:200, height: 40, borderColor: 'black',
       borderWidth: 2, color: "Gray" }}></TextInput>
       <Text style = {{ fontSize: 10 }}>Zip Code</Text>
      <TextInput style={{ width:200, height: 40, borderColor: 'black',
       borderWidth: 2, color: "Gray" }}></TextInput>
       <Text style = {{ fontSize: 10 }}>Course</Text>
      <TextInput style={{ width:200, height: 40, borderColor: 'black',
       borderWidth: 2, color: "Gray" }}></TextInput>
       <Text style = {{ fontSize: 10 }}>      </Text>
      <Button title="Register" 
      
color = "#3b5998"
backgroundColor = "blue"/>

</ScrollView>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
