/* eslint-disable */
import style from './SideBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChartColumn, faTable, faBook, faBuilding, faReceipt, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faBuilding as faBuildingRegular, faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SideBar() {
    const [menu, setMenu] = useState('')
    const [chosen, setChosen] = useState(1)

    const handleOpenMenu = (menu) => {
        setMenu(pre => {
            if (pre === menu) return ''
            return menu
        })
    }

    const handleChosen = (number) => {
        setChosen(number)
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                Rocky Hotels Admin
            </div>
            <div className={style.body}>
                <div className={style.item}>
                    <Link to={'/dashboard'}
                        className={`${style.wrapper} ${chosen === 1 && style.chosen}`}
                        onClick={() => { handleChosen(1) }}>
                        <FontAwesomeIcon icon={faHouse} className={style.icon} />
                        <div className={style.text}>Dashboard</div>
                    </Link>
                </div>
                <div className={style.item}>
                    <Link
                        className={`${style.wrapper} ${chosen === 2 && style.chosen}`}
                        onClick={() => { handleOpenMenu('management'); handleChosen(2) }}>
                        <FontAwesomeIcon icon={faTable} className={style.icon} />
                        <div className={style.text}>Management</div>
                    </Link>
                    {menu === 'management' &&
                        <div className={style.menu}>
                            <Link to={'/management/booking'}
                                className={`${style.wrapper} ${chosen === 3 && style.chosen}`}
                                onClick={() => { handleChosen(3) }}>
                                <FontAwesomeIcon icon={faBook} className={style.icon} />
                                <div className={style.text}>Bookings</div>
                            </Link>
                            <Link to={'/management/customers'}
                                className={`${style.wrapper} ${chosen === 4 && style.chosen}`}
                                onClick={() => { handleChosen(4) }}>
                                <FontAwesomeIcon icon={faUser} className={style.icon} />
                                <div className={style.text}>Customers</div>
                            </Link>
                        </div>}
                </div>
                <div className={style.item}>
                    <Link
                        className={`${style.wrapper} ${chosen === 6 && style.chosen}`}
                        onClick={() => { handleOpenMenu('statistic'); handleChosen(6) }}>
                        <FontAwesomeIcon icon={faChartColumn} className={style.icon} />
                        <div className={style.text}>Statistic</div>
                    </Link>
                    {menu === 'statistic' &&
                        <div className={style.menu}>
                            <Link to={'/statistic/profit'}
                                className={`${style.wrapper} ${chosen === 7 && style.chosen}`}
                                onClick={() => { handleChosen(7) }}>
                                <FontAwesomeIcon icon={faMoneyBillTrendUp} className={style.icon} />
                                <div className={style.text}>Profit</div>
                            </Link>
                            <Link to={'/statistic/reservation'}
                                className={`${style.wrapper} ${chosen === 8 && style.chosen}`}
                                onClick={() => { handleChosen(8) }}>
                                <FontAwesomeIcon icon={faReceipt} className={style.icon} />
                                <div className={style.text}>Reservations</div>
                            </Link>
                        </div>}
                </div>
            </div>
            <div className={style.footer}>
                <img src={logo} alt="" width={300} />
            </div>
        </div>
    )
}

export default SideBar;