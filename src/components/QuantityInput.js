import React, { useState } from 'react';

const QuantityInput = props => {


    const getQuantityMessage = () => {
        if(count > 7){
        return <div className="alert alert-success">
        All good
      </div>
    }
    if(count < 3){
        return <div className="alert alert-danger">
        Oh no!
      </div>
    }
    return <div className="alert alert-info">
        Almost there
      </div>
    }

    const [count, setCount] = useState(props.count);
    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">

                    <button onClick={() => setCount(count - 1)} className="btn btn-success" type="button">
                        <i class="fa fa-minus-circle"></i>
                    </button>
                </div>
                <input readOnly value={count} type="text" className="form-control" />
                <div className="input-group-append">
                    <button onClick={() => setCount(count + 1)} className="btn btn-success" type="button">
                        <i class="fa fa-plus-circle"></i></button>
                </div>
            </div>
            {getQuantityMessage()}
        </div>

    )
}

export default QuantityInput