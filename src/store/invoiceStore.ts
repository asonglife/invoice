import { computed, observable, runInAction } from "mobx";
import {ReqData} from '../service/commonService'
import {ParkListVO} from '../service/parkService'
import {requestData} from '../untils/api'

class InvoiceStore{
  @observable
  parkList:ParkListVO[] = [];

  @computed
  get parkIdList():Array<string>{
    return this.parkList.map(item=>{
      return item.parkId
    })
  }

  

  /**
   * 获取园区数据
   */
  async getParkListData(params:ReqData){
    runInAction(()=>{
      requestData<ParkListVO[]>(params)?.then( data =>{
        this.parkList = data.map(item => {
          return {...item}
        }
        ); 
        console.log('parkListdata:',this.parkList);
       });
    });
    
  };
  
}

export default InvoiceStore