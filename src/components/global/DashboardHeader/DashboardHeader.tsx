import Logo from "../Logo"
import { Button, Input } from "../../interface"
import { BellIcon, CaretDown, MenuIcon, SearchIcon } from "../../icons"
import Avatar from '../../../assets/images/image.png'
import { Link } from "react-router-dom"

const DashboardHeader: React.FC<{menuClick: () => void}> = ({ menuClick }) => {

    return (
        <header className='dashboard-header'>
            <div className='dashboard-header-content'>
                <div className='dashboard-header-left'>
                    <Button
                        variant='naked'
                        className='hamburger'
                        onClick={menuClick}
                    >
                        <MenuIcon />
                    </Button>
                    <Link to='/'>  
                        <Logo className='header-logo' />
                    </Link>
                    <div className='search-container'>     
                        <Input
                            className='search-container-input'
                            placeholder='Search for anything'
                        />
                        <Button className='search-container-btn'>
                            <SearchIcon />
                        </Button>
                    </div>
                </div>
                <div className='dashboard-header-right'>
                    <Button className='docs-link' variant='link'>Docs</Button>
                    <BellIcon className='bell-icon' />
                    <div className='header-profile'>
                        <div className='header-profile-img'>
                            <img src={Avatar} alt="profile img" />
                        </div>
                        <div className='header-profile-name'>
                            <span>Adedeji</span>
                        </div>
                        <Button
                            variant='naked'
                            className='header-profile-dropdown'
                        >
                            <CaretDown />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader