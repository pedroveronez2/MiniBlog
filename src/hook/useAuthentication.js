import {db } from '../firebase/config'

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const auth = getAuth()
    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }
    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null)
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
        } catch (error) {
            console.log(error.message, typeof error.messege)
            
            let systemErrorMessage
            if (error.message.includes('Password')) {
                systemErrorMessage = 'A senha precisa pelo menos ter 6 caracteres.'
            } else if (error.message.includes('email-already')) {
                systemErrorMessage = 'Email ja cadastrado'
            } else {
                systemErrorMessage = 'Ocrreu um erro, Por Favor tent novamente mais tarde :).'
            }
            setError(systemErrorMessage)
        }
        setLoading(false)
    }

    // logout - sign - out

    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }
    // logout - sign - out

    const login = async(data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(false)
        try {
            setLoading(false)
            await signInWithEmailAndPassword(auth, data.email, data.password)
        } catch (error) {
            let systemErrorMessage
            if (error.message.includes('use-not-found')) {
                systemErrorMessage = 'Usuario nao encontrado.'
            } else if(error.message.includes('wrong-password')) {
                systemErrorMessage = 'Senha incorreta.'
            } else {
                systemErrorMessage = 'Ocorreu um error inesperado ao tentar logar na sua conta.'
            }
            setError(systemErrorMessage)
            setLoading(false)
        }
    }
    useEffect(() => {
      return () => setCancelled(true)
    }, [])
    
    return {auth, createUser, loading, error, logout, login}
}