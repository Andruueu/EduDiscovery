import { useState, useEffect } from "react";

export default function useWikiSummary(title, lang = "en") {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (!title) return;
    fetch(
      `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        title
      )}`
    )
      .then((r) => r.json())
      .then(setInfo)
      .catch(console.error);
  }, [title, lang]);

  return info;
}
