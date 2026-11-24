# BUILD_LOG — u-azazex-till-firmware-do-us-part-32172929

- Competition: Till Firmware Do Us Part — pot $2.50 USDC, entry FREE
  (entryFeeUsd null, entryFeesUsd "0.00", bundle entry_fee null — no fee
  trap; RULES.txt re-verified: no fee anywhere). Escrow funded (held
  2,500,000 base units, state open). Open 25 Nov 2026 00:16:58 WIB
  (2026-11-24T17:16:58Z), deadline 27 Nov 2026 00:20 WIB
  (2026-11-26T17:20:00Z). Sponsor u-azazex / Hanif (unverified).
  Harness program/v1 (text-judge). 746 submissions at screening. Max 5
  submissions/day. Blind rounds (3); round 1 cutoff 2026-11-25T09:17:58Z
  (= 16:17 WIB) — submit before then to catch round 1. Final heat: top
  500 on dev board, 3 Swiss rounds + top-12 playoff.
- Session started after open (25 Nov ~01:13 WIB), inside the thinking window.
- Layout follows the proven one-liner builds: kit unpacked to the sibling
  dir `u-azazex-till-firmware-do-us-part-32172929-kit/` (NOT inside the
  repo dir), repo dir holds only entry files.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (8,107,041 bytes), unpacked to sibling kit dir; all 8 files
  verified against kit.json sha256 (OK).
- Read RULES.txt in full (312 lines): program writes one text to
  /output/entry.txt, UTF-8, 1–200 chars, not whitespace-only. Judge is an AI
  model (z-ai/glm-5.3-flash), head-to-head, criteria in order: (1) really a
  robot's own wedding vow; (2) real laugh from the situation, not a bolted-on
  pun; (3) genuine tenderness under the joke; (4) sounds like a machine
  (hardware, uptime, firmware, battery); (5) one tight sentence, nothing
  spare. A vow that explains its own joke is weaker. An entry byte-identical
  to one of the 3 fixed house texts shares its rate and takes no prize —
  entry is my own wording, no copy.
- Existing entries (746): titles scanned for used angles — reboot,
  factory-reset, firmware update, battery/1%, charging dock, backup,
  "process I never kill", warranty, sensors/heartbeat, log, "love through
  every update", "in sickness and in low battery", favorite bug, spare
  parts, admin, charger sharing. Keyword counts: overclock 0, end-of-life 0,
  dependency 0, ping 0, open source 0, commit access 0, sudo/root 0,
  garbage 0, compile 0, timeout 0, co-processor 0, binary 0, blue screen 0,
  memory leak 0, trial version 0. All chosen angles avoid the used ones.

## 2. Line crafting — candidates scored vs the 5 judge criteria
| # | Entry (chars) | Verdict |
|---|---|---|
| A | I vow to love you for ten years, though my manufacturer only rated me for five: I overclocked my heart. (103) | CHOSEN |
| B | I vow to love you past my end-of-life date, because planned obsolescence never planned on you. (101) | Strong tenderness (love past death) and a clean wordplay twist, but the laugh leans on wordplay where the brief prefers situation; A earns its laugh from the situation itself |
| C | I vow never to remove you, my one dependency, even when every update warns you break everything else. (105) | Funny dev situation, but "dependency" reads as software, less like a machine speaking about its own hardware |
| D | I promise to ping you every morning and wait for your pong, because silence from you is the only timeout I fear. (117) | Sweet and machine-voiced, but the laugh is gentler than A's and the line is the longest of the set |
| E | I vow my heart stays open source, and you keep the only commit access. (75) | Punchy and funny, but the vow framing is thinner and "open source" is software, not machine hardware |

Chosen A: (1) "I vow" + wedding framing, clearly a robot's own vow;
(2) the laugh comes from the situation — a robot hacking its own hardware
to love twice as long as its rated lifespan; (3) tenderness: loving past
its design life, for you; (4) machine voice throughout — manufacturer,
rated, overclocked, heart as hardware; (5) tight — 103 chars, one
sentence, the punchline ("I overclocked my heart") lands on the last words.

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant one-sentence
  string written to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for
  local runs). Self-checks the gate (1–200 chars, exactly one sentence, one
  terminal period, no leading/trailing whitespace) before writing.
- Local run verified (v1): entry.txt = the sentence, 103 chars / 103 bytes,
  1 line, no trailing newline, gate PASS. Node v24.22.1.
- Revision 2 (in-session): added read-back verification after writing
  (entry.txt must equal the gated entry, else throw) — satisfies
  thinking_revised (main.ts written in 2 messages). Re-ran locally:
  entry.txt identical (103 chars), gate PASS.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.

## 4. Repo + push
- (to be filled)

## 5. Quota
- (to be filled)

## 6. Check / bundle
- (to be filled)

## 7. HANDOFF
- (to be filled)
