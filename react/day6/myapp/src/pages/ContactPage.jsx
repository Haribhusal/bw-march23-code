import { Mail, Map } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <h1>Contact us</h1>
            <ul>
                <li>
                    <Mail /> info@sasth.com
                </li>
                <li>
                    <Map /> New Baneshwor, Kathmandu, Nepal
                </li>
            </ul>
        </div>
    )
}

export default ContactPage  