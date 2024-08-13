"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const AdminPanel = () => {
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(""); // Selected tag for uploading
  const [newTag, setNewTag] = useState(""); // New tag to be created
  const [filterTag, setFilterTag] = useState("all");

  // Fetch all images from the database
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images/${filterTag}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, [filterTag]);

  // Fetch all tags from the database
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const data = await response.json();
        setTags(data.map((tag) => tag.name)); // Adjust based on actual API response
      } catch (error) {
        console.error("Failed to fetch tags:", error);
      }
    };

    fetchTags();
  }, []);

  const handleUpload = async (event) => {
    event.preventDefault();
    const fileInput = event.target.elements.file;
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("image", file);
    formData.append("tag", tag);

    try {
      const response = await fetch(
        `/api/upload?filename=${file.name}&tag=${tag}`,
        {
          method: "POST",
          body: file,
        }
      );

      const data = await response.json();
      if (response.ok) {
        // Refresh the image list
        setImages([...images, { id: data.id, imageurl: data.url, tag }]);
        setTag(""); // Reset the tag field
        fileInput.value = ""; // Clear the file input
        toast.success("Image has being added");
      } else {
        console.error("Upload failed:", data.error);
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      toast.error(data.error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setImages(images.filter((image) => image.id !== id));
        toast.success("Image Succesfully Deleted");
      } else {
        console.error("Delete failed");
        toast.error("Delete Failed");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
      toast.error(data.error);
    }
  };

  const handleCreateTag = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/createTag/${newTag}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.ok) {
        setTags([...tags, newTag]); // Refresh the tags list
        setNewTag(""); // Reset the new tag field
        toast.success("Category successfully created");
      } else {
        console.error("Failed to create tag:", data.error);
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error during tag creation:", error);
      toast.error(data.error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-6">Admin Page</h1>

      {/* Image Upload Form */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="tag" className="text-sm font-medium">
              Select its Category
            </label>
            <select
              name="tag"
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="" disabled>
                Categories
              </option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="file" className="text-sm font-medium">
              Choose an image
            </label>
            <input
              type="file"
              name="file"
              accept="image/*"
              id="file"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:opacity-50 text-white p-2 rounded"
          >
            Upload Image
          </button>
        </form>
      </div>

      {/* Category Filter */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Filter Images</h2>
        <label htmlFor="filter" className="text-sm font-medium">
          Filter by Category:
        </label>
        <select
          id="filter"
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">All</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Image List */}
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Available Images</h2>
        {images.length > 0 ? (
          <div className="flex flex-wrap items-center gap-5 justify-center">
            {images.map((image) => (
              <div
                key={image.id}
                className="flex flex-col items-center justify-center border-b pb-4"
              >
                <img
                  src={image.imageurl}
                  alt={image.tagname}
                  className="w-32 h-32 object-cover object-top rounded"
                />
                <div className="flex gap-2 items-center justify-center">
                  <p className="text-sm font-medium">Tag: {image.tagname}</p>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="mt-2 bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No images found</p>
        )}
      </div>
      {/* New Category Creation */}
      <div className="bg-white p-4 rounded shadow-md my-6">
        <h2 className="text-xl font-semibold mb-4">Create New Category</h2>
        <form onSubmit={handleCreateTag} className="flex flex-col space-y-4">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value.toLowerCase())}
            placeholder="Enter new category"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:opacity-50 text-white p-2 rounded"
          >
            Create Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
