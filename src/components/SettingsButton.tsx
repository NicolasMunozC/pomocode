import { AiFillSetting } from 'react-icons/ai'
import { theme } from '../utils/theme'

export default function SettingsButton({currentTheme}: any) {
  return (
    <button className={`${theme.button.bg[currentTheme]} w-20 h-20 rounded-3xl self-center`}>
    <AiFillSetting className={`${theme.button.text[currentTheme]} m-auto text-2xl`} />
    </button>
  )
}

