import { Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = ({ allCategories }) => {
    const location = useLocation();
    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography component='h2'
                    variant='h5'
                    color='inherit'
                    align='center'
                    sx={{ flex: 1 }}
                >
                    <img src="/images/logo.png" height='220' width='300' />
                </Typography>

            </Toolbar >
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {/* {console.log(allCategories)} */}
                {allCategories?.map((category) => (
                    <Link
                        key={category?.url}
                        to={category?.url}
                        className={
                            location.pathname === category?.url ? 'activeNavLink' : ""
                        }>
                        {category?.title}

                    </Link>
                ))}
            </Toolbar>
        </>
    );
};

export default Header;