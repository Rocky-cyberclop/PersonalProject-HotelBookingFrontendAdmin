/* eslint-disable */
import style from './MainLayout.module.scss';
import styled from '@emotion/styled';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function MainLayout({ children }) {


    return (
        <div className={style.container}>
            <div className={style.sideBar}>
                <SideBar />

            </div>
            <div className={style.content}>
                <div className={style.header}>
                    <Header />
                </div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>

    );
}

export default MainLayout;