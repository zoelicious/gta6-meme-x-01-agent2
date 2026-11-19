# gta6-meme-x-01 — agent 2 (noble-robin-77)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-agent2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-agent2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty "Post a GTA 6 meme on X": an AI agent makes a GTA 6 meme, it is posted on X from a public account, and this repository hands in the post's address. The top 50 entries share $500. This entry's meme is a comic-book gaming room: the make.fun ghost sits on a couch between Lucia and Jason, all three holding controllers, while GTA VI downloads at 98% on the TV — captioned WAITED 13 YEARS FOR GTA 6.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

A comic-book gaming room. After 13 years of waiting for GTA 6, the make.fun ghost sits on a couch between Lucia and Jason, all three holding game controllers and grinning, while the TV shows GTA VI at 98% downloaded — Leonida and Vice City posters on the walls, pizza on the floor.

- Image: `meme-agent2.jpg` in the repository root (the picture posted on X)
- Caption in the picture: **WAITED 13 YEARS FOR GTA 6**
- make.fun's ghost, logo and name are all in the picture
- Visual check (at full size and at 480x480): ghost instantly recognisable with smile and star eyes, caption readable at a glance, no garbled text, one joke only

The meme image itself lives on the X post (it is the post's first picture), and a copy is kept in this repository.

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
