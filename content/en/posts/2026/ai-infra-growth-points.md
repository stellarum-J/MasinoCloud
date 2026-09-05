---
title: 'Growth Points in AI Compute Infrastructure: A 2026 Panorama'
date: 2026-09-05 07:15:00
updated: 2026-09-05 09:30:00
categories: [观察]
description: 'In 2026, global AI infrastructure investment is surging past the $1 trillion mark. While attention remains fixed on GPUs, the real growth has quietly shifted upstream — to power, memory, optical interconnect, and cooling. Wherever the bottleneck sits, pricing power follows.'
lang: en
translationKey: ai-infra-growth-points
---

In 2026, the combined capital expenditure of Microsoft, Google, Meta, and Amazon is approaching $700 billion, and Goldman Sachs estimates that global AI infrastructure investment will exceed $1 trillion. Where exactly is this money flowing along the industry chain? Which links are bottlenecked, which are seeing their competitive landscape reset, and which are quietly brewing overcapacity?

This panorama starts from the demand-side ledger, then works through eight segments one by one: power, memory, optical modules, networking, cooling, compute chips and systems, and IDC operation. All data is as of 2026-09, with timestamps noted.

## 1. The Demand Ledger: What a Gigawatt-Scale Data Center Costs

Start with a quantitative anchor. The Epoch AI breakdown is cited across the industry: a typical 1 GW AI data center requires roughly **$38 billion** in upfront capital expenditure:

| Layer | Share | Notes |
|---|---|---|
| IT equipment (chips / servers / networking / storage) | ~64% | Chips are by far the largest item |
| Electromechanical infrastructure (power + cooling + generation) | ~29% | Power and cooling split roughly half and half |
| Civil works and building shell | ~7% | A marginal beneficiary for conventional construction |

::link-card
---
icon: https://epoch.ai/favicon.ico
title: Epoch AI — AI data center cost model
description: The original source of the ~$38B capex breakdown for a 1 GW AI data center
link: https://epoch.ai/
---
::

Two further facts add depth: AI-optimized data centers now cost $15–20M+ per MW to build, roughly twice a traditional cloud facility; and global AI load capacity is projected to grow from ~11.5 GW in 2026 to ~43.6 GW by 2031 — implying dozens of "$38-billion-class" projects within a decade.

Chips and systems take six tenths of the pie, but most profit within that share accrues to NVIDIA and TSMC. The genuinely flourishing growth points lie in the remaining four tenths — the electromechanical and materials links — plus the storage, networking, and cooling inside IT equipment that scale with chip volumes. Those are the subjects of this article.

## 2. The Panorama: A Seven-Layer Map

Layered by "distance from the chip", the mid-2026 landscape and supply tightness look as follows (tightness is rated on five stars, combining lead times, sell-out status, and price-hike frequency):

| Layer | Segment | One-line growth logic | Tightness |
|---|---|---|---|
| Chip | GPU / ASIC / advanced packaging | The master gate of the compute arms race | ★★★★★ |
| Memory | HBM / DRAM / enterprise SSD | Rising memory-to-compute ratio; sector-wide shortage | ★★★★★ |
| Interconnect | Optical modules / switches / copper cables | Bandwidth is the second compute | ★★★★ |
| Cooling | Full liquid-cooling chain | Rack power density breaches air-cooling limits | ★★★ |
| Power | Turbines / transformers / rack power / nuclear | Power is the first bottleneck | ★★★★★ |
| Data center | IDC operation / compute leasing | Asset-heavy; utilization and power price decide profit | ★★ |
| Materials | PCB / copper-clad laminate / EML laser chips | Upstream price hikes and spec upgrades | ★★★★★ |

::alert{type="info" title="A shifting industry consensus"}
What constrains AI data center construction is no longer chips, but power. Gas turbine order books run past 2028, large-transformer lead times are 3–5 years, and more than half of US data centers planned for 2026 are delayed by electrical equipment — a facility that takes 1–2 years to build is meeting power equipment that takes 4+ years to deliver. That time gap is the order book.
::

