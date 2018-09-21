<template>
        <div class="message-btn displayFlex flexJustifyAround">
                <div class="discounts-btn message-btn-com" @click="informationClickhandler">优惠咨询</div>
                <a class="phone-btn message-btn-com" @click="phoneClick($event)" :href="'tel:+' + ph_">电话资讯</a>
        </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
        props: {
                ph_: '',
                uid: ""
        },

        // computed: {
        //         ...mapState({
        //                 ph_: state => state.phone_
        //         }),
        // },
        methods: {
                phoneClick(e) {
                        if (this.ph_) {
                                return;
                        }
                        this.stopDefault(e);
                },

                stopDefault(e) {
                        if (e && e.preventDefault) {
                                e.preventDefault();
                                return;
                        }
                        e.returnValue = false;
                },

                informationClickhandler() {
                        this.$router.push({
                                path: `/information/${this.uid}`,
                                query: {
                                        path: this.$route.path
                                }
                        });
                }

        },
        created() {
                console.log(this.uid);
        }
}
</script>
<style scoped>
.message-btn {
  width: 7.5rem;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background: #fff;
  padding: 0.2rem 0;
}
.message-btn-com {
  width: 3.35rem;
  height: 0.8rem;
  color: #fff;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 100px;
  font-size: 0.32rem;
}
.discounts-btn {
  background: #68cda1;
  box-shadow: 2px 3px 11px 0px rgba(104, 205, 161, 0.5);
}
.phone-btn {
  background: #0080ff;
  box-shadow: 2px 3px 11px 0px rgba(0, 128, 255, 0.5);
}
</style>

