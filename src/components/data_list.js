import React from 'react';


const DataList = ({alldata}) => {

        // console.log("!1", alldata.data);


        // Do not forget about ansyncronous management
        // React does not send value immediately.
        // Sending value depends on react itself. We do not know when react are going to send value.
        // If value is not delivered, the subset value of the object is not defined. It cannot execute it.  
        // Therefore, "city" cannot be found.

        // The solution is here. When null is found, it moves to the next step.
        if (!alldata.data) {
            return <div />
        }



        const Data = alldata.data.city;
        const Weather = alldata.data.list[0].weather[0].description;
        const CurrentTemp = alldata.data.list[0].main.temp;
            
        //console.log("!2", alldata.data.city.name);
        
            return(
                <div>
                  {Data.name}
                  {Data.country}
                  {Weather}
                  {CurrentTemp}
                </div> 
              );
    }

export default DataList;