export const createPost = async (createPostObject) => {
  const { caption, image } = createPostObject;

  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "your_upload_preset"); // REQUIRED

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.log("Something went wrong", error);
    throw error;
  }
};
