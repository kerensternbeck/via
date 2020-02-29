import React from 'react';
import './header.scss';
import SearchInput from '../components/searchinput';

export default function Header({ store }) {
    return (
        <div className={'header-container'}>
            <span className={'header-text'}>Contact List</span>
            <div className={'search-bar-container'}>
                <SearchInput store={store} />
            </div>
        </div>
    );
}