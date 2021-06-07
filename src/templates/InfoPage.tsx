import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function InfoTemplate(props: { markdown: string }) {
  const { markdown } = props;
  return (
    <div>
      <ReactMarkdown children={markdown} />
    </div>
  );
}
