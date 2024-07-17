import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DetailUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            navigate('/home');
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(response.data.data);
                console.log(response)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id, navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching user data: {error.message}</p>;
    }

    if (!user) {
        return <p>No user data found.</p>;
    }

    const handleBack = () => {
        navigate('/user')
    }
    return (
        <div>
            <h1>User Details</h1>
            <p>User ID: {id}</p>
            <p>Name: {user.first_name}</p>
            <p>Email: {user.email}</p>
            <div><img src={user.avatar} /></div>
            <div><button onClick={()=>handleBack()}>Back</button></div>
            {/* Display more user details as needed */}
        </div>
    );
}

export default DetailUser;