import React from "react";

export default function Option({ content, checkAnswer }) {
  return (
    <button
      className="option btn"
      dangerouslySetInnerHTML={{ __html: content }}
      onClick={() => checkAnswer(content)}
    />
  );
}
