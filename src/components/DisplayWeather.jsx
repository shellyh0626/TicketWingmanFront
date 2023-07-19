import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
Chart.register(CategoryScale);
const DisplayWeather = () => {
  const weather = useSelector((state) => state.weather.tempInFahrenheit);

  return (
    <div style={{width:700}}>
      {console.log(weather)}
      {weather.length!==0?
      (<Line
        data={{labels: weather.daily.time.map((data) => data), 
          datasets: [
            {
              label: "Average Temperature",
              data: weather.daily.temperature_2m_max.map((data) => data),
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(255, 99, 71, 0.8)',
              tension: 0.1
              
            }
          ]
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Historical weather"
            },
            legend: {
              display: false
            }
          },
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          }      
        }}
        width={600}
        height={400}   
      />)
      :(<h1>LOADING...</h1>)}
    </div>
  );
};
export default DisplayWeather;