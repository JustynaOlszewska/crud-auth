import React, { Fragment, useContext, useEffect } from 'react';

import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

import AuthContext from "../../context/auth/authContext";

const Home = () => {

    const { loadUser } = useContext(AuthContext)

    useEffect(() => {
        loadUser()
        //eslint-disable-next-line
    }, [])
    return (
        <Fragment className='grid-2'>
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>

        </Fragment>
    );
}

export default Home;