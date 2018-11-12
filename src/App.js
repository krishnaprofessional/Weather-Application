import React from "react";
import Titles from "./components/Titiles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "04053ea88ff55b590e7e424265a2a76f";

class App extends React.Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,

    }
    getWeather = async (e) => {

        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
          if(city && country ){
    
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error:""
            
        
             });
        }
        else{

            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the value",
               });

        }
    }  

    render() {
        return (
          <div className= "wrapper">
             <Titles />
             <Form getWeather={this.getWeather} />
             <Weather 
                   temperature={this.state.temperature} 
                   humidity={this.state.humidity}
                   city={this.state.city}
                   country={this.state.country}
                   description={this.state.description}
                   error={this.state.error}
               />
           </div>
        );
      }
    };
    

export default App;
