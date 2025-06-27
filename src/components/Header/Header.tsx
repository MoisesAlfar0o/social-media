import { useTheme } from "../../hooks/useTheme"

const Header = () => {
  const [isdark, setIsDark] = useTheme()
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between">
      <div className="flex flex-col sm:flex">
        <h1 className="text-xl sm:text-3xl text-light-dark-blue dark:text-white font-semibold">Social Media Dashboard</h1>
        <span className="text-sm text-light-grayish-blue dark:text-dark-desaturated-blue font-semibold">Total Followers: 23,004</span>
      </div>
      <hr className="md:hidden block border-light-desaturated-blue mt-4 mb-4" />
      <div className="flex justify-between gap-2 items-center">
        <span className="text-sm font-bold text-light-desaturated-blue">Dark mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isdark}
            onChange={() => setIsDark(prev => !prev)}
          />
          <div className="w-9 h-5 dark:bg-gradient-to-r peer-checked:bg-toggle-light rounded-full relative transition-all duration-300
            hover:bg-gradient-to-r from-toggle-dark-start to-toggle-dark-end" 
          />
          <div className="absolute left-1 top-0.5 w-4 h-4 bg-white dark:bg-dark-desaturated rounded-full transition-transform duration-300 peer-checked:translate-x-3" />
        </label>
      </div>
    </header>
  )
}

export default Header