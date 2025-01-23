import React, { useEffect, useState } from 'react';
import styles from './Cooking.module.css';

export const Cooking = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/api/videos');
                if (!response.ok) {
                    throw new Error('Cannot display cooking videos at this time. Please try again later.')
                }
                const data = await response.json();
                setVideos(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <section className={styles.cookingSection}>
            <h1 className={styles.cookingHead} id="cooking">Cooking</h1>
            <hr className={styles.cookingHeadLine}/>
            {/* Display error message if an error occurs */}
            {error && <p className={styles.cookingError}>{error}</p>}
            {/* Loading message */}
            {loading && !error && <p>Loading videos...</p>}
            {/* Video list */}
            {!loading && !error && (
            <ul className={styles.cookingVideoList}>
                {videos.map((video, index) => (
                    <li key={index}>
                        <div className={styles.cookingContainer}>
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                <h3 className={styles.cookingTitle}>{video.title}</h3>
                                <img src={video.thumbnail} alt={video.title} className={styles.cookingImage}/>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
            )}
        </section>
    );
};