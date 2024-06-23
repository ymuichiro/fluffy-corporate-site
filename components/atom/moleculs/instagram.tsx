"use client";

import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function InstagramList() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url="https://www.instagram.com/p/C8VyY6LyLQy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        width={328}
      />
    </div>
  );
}
