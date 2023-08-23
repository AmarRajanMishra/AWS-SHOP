import axios from 'axios';
import React, { useEffect } from 'react'

function Test() {
    const authCheck = async () =>{
        try {
          const res = await axios.get("http://localhost:8080/api/v1/users/user-auth");
          console.log('Private Route : ', res)
        } catch (error) {
          console.log(error)
        }
      }
    useEffect(()=>{
        authCheck();
    }, [])
  return (
    <h1>Test</h1>
  )
}

export default Test