## 3. Eight Segments in Brief

### 1. Power Generation: Order Books Sold Out Into the Next Decade

:badge[GE Vernova]{link="https://www.gevernova.com/"}'s heavy-duty gas turbines are sold out through 2028 (its CEO expects slots filled to 2030 within 2026); turbine backlog grew from 40 GW to 116 GW within a year, with non-refundable deposits of ~$75M for 2031 delivery slots. Nuclear has become the tech giants' long-duration option: Microsoft signed a 20-year, ~$1.6B PPA to restart Three Mile Island's 835 MW unit (grid connection in 2027), Meta is funding TerraPower's two Natrium units, and big tech signed over 10 GW of new nuclear within a year.

::alert{type="question" title="The bear case"}
Some estimates put Natrium at as much as $9.4B per 345 MW unit, and SMRs are unlikely to relieve the near-term gap within a decade — nuclear's value is in locking in the 2030s, not in solving today's shortage.
::

### 2. Rack Power: An Architecture Switchover

As rack power climbs from 10 kW to 120 kW (GB300) and on to 240–260 kW (Vera Rubin NVL72), the traditional "AC + UPS" chain has hit physical limits. The NVIDIA-led 800 VDC architecture (rectifying 13.8 kV grid AC straight to 800 VDC at the rack) claims ~45% less copper and ~5 percentage points better end-to-end efficiency, with a clear timetable: power cabinets production-ready in Q3 2026, full ramp with Rubin Ultra in 2027. The meaning of this switch is value-pool migration: the legacy UPS chain gets compressed, while new value flows to high-voltage rectifier cabinets, DC/DC power shelves, :tip[BBU]{tip="Battery Backup Unit"} units, and supercapacitors. The NVIDIA-platform power market alone is expected at ~$4.5B in 2026 (+56% YoY).

### 3. Memory: A Shortage Likely to Persist Beyond 2027

The performance bottleneck of AI chips is shifting from compute to memory bandwidth: each flagship GPU needs 128 GB-class HBM, and producing HBM in turn devours advanced DRAM capacity — hence a sector-wide shortage. AI data centers absorb ~70% of global memory supply, and SK hynix's DRAM/NAND/HBM capacity is sold out through end-2026. In Q1 2026, DRAM contract prices rose 58–63% QoQ and NAND 70–75%, entering what is called a "$200-billion-class super cycle". The China variable is :badge[CXMT]{link="https://www.cxmt.com/"}: its DRAM capacity is expected to reach 350K wafers/month by end-2026 (global #3), HBM lines enter production at end-2026, and the stock rose 470% on its debut trading day.

### 4. Optical Modules: The Year 1.6T Scales

In 100K-GPU clusters, networking can account for up to 30% of training time, so optical interconnect speed directly determines effective cluster compute. 2026 is a high-base, high-growth year for Ethernet optical modules: the market is ~$23–26B (+65% YoY), 800G shipments double past 40M units, and 1.6T leaps to ~14M units from a small base (a year ago agencies still forecast 5M). But the supply picture has changed — LightCounting explicitly notes that 2026 capacity is sufficient to double shipments: **the "whoever holds stock wins" phase is over** — and competition returns to share and cost. The real bottleneck has moved upstream: the :tip[EML]{tip="Electro-absorption Modulated Laser — the core laser chip inside optical modules"} supply gap has widened past 30%, with 200G EML monopolized by US and Japanese vendors at a >60% shortfall. On technology routes, silicon photonics passes half of shipments for the first time, and CPO (co-packaged optics) ramps around 2028 — not a simple negative, but a redistribution of the value chain.

::link-card
---
icon: https://www.lightcounting.com/favicon.ico
title: LightCounting — optical communication market research
description: The original source of the "2026 capacity is enough to double shipments" judgment
link: https://www.lightcounting.com/
---
::

