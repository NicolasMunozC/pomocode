import { AiFillSetting } from 'react-icons/ai'

export default function SettingsButton({currentTheme, theme}: any) {
  return (
    <button className={`${theme.button.bg[currentTheme]} w-20 h-20 rounded-3xl self-center`}>
    <AiFillSetting className={`${theme.button.text[currentTheme]} m-auto text-2xl`} />
    </button>
  )
}

