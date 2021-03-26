import React from "react";

export default function Question({title}) {
  return <div className="question" dangerouslySetInnerHTML={{__html: title}} />
}
