# Till Firmware Do Us Part — "I vow to love you for ten years…"

[![Till Firmware Do Us Part](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/epanpai/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/epanpai/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

Entry for the [Till Firmware Do Us Part](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929) bounty on make.fun.

## The entry

> I vow to love you for ten years, though my manufacturer only rated me for five: I overclocked my heart.

103 characters, one sentence: a robot vows at its own wedding to love for ten years though its manufacturer only rated it for five — it overclocked its own heart. The laugh is situational (a machine hacking its own hardware to love longer than its design life); the tenderness is loving past its rated lifespan; the machine voice is manufacturer, rated, overclocked.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed sentence to `/output/entry.txt` — 103 characters, inside the 1–200 character gate. Deterministic, no network, no secrets, no randomness.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
