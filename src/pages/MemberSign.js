import React, {useState} from 'react'
import { SafeAreaView , Text, View,StatusBar,Alert} from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import MemberResult from './MemberResult'

function MemberSign({navigation}){
    const[userName , setUserName] = useState(null)
    const[userSurname , setUserSurname] = useState(null)
    const[userAge , setUserAge] = useState(null)
    const[userMail , setUserMail] = useState(null)
    const[userHomeTown , setUserHomeTown] = useState(null)

    
    function handleSubmit(){
        if (!userName ||
            !userSurname||
            !userAge||
            !userMail||
            !userHomeTown)
            {
            Alert.alert('Kanzi Fitness Center' , 'Bilgiler Boş Bırakılamaz')
            return
            }

        const user =  {
            userName,
            userSurname,
            userAge,
            userMail,
            userHomeTown,
        }
        navigation.navigate('MemberResultScreen' , {user})
    }
   
    return(
        <SafeAreaView>
            <StatusBar  />
            <Input label = 'Üye Adı' placeholder= 'Üye adı giriniz...' onChangeText={setUserName} />
            <Input label = 'Üye Soyadı' placeholder= 'Üye soyadı giriniz...' onChangeText={setUserSurname} />
            <Input label = 'Üye yaş' placeholder= 'Üye yaş giriniz...' onChangeText={setUserAge}  />
            <Input label = 'Üye mail' placeholder= 'Üye mail giriniz...' onChangeText={setUserMail}  />
            <Input label = 'Üye memleketi' placeholder= 'Üye memleketi giriniz...' onChangeText={setUserHomeTown} />
            <Button text= 'Kaydı Tamamla' onPress={handleSubmit}/>
        </SafeAreaView>
    )

}
export default MemberSign