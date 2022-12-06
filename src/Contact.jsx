import React from "react";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import ContactForm from "./ContactForm.jsx";
import {NavLink} from "react-router-dom";
import Forms from "./LoginLogic";
import Register from "./Register";


const Contact = () => {
    return (
          <Layout>

                <div className="grid gap-8 ">

                    <ContactForm />
                    {/*<Forms />*/}
{/*<Register />*/}
                </div>
          </Layout>
  )}
export default Contact;


