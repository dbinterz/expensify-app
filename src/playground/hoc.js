// Higher Order Component - (HOC) - A component that renders another
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) =>(
        <div>
            {props.isAdminProp && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )
};

//require authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} /> 
            ) : (

             <p>you are not authenticated</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'));