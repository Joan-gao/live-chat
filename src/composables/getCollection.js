import { ref, watchEffect } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'


const getCollection = (collectionName) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = query(collection(projectFirestore, collectionName), orderBy('createAt'))
    
    const unsub = onSnapshot(collectionRef, (snap) => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub());
    })

    return { documents, error }
}

export default getCollection