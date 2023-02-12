import dynamicLinks from '@react-native-firebase/dynamic-links';
import React, {useEffect} from 'react';
import NavigationService from './src/navigation/NavigationService';
import Routes from './src/navigation/Routes';

const App = () => {
    useEffect(() => {
        dynamicLinks()
            .getInitialLink()
            .then(link => {
                handleDynamicLink(link);
            });

        const linkingListener = dynamicLinks().onLink(handleDynamicLink);
        return () => linkingListener();
    }, []);

    const handleDynamicLink = link => {
        if (!!link?.url) {
            let getId = link.url.split('=').pop();
            setTimeout(() => {
                NavigationService.navigate('Detail', {userId: getId});
            }, 1000);
        }
    };

    return (
        <>
            <Routes />
        </>
    );
};

export default App;
