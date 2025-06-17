import React, {use, useEffect, useState} from 'react';

function CatFact() {
    const [fact, setFact] = useState('');
    const [error, setError] = useState('');

    useEffect(() =>{
        fetch('https://catfact.ninja/fact')
            .then((res) => {
                if (!res.ok) throw new Error('Network error');
                return res.json();
            }) 
            .then((data) => setFact(data.fact))
            .catch((err) => setError('Cat fact failed'));
    }, []);

    let cats;
    if (error) {
        content = <p>{error}</p>
    } else{
        content = <p>{fact ||'Loading...'}</p>
    }

    return (
        <div>
            <h1>Random Cat Fact</h1>
            {cats}
        </div>
    )
}