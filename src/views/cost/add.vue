<template>
  <div class="add">
    <van-form @submit="onSubmit">
      <!-- 一级类型 -->
      <van-field readonly clickable label="类型" :value="type" placeholder="选择类型" @click="showPicker = true" />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="typeConfirm"
        />
      </van-popup>
      <!-- 二级类型 -->
      <van-field readonly clickable label="子类型" :value="type2" placeholder="选择类型" @click="showPicker2 = true" />
      <van-popup v-model="showPicker2" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns2"
          @cancel="showPicker2 = false"
          @confirm="type2Confirm"
        />
      </van-popup>
      <!-- 选择日期 -->
      <van-field readonly clickable name="calendar" :value="nowDate" label="日期" placeholder="点击选择日期" @click="showCalendar = true" />
      <van-calendar v-model="showCalendar" @confirm="dateConfirm" />
      <!-- 费用金额 -->
      <van-field v-model="money" type="number" label="金额" />
      <!-- 详情描述 -->
      <van-field v-model="detail" rows="1" autosize label="费用描述" type="textarea" placeholder="请输入费用描述" />
      <!-- 提价 -->
      <div style="margin: 16px;margin-top:300px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import { Form, Picker, Field, Popup, Calendar, Button, Dialog } from 'vant';

@Component({
  components: {
    [Picker.name]: Picker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Form.name]: Form,
    [Button.name]: Button,
    [Calendar.name]: Calendar,

  },
})
export default class Add extends Vue {
  private type: string = ''
  private showPicker: boolean = false
  private columns: Array<string> = ['必销', '买乐', '提升']

  private type2: string = ''
  private showPicker2: boolean = false
  private columns2: Array<string> = ['房租', '差旅', '食宿', '衣装', '养老', '保障']

  private nowDate: any = Date.now() || new Date()
  private showCalendar: boolean = false

  private money: number = 0
  private detail: string = ''

  @Emit()
  typeConfirm(type: string): void{
    this.showPicker = false;
    this.type = type;
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
  type2Confirm(type2: string): void{
    this.showPicker2 = false;
    this.type2 = type2;
  }

  @Emit()
  dateConfirm(date: any): void{
    this.showCalendar = false;
    return;
    this.nowDate = date;
  }
  
  @Emit()
  insertCost(): void{
    // 调用保存接口；
    this.$router.push('/')
  }
}
</script>
