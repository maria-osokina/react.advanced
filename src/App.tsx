import { Suspense, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames"


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
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />}  />
                </Routes>
            </Suspense>
        </div>
    )
}