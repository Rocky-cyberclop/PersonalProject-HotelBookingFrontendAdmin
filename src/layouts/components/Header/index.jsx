import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {

    const navigate = useNavigate()
    const location = useLocation();
    const pathArray = location.pathname.split('/').slice(1).map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1);
    });;
    const currentPath = pathArray[pathArray.length - 1];

    const handleLogout = () => {
        localStorage.removeItem('admin')
        navigate('/')
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.title}>
                    {
                        pathArray.map((path) => (
                            path + ' / '
                        ))
                    }
                </div>
                <div className={style.description}>{currentPath}</div>
            </div>
            <div className={style.right}>
                <div className={style.signOut} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} className={style.icon} />
                    Sign out
                </div>
                <div className={style.notice}><FontAwesomeIcon icon={faBell} className={style.icon} /></div>
                <div className={style.setting}><FontAwesomeIcon icon={faGear} className={style.icon} /></div>
            </div>
        </div>
    );
}

export default Header;