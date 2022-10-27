import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function GooglePhotos() {

 //  const navigate = useNavigate()

  useEffect(() => {
    getUrl()
  }, [])

  const getUrl = async () => {
    try {
      const result = await axios.get('http://localhost:8080/googleapi')
      window.location.href = result.data
    } catch {

    }
  }



  // const {tokens} = await oauth2Client.getToken(code)
  return <h1>Google pIcs</h1>
}
