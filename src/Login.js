import './Login.css';
import { useFormik } from 'formik';
// import { api } from './api.js';
import axios from 'axios';

function Login() {

  const formik = useFormik({
    initialValues: {
      "username": "",
      "password": ""
    },
    onSubmit: (values) => {
      axios.post("https://netzwelt-devtest.azurewebsites.net/Account/SignIn", {
        body: JSON.stringify({
          "username": values.username,
          "password": values.password
        })
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then((res) =>
        console.log(res)
      ).catch((err) => {
        console.log(err)
      })
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-container">
          <h2>Login</h2>
          <div id="login-form"  >
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={(event) => {
              formik.setFieldValue("username", event.target.value)
            }} values={formik.values.username} /><br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(event) => {
              formik.setFieldValue("password", event.target.value)
            }} values={formik.values.password} />

            <button id="submit-button"type="submit" onClick={(event) => {
              event.preventDefault()
              formik.submitForm()
            }}>Login</button>
          </div>
          <p id="error-message" className="error-message"></p>
        </div>
      </header>
    </div>
  );
}

export default Login;
