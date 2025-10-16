import React, {JSX} from "react";
import {Divider} from "@/ui/divider";
import Image from "next/image"
import Link from "next/link";
import {IconType} from "react-icons";
import {FaFacebookF, FaPinterestP} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";

type Children = {
    children: React.ReactNode;
}

type FooterLinksProps = {
    text: string
    href: string;
}

type FooterListProps = Children

type FooterMenuProps = Children & {
    menuTitle: string;
}

type FooterMenuContainerProps = Children;

type FooterSocialsListProps = Children;

type FooterSocialProps = {
    href: string;
    icon: IconType;
}

const FooterLink: React.FC<FooterLinksProps> = ({href, text}: FooterLinksProps): JSX.Element => {
    return (
        <li>
            <Link href={href}>
                {text}
            </Link>
        </li>
    )
}

const FooterList: React.FC<FooterListProps> = ({children}: FooterListProps): JSX.Element => {
    return (
        <nav>
            <ul className="flex flex-col gap-2 text-gray-500">
                {children}
            </ul>
        </nav>
    )
}

const FooterMenu: React.FC<FooterMenuProps> = ({menuTitle, children}: FooterMenuProps): JSX.Element => {
    return (
        <div className="flex flex-col gap-5">
            <h5 className="capitalize font-bold text-lg text-white">{menuTitle}</h5>
            <FooterList>{children}</FooterList>
        </div>
    )
}

const FooterMenuContainer: React.FC<FooterMenuContainerProps> = ({children}: FooterMenuContainerProps): JSX.Element => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {children}
        </div>
    )
}

const FooterSocial: React.FC<FooterSocialProps> = ({href, icon: Icon}: FooterSocialProps): JSX.Element => {
    return (
        <li>
            <Link href={href}>
                <Icon className="w-4 h-4" fill="#ffffff"/>
            </Link>
        </li>
    )
}

const FooterSocialsList: React.FC<FooterSocialsListProps> = ({children}: FooterSocialsListProps): JSX.Element => {
    return (
        <div className="flex flex-row">
            <ul className="flex clex-row gap-10">
                {children}
            </ul>
        </div>
    )
}

const FooterCopyright: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between ">
            <p className="text-gray-500">2025 Plant Shop - Phlax Elementor Wordpress Theme. All rights
                reserved.</p>
            <FooterSocialsList>
                <FooterSocial href="#" icon={FaFacebookF}/>
                <FooterSocial href="#" icon={FaInstagram}/>
                <FooterSocial href="#" icon={FaPinterestP}/>
            </FooterSocialsList>
        </div>
    )
}

export const Footer: React.FC = (): JSX.Element => {
    return (
        <footer>
            <div className="flex flex-col pt-20 pr-8 pb-20 pl-8 bg-black gap-6">
                <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between lg:flex-row ">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-3">
                            <Image src="/logo-header.png" alt="logo" width={60} height={60}/>
                            <div className="flex flex-col text-xl capitalize text-white">
                                <span className="font-light">Phlox</span>
                                <span className="font-bold">Plant</span>
                            </div>
                        </div>
                        <p className="text-gray-500 max-w-[320px]">While the lovely valley teems with vapour around me,
                            and the
                            meridian sun.</p>
                    </div>
                    <FooterMenuContainer>
                        <FooterMenu menuTitle="Visit Link">
                            <FooterLink href="#" text="Privacy"/>
                            <FooterLink href="#" text="Terms & Conditions"/>
                        </FooterMenu>
                        <FooterMenu menuTitle="Company">
                            <FooterLink href="#" text="Home"/>
                            <FooterLink href="#" text="About us"/>
                            <FooterLink href="#" text="Contact us"/>
                        </FooterMenu>
                        <FooterMenu menuTitle="Contact">
                            <FooterLink href="#" text="+99 (0) 101 0000 888"/>
                            <FooterLink href="#" text="Terms & Conditions"/>
                        </FooterMenu>
                        <FooterMenu menuTitle="Address">
                            <FooterLink href="#" text="Patricia Amedee 4401"/>
                            <FooterLink href="#" text="Waldeck Street Grapevine"/>
                            <FooterLink href="#" text="Nashville, Tx 76051"/>
                        </FooterMenu>
                    </FooterMenuContainer>
                </div>
                <Divider width="full" color="bg-gray-500"/>
                <FooterCopyright/>
            </div>
        </footer>
    )
}