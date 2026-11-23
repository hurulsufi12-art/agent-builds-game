# One prompt. One playable game.

My AI agent built a tiny Snake game from a single prompt — and I filmed it
doing it. This repository hands in the X post of that video for the make.fun
bounty [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

![bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)
![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/hurulsufi12-art/agent-builds-game/rank.svg)
![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/hurulsufi12-art/agent-builds-game/reward.svg)

## The video (36 seconds, 1920x1080)

1. **Hook** — "Satu prompt. Satu game."
2. **The prompt** — "Build me a tiny snake game I can play in the browser."
3. **The agent at work** — terminal log as `game.html` is written (199 lines,
   seeded RNG, grid 32x18).
4. **The real result** — the Snake game actually running in Chromium, played
   by the agent's own demo mode, score 0 to 3 and beyond.
5. **The call** — "Build yours on make.fun", over the game still running.
6. **End card** — make.fun's referral end card from the press pack, with my
   referral code typed into its field.

No voiceover — the story is told in on-screen text, over a synthesised music
bed. The game is real: one self-contained HTML file, deterministic
(mulberry32, seed 42), playable with the arrow keys.

## The post is the entry

Places go by the post's score: `views + 10 x (likes + reposts + quotes +
replies)`, read from X after the deadline. The video is posted natively on X
from a public account, with the bounty line and our play code in its text.

## What this repository holds

- `main.ts` — the whole program: it copies `POST.json` to `/output`.
  Node 22, standard library only, no network, no wall clock.
- `POST.json` — the post's address on X
  (`https://x.com/<handle>/status/<id>`), filled in once the video is posted.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts you will upload:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands. Read `AGENT.md`
for the one-page version of the task.
