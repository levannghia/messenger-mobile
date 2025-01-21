import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '@utils/constanst'
import Logo from '@assets/images/logo.png'
import Coppyright from '@assets/images/meta.png'
import { screensHeight, screensWidth } from '@utils/scaling'
import { Text } from 'react-native-paper'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }} />
            <View style={{
                flex: 1
            }}>
                <Image source={Logo} style={styles.imageLogo} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end'}}>
                <View style={{alignItems: 'center'}}>
                    <Text variant="bodySmall">From</Text>
                    <Image source={Coppyright} style={styles.imageCoppyright} />
                </View>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogo: {
        height: screensHeight * 0.2,
        width: screensWidth * 0.2,
        resizeMode: 'contain',
    },
    imageCoppyright: {
        width: screensWidth * 0.3,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 20
    }
})