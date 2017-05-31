import FacebookLogin from 'react-facebook-login';
import * as React from "react";
const responseFacebook = (response) => {
  console.log(response);
}

class FbLogin extends React.Component<{}, {}> {
    render() {
        return <FacebookLogin
		    appId="1088597931155576"
		    autoLoad={true}
		    fields="name,email,picture"
		    callback={responseFacebook} />
	}
}

export default FbLogin;