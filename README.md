This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Submission Report

- The app is using [Next.js](https://nextjs.org/). It's a React framework for the web. It can handle server side render for React. The system architecture that I use in this project is custom hook based. We make a custom hook for handle state of data. You can check it on **modules** directory. In there you can find **entities** , **hooks** and **repositories**. **Entities** is handle about type of data, **Hook** is handle about state of data and **Repositories** is handle about data layer.

- In this app, I want to make an easy maintainable system by using custom hook modules. Because based on my experience, on using redux (old version), it's hard to maintain.

- in this project, the localstorage is assumed to be the database and timeout delay is as process of data fetching. So if we want to production ready, we can change the localstorage with RDBMS or NO SQL database depends on needs and we can accessing it via API.
