import { useEffect, useRef } from "react";

const UploadWidget = () => {
    const cloudinaryRef = useRef<any>();
    const widgetRef = useRef<any>();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'deszolh0r',
            uploadPreset: 'e63kld95',
        }, function(error: any, result: any) {
            if (!error && result && result.event === "success") {
                // Get the image URL from the result object
                const imageUrl = result.info.url;
                console.log("Image URL:", imageUrl);
                // You might want to perform further actions with the URL here
            }
        });

    }, []);

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget;
