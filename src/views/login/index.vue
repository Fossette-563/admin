<template>
  <div class="login-wrapper">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="title-container">
        <h3>用户登录</h3>
        <SvgIcon className="svg-language" icon="language"></SvgIcon>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <SvgIcon icon="user"></SvgIcon>
          </el-icon>
        </span>
        <el-input
          v-model.trim="loginForm.username"
          placeholder="username"
        ></el-input>
      </el-form-item>
      <el-form-item class="passInput" prop="password">
        <span class="svg-container">
          <el-icon>
            <SvgIcon icon="password"></SvgIcon>
          </el-icon>
        </span>
        <el-input
          v-model.trim="loginForm.password"
          :type="passwordType"
          placeholder="password"
        />
        <span class="svg-pwd" @click="handlePasswordEdit">
          <el-icon> <SvgIcon :icon="passwordIconStatus"></SvgIcon> </el-icon
        ></span>
      </el-form-item>
      <el-button class="login-button" type="primary" @click="handleLoginSubmit"
        >登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import util from '../../utils/utils'
import { useStore } from 'vuex'
import { computed, reactive, ref } from 'vue'
import { validatePassword } from './rules'
import md5 from 'md5'
// 引入路由
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const loginFormRef = ref(null)
// 密码框type
const passwordType = ref('password')
// 切换密码框type
const handlePasswordEdit = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
// 眼睛图标
const passwordIconStatus = computed(() => {
  return passwordType.value === 'password' ? 'eye' : 'eye-open'
})
// 表单验证规则
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填'
    }
  ],
  password: [
    {
      trigger: 'blur',
      required: true,
      validator: validatePassword
    }
  ]
})
// 表单数据模型
const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})
// 处理用户登录
const handleLoginSubmit = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      const newLoginForm = util.deepCopy(loginForm)
      newLoginForm.password = md5(newLoginForm.password)
      const response = await store.dispatch('user/login', newLoginForm)
      if (response.token) router.push('/')
    }
  })
}
</script>
http://localhost:8080/#/login
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-wrapper {
  background-color: $bg;
  height: 100%;
  position: relative;

  .login-form {
    width: 520px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 160px;

    .title-container {
      text-align: center;
      position: relative;
      margin-bottom: 40px;

      h3 {
        color: $light_gray;
        font-size: 26px;
      }

      ::v-deep(.svg-language) {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    ::v-deep(.el-form-item) {
      height: 49px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.1);

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
      }

      .svg-pwd {
        cursor: pointer;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer !important;
        user-select: none;
      }

      .el-input {
        height: 100%;

        width: 85%;
        display: inline-block;

        .el-input__wrapper {
          background-color: transparent;
          box-shadow: none;
          vertical-align: middle;
          height: 100%;
          width: 100%;

          input {
            background-color: transparent;
            height: 100%;
            width: 100%;
            color: $cursor;
          }
        }
      }
    }

    ::v-deep(.passInput) {
      .el-form-item__content {
        width: 100%;
      }
    }

    .login-button {
      width: 100%;
    }
  }
}
</style>
