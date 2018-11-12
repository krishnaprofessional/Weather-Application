import React from "react";

const Form = props =>(

    <form onSubmit = {props.getWeather}>
        <input type="text" name="city" placeholder="City.." />
        <input type="text" name="country" id="input2" placeholder="Country.." />
        <button className="btn"></button>
   </form>

);


export default Form;