import React from 'react';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import MenuItem from '../menu-item/menu-item';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import './directory-menu.scss';

const DirectoryMenu = ({ items }) => {
    return (
        <div className='directory-menu'>
            {
                items.map(item => <MenuItem key={item.id} {...item} />)
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    items: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
