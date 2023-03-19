import './ThemeSwitcher.scss'

export type Theme = 'dark' | 'light'

interface ThemeSwitcherProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}


export const ThemeSwitcher = ({ setTheme }: ThemeSwitcherProps) => {

    return (
      <span className="ButtonTheme">
          <button  onClick={() => setTheme(
            prev => prev === 'light'
              ? 'dark'
              : 'light'
          )
          }> Switch Mode </button>
      </span>
    )
}