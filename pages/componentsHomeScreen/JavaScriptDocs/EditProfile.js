import crypto from '../CssDocs/EditProfile.module.css'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function EditProfile() {
    const router = useRouter()
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
                <div className={crypto.header}>
                    <div className={crypto.header_background}></div>
                    <button
                        className={crypto.back_icon}
                        onClick={() => {
                            router.back()
                        }}>
                        <Image
                            src="/SvgAccount/back.svg"
                            width={46}
                            height={46}
                        />
                    </button>
                    <span className={crypto.header_title}>Edit Profile</span>
                </div>
                <form action='/componentsHomeScreen/JavaScriptDocs/ProfileScreen'
                    className={crypto.view_profile}>
                    <div className={crypto.profile_photo}>
                        <Image
                            src="/SvgHomeScreen/ProfilePhoto.svg"
                            width={110}
                            height={110}
                        />
                    </div>
                    <input
                        placeholder='User1234'
                        className={crypto.profile_id}
                        type='text'
                    />
                    <div className={crypto.input_panel}>
                        <label
                            className={crypto.informations}>
                            Username
                        </label>
                        <input
                            className={crypto.inputs}
                            placeholder='Username1234'
                            type="text"
                        />
                        <label
                            className={crypto.informations}>
                            Email
                        </label>
                        <input
                            className={crypto.inputs}
                            placeholder='Example@mail.com'
                            type="email"
                        />
                        <label
                            className={crypto.informations}>
                            Password
                        </label>
                        <input
                            className={crypto.inputs}
                            placeholder='*************'
                            type="password"
                        />
                        <label
                            className={crypto.informations}>
                            Phone Number
                        </label>
                        <input
                            className={crypto.inputs}
                            placeholder='234 567 8900'
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            type="tel"
                        />
                    </div>
                    <div className={crypto.edit_buttons}>
                        <button
                            className={crypto.cancel}
                            type='submit'>
                            Cancel
                        </button>
                        <button
                            className={crypto.save}
                            type="submit">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
