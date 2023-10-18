
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { auth } from "../config/firebase";
import * as Animatable from 'react-native-animatable';
import Swiper from "react-native-swiper";

import image1 from '../images/restaurant_img.jpg';
import image2 from '../images/restaurant_img1.jpg';
import image3 from '../images/ash.jpg';
import image4 from '../images/petsos.jpg';
import image5 from '../images/esrageziyor.jpg';
import image6 from '../images/stickel.jpg';
import image7 from '../images/davis.jpg';


export default function Home() {

    return (
        <View style={styles.container}>
            <View style={{flex:3, justifyContent:'flex-start', alignItems:'center', paddingTop:20}}>
                <Text style={styles.text}>SHOPPING LIST APP</Text>
                <Text>Add items on your list by clicking the icon below!</Text>
            </View>            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8bfd8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    wrapper: {},
});
