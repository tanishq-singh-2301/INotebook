import 'src/styles/Test.css';
import { Header } from 'src/imports/Views';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const Test = () => {
    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }
    window.onload = function () {
        window.google.accounts.id.initialize({
            client_id: "582591000365-22rhrm9of5vd80vol67847gp36b0p7nh.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
    }
    return (
        <>
            <section className='main_body__div'>
                <Header />
                <div id="buttonDiv"></div>
            </section>
        </>
    )
};

export default Test;