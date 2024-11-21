import { useTheme } from "@/contexts/ThemeContext"

export const ThemeSwitch=()=>{

   const themeCtx = useTheme();

  const handleThemeToggle =()=>{
    if (themeCtx){
        themeCtx.setTheme(themeCtx.theme ==='dark'?'ligth':'dark')
    }
  }

    return(
        <div className="fixed top-0 right-0 p-3 text-center cursor-pointer"
          onClick={handleThemeToggle}>
            {themeCtx?.theme==='dark' && 'mudar para ligth'}
            {themeCtx?.theme==='ligth' && 'mudar para dark'}

        </div>
    )
}