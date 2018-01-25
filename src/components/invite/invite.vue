<template>
  <div class="invite">
    <article class="invite_problem">
      <h1>邀请说明</h1>
      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q1：我的邀请码在哪里？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：登录鹰眼鉴房APP，点击“我的”-“邀请有奖”即可查询到邀请码。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q2：我最多可以邀请几个人参与活动？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：邀请人可以邀请多个被邀请人参加活动，目前暂无邀请上限。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q3：为什么我的邀请码发给朋友，朋友无法绑定？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：邀请码无法绑定主要存在以下几种情况：</p>
          <p>Ø 邀请码发送或填写有误，建议检查邀请码是否输入正确</p>
          <p>Ø 所邀请用户为自己的邀请人</p>
          <p>Ø 网络环境不良，请换一个网络环境再次尝试</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q4：如何查询我邀请成功了几个人？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：登录鹰眼鉴房APP，点击“我的”-“邀请有奖”-“我的奖励”中可查询到邀请成功总人数。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q5：奖励如何核算？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：邀请人可获得被邀请人审核照片所获得积分的10%作为奖励。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q6：我的奖励什么时候到账？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：被邀请人照片审核通过，积分将同时发放至邀请人鹰眼鉴房积分账户中。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q7：奖励到账有通知吗？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：目前暂无通知，您可以在“我的”-“邀请有奖”-“我的奖励”中可查询到总积分。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q8：推荐活动每月有奖励上限吗？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：目前暂无奖励上限，您邀请参与活动的用户越多，审核通过的照片数量越多，奖励越多。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q9：我收到了朋友的邀请码，在哪里绑定？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：登录鹰眼鉴房APP，注册登陆后，点击“我的”-“邀请有奖”-“填写邀请码”中输入邀请码绑定成功。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q10：我是被别人邀请参加活动的，我可以继续邀请其他人参加吗？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：可以的，您可以使用自己的邀请码邀请其他朋友注册参与活动。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q11：我已经填过一个邀请码并且绑定了，还能更换吗？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：很抱歉，邀请码一旦绑定成功，无法删除或更换。</p>
        </div>
      </div>

      <div class="invite_inner">
        <div class="what_invite">
          <h2>Q12：我的邀请码填错了但是绑定成功了，还能更改吗？</h2>
        </div>
        <div class="what_invite_text">
          <p>答 ：无效验证码无法绑定，但邀请码一旦绑定成功，无法删除或更换。</p>
        </div>
      </div>

    </article>
  </div>
</template>
<style scoped>
  .invite {
    width: 7.5rem;
    background: #f2f3f7;
    position: relative;
    padding-top: 0.3rem;
    margin: auto;
  }

  .invite_problem {
    width: 6.88rem;
    background: #fff;
    padding: 0.3rem 0.31rem;
  }

  .invite_problem h1 {
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #42464D;
    line-height: 0.36rem;
    margin-bottom: 0.3rem;
    font-weight: normal;
  }

  .invite_inner {
    box-shadow: 0px 0px 0.09rem 0.010rem #A9B7C5;
    margin-bottom: 0.2rem;
  }

  .what_invite {
    padding: 0.2rem 0.3rem;
  }

  .what_invite h2 {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #4D535D;
    line-height: 0.36rem;
    font-weight: normal;
  }

  .what_invite_text {
    padding: 0.2rem 0.27rem 0.3rem 0.28rem;
    border-top: 1px solid #f2f3f7;
  }

  .what_invite_text p {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #7F8893;
    letter-spacing: 1px;
    line-height: 0.34rem;
  }
</style>

