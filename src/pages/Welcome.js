import React from 'react';
import { SafeAreaView,Text,View,StyleSheet } from 'react-native';
import Button from '../components/Button'

function Welcome({navigation}) {
    function goToMemberSign(){
        navigation.navigate('MemberSignScreen')
    }

    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.header}>Kanzi Fitness Salonu</Text>
            <Button text = 'üye kaydi olustur' onPress={goToMemberSign} />
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: 'center',
        
    },
    header: {
        fontSize : 30,
        fontWeight : 'bold',
        textAlign:'center',
        margin :10
        
    }
})
export default Welcome