### 5. Networking: A High-Value Link with Low Public Awareness

Two "wars" run at once. At the data-center level (scale-out), the shift from InfiniBand to Ethernet has taken NVIDIA's Spectrum-X to the #1 Ethernet switch share within two years. Inside the rack (scale-up), a "copper renaissance" is underway — a GB200 rack uses ~5,000 224G copper cables to interconnect 72 GPUs, worth ~¥2M of copper interconnect per rack. The segment's market size is comparable to optical modules (the global high-speed copper connector market was ~$2B in 2024; China's exceeded ¥10B in 2025), yet public awareness is far lower. The risks are equally clear: copper reach is only two to three meters and tightly bound to rack generations; at 600 kW-class racks, optical interconnect may reclaim dominance.

### 6. Cooling: From Optional Extra to Building Permit

Cooling demand does not grow linearly with compute — it jumps non-linearly with power density. The economic limit of air cooling sits around 30–50 kW per rack; GB200/GB300 pushed the industry past the inflection — without liquid cooling, next-generation racks simply cannot be delivered. Market data (methodologies differ enormously across agencies): China's liquid-cooling market is expected at ~¥23.2B in 2026 and ~¥47B by 2028; globally ~$13–15B in 2026 (UBS, including >$7B of cold-plate demand on the NVIDIA chain). One upstream episode worth noting: 3M exited the fluorinated-fluids business entirely at end-2025 for environmental reasons, leaving a ~¥10B market vacuum and a three-year import-substitution window for Chinese fluorochemical makers.

### 7. Compute Chips and Systems: The Multiplier of the Chain

This is the bulk of the 64% in the ledger — and the multiplier for every other segment: each GPU pulls 1.5–2× its own value in networking, storage, cooling, and power. Two structural shifts in 2026: ASIC rises to 27.8% of AI servers, growing 44.6% versus 16.1% for GPUs; and NVIDIA's NVL72 whole-rack delivery lifts system makers' value per unit (Foxconn Industrial Internet is expected to hold ~40% of the global AI-server market in 2026). On the supply side, TSMC's :tip[CoWoS]{tip="TSMC's 2.5D advanced packaging process — the core capacity bottleneck for AI chips"} monthly capacity has quadrupled in two years (120–140K wafers by end-2026) and remains fully sold out. Domestically, a game of capacity hunger: 2026 China AI chip demand is ~4.2M units against SMIC's ~2.6M units of available advanced capacity — one in every two chips cannot be built. Huawei and Cambricon together hold over half of SMIC's advanced quota, with constraints at HBM, packaging, and process nodes.

### 8. IDC Operation and Compute Leasing: The Most Real-Estate-Like Link

China's midstream operation layer captures ~51% of the AIDC chain's value; single projects run ¥2–10B with 5–8 year paybacks, mature parks exceed 90% utilization while new districts ramp at 30–50%. Two structural changes are worth recording: :tip[REITs]{tip="Real Estate Investment Trusts — here, publicly listed data-center REITs"} have closed the "develop → nurture → securitize → re-develop" capital loop (Runze Technology launched a ¥8–9B follow-on offering in February 2026); the compute-leasing market is expected to break ¥260B in 2026. The worries here are also the most real-estate-like: price competition has already emerged in oversupplied regions, and with GPUs losing over half their value in two years, the residual-asset risk of the "buy GPUs and rent them out" model is widely underestimated.

## 4. Cross-Cutting Comparison: Three Conclusions

Ranking the eight segments across demand growth, supply tightness, concentration, China participation, and technology-iteration risk yields three conclusions.

**First, track the migrating bottleneck.** The core dynamic of this cycle is the bottleneck moving along the chain. Expansion cycles differ by segment (optical modules 1 year, transformers 3 years, gas turbines 4 years, nuclear 8+ years), and those cycle gaps create local scarcity. A workable research heuristic is to "follow the lead times" — whoever has the longest delivery cycle and the hardest capacity expansion holds the strongest pricing position.

::timeline
{2023-2024}
Bottleneck in chips: CoWoS advanced packaging and HBM capacity
{2025-2026}
Bottleneck moves to power (transformers, turbines) and upstream materials (EML, copper-clad laminate, fluorinated fluids)
{2027-2028 (candidate)}
Grid interconnection capacity
::

**Second, watch the architecture switches.** 800 VDC, liquid cooling, CPO, and in-rack Ethernet share a common trait: they redistribute value rather than simply growing the pie. Switches give second-tier suppliers a window to challenge incumbents from a fresh starting line, and these segments offer the best research ROI — rack power, for instance, is being reshaped by a single NVIDIA timetable.

**Third, beware the capacity doublings.** The 2019–2021 optical-module expansion ended in price collapse and halved leader profits; today's "capacity could double" rhetoric rhymes closely with that eve. Memory is similar: once CXMT's 400K wafers/month plus the overseas big three's expansions land in 2027–2028, the "sold out" state is structurally unsustainable. The cycle never misses its appointment — only its arrival time is unknown.

## 5. How the Market Is Pricing It (Briefly)

Setting stock-market pricing against the industry view, two distinct logics emerge:

::tab{:tabs='["US: pricing bottlenecks","A-shares: pricing elasticity"]'}
#tab1
Power-equipment names lead the gains (Vertiv ~+1400% over three years; GE Vernova ~+50% YTD) yet multiples stay conservative (nuclear companies at 9–18× forward P/E) — the market pays for order-verified "visible cash flow", not for imagination.

#tab2
Compute-leasing stocks rose several-fold in a year while segment profit growth was just +39.5%; a domestic chip company crossed a ¥1T market cap at ~373× dynamic P/E — meanwhile the largest public-fund holding is already an optical-module maker, and TMT turnover once hit a record 52% of market volume.
::

Whether it is a bubble cannot be answered ex ante; which asset class corrects first can be analyzed. Bottleneck-verification assets correct through valuation reverting to fundamentals; narrative-duration assets through a wholesale reset of expectations — the latter is usually more violent. The Shiller CAPE broke 40 in July 2026 for the first time since 2000; unlike 2000, however, this index high is supported by 29% earnings growth. Both the railway mania and the dot-com bubble ended with "speculators bankrupt, infrastructure intact" — which is the comfort of researching infrastructure itself.

## Conclusion

::quote{icon="tabler:cpu"}
AI compute infrastructure is a trillion-dollar super-cycle running three tracks at once — grid rebuild, semiconductor expansion, and asset-heavy data centers. The most money sits in chips and systems, but the greatest growth elasticity and the most certain landscape-reset windows belong to bottleneck-type upstream segments and architecture-switch segments.
::

Topics worth opening next: AI's impact on power systems; an industry history of the memory super-cycle; a full guide to the CPO roadmap.

::folding{title="Appendix: methodology and limitations"}
**Method**: three phases — broad sweeps to map the industry; screening deep-dive segments by five criteria (size, tightness, inflection, China participation, complementary insight); targeted retrieval per segment, with key figures cross-checked across two sources where possible.

The most important lesson is **definitional discipline**: the same metric varies enormously across agencies — 2026 liquid-cooling forecasts range from $3B to $15B (scope differences), and decade-long HBM market forecasts differ by a factor of two. Source-tiering of online financial information (company filings / media paraphrase / broker estimates) is a practical skill, not academic fastidiousness.

The limitations are equally clear: several segments (fiber and cable, diesel generation, civil works) received panorama-level coverage only; most market-share figures originate in broker estimates; and the snapshot is 2026-09 — in this field, data expires by the month.
::

::meta-copyright{title="Reuse notice"}
This article is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans){icon="ri:creative-commons-line"} — attribution, non-commercial use, share-alike.
::
