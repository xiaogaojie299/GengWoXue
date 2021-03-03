let mixin = {
    data(){
        return {
            is_Play: false, // 是否是播放中
        }
    },
    methods: {
        player(index,item) {
            console.log("打印成功");
            // 播放音频
            console.log(index);
            console.log(item);
            let audio = this.$refs.audio[index];
            // audio.load();    // 重新播放音频
            console.log("audio==>",audio);
            if (item.is_Play) {
              item.is_Play = false;
              audio.pause();
              console.log("暂停成功");
            } else {
              item.is_Play = true;
              audio.play();
            }
          }
    },
    created() {
        console.log("mixins打印成功");
    },
    mounted () {
        
    }
}
export default mixin