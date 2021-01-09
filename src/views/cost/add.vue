<template>
  <div class="add w-all">
    <van-form @submit="onSubmit" class="w-all">

      <van-field name="add-o" label="添加新花销">
        <template #input>
          <van-icon name="add-o" color="#1989fa" @click="countAdd"/>
        </template>
      </van-field>

      <!-- 添加类型 -->
      <div v-for="(item, index) in costDetail">
        <van-field readonly clickable label="类型" :value="item.type1+ '_' +item.type2" placeholder="选择类型" @click="showPicker = true" />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
                  show-toolbar
                  :columns="costType"
                  @cancel="showPicker = false"
                  @confirm="typeConfirm(index, $event)"
          />
        </van-popup>
        <!-- 费用金额 -->
        <van-field v-model="item.price" type="number" label="金额" />
      </div>
      <!-- 选择日期 -->
      <van-field readonly clickable name="calendar" :value="nowDate" label="日期" placeholder="点击选择日期" @click="showCalendar = true" />
      <van-calendar v-model="showCalendar" @confirm="dateConfirm" />

      <!-- 详情描述 -->
      <van-field v-model="description" rows="1" autosize label="费用描述" type="textarea" placeholder="请输入费用描述" />
      <!-- 提价 -->
      <div style="margin: 16px;margin-top:300px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import { Form, Picker, Field, Popup, Calendar, Button, Dialog, Icon } from 'vant';
const costType = require("@/assets/js/costType");
import fetch from '@/utils/fetch';


@Component({
  components: {
    [Picker.name]: Picker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Form.name]: Form,
    [Button.name]: Button,
    [Calendar.name]: Calendar,
    [Icon.name]: Icon
  },
})
export default class Add extends Vue {
  //data；

  private costDetail: Array<object> = [{type1: costType[0]['text'], type2: costType[0]['children'][0]['text'], price: 0}]
  private showPicker: boolean = false
  private costType: Array<object> = costType



  private nowDate: any = Date.now() || new Date()
  private showCalendar: boolean = false

  private description: string = ''

  //methods；
  @Emit()
  typeConfirm(index: number, type: Array<string>): void{
    console.log(type)
    this.showPicker = false;
    this.costDetail[index]['type1'] = type[0];
    this.costDetail[index]['type2'] = type[1];
    console.log(this.costDetail)
  }

  @Emit()
  onSubmit(): void{
    Dialog.confirm({
      message: '是否确认保存'
    }).then(() => {
      console.log('确认');
      this.insertCost();
    }).catch(() => {
      console.log('取消')
    })
  }
  
  @Emit()
  countAdd(): void{
    const obj: object = {type1: costType[0]['text'], type2: costType[0]['children'][0]['text'], price: 0};
    this.costDetail.push(obj);
  }

  @Emit()
  dateConfirm(date: any): void{
    this.showCalendar = false;
    return;
    this.nowDate = date;
  }
  
  @Emit()
  insertCost(): void{
    const costData: object = {
      costDetail: this.costDetail,
      description: this.description,
      date: this.nowDate
    }
    // 调用保存接口；
    console.log(costData)
    fetch.insert(costData).then((res) => {

    })
    // this.$router.push('/')
  }
}
</script>

<style>
  .van-field {
    width: 100%;
  }
</style>