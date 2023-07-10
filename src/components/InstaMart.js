import {useState, useEffect} from "react";

const Section = ({title, desc, isVisiable, setIsVisiable}) => {
    const [flage, setFlage] = useState(isVisiable);
    return (
        <>
        <div className="border border-s-orange-50 m mb-5 bg-blue-400-5 p-6 bg-red-200">
            <h1 className="h-5 mb-5 text-xl font-bold">{title}</h1>
            <button className="underline text-m mb-5 text-blue-600" onClick={() => {
                setFlage(!isVisiable);
                setIsVisiable(flage);
            }}>{isVisiable? 'Hide': 'Show'}</button>
            {isVisiable && <p>{desc}</p>}
        </div>
        </>        
    )
}

const InstaMart = () => {
    const [isVisiableSection, setIsVisiableSection] = useState('about');
    return (
        <>
            <Section title={'About'} desc={'sddkgbkrbgkhbehkbgkherg'} isVisiable={isVisiableSection === 'about'} setIsVisiable={(param) => {
                param === true ? setIsVisiableSection('about') : setIsVisiableSection('');
            }} />
            <Section title={'Insta Details'} desc={'sddkgbkrbgkhbehkbgkherg'} isVisiable={isVisiableSection === 'details'} setIsVisiable={(param) => {
                param === true ? setIsVisiableSection('details') : setIsVisiableSection('');
            }}/>
            <Section title={'Contant'} desc={'sddkgbkrbgkhbehkbgkherg'} isVisiable={isVisiableSection === 'contant'} setIsVisiable={(param) => {
                param === true ? setIsVisiableSection('contant') : setIsVisiableSection('');
                setIsVisiableSection('contant');
            }}/>
            <Section title={'Career'} desc={'sddkgbkrbgkhbehkbgkherg'} isVisiable={isVisiableSection === 'career'} setIsVisiable={(param) => {
                param === true ? setIsVisiableSection('career') : setIsVisiableSection('');
            }}/>
        </>
    )
}

export default InstaMart;