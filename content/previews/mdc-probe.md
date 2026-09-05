---
title: MDC 语法探针（勿发布，测试后删除）
date: 2026-09-05 07:50:00
updated: 2026-09-05 07:50:00
categories: [技术]
---

## 探针区

甲-块级alert中文标题：下一段验证

::alert{type="info" title="中文标题A"}
正文甲。英文 English 混排 123。
::

乙-行内badge带空格：

:badge[GE Vernova]{link="https://www.gevernova.com/"}

丙-行内badge纯中文：

:badge[长鑫存储]{link="https://www.cxmt.com/"}

丁-tip含全角逗号：

:tip[BBU]{tip="Battery Backup Unit，电池备援单元"} 在句中。

戊-tip纯中文：

:tip[HBM]{tip="高带宽内存"} 在句中。

己-时间线：

::timeline
{2023-2024}
瓶颈在芯片
{2025-2026}
瓶颈移向电力
::

庚-引用：

::quote{icon="tabler:cpu"}
一句结论。
::
