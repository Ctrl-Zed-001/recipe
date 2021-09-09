import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import AppLoading from 'expo-app-loading'
import axios from 'axios'
import config from '../config.json'

const Home = (props) => {


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainHeading}>Enjoy Cooking</Text>
                <Text style={styles.subheading}>Delicious and detailed recipes at your fingertips.</Text>
                <Image
                    source={require('../assets/cooking.png')}
                    style={styles.mainImage}
                />
            </View>
            <Button
                title="GET STARTED"
                onPress={() => props.navigation.navigate('allRecipes')}
                buttonStyle={{
                    backgroundColor: 'white',
                    borderRadius: 30,
                    padding: '3%',
                    width: '60%',
                    alignSelf: 'center',
                    marginBottom: 30
                }}
                titleStyle={{
                    color: '#db6659',
                    fontWeight: 'bold',
                    fontSize: 15
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FD7463',
        padding: 10,
        flex: 1,
        justifyContent: 'space-between'
    },
    mainHeading: {
        color: 'white',
        fontSize: Dimensions.get('window').width / 6,
        fontFamily: 'lora',
        fontWeight: 'bold',
        marginTop: 20
    },
    subheading: {
        color: 'white',
        fontFamily: 'lexend',
        marginTop: 10,
        fontSize: Dimensions.get('window').width / 25,
    },
    mainImage: {
        width: '100%',
        height: Dimensions.get('window').height / 2,
        marginTop: 0
    }
})

export default Home
