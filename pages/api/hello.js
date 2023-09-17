// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { HeaderQuery } from "@/graphql/queries";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const ApiDetails = async ()=>{
  const response = await fetch("http://localhost:1337/graphql",{
    method:"POST",
    headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        query: `query{
          header{
            data{
              attributes{
                logotitle
                headermenu{
                  title
                  url
                }
              }
            }
          }
        }`
      })
  })
  return datares= await response.json();
}