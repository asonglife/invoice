import Mock from 'mockjs';
import {request} from '@tarojs/taro';
import {ReqData} from '../service/commonService'

/**判断是否是使用的mock数据 */
let isMockData = true;


/**
 * 请求数据的方法
 */

export function requestData<T = void>(data:ReqData){
  const {url, method = 'GET'} = data;
  const options:request.Option = {
    url:url,
    method:method,
    header:{ 'Content-Type': 'application/json', }
  }
  if(!isMockData){
    request(options).then(requestedData => console.log('data:',requestedData)).catch(
      err=>console.log('err:',err)
    )
  }else{
    const mockData = Mock.mock({
      'error_code': '',
      'error_msg': '',
      'data|10': [{
          'id|+1': 1,
          'img': "@image('200x100', '#4A7BF7','#fff','pic')",
          'title': '@ctitle(3,8)',
          'city': "@county(true)",
          'stock_num': '@integer(0,100)',//库存数量  
          'marketing_start': '@datetime()',
          'marketing_stop': '@now()',
          'price': '@integer(100,2000)',//现价，单位：分  
          'original_price': '@integer(100,3000)'
      }]  
  })
  console.log('mockData:',mockData);
  }
}


