import { View, Text, StyleSheet, Switch, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

const Settings = () => {
  // States for settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [email, setEmail] = useState('user@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [isPrivate, setIsPrivate] = useState(false); 

  const handleSave = () => {
    console.log("Settings saved", { email, phone, notificationsEnabled, isPrivate });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>

     
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingTitle}>Enable Notifications</Text>
          <Switch 
            value={notificationsEnabled} 
            onValueChange={(value) => setNotificationsEnabled(value)} 
          />
        </View>
      </View>

   
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Privacy Settings</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingTitle}>Private Profile</Text>
          <Switch 
            value={isPrivate} 
            onValueChange={(value) => setIsPrivate(value)} 
          />
        </View>
      </View>


      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingTitle}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter your email"
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingTitle}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter your phone number"
          />
        </View>
      </View>

 
      <View style={styles.buttonContainer}>
        <Button title="Save Settings" onPress={handleSave} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  settingSection: {
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingTitle: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 2,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
});

export default Settings;
