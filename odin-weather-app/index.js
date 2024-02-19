document.addEventListener('DOMContentLoaded', function() {
    weatherAPI()
  });
  
function weatherAPI() {
    const dataDisplay = document.querySelector('#displayDiv')
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault()
        showLoading();
        dataDisplay.innerHTML = ''
        let locationAnswer = document.getElementById('locationQuestion').value
        setTimeout(function() {
            hideLoading(); 
            returnData()
          }, 2000)
        function returnData() {
            fetch(`https://api.weatherapi.com/v1/current.json?key=49d93f6798704bc2b87183549241902&q=${locationAnswer}`)
                .then(function(response) {
                return response.json();
                })
                .then(function(response) {
                    let responseObject = {
                        CurrentCondition: response.current.condition.text,
                        Img: response.current.condition.icon,
                        CurrentTemperatureFeel: response.current.feelslike_c,
                        CurrentGustKPH: response.current.gust_kph,
                        CurrentHumidity: response.current.humidity,
                        CurrentPrecipitationMM: response.current.precip_mm,
                        CurrentUltraViolet: response.current.UV,
                        CurrentVisibilityKM: response.current.vis_km,
                        CurrentWindDegree: response.current.wind_degree,
                        CurrentWindDirection: response.current.wind_dir,
                        CurrentWindKPH: response.current.wind_kph,
                        LocationCountry: response.location.country,
                        LocationLocalTime: response.location.localtime,
                        LocationName: response.location.name,
                        LocationRegion: response.location.region,
                        LocationTimeZone: response.location.tz_id,
                    }
                    dataDisplay.innerHTML = `
                        <ul>
                            <img src="${responseObject.Img}">
                            <li><strong>Current Condition:</strong> ${responseObject.CurrentCondition}</li>
                            <li><strong>Current Temperature Feels Like (C):</strong> ${responseObject.CurrentTemperatureFeel}</li>
                            <li><strong>Current Gust (KPH):</strong> ${responseObject.CurrentGustKPH}</li>
                            <li><strong>Current Humidity:</strong> ${responseObject.CurrentHumidity}</li>
                            <li><strong>Current Precipitation (MM):</strong> ${responseObject.CurrentPrecipitationMM}</li>
                            <li><strong>Current Ultra Violet:</strong> ${responseObject.CurrentUltraViolet}</li>
                            <li><strong>Current Visibility (KM):</strong> ${responseObject.CurrentVisibilityKM}</li>
                            <li><strong>Current Wind Degree:</strong> ${responseObject.CurrentWindDegree}</li>
                            <li><strong>Current Wind Direction:</strong> ${responseObject.CurrentWindDirection}</li>
                            <li><strong>Current Wind (KPH):</strong> ${responseObject.CurrentWindKPH}</li>
                            <li><strong>Location Country:</strong> ${responseObject.LocationCountry}</li>
                            <li><strong>Location Local Time:</strong> ${responseObject.LocationLocalTime}</li>
                            <li><strong>Location Name:</strong> ${responseObject.LocationName}</li>
                            <li><strong>Location Region:</strong> ${responseObject.LocationRegion}</li>
                            <li><strong>Location Time Zone:</strong> ${responseObject.LocationTimeZone}</li>
                        </ul>`;
                })
                .catch(function(err) {
                    console.log("Error: ", err)
            });
        }
    })
         
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
  }
  
  // Function to hide the loading component
  function hideLoading() {
    document.getElementById('loading').style.display = 'none';
  }