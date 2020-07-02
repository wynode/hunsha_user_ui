export const addFields = (vm) => {
  return [
    {
      title: 'sku名称',
      name: 'skuId',
      widget: 'select',

      xProps: {
        filterable: true,
        options: vm.shopSkuList.map((item) => {
          return {
            label: item.skuName,
            value: item.skuId,
          }
        }),
      },
      rules: [{ required: true, message: '请选择sku', trigger: 'blur' }],
    },
    {
      title: '销售类型',
      name: 'dealType',
      widget: 'select',

      xProps: {
        filterable: true,
        options: [
          { label: '销售', value: 1 },
          { label: '租赁', value: 2 },
          { label: '定制', value: 3 },
        ],
      },
      rules: [{ required: true, message: '请选择销售类型', trigger: 'blur' }],
    },
    {
      title: '客户身高',
      name: 'customerHeight',
      widget: 'text',

      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '客户体重',
      name: 'customerWeight',
      widget: 'text',

      xProps: {
        ext: 'kg',
      },
    },
    {
      title: '衣长',
      name: 'clothesLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '袖长',
      name: 'sleeveLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '肩宽',
      name: 'shoulderWidth',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '胸围',
      name: 'bust',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '中腰',
      name: 'middleWaisted',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '下摆',
      name: 'hem',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '马甲',
      name: 'vest',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '裤长',
      name: 'trousersLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '腰围',
      name: 'waistLine',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '臀围',
      name: 'hipLine',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '大腿',
      name: 'thighLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '小腿',
      name: 'shankLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '租赁周期',
      name: 'rentNum',
      widget: 'text',
      xProps: {
        ext: '天',
      },
    },
    {
      title: '租赁押金',
      name: 'rentDepositNum',
      widget: 'text',
      xProps: {
        ext: '元',
      },
    },
    {
      title: '购买数量',
      name: 'skuNum',
      widget: 'text',
      xProps: {
        ext: '件',
      },
      rules: [{ required: true, message: '请填写购买数量', trigger: 'blur' }],
    },
    {
      title: '其他备注',
      name: 'note',
      widget: 'text',

      xProps: {
        type: 'textarea',
        maxlength: '255',
        'show-word-limit': true,
      },
    },
  ]
}

export const editFields = (vm) => {
  return [
    {
      title: 'skuName',
      name: 'skuId',
      widget: 'select',

      xProps: {
        filterable: true,
        options: vm.shopSkuList.map((item) => {
          return {
            label: item.skuName,
            value: item.skuId,
          }
        }),
      },
      rules: [{ required: true, message: '请选择sku', trigger: 'blur' }],
    },
    {
      title: '销售类型',
      name: 'dealType',
      widget: 'select',

      xProps: {
        filterable: true,
        options: [
          { label: '销售', value: 1 },
          { label: '租赁', value: 2 },
          { label: '定制', value: 3 },
        ],
      },
      rules: [{ required: true, message: '请填写分类Id', trigger: 'blur' }],
    },
    {
      title: '客户身高',
      name: 'customerHeight',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '客户体重',
      name: 'customerWeight',
      widget: 'text',
      xProps: {
        ext: 'kg',
      },
    },
    {
      title: '衣长',
      name: 'clothesLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '袖长',
      name: 'sleeveLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '肩宽',
      name: 'shoulderWidth',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '胸围',
      name: 'bust',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '中腰',
      name: 'middleWaisted',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '下摆',
      name: 'hem',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '马甲',
      name: 'vest',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '裤长',
      name: 'trousersLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '腰围',
      name: 'waistLine',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '臀围',
      name: 'hipLine',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '大腿',
      name: 'thighLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '小腿',
      name: 'shankLength',
      widget: 'text',
      xProps: {
        ext: 'cm',
      },
    },
    {
      title: '租赁周期',
      name: 'rentNum',
      widget: 'text',
      xProps: {
        ext: '天',
      },
    },
    {
      title: '租赁押金',
      name: 'rentDepositNum',
      widget: 'text',
      xProps: {
        ext: '元',
      },
    },
    {
      title: '购买数量',
      name: 'skuNum',
      widget: 'text',
      xProps: {
        ext: '件',
      },
      rules: [{ required: true, message: '请填写购买数量', trigger: 'blur' }],
    },
    {
      title: '其他备注',
      name: 'note',
      widget: 'text',

      xProps: {
        type: 'textarea',
        maxlength: '255',
        'show-word-limit': true,
      },
    },
  ]
}
