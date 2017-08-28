import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cities = [
    {id:1, name:'武汉'},
    {id:2, name:'北京'},
    {id:3, name:'上海'},
    {id:4, name:'广州'},
    {id:5, name:'深圳'},
    {id:6, name:'香港'},
    {id:7, name:'成都'},
    {id:8, name:'温州'},
    {id:9, name:'厦门'},
    {id:10, name:'福州'},
    {id:11, name:'十堰'},
    {id:12, name:'黄冈'},
    {id:13, name:'英山'}
    ];
    return {cities};
  }
}
