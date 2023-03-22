import { useTheme } from '../../hooks/useTheme'
import Button from '../Button/Button'
import './ThemeSwitcher.scss'

export type Theme = 'dark' | 'light'

interface ThemeSwitcherProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeSwitcher = ({ setTheme }: ThemeSwitcherProps) => {

  const [theme, toggleTheme] = useTheme();

  // const toggleTheme = () => setTheme(
  //   prev => prev === 'light'
  //     ? 'dark'
  //     : 'light'
  // )

    return (
      <span className={`ThemeSwitcher ${theme}`}>
          <Button 
            type='secondary'  
            onClick={(toggleTheme)}
          > 
            Switch Mode 
          </Button>
      </span>
    )
}