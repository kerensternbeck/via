import React, { useState } from 'react';
import Image from '../components/imagecontainer';
import './drivercard.scss';
import CitizenIcon from '../assets/citizen.svg';
import ProfessionalIcon from '../assets/professional.svg';
import classnames from 'classnames';

export default function DriverCard({ data }) {

    const { name, driverType, driverRank, phone, email, profile_image } = data;
    const [hover, setHover] = useState(false);
    const drivertype = driverType.toLowerCase().trim();
    const driverIconPath = drivertype === 'citizen' ? CitizenIcon : drivertype === 'professional' ? ProfessionalIcon : '';

    const classNames = classnames('driver-card', {
        hovered: hover
    });

    return (
        <div className={classNames} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <div className="driver-image">
                <Image imgsrc={profile_image} />
                {driverIconPath &&
                    <img className={'driver-icon'} alt='driver-icon' src={driverIconPath} />
                }
            </div>

            <div className="driver-info">
                <div className="driver-details name" title={name}>{name}</div>
                <div className="driver-details rank">Driver Rank: {driverRank}</div>
                {hover &&
                    <React.Fragment>
                        {phone &&
                            <div className="driver-details phone" title={phone}>Phone: {formatPhone()}</div>
                        } {email &&
                            <div className="driver-details email" title={email}>Email: {email}</div>
                        }
                    </React.Fragment>
                }
            </div>
        </div>
    );

    function formatPhone() {
        let formattedPhone = phone.replace(/-|\s/g, '').replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3");
        return formattedPhone;
    }
}