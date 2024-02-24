//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Heading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>TODO APP</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        top:1,
        backgroundColor:'#031D44',
        color:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height:200
    },
    heading:{
        fontSize:20,
        fontWeight:"bold",
        color:'#fff',
        top:10
    }
});

//make this component available to the app
export default Heading;
