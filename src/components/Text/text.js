import React,{useContext} from 'react';

import {TextConText} from '../../context/Textcontext';

import Textlist from '../Textlist/textlist';
import AddText from '../Addtext/addtext';

const Text = () => {
    const {valueText} = useContext(TextConText);

    return(
        <div className="container">
            <br />
            <br />
            <h2>List Text</h2>
            <AddText/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name text</th>
                    </tr>
                </thead>
                <tbody>
                    {valueText.length > 0 ? (
                        valueText.map(texts => {
                        return (<Textlist valueText={texts} id={texts.id} key={texts.id}/>
                    )})
                    ) : (
                        <tr>
                            <td>No text!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Text;