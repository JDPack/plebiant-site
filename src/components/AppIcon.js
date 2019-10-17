import React from 'react';
import config from '../../config';
import classnames from 'classnames';


const AppIcon = (props) => {
    const colSize = 'col-lg-' + props.size;
    const iconSize = props.size;
    return (
        <div className={[colSize, 'my-5 text-center'].join(' ')}>
            <div className="app-icon app-icon-rounded">
                <img className="" src="http://jd-pack.com/home/img/places/thumbnails/3.jpg"/>
                {/* <div class="app-info"><h4>PricePoint</h4>
                    <div class="app-author">by&nbsp;<a href="https://banakin.github.io/" target="_blank" sl-processed="1">Banakin</a>
                    </div>
                <div class="app-links">
                    <p>
                        <a class="appstore-button" 
                        href="https://itunes.apple.com/us/app/pricepoint-cryptocurrencies/id1425210859?ls=1&amp;mt=8" 
                        target="_blank" sl-processed="1"></a><a class="googleplay-button" 
                        href="https://play.google.com/store/apps/details?id=net.banakin.pricepoint" 
                        target="_blank" sl-processed="1"></a><a class="button" href="https://pricepoint.1mb.site/" target="_blank" sl-processed="1">
                            App Website</a>
                            </p>
                </div>
                            <div class="app-about"><p>PricePoint lets you view your favorite cryptocurrencies quickly and easily.</p>
                            </div>
                            <div class="app-show-shots">
                                <a href="#" sl-processed="1">Screenshots</a>
                                </div>
                                <div class="app-shots"><img data-src="//cdn.framework7.io/i/showcase/pricepoint-1.jpg"/>
                                    <img data-src="//cdn.framework7.io/i/showcase/pricepoint-2.jpg"/><img data-src="//cdn.framework7.io/i/showcase/pricepoint-3.jpg"/>
                                        <img data-src="//cdn.framework7.io/i/showcase/pricepoint-4.jpg"/><img data-src="//cdn.framework7.io/i/showcase/pricepoint-5.jpg"/>
                                            <img data-src="//cdn.framework7.io/i/showcase/pricepoint-6.jpg"/>
                                </div>
                            </div>
                    </div> */}
                    </div>
        </div>
    );
}

export default AppIcon;
