import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { Image } from 'react-native-elements'
import DetailSection from '../components/DetailSection'
import config from '../config.json'

const RecipeDetail = (props) => {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        if (!props.route.params.recipe.readyInMinutes) {
            axios.get(`https://api.spoonacular.com/recipes/${props.route.params.recipe.id}/information?apiKey=${config.api_key}`)
                .then(res => setDetail(res.data))
                .catch(err => console.log(err))
        } else {
            setDetail(props.route.params.recipe)
        }
    }, [])


    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    source={{ uri: detail == null ? 'https://i.stack.imgur.com/y9DpT.jpg' : detail.image }}
                    style={{
                        height: Dimensions.get('window').height / 2,
                        width: '100%',
                        resizeMode: 'cover'
                    }}
                />
                <DetailSection detail={detail} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default RecipeDetail
