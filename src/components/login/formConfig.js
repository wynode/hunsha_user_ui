export const LoginFields = () => {
  return [
    // {
    //   title: '用户名',
    //   name: 'adminName',
    //   widget: 'text',
    //   rules: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
    // },
    {
      title: '客户名称',
      name: 'customerName',
      widget: 'text',
      rules: [{ required: true, message: '请填写客户名称', trigger: 'blur' }],
    },
    {
      title: '手机号码',
      name: 'customerPhone',
      widget: 'text',
      rules: [
        { required: true, message: '请填写用户手机号码', trigger: 'blur' },
      ],
    },
    // {
    //   title: '验证码',
    //   name: 'adminPassword',
    //   widget: 'text',
    //   rules: [{ required: true, message: '请填写用户密码', trigger: 'blur' }],
    //   xProps: {
    //     'show-password': true,
    //   },
    // },
  ]
}

export const RegisterFields = () => {
  return [
    {
      title: '用户名',
      name: 'adminName',
      widget: 'text',
      rules: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
    },
    {
      title: '用户账号',
      name: 'adminAccount',
      widget: 'text',
      rules: [{ required: true, message: '请填写用户账号', trigger: 'blur' }],
    },
    {
      title: '密码',
      name: 'adminPassword',
      widget: 'text',
      rules: [{ required: true, message: '请填写用户密码', trigger: 'blur' }],
      xProps: {
        'show-password': true,
      },
    },
  ]
}
