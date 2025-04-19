import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { UserData } from "../UserContext";

const EditArticle = () => {
  const { id } = useParams(); // article ID from route
  const { user } = UserData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    writtenBy: user.user?.fullname || "",
  });

  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  useEffect(() => {
    // Fetch existing article data
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/articles/${id}`);
        // console.log(res.data);
        const article = res.data;

        setFormData({
          title: article.title,
          category: article.category,
          description: article.description,
          date: article.date.split("T")[0],
          writtenBy: article.writtenBy,
        });
        setExistingImage(article.image);
      } catch (err) {
        toast.error("Failed to fetch article data");
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("writtenBy", formData.writtenBy);

    if (image) data.append("image", image); // Only add if new image is selected

    try {
      const res = await axios.put(
        `http://localhost:4000/api/articles/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success("Article updated successfully!");
      if (res.data.article) {
        console.log(res.data.article.image);
        setExistingImage(res.data.article.image);
      }
      navigate("/articles");
    } catch (error) {
      console.error(error);
      toast.error("Update failed bhai");
    }
  };

  return (
    <div className="article-form-container">
      <h2>Update Article</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="article-form"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {existingImage && !image && (
          <p style={{ fontSize: "14px", color: "#777" }}>
            Current Image: <strong>{existingImage}</strong>
          </p>
        )}

        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default EditArticle;
