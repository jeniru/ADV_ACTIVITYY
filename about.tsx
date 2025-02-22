import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Image
                source={{ uri: 'https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977559-stock-illustration-hands-holding-word-about-us.jpg' }}
                style={styles.logo}
            />
      <View style={styles.div}>
        

            <Text style={styles.title}></Text>
            <Text style={styles.description}>
                THIS IS ABOUT US
            </Text>
            
            <Text style={styles.sectionTitle}>Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party. Common sources for adoptable pets are animal shelters, rescue groups, or other pet owners.</Text>

            <Text style={styles.sectionTitle}>Contact Us:</Text>
            <Text style={styles.description}>
                If you have any question, feel free to reach out to us at:
                {'\n'}Email: jennylou.ortega@hcdc.edu.ph
                {'\n'}Phone: +1234567890
            </Text>

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
  logo: {
    width: "90%",
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },

  div: {
    paddingLeft: 50,
  }
});

export default About;

