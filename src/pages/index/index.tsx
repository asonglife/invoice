import React, { Component } from 'react'
import { View , Picker, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import InvoiceStore from '../../store/invoiceStore'

import './index.scss'

interface InvoiceProps{}


interface InvoiceState{
  /**园区id */
  parkId:string;
}


interface Invoice extends InvoiceProps{
  invoiceStore:InvoiceStore
}

@inject('invoiceStore')
@observer
class Index extends Component<InvoiceProps, InvoiceState> {
  

   

  //  constructor(props){
  //    super(props)
  //    this.state={
  //      parkId: this.inject.invoiceStore.parkList
  //    }
  //  }
     
   get inject(){
    return this.props as Invoice
   }


   handleList(){
     console.log('触发')
     this.inject.invoiceStore.getParkListData({url:'getParkList' })
   }





  render () {
    return (
      <View className='index'>
       <Button onClick={()=>{this.handleList()}}>测试</Button>
      </View>
    )
  }
}

export default Index
