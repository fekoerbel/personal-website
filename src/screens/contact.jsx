import Main from "../components/templates/main";
import React from "react";
import ContactContent from "../components/contact/contact-content";

export default class Contact extends React.Component {
    render() {
        return (
            <Main title="Contact" subtitle="WAYS TO CONTACT ME:">
                <ContactContent />
            </Main>
        )
    }
}