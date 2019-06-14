import React, {useRef} from 'react';

export const FieldChecker = props => {
    const {field, init, label, onChangeHandler} = props;
    const checkRef = useRef();
    const onChange = e => {
        let checked = checkRef.current.checked;
        onChangeHandler(field, checked);
    }
    
    return (
        <div style={{display: 'flex', padding: '10px 10px 10px 40px'}}>
            <input
                type="checkbox"
                className="checkbox"
                checked={init}
                ref={checkRef}
                onChange={(e) => {onChange(e)}}
            />
            <span style={{paddingLeft: '5px'}}>{label}</span>
        </div>
    );
}