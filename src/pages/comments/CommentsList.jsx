import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../components/login/AuthProvider'
import { doFetch } from '../../helpers/Fetch'

export const CommentsList = () => {
  const [apiData, setApiData] = useState()
  const { loginData } = useContext(AuthContext)

  console.log(loginData);

  const getData = async () => {
    const options = {
      methos: 'GET',
      headers: {
        'Authorization' : `Baerer ${loginData.access_token}`
      }
    }


    const url = `https://api.mediehuset.net/snippets/comments/1`
    try {
      const res = await doFetch(url, options);
      setApiData(res); 
    }
    catch(error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(loginData) {
      getData();
    }
  }, [loginData])

  return(
    <>
      <h4>Kommentarer</h4>
      <ul>

      {apiData && apiData.items.map((item, key) => {
          return (
              <li key={key}>{item.title}</li>
          )
      })}
      </ul>
  </> 
  )
}