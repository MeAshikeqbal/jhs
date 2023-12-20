"use client";

import React, { useEffect } from 'react';

const FacebookPage = () => {    
    useEffect(() => {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            // @ts-ignore
            js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0&appId=762001721456753";
            if (fjs && fjs.parentNode) {
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    return (
        <div id="fb-root"
        className='flex flex-col justify-center w-full items-center max-w-6xl mx-auto p-4 space-y-2'
        >
            <div className="fb-page" data-href="https://www.facebook.com/profile.php?id=100063916816074" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/profile.php?id=100063916816074" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/profile.php?id=100063916816074">Jalalpur High School Official</a>
                </blockquote>
            </div>
        </div>
    );
};

export default FacebookPage;