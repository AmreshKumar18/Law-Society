import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserData } from "../UserContext";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";

const AddArticle = () => {
  const navigate = useNavigate();
  const { user } = UserData();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    writtenBy: user.user?.fullname || "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return toast.error("Image is required bhai");

    // ✅ Sanitize description before submitting
    const sanitizedDescription = DOMPurify.sanitize(formData.description);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", sanitizedDescription); // Use sanitized HTML
    data.append("date", formData.date);
    data.append("writtenBy", formData.writtenBy);
    data.append("image", image);

    try {
      const res = await axios.post(
        "https://law-society-backend.onrender.com/api/new/article",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success("Article added successfully 🚀");
      navigate("/articles");
    } catch (error) {
      console.error(error);
      toast.error("Article upload failed 😡");
    }
  };

  return (
    <div className="article-form-container">
      <h2>Add New Article</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="article-form"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <ReactQuill
          theme="snow"
          value={formData.description}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              description: value,
            }))
          }
          // modules={{
          //   toolbar: [
          //     [{ header: [1, 2, 3, false] }],
          //     ["bold", "italic", "underline"],
          //     [{ list: "ordered" }, { list: "bullet" }],
          //     ["link"],
          //     ["clean"],
          //   ],
          // }}
          placeholder="Write your article here..."
        />
        <input type="date" name="date" onChange={handleChange} required />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
