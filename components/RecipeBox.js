import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Icon } from 'react-native-elements'

const RecipeBox = (props) => {
    return (
        <Card containerStyle={styles.recipeBox} >
            <Card.Image
                onPress={() => props.navigation.navigate('recipe_detail', { recipe: props.recipe })}
                source={{ uri: props.recipe.image }}
                style={{ width: '100%', height: 200 }}
            />

            <View style={{ padding: 10 }}>
                <Card.FeaturedTitle
                    onPress={() => props.navigation.navigate('recipe_detail', { recipe: props.recipe })}
                    style={styles.title}>{props.recipe.title}</Card.FeaturedTitle>
                {/* <Card.FeaturedSubtitle style={styles.time}>
                    <Icon
                        iconStyle={styles.timer}
                        name='clock-o'
                        type='font-awesome'
                    />
                    {props.recipe.readyInMinutes}min
                </Card.FeaturedSubtitle> */}
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    recipeBox: {
        padding: 0
    },
    title: {
        fontFamily: 'lexend',
        color: "#333",
        fontWeight: 'normal',
        fontSize: 17
    },
    time: {
        fontFamily: 'lexend',
        color: "#FD7463",
        fontWeight: 'bold',
        fontSize: 15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    timer: {
        color: "#FD7463",
        fontSize: 15,
        marginRight: 3
    }
})

export default RecipeBox
