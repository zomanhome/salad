import axios from 'axios';

export default class SaladService {
  async getSalad() {
    const API = `http://localhost:3004`;
    let id,
      result = {};
    return axios
      .get(`${API}/salad`)
      .then(res => {
        id = Math.floor(Math.random() * res.data.length) + 1;
        return id;
      })
      .then(id => axios.get(`${API}/salad/${id}`))
      .then(res => {
        result.name = res.data.name;
        return id;
      })
      .then(id => axios.get(`${API}/vegetables/${id}`))
      .then(res => {
        result.vegetables = res.data.vegetables;
        return id;
      })
      .then(id => axios.get(`${API}/meat/${id}`))
      .then(res => {
        result.meat = res.data.meat;
        return id;
      })
      .then(id =>
        axios.get(
          `${API}/ingredients?vegetables=${result.vegetables.join(
            ','
          )}&meat=${result.meat.join(',')}`
        )
      )
      .then(res => {
        result.imgUrl = res.data[0].imgUrl;
        return result;
      });
  }
}
