# MakeThings

Next.js portfolio with a bilingual Writing section.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run typecheck`, `npm run lint`, and `npm run build` before release.

## Writing

The six selected articles live as English and Chinese MDX pairs in `content/writing/`. The Writing index also groups the additional articles in `content/writing/more/` by topic. The original Next-Portfolio project is not read at build time. Selected article metadata lives in `lib/writing-articles.ts`; additional article metadata and static MDX imports live in the `lib/more-articles-*.ts` registries. Add both language files and a registry entry to publish another article.

The homepage uses the `larry-locale` and `larry-theme` preferences. Writing routes use an explicit language prefix, such as `/en/writing/browser-rendering` and `/zh/writing/browser-rendering`.

Set `NEXT_PUBLIC_SITE_URL` to the production origin (for example, `https://example.com`) when deploying. The site then emits canonical URLs and English/Chinese alternate-language metadata. Without a known origin, it still emits page titles, descriptions, and Open Graph metadata but omits absolute canonical and alternate URLs.
