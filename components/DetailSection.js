import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'


const DetailSection = (props) => {

    return (
        <View style={styles.detailSection}>
            <View style={styles.detailsTop}>
                <View style={styles.iconBox}>
                    <Icon
                        iconStyle={styles.iconBoxIcon}
                        name='dot-circle-o'
                        type='font-awesome'
                    />
                    <Text style={styles.iconBoxText}>{props.detail?.vegetarian ? 'veg' : 'non-veg'}</Text>
                </View>
                <View style={styles.iconBox}>
                    <Icon
                        iconStyle={styles.iconBoxIcon}
                        name='clock-o'
                        type='font-awesome'
                    />
                    <Text style={styles.iconBoxText}>{props.detail?.readyInMinutes} min</Text>
                </View>
                <View style={styles.iconBox}>
                    <Icon
                        iconStyle={styles.iconBoxIcon}
                        name='star-o'
                        type='font-awesome'
                    />
                    <Text style={styles.iconBoxText}>{props.detail?.healthScore}</Text>
                </View>
            </View>

            <Text style={styles.heading}>{props.detail?.title}</Text>
            <Text style={styles.subtext}>{props.detail?.sourceName}</Text>
            <Text style={styles.text}>Ingredients</Text>

            {
                props.detail?.extendedIngredients?.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.original}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }

            <Text style={styles.text}>Instructions</Text>

            {
                props.detail?.analyzedInstructions[0]?.steps?.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>step {l.number}</ListItem.Title>
                            <ListItem.Subtitle>{l.step}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }

        </View>
    )
}

const styles = StyleSheet.create({
    detailSection: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 40,
        transform: [
            { translateY: -50 }
        ]
    },
    heading: {
        fontFamily: 'lora',
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtext: {
        fontFamily: 'lexend',
        fontSize: 15
    },
    text: {
        fontFamily: 'lexend',
        fontSize: 16,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#db6659'
    },
    detailsTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    iconBox: {
        alignItems: 'center'
    },
    iconBoxIcon: {
        color: '#db6659'
    },
    iconBoxText: {
        fontFamily: 'lexend',
        fontSize: 15,
    }
})

export default DetailSection
