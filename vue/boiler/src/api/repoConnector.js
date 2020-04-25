import { baseApi } from './axios.instance';

export default class RepoConnector {
  constructor (resourceName) {
    this.RESOURCE_NAME = resourceName;
    console.log("RepoConnector constructor")

  }

  getAll () {
    return baseApi.get(`${this.RESOURCE_NAME}`);
  }

  getById (resourceId) {
    return baseApi.get(`${this.RESOURCE_NAME}`);
  }

  create (data) {
    return baseApi.post(`${this.RESOURCE_NAME}`, data)
  }

  update (data) {
    return baseApi.put(`${this.RESOURCE_NAME}`, data)
  }

  delete (resourceId) {
    return baseApi.delete(`${this.RESOURCE_NAME}/${resourceId}`)
  }

  search (params) {
    return baseApi.get(`${this.RESOURCE_NAME}`, {params: params})
  }

}
