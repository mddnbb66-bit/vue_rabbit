import { computed, onUnmounted, ref } from "vue"
import  dayjs  from "dayjs"
//倒计时函数
export const useCountDown = ()=>{
  //state
  let timer = null
  const time = ref(0)
  //格式化
  const formatTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  //开启倒计时函数
  const strat = (currtime)=>{
    time.value = currtime
   timer = setInterval(()=>{
  time.value--
    },1000)
  }
  onUnmounted(()=>timer&&clearInterval(timer))
  return {
    formatTime,
    strat
  }
}
