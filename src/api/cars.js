import axios from 'axios';

export const getCars = async () => {
    const cars = await axios.get('https://carguideserviceapi20201105030004.azurewebsites.net/CarGuideServiceAPI/vehicle/all');
    return cars;
}

export const apiAddCar = async (request_data) => {
     await axios.post('https://carguideserviceapi20201105030004.azurewebsites.net/CarGuideServiceAPI/vehicle', {request_data})
      .then(res => {
          console.log(res)
          console.log(res.data)
      })
}

