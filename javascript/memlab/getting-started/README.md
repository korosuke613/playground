# Getting started for memlab
https://facebookincubator.github.io/memlab/docs/getting-started/

Run `memlab run --scenario scenario.js`.

```console
❯ memlab run --scenario scenario.js
page-load[36.4MB](baseline)[s1] > action-on-page[44MB](target)[s2] > revert[43.2MB](final)[s3]

total time: 1.9min
Memory usage across all steps:
50.6 _________
44.4 _________
38.2 ___  _  _
32.0 ▄▄_  _  _
25.8   _  _  _
19.6   _  _  _
13.4   _  _  _
 7.2   _  _  _
 1.0   _  _  _
     1  2  3

Sampling trace due to a large number of traces:
 Number of Traces: 9810
 Sampling Ratio:   50.97%
MemLab found 13 leak(s)

--Similar leaks in this run: 3969--
--Retained size of leaked objects: 1.7MB--
[Window] (native) @160393 [113.3KB]
  --7 (element)--->  [HTMLDocument] (native) @160391 [30KB]
  --get _activeElement (property)--->  [get activeElement] (closure) @379171 [64 bytes]
  --context (internal)--->  [<function scope>] (object) @264841 [369.2KB]
  --kg (variable)--->  [WeakMap] (object) @365667 [268.6KB]
  --table (internal)--->  [<array>] (array) @2367845 [268.5KB]
  --18588 / part of key (f @1698625) -> value (ig @1855723) pair in WeakMap (table @2367845) (internal)--->  [ig] (object) @1855723 [16 bytes]
  --node (property)--->  [Detached HTMLElement] (native) @1698625 [5.3KB]
  --70 (element)--->  [Detached InternalNode] (native) @1253884320 [120 bytes]
  --3 (element)--->  [Detached ElementIntersectionObserverData] (native) @1555476192 [64 bytes]


--Similar leaks in this run: 905--
--Retained size of leaked objects: 257.6KB--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --ytDomDomGetNextId (property)--->  [<closure>] (closure) @368835 [68 bytes]
  --context (internal)--->  [<function scope>] (object) @163401 [2.3MB]
  --Mbc (variable)--->  [Detached HTMLTemplateElement] (native) @142173 [7.9KB]
  --_templateInfo (property)--->  [Object] (object) @677965 [3.7KB]
  --nodeInfoList (property)--->  [Array] (object) @1422859 [1.2KB]
  --2 (element)--->  [Object] (object) @183667 [132 bytes]
  --templateInfo (property)--->  [Object] (object) @184041 [13.7KB]
  --content (property)--->  [Detached DocumentFragment] (native) @141675 [6.6KB]
  --4 (element)--->  [Detached Text] (native) @1238804352 [128 bytes]
  --2 (element)--->  [Detached HTMLDivElement] (native) @1244038336 [6.2KB]
  --2 (element)--->  [Detached Text] (native) @1244038496 [96 bytes]
  --2 (element)--->  [Detached HTMLDivElement] (native) @1244038176 [4KB]
  --6 (element)--->  [Detached InternalNode] (native) @1253313984 [384 bytes]
  --3 (element)--->  [Detached InternalNode] (native) @1408230752 [192 bytes]
  --1 (element)--->  [Detached InternalNode] (native) @1408230592 [192 bytes]
  --1 (element)--->  [Detached Attr] (native) @1555721312 [96 bytes]


--Similar leaks in this run: 5--
--Retained size of leaked objects: 2.4KB--
[<synthetic>] (synthetic) @1 [51.9MB]
  --4 (shortcut)--->  [Window / https://tpc.googlesyndication.com] (object) @1673913 [51.6KB]
  --botguard (property)--->  [Object] (object) @1977311 [320 bytes]
  --nBt_ (property)--->  [<closure>] (closure) @2026409 [68 bytes]
  --context (internal)--->  [<function scope>] (object) @1870949 [19.6KB]
  --e (variable)--->  [e] (closure) @1923229 [68 bytes]
  --context (internal)--->  [<function scope>] (object) @1755773 [4.5KB]
  --this (variable)--->  [v] (object) @1832193 [157.9KB]
  --l (property)--->  [Array] (object) @2097363 [113.9KB]
  --69 (element)--->  [Object] (object) @1833283 [632 bytes]
  --concat (property)--->  [<closure>] (closure) @1833641 [32 bytes]
  --context (internal)--->  [<function scope>] (object) @1988637 [540 bytes]
  --y (variable)--->  [Array] (object) @1988639 [492 bytes]
  --0 (element)--->  [Detached HTMLIFrameElement] (native) @1711667 [428 bytes]
  --3 (element)--->  [Detached DOMTokenList] (native) @1405228224 [56 bytes]


--Similar leaks in this run: 7--
--Retained size of leaked objects: 1.8KB--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --ytDomDomGetNextId (property)--->  [<closure>] (closure) @368835 [68 bytes]
  --context (internal)--->  [<function scope>] (object) @163401 [2.3MB]
  --RJ (variable)--->  [Set] (object) @712119 [356 bytes]
  --table (internal)--->  [<array>] (array) @2359549 [340 bytes]
  --43 (internal)--->  [HTMLElement] (native) @1725459 [3.5KB]
  --__shady (property)--->  [gd] (object) @1803641 [64 bytes]
  --parentNode (property)--->  [Detached DocumentFragment] (native) @1725461 [212 bytes]


--Similar leaks in this run: 4--
--Retained size of leaked objects: 1.3KB--
[Window] (native) @160393 [113.3KB]
  --7 (element)--->  [HTMLDocument] (native) @160391 [30KB]
  --get _activeElement (property)--->  [get activeElement] (closure) @379171 [64 bytes]
  --context (internal)--->  [<function scope>] (object) @264841 [369.2KB]
  --ei (variable)--->  [Object] (object) @365829 [3.1KB]
  --iron-a11y-announcer (property)--->  [Detached HTMLTemplateElement] (native) @160177 [1.6KB]
  --_styles (property)--->  [Array] (object) @392609 [584 bytes]
  --0 (element)--->  [Detached HTMLStyleElement] (native) @151395 [492 bytes]
  --3 (element)--->  [Detached DOMTokenList] (native) @1405797440 [56 bytes]


--Similar leaks in this run: 3--
--Retained size of leaked objects: 1.1KB--
[<synthetic>] (synthetic) @1 [51.9MB]
  --4 (shortcut)--->  [Window / https://tpc.googlesyndication.com] (object) @1673913 [51.6KB]
  --google_image_requests (property)--->  [Array] (object) @1977305 [1.2KB]
  --0 (element)--->  [Detached HTMLImageElement] (native) @1711715 [1.1KB]
  --4 (element)--->  [Detached InternalNode] (native) @1231429440 [864 bytes]
  --1 (element)--->  [Detached ShadowRoot] (native) @1553962368 [864 bytes]


--Similar leaks in this run: 9--
--Retained size of leaked objects: 944 bytes--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --ytDomDomGetNextId (property)--->  [<closure>] (closure) @368835 [68 bytes]
  --context (internal)--->  [<function scope>] (object) @163401 [2.3MB]
  --cpc (variable)--->  [bpc] (object) @241547 [14.8KB]
  --audioPlayer (property)--->  [Voc] (object) @394247 [12KB]
  --audioFeedbackHolder (property)--->  [Object] (object) @931417 [11.8KB]
  --open (property)--->  [Detached HTMLAudioElement] (native) @156323 [2.9KB]
  --5 (element)--->  [Detached AudioTrackList] (native) @1808253088 [104 bytes]


--Similar leaks in this run: 11--
--Retained size of leaked objects: 864 bytes--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --ytPubsubPubsubInstance (property)--->  [th] (object) @368889 [3.1KB]
  --subscriptions_ (property)--->  [Array] (object) @368893 [1.7KB]
  --3 (element)--->  [QT] (object) @694299 [2.6KB]
  --app (property)--->  [g.nY] (object) @313171 [129.2KB]
  --Wo (property)--->  [IT] (object) @697169 [56.8KB]
  --j (property)--->  [Array] (object) @697177 [47.4KB]
  --248 (element)--->  [native_bind] (closure) @697619 [24 bytes]
  --bound_this (internal)--->  [g.NQ] (object) @1427567 [6.5KB]
  --Ac (property)--->  [Object] (object) @1566025 [3.1KB]
  --ytp-svg-fill (property)--->  [Detached SVGPathElement] (native) @125773 [2.9KB]
  --8 (element)--->  [Detached SVGSVGElement] (native) @1231273856 [1KB]
  --11 (element)--->  [Detached InternalNode] (native) @1231824576 [56 bytes]
  --1 (element)--->  [Detached InternalNode] (native) @1232416064 [56 bytes]
  --1 (element)--->  [Detached NodeList] (native) @1808543648 [56 bytes]


--Similar leaks in this run: 6--
--Retained size of leaked objects: 472 bytes--
[Window] (native) @160393 [113.3KB]
  --7 (element)--->  [HTMLDocument] (native) @160391 [30KB]
  --29 (element)--->  [HTMLAnchorElement] (native) @154979 [376 bytes]
  --__dataHost (property)--->  [HTMLElement] (native) @156131 [2.9KB]
  --__dataHost (property)--->  [HTMLElement] (native) @156331 [4.6KB]
  --__shady (property)--->  [gd] (object) @241557 [264 bytes]
  --lastChild (property)--->  [HTMLDivElement] (native) @155587 [640 bytes]
  --__shady (property)--->  [gd] (object) @236911 [32 bytes]
  --previousSibling (property)--->  [Detached HTMLDivElement] (native) @155599 [14KB]
  --5 (element)--->  [Detached HTMLAnchorElement] (native) @1242860032 [6.8KB]
  --2 (element)--->  [Detached SVGSVGElement] (native) @1242859552 [6.6KB]
  --9 (element)--->  [Detached SVGGElement] (native) @1246129696 [5.6KB]
  --5 (element)--->  [Detached SVGGElement] (native) @1246126176 [3.9KB]
  --4 (element)--->  [Detached SVGGElement] (native) @1252480096 [3.6KB]
  --5 (element)--->  [Detached SVGPathElement] (native) @1252481056 [464 bytes]
  --7 (element)--->  [Detached SVGPathElement] (native) @1252479936 [464 bytes]
  --7 (element)--->  [Detached SVGPathElement] (native) @1251726336 [464 bytes]
  --7 (element)--->  [Detached SVGPathElement] (native) @1252634048 [464 bytes]
  --5 (element)--->  [Detached SVGAnimatedString] (native) @1404668032 [72 bytes]


--Similar leaks in this run: 1--
--Retained size of leaked objects: 304 bytes--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --Polymer (property)--->  [<closure>] (closure) @539171 [9.9KB]
  --telemetry (property)--->  [Object] (object) @539183 [444 bytes]
  --registrations (property)--->  [Array] (object) @710563 [5.1KB]
  --9 (element)--->  [a] (object) @387237 [908 bytes]
  --constructor (property)--->  [f] (closure) @160213 [928 bytes]
  --generatedFrom (property)--->  [Object] (object) @1133801 [3.3KB]
  --_template (property)--->  [Detached HTMLTemplateElement] (native) @160207 [1KB]
  --3 (element)--->  [Detached DocumentFragment] (native) @1243077824 [888 bytes]
  --2 (element)--->  [Detached Text] (native) @1243077024 [96 bytes]
  --2 (element)--->  [Detached HTMLStyleElement] (native) @1243077344 [304 bytes]


--Similar leaks in this run: 1--
--Retained size of leaked objects: 72 bytes--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --ytEventsEventsListeners (property)--->  [Object] (object) @368841 [1.8KB]
  --18 (element)--->  [Array] (object) @368875 [72 bytes]
  --0 (element)--->  [HTMLInputElement] (native) @150213 [1.3KB]
  --8 (element)--->  [HTMLDivElement] (native) @155589 [192 bytes]
  --__shady (property)--->  [gd] (object) @236907 [32 bytes]
  --nextSibling (property)--->  [Detached SVGSVGElement] (native) @155597 [1.9KB]
  --13 (element)--->  [Detached SVGGElement] (native) @1246303296 [832 bytes]
  --3 (element)--->  [Detached SVGAnimatedString] (native) @1409167616 [72 bytes]


--Similar leaks in this run: 1--
--Retained size of leaked objects: 56 bytes--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --ytPubsubPubsubInstance (property)--->  [th] (object) @368889 [3.1KB]
  --subscriptions_ (property)--->  [Array] (object) @368893 [1.7KB]
  --27 (element)--->  [Rgb] (object) @724899 [1.9KB]
  --ul (property)--->  [Array] (object) @1424905 [444 bytes]
  --1 (element)--->  [<closure>] (closure) @1424923 [88 bytes]
  --context (internal)--->  [<function scope>] (object) @1425029 [56 bytes]
  --b (variable)--->  [l$] (object) @1425065 [3.2KB]
  --B (property)--->  [g.DP] (object) @1425087 [3.2KB]
  --element (property)--->  [Detached HTMLDivElement] (native) @125099 [196 bytes]
  --5 (element)--->  [Detached InternalNode] (native) @1244940992 [56 bytes]
  --1 (element)--->  [Detached DOMTokenList] (native) @1404873504 [56 bytes]


--Similar leaks in this run: 1--
--Retained size of leaked objects: 40 bytes--
[<synthetic>] (synthetic) @1 [51.9MB]
  --2 (shortcut)--->  [Window / https://www.youtube.com] (object) @9819 [121.3KB]
  --yt (property)--->  [Object] (object) @366317 [9.1KB]
  --player (property)--->  [Object] (object) @366341 [3.6KB]
  --utils (property)--->  [Object] (object) @673655 [3.3KB]
  --videoElement_ (property)--->  [Detached HTMLVideoElement] (native) @125597 [3.2KB]
  --4 (element)--->  [Detached EventListener] (native) @1408703360 [160 bytes]
  --2 (element)--->  [Detached IntersectionObserver] (native) @1181478784 [224 bytes]
  --1 (element)--->  [Detached IntersectionObserverDelegate] (native) @1406435648 [40 bytes]
```
