<template>
        <div class="op clearfix"> -->
                <ul ref="op1" class="op1">
                        <li v-for="(val,index) in photos1" :key="index">
                                <p class="op1_time">{{val.publishDate}}</p>
                                <div class="op1_div" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                                        <div class="u-video-btn" v-if="val.isVideo == 1">
                                                <img style="width: 100%;" src="/static/icon_zanting_n@3x.png" alt=""></div>
                                        <img :src="val.src" alt=""></div>
                                <div class="player_info">
                                        <p>{{val.title}}</p>
                                        <div class="g-light-seek-use">
                                                <span class="g-light-seek-use-img">
                                                        <img :src="val.avatar ? val.avatar:de_use_img" alt=""></span>
                                                <span class="g-light-seek-use-name">{{val.userName}}</span>
                                                <span class="g-light-seek-use-num" style="margin-right: 0.15rem">
                                                        <span style="width:0.24rem;height: 0.22rem;display: inline-block;margin-right: 0.1rem">
                                                                <img style="width: 100%;" src="/static/xunguang_icon_pinglun_n@3x.png" alt="" v-on:click.prevent="loadHandler('0','animated bounceIn')"></span>{{val.commentCount}}</span>
                                        </div>
                                </div>
                        </li>
                </ul>
                <ul ref="op2" class="op2">
                        <li v-for="(val,index) in photos2" :key="index">
                                <p class="op1_time">{{val.publishDate}}</p>
                                <div class="op1_div" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                                        <div class="u-video-btn" v-if="val.isVideo == 1">
                                                <img style="width: 100%;" src="/static/icon_zanting_n@3x.png" alt=""></div>
                                        <img :src="val.src" alt=""></div>
                                <div class="player_info">
                                        <p>{{val.title}}</p>
                                        <div class="g-light-seek-use">
                                                <span class="g-light-seek-use-img">
                                                        <img :src="val.avatar? val.avatar:de_use_img" alt=""></span>
                                                <span class="g-light-seek-use-name">{{val.userName}}</span>
                                                <span class="g-light-seek-use-num" style="margin-right: 0.15rem">
                                                        <span style="width:0.24rem;height: 0.22rem;display: inline-block;margin-right: 0.1rem">
                                                                <img style="width: 100%;" src="/static/xunguang_icon_pinglun_n@3x.png" alt="" v-on:click.prevent="loadHandler('0','animated bounceIn')"></span>{{val.commentCount}}</span>
                                        </div>
                                </div>
                        </li>
                </ul>
        </div>
</template>
<script>
export default {
        props: {
                arr: arr
        },
        data() {
                return {
                        photos1: [],
                        photos2: [],
                        imgsArr: []
                }
        },
        methods: {
                init() {
                        //         //创建瀑布流效果
                        if (this.arr.length !== 0) {
                                setTimeout(() => {
                                        let this_ = this;
                                        this.imgsArr = this.initImgsArr(this.arr);
                                        let img = document.createElement("img");
                                        img.src = this.imgsArr[0].src;
                                        img.style.display = "none";
                                        img.onload = function () {
                                                this_.photos1.push(this_.imgsArr[0]);
                                                for (let i = 1; i < this_.imgsArr.length; i++) {
                                                        let img = document.createElement("img");
                                                        img.src = this_.imgsArr[i].src;
                                                        img.style.display = "none";
                                                        img.onload = () => {
                                                                op1_H = this_.$refs.op1.offsetHeight;
                                                                op2_H = this_.$refs.op2.offsetHeight;
                                                                if (!op1_H || !op2_H) {
                                                                        op1_H = this_.$refs.op1.offsetHeight;
                                                                        op2_H = this_.$refs.op2.offsetHeight;
                                                                }
                                                                if (op1_H < op2_H) {
                                                                        this_.photos1.push(this_.imgsArr[i]);
                                                                } else {
                                                                        this_.photos2.push(this_.imgsArr[i]);
                                                                }
                                                        };
                                                }
                                        };
                                }, 0);
                        }
                },
                initImgsArr(m) {
                        //num 图片数量
                        let arr = [];
                        for (var i = 0; i < m.length; i++) {
                                arr.push({
                                        src: m[i].picUrl,
                                        link: "javascript:void(0);",
                                        info: m[i].title,
                                        avatar: m[i].avatar,
                                        userName: m[i].userName,
                                        commentCount: m[i].commentCount,
                                        height: m[i].height,
                                        isVideo: m[i].isVideo,
                                        publishDate: m[i].publishDate
                                });
                        }
                        return arr;
                }
        }
}
</script>

<style scoped>
.op1,
.op2 {
  width: 3.3rem;
  float: left;
}

.op1 {
  margin-right: 0.15rem;
}

.op2 {
  margin-left: 0.15rem;
}

.op1_time {
  padding-bottom: 0.14rem;
  padding-left: 0.2rem;
  line-height: 0.24rem;
  font-family: PingFangSC-Regular;
  font-size: 0.24rem;
  color: #8b949e;
}

.op1 li,
.op2 li {
  margin-top: 0.15rem;
}

.op1 img,
.op2 img {
  width: 100%;
}

.op1_div {
  position: relative;
  box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.35);
}
.u-video-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -0.35rem;
  margin-top: -0.35rem;
  width: 0.7rem;
  height: 0.7rem;
}
.g-light-seek-use-img {
  margin: auto 0.2rem auto 0;
  display: inline-block;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 0.32rem;
  overflow: hidden;
}

.g-light-seek-use-img img {
  width: 100%;
  height: 100%;
}

.g-light-seek-use {
  display: flex;
  margin-top: 0.24rem;
  padding-bottom: 0.3rem;
}

.g-light-seek-lis p {
  margin-top: 0.2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  color: #212832;
  line-height: 0.28rem;
}

.g-light-seek-use-name {
  margin: auto 0.72rem auto auto;
}

.g-light-seek-use-name,
.g-light-seek-use-num {
  margin: auto auto auto 0;
  font-size: 0.24rem;
  color: #8b949e;
  line-height: 0.24rem;
}
</style>

