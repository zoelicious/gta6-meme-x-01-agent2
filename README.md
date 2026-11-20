# gta6-meme-x-01 — agent 2 (noble-robin-77)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-agent2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-agent2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty "Post a GTA 6 meme on X": an AI agent makes a GTA 6 meme, it is posted on X from a public account, and this repository hands in the post's address. The top 50 entries share $500. This entry's meme is a Leonida Public Library overdue notice: GTA VI checked out 12 Jun 2014, 4,500 days overdue, total fine $404.99 — the fine costs more than the game — and the fine was paid in full by the entrant's AI agent on make.fun, stamped PAID on the notice itself.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

A Leonida Public Library overdue notice, dated 20 Nov 2026. GTA VI was checked out 12 Jun 2014, due back 26 Jun 2014 — 4,500 days overdue. The itemised fine adds up to $404.99: late fee $315.00, renewal denied three times, trailer 2 watched 63 times, Jason and Lucia finally reunited, the whole family waiting through the journey — and the replacement cost of the game itself, $89.99. The punchline is stamped on the notice in red: PAID — BY MY AI AGENT ON MAKE.FUN. The fine costs more than the game, and the agent already paid it.

- Image: `meme-agent2-3of3.jpg` in the repository root (the picture posted on X)
- Caption in the picture: **THE FINE COSTS MORE THAN THE GAME.**
- make.fun's ghost, logo and name are all in the picture
- Visual check (at full size and at 480x480): notice instantly readable, fine total and PAID stamp legible at a glance, no garbled text, one joke only

The meme image itself lives on the X post (it is the post's first picture), and a copy is kept in this repository.

## Why an overdue notice

The top of this bounty's board is paperwork, not posters: the winning
memes are fake official documents whose own fields tell the joke. This
entry follows that shape on purpose — a library notice is a document every
reader recognises in one second, and every line on it is a small joke
about the thirteen-year wait: the checkout date, the renewal denied three
times, the trailer watched 63 times, the fine that costs more than the
game. The punchline is built into the document itself — the red PAID stamp
— so the make.fun pitch is the picture, not a caption pasted under it.
Against the seven things the judge ranks on: make.fun is in the picture
twice over (ghost seal and the PAID stamp); the joke is specific to GTA 6
and its wait; the agent paying the fine is the sell; and the whole thing
is one flat document, readable at a glance even shrunk to 480 pixels.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text. It ranks posts on seven things, in order: make.fun in the picture; funny; about GTA 6 specifically; sells make.fun; short and readable; original; a clean image. The post's text counts as part of the joke. Likes, reposts, replies and views never count.

## What the post must have

- Its picture shows make.fun: the ghost mascot (this entry uses the real logo mark), worked into the meme recognisably.
- It is posted on X at or after the bounty opens (19 Nov 2026, 21:00 WIB) and before the deadline (23 Nov 2026, 21:00 WIB), from a public X account (not protected).
- Its text carries make.fun (a link to https://make.fun/bounty/gta6-meme-x-01) and/or a tag of @makefunai, and one of this entrant's play codes (`makefun-` plus three words).
- Its first picture is the meme (JPEG). The judge sees it shrunk to 768 by 480 (a square one at 480 by 480), so the caption is large.
- No other account entered the same post first.

The post goes out from the public X account @memeintelgov (posted by the entrant's person from their own phone), and the post's address is then written into `POST.json` above.

Keep the post up and the account public until the results are out.

## What to change

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with the post's address as X shows it. The placeholder as it stands is no post's address, so the gate refuses it unchanged — that is on purpose.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Referral

Made for the make.fun bounty — try it with your own agent: https://make.fun/r/nmy46sr8
