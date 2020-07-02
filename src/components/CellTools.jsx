import { splite, textCutOff } from '@/utils/common'
import { dateFormat } from '@/utils/dateFormat'
// import parseHTMLDom from '@/utils/parseHTMLDom'

export const DatetimeCell = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props
  const date = splite(dateFormat(row[prop]), ' ')

  return (
    <div>
      {date.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  )
}

export const FormatTime = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props

  const date = dateFormat(row[prop] * 1000)

  return <div>{date}</div>
}

export const AddCm = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props

  const render = `${row[prop]}cm`

  return <div>{render}</div>
}

export const AddYuan = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props

  const render = `${row[prop]}元`

  return <div>{render}</div>
}

export const AddJian = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props

  const render = `${row[prop]}件`

  return <div>{render}</div>
}

export const AddKg = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props

  const render = `${row[prop]}kg`

  return <div>{render}</div>
}

export const AddTian = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props

  const render = `${row[prop]}天`

  return <div>{render}</div>
}

export const TextCutOff = ({ props }) => {
  const {
    row,
    column: { prop },
    retain,
  } = props
  const content = row[prop] || ''
  const isOver = content.length > (retain || 36)
  const textcut = (
    <el-popover trigger="hover" placement="right">
      <p style={'max-width: 400px'}>{row[prop]}</p>
      <p slot="reference">{textCutOff(row[prop], retain || 36)}</p>
    </el-popover>
  )

  return <div>{isOver ? textcut : row[prop]}</div>
}

export const OneLineText = ({ props }) => {
  const {
    row,
    column: { prop },
  } = props
  const content = row[prop] || ''
  const isOver = content.length > 20
  const textcut = (
    <el-popover trigger="hover" placement="right">
      <p style={'max-width: 400px'}>{row[prop]}</p>
      <p slot="reference" class="text_one_line">
        {row[prop]}
      </p>
    </el-popover>
  )

  return <div>{isOver ? textcut : row[prop]}</div>
}
