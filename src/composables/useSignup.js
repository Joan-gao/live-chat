import { projectAuth } from '@/firebase/config'
import { ref } from 'vue'
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'
const error = ref(null)


const signup = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await createUserWithEmailAndPassword(projectAuth, email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        await updateProfile(res.user, { displayName })  // 使用 updateProfile 函数
        error.value = null

        return res

    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {

    return { error, signup }

}

export default useSignup