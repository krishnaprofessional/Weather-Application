import React from "react";

const Weather = props => (
    <div>
    {	
        props.city && props.country && <p className="weather__country"> { props.city }, { props.country }
        </p> 
      }
      { 	
        props.temperature && <div className="weather__temp"> { props.temperature + "°" }
        </div> 
      }
      { 	
        props.humidity && <p className="weather__humidity"> HUMIDITY: 
          <span className="weather__humidity1"> { props.humidity } </span>
        </p> 
      }
 	 { 	
        props.description && <p className="weather__desc"> CONDITIONS: 
          <span className="weather__desc1"> { props.description } </span>
      </p> 
      }
            { 
                props.error && <p className="weather__error">{ props.error }</p>  
            }
 </div>
);


export default Weather;