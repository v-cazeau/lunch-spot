import { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import RestaurantCard from './RestaurantCard.jsx';
import Random from '../components/Random.jsx'; 

export default function RestaurantList({ navigation }) {
    const [foodList, setFoodList]= useState(); 

    useEffect(() => {
        fetch('https://my-first-firestore-bc.web.app/restaurants')
            .then(resp => resp.json())
            .then(setFoodList)
            .catch(alert)
    }, [])

    return(
        <View style={styles.constainer}>
            <ScrollView style={styles.list}>
                {foodList && foodList.map(food => (
                    <RestaurantCard food={food} key={food.id} navigation={navigation}/>
                ))}
            </ScrollView>
            <Random navigation={navigation} foodList={foodList} />
        </View>
    )
}

const styles  = StyleSheet.create({
     

    list: {
        width:'100%',
        // borderColor:'red', 
        borderWidth: 7, 
    },

    constainer: {
        flex: 1, 
        backgroundColor: 'skyblue',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 16
    }, 
})