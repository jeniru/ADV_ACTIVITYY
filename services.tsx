import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Services = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1445196818/photo/group-of-cute-pets-on-white-background-banner-design.jpg?s=612x612&w=0&k=20&c=TFz9WoJfr7o_9VhuUA4XM6B4BC3gQ_TmA2C8Xe372C8=' }}
        style={styles.headerImage}
      />
      <View style={styles.servicesContainer}>
        <Text style={styles.pageTitle}>Our Pet Adoption Services</Text>


        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/portrait-lovely-labrador-puppy-dog-pet-happy-friendly-breed-dog_1150-17315.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Adopt a Pet</Text>
            <Text style={styles.cardDescription}>
              Browse through a wide selection of pets ready for adoption. Whether it's a dog, cat, or any other companion, we’ve got you covered.
            </Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>View Pets</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/happy-young-woman-adopting-dog-pet-in-hospital-pet-care-veterinary-pet-love-dog-care-pet-adoption_1150-15129.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Pet Consultation</Text>
            <Text style={styles.cardDescription}>
              Unsure which pet is right for you? Book a consultation with our adoption experts to help match you with the perfect companion.
            </Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Adoption Process Section */}
        <Text style={styles.sectionTitle}>The Adoption Process</Text>
        <Text style={styles.sectionDescription}>
          Our adoption process is simple and straightforward. Here’s what you can expect:
        </Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>1.</Text>
          <Text style={styles.stepDescription}>
            Browse our available pets and select the one that fits your needs.
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>2.</Text>
          <Text style={styles.stepDescription}>
            Complete the adoption application and schedule a home visit (if necessary).
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>3.</Text>
          <Text style={styles.stepDescription}>
            Once approved, we’ll assist with the final adoption process, including paperwork and introducing your new pet.
          </Text>
        </View>

        {/* Adoption Support Section */}
        <Text style={styles.sectionTitle}>Post-Adoption Support</Text>
        <Text style={styles.sectionDescription}>
          After adopting a pet, we offer continuous support to ensure your new companion adjusts well to their new home. From health tips to behavioral training, we’re here for you every step of the way.
        </Text>

        {/* Contact Section */}
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionDescription}>
          Have any questions or need more information? Feel free to reach out to us at:
        </Text>
        <Text style={styles.contactInfo}>Email: support@petadopt.com</Text>
        <Text style={styles.contactInfo}>Phone: +1234567890</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
  },
  headerImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  servicesContainer: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 15,
  },
  cardButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  sectionDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  stepDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  contactInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default Services;
