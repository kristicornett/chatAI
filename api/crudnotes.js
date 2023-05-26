import { clientCredentials } from '../utils/client'
const dbUrl = clientCredentials.databaseURL

const saveNote = async (payload) => {
    const data = await fetch(`https://chatai-a4685-default-rtdb.firebaseio.com/notes.json`, {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify(payload),
    })

    return data

}

export default saveNote;