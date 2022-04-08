import React, { useState, useEffect } from 'react'
import CountryPicker from './components/CountryPicker';
import './App.css';
import Chart from './components/Chart';
import image from './images/image.png';
import Cards from './components/Cards';
import axios from './axios';

const App = () => {

  const [loading, setloading] = useState(false)
  const [coronainfo, setcoronainfo] = useState({})
  const [dailydata, setdailydata] = useState({})
  const [fetchcountries, setfetchcountries] = useState([])
  const [country, setcountry] = useState("")


  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const res = await axios.get(`/all`);
        setloading(false);

        const { updated, cases, todayCases, deaths, todayDeaths } = res.data;

        const covidinfo = {
          updated,
          cases,
          todayCases,
          deaths,
          todayDeaths,
        };
        setcoronainfo(covidinfo);
        setdailydata(covidinfo);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/countries`);
        setfetchcountries(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

      

  const countrychange = (event) =>{
      setcountry(event.target.value)
      getcountry(event.target.value)
  }

  const getcountry = async (countrySlug) =>{
      if (countrySlug) {
        try {
          const res = await axios.get(`/countries/${countrySlug}`);
          const { todayCases, cases, todayDeaths, deaths, updated } = res.data;
  
          const covidinfo = {
            todayCases,
            cases,
            todayDeaths,
            deaths,
            updated,
          };
          setcoronainfo(covidinfo);
          setdailydata(covidinfo);
  
          
        } catch (error) {
          console.log(error);
        }
      } else {
        async function fetchData() {
          try {
            const res = await axios.get(`/all`);
    
            const { updated, cases, todayCases, deaths, todayDeaths } = res.data;
    
            const covidinfo = {
              updated,
              cases,
              todayCases,
              deaths,
              todayDeaths,
            };
            setcoronainfo(covidinfo);
            setdailydata(covidinfo);
    
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }

  }

  if (loading) {
    return <p className="load">fething data from api...!
      Please wait OR Check your Internet Connection.</p>
  }
  return (
    <div className="App">
      <div className="img1">
        <img src={image} alt="covid-19" className="img" />
      </div>
      <Cards coronainfo={coronainfo} />
      <CountryPicker fetchcountries={fetchcountries} country={country} countrychange={countrychange}/>
      <Chart dailydata={dailydata} country={country}/>
    </div>
  )
}

export default App
