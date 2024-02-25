import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/ArticleServices";
import { Card, List, Spin } from "antd";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import Navbar from "../route/Navigation";

interface articles {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  author: string;
  publishedAt: string;
}

export default function ArticleList() {
  const [articles, setArticles] = useState<articles[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticles();
        const formattedData = data.map((article: any) => ({
          ...article,
          publishedAt: new Date(article.publishedAt).toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
        }));
        setArticles(formattedData);
        setLoading(false);
      } catch (error) {
        console.log("data articles error", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#B7C9F2" }}>
      <Navbar />
      <div style={{ padding: "24px" }}>
        <h1 style={{ marginBottom: "50px", fontFamily: "sans-serif", alignItems: "center", display: "flex", justifyContent: "center", color: "blue" }}>ARTICLES_LIST</h1>
        {loading ? (
          <Spin size="large" style={{ margin: "auto", display: "block" }} />
        ) : (
          <List
            grid={{
              gutter: 16,
              column: 3,
              xs: 1, // Untuk tata letak satu kolom di perangkat kecil (mobile)
              sm: 2, // Untuk tata letak dua kolom di perangkat kecil (mobile)
              md: 3, // Untuk tata letak tiga kolom di perangkat sedang (tablet)
              lg: 3, // Untuk tata letak tiga kolom di perangkat besar (desktop)
              xl: 3, // Untuk tata letak tiga kolom di perangkat ekstra besar (large desktop)
              xxl: 3, // Untuk tata letak tiga kolom di perangkat sangat besar (very large desktop)
            }}
            dataSource={articles}
            renderItem={(article, index) => (
              <List.Item>
                <Link
                  to={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        style={{ height: "200px", objectFit: "cover" }}
                        src={article.urlToImage}
                        alt={article.title}
                      />
                    }
                    style={{
                      height: "420px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Meta
                      title={article.title}
                      description={
                        <div>
                          <span style={{ color: "red" }}>

                          {article.publishedAt}
                          </span>
                          <br/>
                          {article.description}
                          <br />
                          <span style={{ color: "blue" }}>
                            <strong>Author : </strong>
                            {article.author}
                          </span>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
}
