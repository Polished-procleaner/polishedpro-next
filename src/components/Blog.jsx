"use client";

import { useState, useEffect } from "react";
import BlogClient from "./BlogClient";
import { getBlogs } from "@/app/actions/blog";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getBlogs();
      setPosts(res);
    };
    fetchPosts();
  }, []);

  return posts.length > 0 ? <BlogClient posts={posts} /> : null;
}
