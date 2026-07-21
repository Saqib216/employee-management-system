import Button from './Button';

const Header = ({ handleLogout, employeeData, adminData }) => {
    const userName = employeeData?.name || adminData?.name || 'User';

    return (
        <div>
            <div className='py-8 flex justify-between'>
                <h2 className='text-2xl'>Hello, <span className='tracking-wide font-semibold'>{(userName === adminData?.name) ? userName.split(' ').slice(0,2).join(' ') : userName.split(' ')[0]}👋</span></h2>

                <Button variant="secondary" id="logout-btn" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
        </div>
    )
}

export default Header
