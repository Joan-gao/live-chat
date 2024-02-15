import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { collection, addDoc as firestoreAddDoc } from 'firebase/firestore'

const useCollection = (collectionName) => {
    const error = ref(null)

    const addDoc = async (doc) => {
        error.value = null

        try {
            const collRef = collection(projectFirestore, collectionName)
            await firestoreAddDoc(collRef, doc)
        } catch (err){
            console.log(err.message)
            error.value = 'could not send the message'
        }
    }

    return { error, addDoc }

}

export default useCollection 
