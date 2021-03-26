import React from "react";

export default function Question({ title }) {
  return (
    <div
      className="question__title"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
}
