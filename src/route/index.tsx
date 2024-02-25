import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArticleDetail, ArticleList } from "../components";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}
