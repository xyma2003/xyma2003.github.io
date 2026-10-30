# Project preview assets

These files are copied from Ma Xinyue's own project repositories. Each asset is an unmodified, byte-for-byte copy of the committed source linked below; no cropping, resizing, recompression, replacement screenshots, or new artwork was performed for this site.

## Sources

| Local file | Original source at the asset's last-change commit | Encoding and dimensions | Size |
| --- | --- | --- | ---: |
| [critter-chat.png](critter-chat.png) | [Critter: `docs/images/chat.png`](https://github.com/xyma2003/critter/blob/5a3ce51cab5e9689224265b019a3cdad7b8f6b44/docs/images/chat.png) | PNG, 1040 × 960 | 106,214 bytes |
| [debate-report.jpg](debate-report.jpg) | [Multi-Agent Debate: `docs/images/offline-debate.png`](https://github.com/xyma2003/multi-agent-debate/blob/55d9f6a362d2e82997bf6c8246fc356a10b5c3af/docs/images/offline-debate.png) | JPEG, 1441 × 998 | 116,584 bytes |
| [workdiary-review.jpg](workdiary-review.jpg) | [WorkDiary: `docs/images/review.png`](https://github.com/xyma2003/workdiary-agent/blob/362b8566901384d45ab73975d27a1b0a4298bce9/docs/images/review.png) | JPEG, 1280 × 720 | 64,021 bytes |

The upstream Debate and WorkDiary screenshots have `.png` filenames but contain JPEG data. Their local names use `.jpg` so a static server can send the matching content type. Only the filenames changed; their encoded bytes are identical to the originals.

## What the demonstrations show

- **Critter:** actual Qt widgets rendered offscreen with synthetic conversation input and fixed offline replies. These are application views, not captures of a user's desktop or live-model conversations. Read the [complete Critter demonstration](https://github.com/xyma2003/critter/blob/main/docs/demo.md).
- **Multi-Agent Debate:** the actual Streamlit interface displaying a fixed synthetic example. Its arguments, concessions, scores, and timestamp were prewritten; it is not a live agent debate. Read the [case walkthrough](https://github.com/xyma2003/multi-agent-debate/blob/main/docs/CASE_STUDY.md) and [complete example report](https://github.com/xyma2003/multi-agent-debate/blob/main/docs/example-report.md).
- **WorkDiary:** the actual Streamlit review workflow with synthetic notes and fixed offline model responses, using isolated temporary data. It does not show real personal work records or a live provider call. Read the [complete review, recovery, and saving walkthrough](https://github.com/xyma2003/workdiary-agent/blob/main/docs/demo.md).

These screenshots demonstrate application workflows, not model quality or production outcomes.

## License

All three source repositories use **MIT License, Copyright (c) 2026 Ma Xinyue**:

- [Critter license](https://github.com/xyma2003/critter/blob/main/LICENSE).
- [Multi-Agent Debate license](https://github.com/xyma2003/multi-agent-debate/blob/main/LICENSE).
- [WorkDiary license](https://github.com/xyma2003/workdiary-agent/blob/main/LICENSE).

The source license files are byte-identical to this site's [LICENSE](../LICENSE), which retains the complete copyright and permission notice for these copied assets.
