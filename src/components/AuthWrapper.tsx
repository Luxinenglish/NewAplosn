import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const who = Cookies.get('who');
        if (!who || !isValidWho(who)) {
            navigate('/login');
        }
    }, [navigate]);

    const isValidWho = (who: string): boolean => {
        return who === 'valid'; // Replace with your validation logic
    };

    return <>{children}</>;
};

export default AuthWrapper;