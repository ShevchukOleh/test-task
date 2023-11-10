import { createPost } from "API/API";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export function AddNewChannel({ closeModal, setCreatedPost, createdPost }) {
    const [newFeedName, setNewFeedName] = useState("");
    const [newFeedUrl, setNewFeedUrl] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedPost = localStorage.getItem("createdPost");
        if (storedPost) {
            setCreatedPost(JSON.parse(storedPost));
        }
    }, [setCreatedPost]);

    const handleAddFeed = async (e) => {
        e.preventDefault();

        if (!newFeedName || !newFeedUrl) {
            setError("Please fill in all fields");
            return;
        }

        const postData = {
            id: nanoid(),
            title: newFeedName,
            body: newFeedUrl,
            userId: 3,
        };

        try {
            const response = await createPost(postData);
            console.log(response);
            setError(null);
            closeModal();
            setNewFeedName("");
            setNewFeedUrl("");

            localStorage.setItem("createdPost", JSON.stringify(response));
            setCreatedPost(...createdPost, response);
        } catch (error) {
            setError("Error creating feed. Please try again.");
            console.error("Error creating feed:", error);
        }
    };

    return (
        <div>
            <h2>Add New Feed</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={newFeedName}
                        onChange={(e) => setNewFeedName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="url">URL (RSS):</label>
                    <input
                        type="text"
                        id="url"
                        value={newFeedUrl}
                        onChange={(e) => setNewFeedUrl(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" onClick={handleAddFeed}>
                    Add
                </button>
            </form>
            <button onClick={closeModal}>Х</button>
        </div>
    );
}
