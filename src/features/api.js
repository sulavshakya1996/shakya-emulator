import React from "react";
import { language } from './constant'


export const executeCode = async (jsValue) => {

  const res = await fetch('https://emkc.org/api/v2/piston/execute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      language: language.name,
      version: language.version,
      files: [
        {
          content: jsValue
        }
      ]
    })
  })

  const data = await res.json();
  return data;

}