<template>
  <a-spin :spinning="confirmLoading">
    <a-form :form="form">
      <a-form-item label="机构名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="[ 'id', {}]" :readOnly="true" />
      </a-form-item>
      <a-form-item label="联系电话" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="[ 'name', {}]" :readOnly="true" />
      </a-form-item>
      <a-form-item label="消费内容" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="[ 'serviceName', {}]" :readOnly="true" />
      </a-form-item>
      <a-form-item label="消费金额" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="[ 'servicePrice', {}]" :readOnly="true" />
      </a-form-item>
      <a-form-item label="余额" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="[ 'remainder', {}]" :readOnly="true" />
      </a-form-item>
      <a-form-item label="消费时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="[ 'createTime', {}]" :readOnly="true" />
      </a-form-item>
    </a-form>
  </a-spin>
</template>

<script>
export default {
  name: 'BaseInfo',
  data () {
    return {
      visible: false,
      confirmLoading: false,
      confirmDirty: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
      form: this.$form.createForm(this)
    }
  },
}
</script>

<style lang="less" scoped>

</style>
