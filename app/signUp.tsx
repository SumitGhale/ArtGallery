import AuthForm from "@/components/AuthForm"
import { AuthContext } from "@/Contexts/AuthContext"
import { useContext, useState } from "react"
import { View, Text } from "react-native"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth"
import { router } from "expo-router"


export default function SignUp(){
    // Accessing the current instance of authenticcation
    const auth = useContext(AuthContext)

    const [ error, setError ] = useState("")

    // function to create new user
    const createAccount = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log(userCredential.user)
        })
        .catch((error) =>{
            setError(error.code = " " + error.message)
        })
    }

    onAuthStateChanged(auth, (user) =>{
        if(user){
            router.replace("/home")
        }
    })
return(
<View>
    <AuthForm title = "SignUp" actionText = "SignUp" action = {createAccount}/>
    <Text>{error && error}</Text>
</View>
)
}