import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Title, TextInput } from "@mantine/core";
import { Search } from "tabler-icons-react";
import { useHotkeys } from "@mantine/hooks";

export default function SearchForm() {
  return (
    <div>
      <Title align="center">Search</Title>
      <SearchProjectsInput />
    </div>
  );
}

export function SearchProjectsInput() {
  const router = useRouter();
  const searchRef = useRef();

  useHotkeys([["ctrl+K", () => searchRef.current.focus()]]);

  useEffect(() => {
    if (router.isReady) {
      router.prefetch("/search");
    }
  }, [router]);

  return (
    <div style={{ maxWidth: "20rem", margin: "1rem auto" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search?q=${searchRef.current.value}`);
        }}
      >
        <TextInput
          ref={searchRef}
          icon={<Search size={16} />}
          placeholder="Search for projects I've built"
          rightSection={
            <Button
              type="submit"
              variant="subtle"
              p="xs"
              style={{ position: "absolute", right: 0 }}
            >
              Search
            </Button>
          }
        />
      </form>
    </div>
  );
}
