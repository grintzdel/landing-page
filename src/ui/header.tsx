import React, {JSX} from "react";
import Image from "next/image"
import Link from "next/link";
import {Divider} from "@/ui/divider";
import {IoSearchOutline, IoLogInOutline, IoCartOutline} from "react-icons/io5";
import type {IconType} from "react-icons";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({href, children}: NavLinkProps): JSX.Element => {
    return (
        <li>
            <Link href={href} className="hover:opacity-70 transition-opacity text-white">
                {children}
            </Link>
        </li>
    );
};

interface NavListProps {
    links: Array<{ href: string; label: string }>;
}

const NavList = ({links}: NavListProps): JSX.Element => {
    return (
        <nav>
            <ul className="flex gap-6">
                {links.map((link, index) => (
                    <NavLink key={index} href={link.href}>
                        {link.label}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

interface HeaderActionProps {
    icon: IconType;
    label: string;
    href: string;
}

const HeaderAction = ({icon: Icon, label, href}: HeaderActionProps): JSX.Element => {
    return (
        <div className="flex items-center gap-2">
            <Icon className="w-5 h-5" style={{color: '#3a9843'}}/>
            <Link href={href} className="hover:opacity-70 transition-opacity">
                {label}
            </Link>
        </div>
    );
};

interface HeaderActionsProps {
    actions: Array<{ icon: IconType; label: string; href: string }>;
}

const HeaderActions = ({actions}: HeaderActionsProps): JSX.Element => {
    return (
        <div className="flex items-center gap-5">
            {actions.map((action, index) => (
                <React.Fragment key={index}>
                    <HeaderAction
                        icon={action.icon}
                        label={action.label}
                        href={action.href}
                    />
                    {index < actions.length - 1 && (
                        <Divider axis="vertical" width="small" color="bg-gray-300"/>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export const Header = (): JSX.Element => {
    const navLinks = [
        {href: "#", label: "Home"},
        {href: "#", label: "About"},
        {href: "#", label: "Contact"},
        {href: "#", label: "Shop"},
    ];

    const headerActions = [
        {icon: IoLogInOutline, label: "Login", href: "#"},
        {icon: IoSearchOutline, label: "Search", href: "#"},
        {icon: IoCartOutline, label: "Basket", href: "#"},
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6">
            <div className="flex items-center gap-5">
                <Link href="/">
                    <Image src="/logo-header.png" alt="logo" width={60} height={60}/>
                </Link>
                <Divider axis="vertical" width="small" color="bg-white"/>
                <div className="hidden md:block">
                    <NavList links={navLinks}/>
                </div>
            </div>
            <div className="hidden md:block">
                <HeaderActions actions={headerActions}/>
            </div>
        </header>
    )
}