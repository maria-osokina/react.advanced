import { Suspense } from "react"
import './styles/index.scss'
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { classNames } from "shared/lib/helpers/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"


export const App = () => {
    const { theme, toggleTheme } = useTheme();
    const bool = true;

    return (
        <div className={classNames('app', {},[theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О проекте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />}  />
                </Routes>
            </Suspense>
        </div>
    )
}