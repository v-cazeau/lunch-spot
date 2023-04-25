import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default function RestaurantList() {
    return(
        <View style={styles.constainer}>
            <Text style={styles.title}>Restaurant List</Text>
            <ScrollView style={styles.list}></ScrollView>
        </View>
    )
}

const styles  = StyleSheet.create({
    title: {
        fontSize: 30, 
        fontWeight: 700,
        marginTop: 8, 
        marginBottom: 8, 
        color: '#151B54',
    }, 

    list: {
        width:'100%',
        borderColor:'red', 
        borderWidth: 7, 
    },

    constainer: {
        flex: 1, 
        backgroundColor: 'pink',
        marginTop: 56,
        marginBottom: 24,
        width: '90%',
        alignItems: 'center'
    }, 
})