import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContentWrapper from "../components/common/ContentWrapper/ContentWrapper";
import QueryForm from "../components/Search/QueryForm";
import QueryResults from "../components/Search/Results";

export default function SearchResults() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (router.isReady) {
      if (router.query.q !== query) setQuery(router.query.q);
    }
  }, [router, query]);

  if (!query || query === "") {
    return (
      <ContentWrapper>
        <div style={{ minHeight: "calc(100vh - 280px)" }}>
          <QueryForm />
        </div>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <QueryForm />
      <QueryResults />
    </ContentWrapper>
  );
}
