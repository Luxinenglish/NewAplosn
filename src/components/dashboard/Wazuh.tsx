import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Wazuh = () => {
    const [data, setData] = useState<{ id: number; type: string; description: string; timestamp: string; }[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/wazuh'); // Ensure this URL matches your API
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>Loading data...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ marginRight: '10%', marginLeft: '10%' }}>
            <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e' }}>
                <Table sx={{ minWidth: 650 }} aria-label="Wazuh data table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: 'white', textAlign: 'center' }} colSpan={4}>
                                Wazuh - logs
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'white' }}>ID</TableCell>
                            <TableCell sx={{ color: 'white' }}>Type</TableCell>
                            <TableCell sx={{ color: 'white' }}>Description</TableCell>
                            <TableCell sx={{ color: 'white' }}>Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell sx={{ color: 'white' }}>{item.id}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{item.type}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{'NONE'}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{new Date(item.timestamp).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Wazuh;