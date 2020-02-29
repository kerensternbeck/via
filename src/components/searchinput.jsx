import React, { useRef, useState } from 'react';
import '../header/header.scss';
import { debounce } from 'lodash';
import SearchBar from 'material-ui-search-bar';

export default function InputSearch({ store }) {

    const [searchString, setSearchString] = useState('');
    //Debounce search text
    const updateSearchDebounced = useRef(debounce(val => updateSearch(val), 200)).current;
    // On search text field change, update search bar value and send text to filter
    const onChange = val => {
        setSearchString(val);
        updateSearchDebounced(val);
    };
    return (
        <SearchBar
            className={'search-bar'}
            onChange={onChange}
            value={searchString}
            onCancelSearch={onChange.bind('')}
        />
    );

    function updateSearch(text) {
        store.filterText(text);
    }
}