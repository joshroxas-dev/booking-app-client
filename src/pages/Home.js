import React, {useState, useEffect} from 'react'
import LoaderComponent from "../components/LoaderComonent"

import Unit from '../components/Unit'

import * as api from "../api";


const Home = () => {
    const [ allData, setAllData] = useState([]);
    const [ data, setData] = useState([]);
    const [ searchTerm, setSearchTerm] = useState("");

    const [ loader, setLoader ] = useState(false);

    const getUnits = async () => {
        setLoader(true);
        try {
            const {data} = await api.getUnits();
            setData(data);
            setAllData(data);
            setLoader(false);
        } catch (error) {
            console.log("error getting units", error);
            setLoader(false);
        }
    }

    useEffect(() => {
        getUnits();
    }, [])

    useEffect(() => {
      if (searchTerm !== "") {
          setTimeout(() => {
              setData(allData.filter(data => data.name.toLowerCase().includes(searchTerm.toLowerCase())))
          }, 1000)
      } else {
          console.log("Blank")
          setTimeout(() => {
              setData(allData);
          }, 1000)
      }
    }, [searchTerm, allData])

  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='row mx-1'>
            <div className='col-12 col-md-6 col-lg-4 mx-auto'>
              <input
                className='border-primary rounded py-2 px-3 w-100'
                type='search'
                name="searchTerm"
                placeholder='Search...'
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {
        loader ? (
            <div className="mt-5 text-center">
                <LoaderComponent />
                <h3>Loading units...</h3>
            </div>
        ) : (
            <div className='row mx-1'>
            {data.map(location => (
              <div className='col-md-6 col-lg-3' key={location._id}>
                <Unit location={location} getUnits={() => getUnits()} />
              </div>
            ))}
          </div>
        )
    }
  
    </>
  )
}

export default Home
