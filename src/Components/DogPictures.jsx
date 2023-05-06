/* import React from "react";

const DogPictures = () => {
    const [pictures, setPictures] = React.useState([]);
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  
    React.useEffect(() => {
        fetch("https://dog.ceo/api/breed/bulldog/french/images")
            .then((res) => res.json())
            .then((json) => {
                setPictures(json.message);
                setIsDataLoaded(true);
            });
    }, []);

    if (!isDataLoaded) {
        return (
            <p>Dogs are still loading...</p>
        );
    }
  
    return (
        <div className="facts">
            <p>These are Dogs</p>
            {pictures.map((item) => (
                <img src={item} alt={`Dog picture`} width="300px"/>
            ))};
        </div>
    );
};

export default DogPictures; */

import React from "react";

const DogPictures = () => {
    const [pictures, setPictures] = React.useState([]);
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  
    React.useEffect(() => {
        fetch("https://dog.ceo/api/bulldog/french/images")
            .then((res) => res.json())
            .then((json) => {
                setPictures(json.message);
                setIsDataLoaded(true);
            });
    }, []);

    if (!isDataLoaded) {
        return (
            <p>Dogs are still loading...</p>
        );
    }
  
    return (
        <div className="facts">
            <p>These are Dogs</p>
            {pictures.map((item) => (
                <img src={item} alt={`Dog picture`} width="300px"/>
            ))}
        </div>
    );
};

export default DogPictures;

