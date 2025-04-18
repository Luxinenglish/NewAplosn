import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const accountInfo = Cookies.get('accountInfo');
        if (!accountInfo || !isValidAccountInfo(accountInfo)) {
            navigate('/login');
        }
    }, [navigate]);

    const isValidAccountInfo = (accountInfo: string): boolean => {
        try {
            const decodedData = atob(accountInfo);
            const [username, timestamp] = decodedData.split(':');
            return !!username && !!timestamp && !isNaN(Number(timestamp));
        } catch (error) {
            return false;
        }
    };

    return <>{children}</>;
};

export default AuthWrapper;