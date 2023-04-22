import Link from 'next/link'
import React from 'react'

const MenuItems = ({ title, address, Icon }) => {
    return (
        <>
            <Link href={address}>

                <Icon />
                <span>{title}</span>

            </Link>
        </>
    )
}

export default MenuItems