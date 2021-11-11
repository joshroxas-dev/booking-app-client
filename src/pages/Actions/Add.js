import React, { useState } from 'react'
import FileBase from 'react-file-base64'

import LoaderComponent from "../../components/LoaderComonent"

import {useNavigate} from "react-router-dom";

import * as api from "../../api"

const Add = () => {
    const navigate = useNavigate();
  const [postData, setPostData] = useState({
    name: '',
    location: '',
    img: ''
  })

  const [ loader, setLoader ] =  useState(false);

  const handleChange = (e) => {
      const { name, value} = e.target;

      setPostData({...postData, [name]: value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(postData);
    setLoader(true);
    try {
        await api.postUnit(postData);
        setLoader(false);
        navigate("/");
    } catch (error) {
        setLoader(false);
        console.log("error posting unit", error);
    }
  }
  return (
    <div className="mx-3">
        {
            loader ? (
                <div className="mt-5 text-center">
                <LoaderComponent />
                <h3>Adding...</h3>
            </div>
            ) : (
                <form className='form-group' onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label for='name' className='form-label'>
                    Name
                  </label>
                  <input type='text' className='form-control' name='name' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                  <label for='location' className='form-label'>
                    location
                  </label>
                  <input type='text' className='form-control' name='location' onChange={handleChange} />
                </div>
                <FileBase
                  type='file'
                  multiple={false}
                  onDone={({ base64 }) => setPostData({ ...postData, img: base64 })}
                />
                <button type='submit' className='btn btn-primary d-block mx-auto mt-3 w-25'>
                  ADD
                </button>
              </form>
            )
        }
     
    </div>
  )
}

export default Add
