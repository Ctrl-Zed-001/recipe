import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { SearchBar } from 'react-native-elements';
import axios from 'axios'
import config from '../config.json'
import RecipeBox from '../components/RecipeBox';
import { FlatList } from 'react-native';

const AllRecipes = (props) => {
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState("")
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${config.api_key}`)
            .then(res => {
                setRecipes(res.data.recipes)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const updateSearch = (text) => {
        setSearchText(text)
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${text}&apiKey=${config.api_key}`)
            .then(res => setRecipes(res.data.results))
            .catch(err => console.log(err))
    }

    return (

        loading ?
            <Text>loading...</Text> :
            <SafeAreaView style={styles.container}>
                <StatusBar animated={true} backgroundColor="#f2f2f2" barStyle="dark-content" />
                <View>
                    <Text style={styles.mainHeading}>What do you want to cook today?</Text>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={updateSearch}
                        value={searchText}
                        inputContainerStyle={{
                            backgroundColor: '#f2f2f2',
                            borderRadius: 50,

                        }}
                        containerStyle={{
                            backgroundColor: '#f2f2f2',
                            borderRadius: 50,
                            padding: 0,
                            paddingLeft: 10,
                            marginTop: 30,
                            borderTopWidth: 0,
                            borderBottomWidth: 0
                        }}
                        lightTheme
                        placeholder="search recipe"
                        searchIcon={{
                            color: '#db6659'
                        }}
                    />
                </View>
                {
                    recipes.length === 0 ?
                        <Text style={styles.subhead}>:( Sorry no recipes found </Text> :
                        <View>
                            <Text style={styles.subhead}>Some popular recipes</Text>
                            <FlatList
                                style={{
                                    marginTop: 10
                                }}
                                data={recipes}
                                renderItem={({ item }) => <RecipeBox navigation={props.navigation} recipe={item} />}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                }


            </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },
    mainHeading: {
        fontFamily: 'lora',
        fontSize: 35,
        marginTop: 20,
        color: '#333'
    },
    subhead: {
        fontFamily: 'lexend',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 17
    }
})

export default AllRecipes
