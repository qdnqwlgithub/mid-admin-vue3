<script lang="ts" setup>
import {ref, reactive} from 'vue'
import {useUserStore} from "@/store/user";

const userStore = useUserStore()

// do not use same name with ref
const form = reactive({
  username: 'admin',
  password: '123456'
})

const loading = ref(false)

const onSubmit = () => {
  loading.value=true;
  userStore.login(form.username, form.password).then(() => {
    console.log(`true`)
  }).catch((e) => {
    console.log(`false`)
  }).finally(()=>{
    loading.value=false
  })
}
</script>

<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="username">
      <el-input v-model="form.username"/>
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button :loading="loading" type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>


