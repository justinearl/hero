# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2026-06-19)

### Bug Fixes

* browser emulator data files much be changed from Xhr to XHR ([f33c0f4](https://github.com/justinearl/hero/commit/f33c0f46233590fe7edf85965b7e1709b61c96c7))
* **core:**  update creating jspath from history ([eeed064](https://github.com/justinearl/hero/commit/eeed06431595a66d81fc0f436cd733ffdf71247c))
* **core:** fix headed browser size/viewport docs ([c1623be](https://github.com/justinearl/hero/commit/c1623be023d8aa02a554231cd98d2ce6cb00216f))
* **core:** headed mode broken ([9d6ad5b](https://github.com/justinearl/hero/commit/9d6ad5b54fb2d7464c3cbae90653a04af16d5c1f))
* **core:** interaction command highlights ([b5e541f](https://github.com/justinearl/hero/commit/b5e541fb527f01ddc49f3e9c82c69034bc94d777))
* **core:** jspath for restoring nodes broken ([92e69ca](https://github.com/justinearl/hero/commit/92e69ca26ec112e0ca80c2301be7441edd7c88d5))
* **core:** painting stable resolve for url; tsconfigs ([26d3c54](https://github.com/justinearl/hero/commit/26d3c5462189efb9f6222d7432792eb64571a0ee))
* **default-browser-emulator:** disable AimEnabled feature ([bff25c1](https://github.com/justinearl/hero/commit/bff25c1fe70870300ec7504a80870f3ce0da50da))
* **default-browser-emulator:** fix typo that TS didnt catch, resulting in wrong deviceMemory proto ([4ef12e1](https://github.com/justinearl/hero/commit/4ef12e1e809b0c7cf6dbdc12ad39420197043bbb))
* **default-browser:** os lookup wrong ([b14bf27](https://github.com/justinearl/hero/commit/b14bf27080e88c50f7c76c53b1275c1b738093c2))
* **double-agent:** kill trailing tls process ([5942f27](https://github.com/justinearl/hero/commit/5942f27978a2e5673fadce09ab85e6d690a77423))
* eslint errors, tests hanging ([e413531](https://github.com/justinearl/hero/commit/e4135311adc2a7841bbe1ec7d0cbe7c8f339468a))
* fixed paths ([6a28d80](https://github.com/justinearl/hero/commit/6a28d8069111356e0b63d23003187ecd08a365b8))
* **hero:** close cli prompt on disconnect ([3da1631](https://github.com/justinearl/hero/commit/3da16319e02638a47ef5d4b4f8ea4e75f85f442d))
* **mitm:** default to google dns ([5c970c1](https://github.com/justinearl/hero/commit/5c970c1ada9c8e3254b1c397e52231b0ffcdd486))
* **mitm:** lookup public ip should use https ([c685dec](https://github.com/justinearl/hero/commit/c685decebe130a1dc95c77d2c429aa19a5fd8196))
* **plugins:** basic sec-ch-ua support for workers ([45f16d9](https://github.com/justinearl/hero/commit/45f16d9da2b1657c3f297cfccdde71ec5f0deeb5))
* **plugins:** fix versions not sorting correctly ([c9f4b16](https://github.com/justinearl/hero/commit/c9f4b16d9fc8555616de42f088dde0c34d08082a))
* **plugins:** handle chrome > 90 scroll animation ([7fc2cd2](https://github.com/justinearl/hero/commit/7fc2cd21d9ad4a3f61f9d049b3f7a927471266c1))
* **plugins:** headed viewports ([fee26c6](https://github.com/justinearl/hero/commit/fee26c680d3ebaf7d963e98ae7f68ffe54f46d39))
* **plugins:** iframe content window wrong ([5618c94](https://github.com/justinearl/hero/commit/5618c94eca957761e007d969536d130cce541ac9))
* **plugins:** improve user agent selector ([cd4b6af](https://github.com/justinearl/hero/commit/cd4b6afd67b2932f22c21e8069c25e9f07f1e74f))
* **plugins:** inconsistent dom env properties ([405e91b](https://github.com/justinearl/hero/commit/405e91bc07fd7225c6eebe8d46843242c8527c48))
* **plugins:** mask proxy usage ([b5fcd94](https://github.com/justinearl/hero/commit/b5fcd94c8a6d13263798be9c149b9f6579b34f6d))
* **plugins:** track correct screen size in chrome 98 ([c2fecdc](https://github.com/justinearl/hero/commit/c2fecdc04b2f4c1a19b6e7a03d025b0b1d3d941d))
* **plugins:** userAgentData emulation fixes ([4337cf0](https://github.com/justinearl/hero/commit/4337cf04d1bca077d4fb150c5b24e00b967ecfdf))
* **profiler:** chrome 133 infinite loop ([526c27d](https://github.com/justinearl/hero/commit/526c27d47e4632b4191516a835c34a241db6f167))
* **profile:** resolve stalled dom collector ([9cd105d](https://github.com/justinearl/hero/commit/9cd105d4cdfe41ac35b1d7b7ba3e5d7f9a3ba679))
* **puppet:** clean data dir on close ([6c2b85f](https://github.com/justinearl/hero/commit/6c2b85f007656192a8c103c2aa6752a0de3ab091))
* **puppet:** don't use contexts we didn't initiate ([ad88883](https://github.com/justinearl/hero/commit/ad888832377d301316eadf0bc21f88b1635ee246))
* **puppet:** fix hang on puppet close ([64173dd](https://github.com/justinearl/hero/commit/64173dda9947e2b702e859277e60a05c5ed40b97))
* **puppet:** turn off final screenshot for cast ([0a9f124](https://github.com/justinearl/hero/commit/0a9f12469a6f7261ee46de69c8f6949c6c485e1c))
* **real-user-agents:** update script broken ([c1d5251](https://github.com/justinearl/hero/commit/c1d5251f99315f390b17fac51cb6243128a30dd2))
* remove console logs, basic emulator bug ([c028062](https://github.com/justinearl/hero/commit/c028062a8130caa4cae1c65381bc66a55a6cf45b))
* reversed the reorg from two days ago ([aa5fddd](https://github.com/justinearl/hero/commit/aa5fddddbb66645bef9f6ab1b2d469bc9501f892))
* **timetravel:** reset timeline extender ([98a3def](https://github.com/justinearl/hero/commit/98a3def26027379e5a4e763325226d535db1b31e))
* userAgent option wasn't being properly extracted ([18dbda6](https://github.com/justinearl/hero/commit/18dbda6b5834d9900ba7f51260ad8519f7b4c56d))
* useragent was not correctly parsing mac os 11 ([3a177ed](https://github.com/justinearl/hero/commit/3a177edb690f0f6373942720f3fdf304a2aad596))

### Features

* added ResourceTypes enum + IResourceType to hero export ([d8b0bb8](https://github.com/justinearl/hero/commit/d8b0bb81d48943dba638213ba24c38399f63c32a))
* added support for plugins ([0fda55d](https://github.com/justinearl/hero/commit/0fda55d7a57d300d765c462389e76da0e1fe0822))
* **agent:** chrome 135 emulation ([fdcd31b](https://github.com/justinearl/hero/commit/fdcd31b6f4dc04e8ad716a0ba78cb571e4ed1584))
* **agent:** default to chrome 130 ([5830b3d](https://github.com/justinearl/hero/commit/5830b3de6a509614f1a40d20f5fe33f4778b3ac9))
* **client:** add serialized callstack ([7a87445](https://github.com/justinearl/hero/commit/7a87445a5ea772769cd5cf2df5528e9653bd12a8))
* **core:** add hero meta fields to session db ([596b8a1](https://github.com/justinearl/hero/commit/596b8a11662b2df8905bf638243714173d444938))
* **core:** add keepalive message and cli ([44caf22](https://github.com/justinearl/hero/commit/44caf22e3a5200904a6fcc2e8cbf3269dcac5b15))
* **core:** add puppet and session events ([a09b592](https://github.com/justinearl/hero/commit/a09b59228c243a17c6d27a299ea0885edd5066c7))
* **core:** default browser context ([cbdeacf](https://github.com/justinearl/hero/commit/cbdeacf60515ed25e7b6646c7e160c4f2679f77d))
* **core:** geolocation feature ([0ecbb14](https://github.com/justinearl/hero/commit/0ecbb14307c6cdebb99cf2e2ab3c3d27702aa6fa))
* **core:** re-broadcast events during resume ([88b0ca9](https://github.com/justinearl/hero/commit/88b0ca94401e3fc24313f284e3446e9a22efb877))
* **core:** use local dir for page state ([d884e81](https://github.com/justinearl/hero/commit/d884e81448e7db9d6f8a1613f7cefe8c5449caed))
* **default-browser-emulator:** use Typeserializer in injected scripts ([8a9a568](https://github.com/justinearl/hero/commit/8a9a56886a6707a1b8fd0ed8c0bd2fce45884c3c))
* first stab at documenting plugins + simplified plugin architecture ([fcaa3cf](https://github.com/justinearl/hero/commit/fcaa3cfdca98b6f85128c196369d63ae40642df1))
* **hero:** automatic server port use ([0199338](https://github.com/justinearl/hero/commit/0199338b9cdad68c7e5acd036597bf8d3252c90c))
* migrate away from runtime to custom websockets ([1baf701](https://github.com/justinearl/hero/commit/1baf7018e3fba1a8f5cf3fd89f077812a1fbe97c))
* **mitm:** allow a user to configure dns provider ([c361d5c](https://github.com/justinearl/hero/commit/c361d5c49839634cf117f2a9f141d46ff8546963))
* moved commons into its own repo ([fdbfa4c](https://github.com/justinearl/hero/commit/fdbfa4cdad7fe977412c1660cda7075417a01e82))
* moved Handler to Runner and Core's http server to Server + no default instance is exported ([41954ff](https://github.com/justinearl/hero/commit/41954ff3a12cadb68bc9a065d54205474aaa8362))
* moved output from Hero to Databox ([95c3f9b](https://github.com/justinearl/hero/commit/95c3f9bfcff59361037ba3a1f4dda6b87d22f23e))
* moved website to its own repo ([279971a](https://github.com/justinearl/hero/commit/279971a2a400e3ab9dabd175347ef44f6be29be1))
* **plugin:** chrome dependencies in npm packages ([62d99c9](https://github.com/justinearl/hero/commit/62d99c90b0bc653f568eff9cf2279109f2d24bfe))
* **plugins:** add chrome 98 + selector defaults ([c27f380](https://github.com/justinearl/hero/commit/c27f3804b9ec7559d56021ce6890036ebde1e761))
* **plugins:** mask public ip in webrtc ([99dcf9e](https://github.com/justinearl/hero/commit/99dcf9e674058e1d958a6c93542cf5ba9816b2fc))
* **plugins:** on browser context ([3e5cead](https://github.com/justinearl/hero/commit/3e5ceadd63790191f966802d185983e11adcf0bf))
* **plugins:** placeholder for browser datafiles ([0976ed7](https://github.com/justinearl/hero/commit/0976ed7f90b14146ce498f4f2a4a251b127d72c9))
* **plugins:** remove codecs overrides for chrome ([aba86ec](https://github.com/justinearl/hero/commit/aba86ec57ae7d515a291998640492cc3760a9887))
* **puppet:** change back to pipetransport ([3bc6c43](https://github.com/justinearl/hero/commit/3bc6c43b3df9788e7feae831c9a1a118a942f245))
* remove replay app ([8fc196d](https://github.com/justinearl/hero/commit/8fc196da4a5aa29a78cc1cbfe717622023af0184))
* renamed SecretAgent to Hero ([e5f12a3](https://github.com/justinearl/hero/commit/e5f12a3ff2dd8926f87275a9f248cbeef5c4cfc9))
* replay inside chrome ([5b407ea](https://github.com/justinearl/hero/commit/5b407ea32e01934f14ba144f5ef666d697b5757f))
* **replay:** enable backwards replay ([6018724](https://github.com/justinearl/hero/commit/6018724b5e8ffab098e6b6b83b1d2c789894eee6))
* **timetravel:** allow tracking a focused range ([e0dad2a](https://github.com/justinearl/hero/commit/e0dad2aa39f6a22a90a5e620db2ff7c410bad507))
* update to chrome 139 ([9e8a69b](https://github.com/justinearl/hero/commit/9e8a69bf5f4dbb1255b81a7e7bc56839c08dcef7))
* updated to use latest commons version ([f9b145b](https://github.com/justinearl/hero/commit/f9b145b962ee28e2669afd1cefe3da7e1398f3f6))
* upgrade base chrome to 128 ([67ee967](https://github.com/justinearl/hero/commit/67ee967c46d1632cd5e617a43cce29e4e3c1da0a))
* uses new @ulixee/commons/lib structure ([7ba3c73](https://github.com/justinearl/hero/commit/7ba3c73e40663f32d0001c51edce344f7ebd1e42))

# [2.0.0-alpha.34](https://github.com/ulixee/hero/compare/v2.0.0-alpha.33...v2.0.0-alpha.34) (2025-09-08)

### Features

* update to chrome 139 ([9e8a69b](https://github.com/ulixee/hero/commit/9e8a69bf5f4dbb1255b81a7e7bc56839c08dcef7))

# [2.0.0-alpha.33](https://github.com/ulixee/hero/compare/v2.0.0-alpha.32...v2.0.0-alpha.33) (2025-05-29)

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.32](https://github.com/ulixee/hero/compare/v2.0.0-alpha.31...v2.0.0-alpha.32) (2025-05-28)

### Bug Fixes

* **profiler:** chrome 133 infinite loop ([526c27d](https://github.com/ulixee/hero/commit/526c27d47e4632b4191516a835c34a241db6f167))
* **real-user-agents:** update script broken ([c1d5251](https://github.com/ulixee/hero/commit/c1d5251f99315f390b17fac51cb6243128a30dd2))

### Features

* **agent:** chrome 135 emulation ([fdcd31b](https://github.com/ulixee/hero/commit/fdcd31b6f4dc04e8ad716a0ba78cb571e4ed1584))

# [2.0.0-alpha.31](https://github.com/ulixee/hero/compare/v2.0.0-alpha.30...v2.0.0-alpha.31) (2024-12-07)

### Bug Fixes

* **default-browser-emulator:** fix typo that TS didnt catch, resulting in wrong deviceMemory proto ([4ef12e1](https://github.com/ulixee/hero/commit/4ef12e1e809b0c7cf6dbdc12ad39420197043bbb))
* **default-browser:** os lookup wrong ([b14bf27](https://github.com/ulixee/hero/commit/b14bf27080e88c50f7c76c53b1275c1b738093c2))
* **double-agent:** kill trailing tls process ([5942f27](https://github.com/ulixee/hero/commit/5942f27978a2e5673fadce09ab85e6d690a77423))

### Features

* **agent:** default to chrome 130 ([5830b3d](https://github.com/ulixee/hero/commit/5830b3de6a509614f1a40d20f5fe33f4778b3ac9))
* **default-browser-emulator:** use Typeserializer in injected scripts ([8a9a568](https://github.com/ulixee/hero/commit/8a9a56886a6707a1b8fd0ed8c0bd2fce45884c3c))

# [2.0.0-alpha.30](https://github.com/ulixee/hero/compare/v2.0.0-alpha.29...v2.0.0-alpha.30) (2024-10-11)

### Features

* migrate away from runtime to custom websockets ([1baf701](https://github.com/ulixee/hero/commit/1baf7018e3fba1a8f5cf3fd89f077812a1fbe97c))
* upgrade base chrome to 128 ([67ee967](https://github.com/ulixee/hero/commit/67ee967c46d1632cd5e617a43cce29e4e3c1da0a))

# [2.0.0-alpha.29](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.28...v2.0.0-alpha.29) (2024-07-16)

### Bug Fixes

* **agent:** clear frames when url context changes ([#98](https://github.com/ulixee/unblocked/issues/98)) ([0eb95dc](https://github.com/ulixee/unblocked/commit/0eb95dcdcadb35c6a726ff2a1fd1d6eba1edb19e))
* **browser-emulator:** properly clean error stack ([05521ad](https://github.com/ulixee/unblocked/commit/05521ad783fcd5c5ad7ad1ea7a7d611fdff0927a))
* console leaking info ([#89](https://github.com/ulixee/unblocked/issues/89)) ([c10c174](https://github.com/ulixee/unblocked/commit/c10c174f20112a13f8d5a7cb636dcb4f2bf8add6))
* **default-browser-emulator:** console leaking debugger active ([#97](https://github.com/ulixee/unblocked/issues/97)) ([bdca4b0](https://github.com/ulixee/unblocked/commit/bdca4b00a61b90eb613ae37bc3c8442eadbbefcf))
* **default-browser-emulator:** undefined destructure ([#99](https://github.com/ulixee/unblocked/issues/99)) ([02d2cf1](https://github.com/ulixee/unblocked/commit/02d2cf11ae0ccfa25186713f807b68b4131b0c55))
* don't crash on prototype overflow ([#90](https://github.com/ulixee/unblocked/issues/90)) ([cfdb498](https://github.com/ulixee/unblocked/commit/cfdb498ee25e3cd4001efbb25954892dd7809284))
* even more console leaks ([#92](https://github.com/ulixee/unblocked/issues/92)) ([b9eea30](https://github.com/ulixee/unblocked/commit/b9eea30cf93b237c2439364c65da321fa507b39b))
* **plugins:** correct error stack for setPrototype ([776aaa8](https://github.com/ulixee/unblocked/commit/776aaa8daa5bda5613e107a37a25f373204df0ca))
* **plugins:** don’t scope emulator vars in window ([4775864](https://github.com/ulixee/unblocked/commit/477586429d1fb8147110e142783075d980f00026))
* **plugins:** proxy issues with stack traces ([#91](https://github.com/ulixee/unblocked/issues/91)) ([14354f0](https://github.com/ulixee/unblocked/commit/14354f0d43fe3f2382ef046c69efaceac65c83a1))
* **plugins:** stack for setPrototype ([f735eef](https://github.com/ulixee/unblocked/commit/f735eefcc7a3454ded032942542c26e0ba806e96))
* stack traces in utils ([9ec622e](https://github.com/ulixee/unblocked/commit/9ec622e4eef8d276c6c8e8e16a1cc625da013239))

### Features

* **browser-emulator:** hide unhandled errors and rejections ([#102](https://github.com/ulixee/unblocked/issues/102)) ([bb6fa5e](https://github.com/ulixee/unblocked/commit/bb6fa5efb2d9e9d16f787e825c0387fffcbe7cda))
* **browser:** instructions to update data files ([3bd93c0](https://github.com/ulixee/unblocked/commit/3bd93c0f21b281ee8d5ecfc8a6f7ef37faca3a87))
* make headless=new the default mode ([#95](https://github.com/ulixee/unblocked/issues/95)) ([c7297dd](https://github.com/ulixee/unblocked/commit/c7297dd0f90541fae430b28dc3c728df77591844))
* **plugins:** ability to configure plugins ([5bc079b](https://github.com/ulixee/unblocked/commit/5bc079bba85f50a54457c41d5c6039041ceb1e9e))
* **plugins:** option to output all json stringify ([009b032](https://github.com/ulixee/unblocked/commit/009b0325af3e4ffd61306414eb02ad7d25f3c6c2))

# [2.0.0-alpha.28](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.27...v2.0.0-alpha.28) (2024-03-11)

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.27](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.26...v2.0.0-alpha.27) (2024-03-01)

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.26](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.25...v2.0.0-alpha.26) (2024-02-02)

### Bug Fixes

- **agent:** in page nav on unload ([#77](https://github.com/ulixee/unblocked/issues/77)) ([f248891](https://github.com/ulixee/unblocked/commit/f248891ac434506c6d8bf08c5b90da8ef5d94b8c))
- **agent:** set default loader if no frames loaded ([b89ca99](https://github.com/ulixee/unblocked/commit/b89ca99fc35efe5571dd3406567bd4cca97ef531))

### Features

- **agent:** default chrome 121 ([#80](https://github.com/ulixee/unblocked/issues/80)) ([d0c8737](https://github.com/ulixee/unblocked/commit/d0c8737b80ce02a4904daa9a80731b658de22c8d))
- **agent:** max agents per browser option ([54ad615](https://github.com/ulixee/unblocked/commit/54ad615e0ff991a97226efa4e7306bad80b21e52))

# [2.0.0-alpha.25](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.24...v2.0.0-alpha.25) (2023-09-28)

### Bug Fixes

- **default-browser-emulator:** empty ua hints ([72d0344](https://github.com/ulixee/unblocked/commit/72d034407d84c9ee70989d855dc656f0cf6cf28a))
- don't crash on promise like object ([#73](https://github.com/ulixee/unblocked/issues/73)) ([73fff18](https://github.com/ulixee/unblocked/commit/73fff18099797f86548f847cccd3825dccd8f661))

### Features

- update to chrome 117 ([#74](https://github.com/ulixee/unblocked/issues/74)) ([2d9c416](https://github.com/ulixee/unblocked/commit/2d9c416f24db87c8ff191c33c774abc0a75a4683))

# [2.0.0-alpha.24](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.23...v2.0.0-alpha.24) (2023-08-09)

### Features

- **agent:** add request/response body intercept ([#71](https://github.com/ulixee/unblocked/issues/71)) ([d072414](https://github.com/ulixee/unblocked/commit/d072414c50d4800a6adfa2b0795b8f72c05bdf9f))
- **specification:** add viewport to deviceprofile ([ea7e50e](https://github.com/ulixee/unblocked/commit/ea7e50e6c7c40656d4a4bb85580f2be9d7500373))

# [2.0.0-alpha.23](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.22...v2.0.0-alpha.23) (2023-07-07)

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.22](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.21...v2.0.0-alpha.22) (2023-06-12)

### Bug Fixes

- **emulator:** require debug ext for webgl params ([ed5e43f](https://github.com/ulixee/unblocked/commit/ed5e43fd0ec7b200090d34ecf1856ade95b17e59))
- **plugins:** failing test ([b0574e4](https://github.com/ulixee/unblocked/commit/b0574e4bf6c2f17db8fe72475c06da065d493234))
- rollback nanoid upgrade. broke requirejs ([50c2000](https://github.com/ulixee/unblocked/commit/50c2000cd7785ca54e1845412e211716d9dbaf4e))

### Features

- **plugins:** include default color depth ([166d3b4](https://github.com/ulixee/unblocked/commit/166d3b4e1db94c2665324c524dfc6390cd0e64ba))
- test for console.debug ([3f140b8](https://github.com/ulixee/unblocked/commit/3f140b82c54a13fd2f3faaf687932b7b28e53066))

# [2.0.0-alpha.21](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.20...v2.0.0-alpha.21) (2023-04-24)

### Bug Fixes

- **agent:** test stack trace detect in browser ([#62](https://github.com/ulixee/unblocked/issues/62)) ([b716e59](https://github.com/ulixee/unblocked/commit/b716e592808cd640c034e89e95964155cb11fdf5))

# [2.0.0-alpha.20](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.18...v2.0.0-alpha.20) (2023-04-19)

### Bug Fixes

- **agent:** get dom node id from parent frame ([5158d7d](https://github.com/ulixee/unblocked/commit/5158d7d323f3ae5536b31378706e431e6646d598))
- **agent:** no autoattach when browser connects ([1ab573d](https://github.com/ulixee/unblocked/commit/1ab573df817226afdbd9f0b31c732ef171068604))
- **agent:** reconnect crashed shared workers ([4d28798](https://github.com/ulixee/unblocked/commit/4d287983337e2f73097776a4b15c89ac236a35f2))
- **agent:** release memory leaks ([934dcdb](https://github.com/ulixee/unblocked/commit/934dcdba48bb0524f47e7ff60aca2fb4afdbd77a))
- **default-browser-emulator:** default disable tcp ([5d74fd4](https://github.com/ulixee/unblocked/commit/5d74fd4ddb4cb5300a0a8e0c72808a53ceedd8fc))
- **default-browser-emulator:** plugins detectable ([c461fa2](https://github.com/ulixee/unblocked/commit/c461fa2c069117444502b7e4f8e869e202dfaa05))
- **plugins:** avoid incognito detection ([8ced043](https://github.com/ulixee/unblocked/commit/8ced043473f44dd82961a7f96db9def797624e71))
- **plugins:** check for webkitTemporaryStorage ([38bfa6f](https://github.com/ulixee/unblocked/commit/38bfa6f437454286750a784b4ee304f685922b8f))
- **plugins:** ensure sec-cha-ua is correct ([add8df4](https://github.com/ulixee/unblocked/commit/add8df48b875dc890cc045205eabbf87ee364729))
- **plugins:** fix sec ch viewport settings ([749750c](https://github.com/ulixee/unblocked/commit/749750c156daa7decdd5a52ca744205b9f7b4b47))
- **plugins:** srcdoc iframe returning wrong doc ([9910ec6](https://github.com/ulixee/unblocked/commit/9910ec680c163d3011ec2bc8337873824f016e74))
- should use inner ([1026547](https://github.com/ulixee/unblocked/commit/102654757c18fcfc785d1cd945f6842b67e1053f))

### Features

- **agent:** enable out of process iframes ([#50](https://github.com/ulixee/unblocked/issues/50)) ([77b96c8](https://github.com/ulixee/unblocked/commit/77b96c8ae37e7de36a9b38c6d76a1498d34dee81))
- **agent:** try to use chrome headless=new mode ([18999c7](https://github.com/ulixee/unblocked/commit/18999c71679ae04c46e1f5218d4be21ccc5af561))
- **browser-emulator:** add full user version list ([b783db2](https://github.com/ulixee/unblocked/commit/b783db276f2637c9d0a65c44061373cb6b4d11cc))
- **plugins:** don’t load unnecessary plugins ([fcfdacd](https://github.com/ulixee/unblocked/commit/fcfdacd1dda71f54b79466d445e6842714d40c3a))
- set unavailable screen ([b7402b0](https://github.com/ulixee/unblocked/commit/b7402b0cbbd99ac11d16fd7ab0cdf0ebded764ee))

# [2.0.0-alpha.19](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.18...v2.0.0-alpha.19) (2023-02-25)

### Bug Fixes

- **agent:** no autoattach when browser connects ([1ab573d](https://github.com/ulixee/unblocked/commit/1ab573df817226afdbd9f0b31c732ef171068604))
- **agent:** release memory leaks ([934dcdb](https://github.com/ulixee/unblocked/commit/934dcdba48bb0524f47e7ff60aca2fb4afdbd77a))
- **default-browser-emulator:** default disable tcp ([5d74fd4](https://github.com/ulixee/unblocked/commit/5d74fd4ddb4cb5300a0a8e0c72808a53ceedd8fc))
- **default-browser-emulator:** plugins detectable ([c461fa2](https://github.com/ulixee/unblocked/commit/c461fa2c069117444502b7e4f8e869e202dfaa05))
- **plugins:** avoid incognito detection ([8ced043](https://github.com/ulixee/unblocked/commit/8ced043473f44dd82961a7f96db9def797624e71))
- **plugins:** check for webkitTemporaryStorage ([38bfa6f](https://github.com/ulixee/unblocked/commit/38bfa6f437454286750a784b4ee304f685922b8f))
- **plugins:** ensure sec-cha-ua is correct ([add8df4](https://github.com/ulixee/unblocked/commit/add8df48b875dc890cc045205eabbf87ee364729))
- should use inner ([1026547](https://github.com/ulixee/unblocked/commit/102654757c18fcfc785d1cd945f6842b67e1053f))

### Features

- **agent:** try to use chrome headless=new mode ([18999c7](https://github.com/ulixee/unblocked/commit/18999c71679ae04c46e1f5218d4be21ccc5af561))
- **plugins:** don’t load unnecessary plugins ([fcfdacd](https://github.com/ulixee/unblocked/commit/fcfdacd1dda71f54b79466d445e6842714d40c3a))
- set unavailable screen ([b7402b0](https://github.com/ulixee/unblocked/commit/b7402b0cbbd99ac11d16fd7ab0cdf0ebded764ee))

# [2.0.0-alpha.18](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2023-01-17)

### Bug Fixes

- deviceMemory heap size not overriding getters ([cf08449](https://github.com/ulixee/unblocked/commit/cf0844940469ce474cfe6a3bf321dc1f5347d9dc))
- ensure ipLookupServices can handle http2 ([ea9bb11](https://github.com/ulixee/unblocked/commit/ea9bb11fdcfa7ebee8ea3aa35577ef8721b994fb)), closes [#29](https://github.com/ulixee/unblocked/issues/29) [#28](https://github.com/ulixee/unblocked/issues/28)
- navigator.plugins uint32 overflow ([221cef9](https://github.com/ulixee/unblocked/commit/221cef97e0445966196e7491fe62eda8e4ab2c64))
- pool test broken ([63b20ea](https://github.com/ulixee/unblocked/commit/63b20eae9b4449e9de4323d25e39631aece0b73f))

### Features

- cache machine ip ([0325fd3](https://github.com/ulixee/unblocked/commit/0325fd300d26f218e8b357610eec330e322db192))
- **plugins:** disable ip proxy by default ([a9a79bc](https://github.com/ulixee/unblocked/commit/a9a79bcc56bba9c107a8f380298e38a28a90af1e)), closes [#29](https://github.com/ulixee/unblocked/issues/29)

# [2.0.0-alpha.17](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.15...v2.0.0-alpha.17) (2022-12-15)

### Bug Fixes

- correctly set user agent platform and memory ([1b11514](https://github.com/ulixee/unblocked/commit/1b115148c0cbb6bf972c912ad5a5d1ca0236e439))
- handle installed chrome not being latest ([cf94c1d](https://github.com/ulixee/unblocked/commit/cf94c1d217d08b7b05e46d266a100edc9da35891))
- proxy leak in js ([54bf072](https://github.com/ulixee/unblocked/commit/54bf0727a74608441444d75c7daf5dc85ce32c01))

### Features

- invert disableDevtools and default to off ([b66d8cc](https://github.com/ulixee/unblocked/commit/b66d8cc13d716acc99014ffcb818650ebc2624a2))

# [2.0.0-alpha.15](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2022-12-05)

### Bug Fixes

- **plugins:** check that performance.memory exists ([a05a2b1](https://github.com/ulixee/unblocked/commit/a05a2b1f74aa86ec000427427eeb799f77a4cd74))

### Features

- add dns failovers to help tests ([241c4a0](https://github.com/ulixee/unblocked/commit/241c4a0b0c3a34ec2ea0d10cc9972f779ba1082e))

# [2.0.0-alpha.14](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2022-11-17)

### Bug Fixes

- publish connect errors ([a917c8d](https://github.com/ulixee/unblocked/commit/a917c8dca16ac9220f8d6e4aab41f5fa71d1bc9b))

# [2.0.0-alpha.13](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2022-11-02)

### Bug Fixes

- convert ubk vars to ulx ([ca3ccf6](https://github.com/ulixee/unblocked/commit/ca3ccf6f6d6b8783507f4155d8b5b9a7bbee0313))
- tweak readme ([1487b53](https://github.com/ulixee/unblocked/commit/1487b534bb679efad2c7df5254f8bfbfec28fbfd))

# [2.0.0-alpha.12](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2022-10-31)

### Bug Fixes

- update env parsing of paths ([9dbade6](https://github.com/ulixee/unblocked/commit/9dbade6214ac1abb00eec47c7e1b16669b558a58))

# [2.0.0-alpha.11](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2022-10-03)

### Bug Fixes

- windows builds ([f70a5ca](https://github.com/ulixee/unblocked/commit/f70a5cac40010d88a876e54664e249d8d49b6531))

### Features

- browser emulator generator ([badfa6e](https://github.com/ulixee/unblocked/commit/badfa6ed2397c2dd1dfcff78bd44cc5adca6a130))
- max heap size ([a70cf8d](https://github.com/ulixee/unblocked/commit/a70cf8dfc2fadb04bd2225505c60eb12ae7c7e20))
- move user agent data out of emulator ([85fdeac](https://github.com/ulixee/unblocked/commit/85fdeacc0aef4343cd0d0abec87eecc783cd7d85))
- **plugins:** use browser profiler data ([7504fce](https://github.com/ulixee/unblocked/commit/7504fce1e9778e3dfdf4d71c5dce0602a62bfda0))
- speech synthesis emulation ([22f1591](https://github.com/ulixee/unblocked/commit/22f1591c5efbd10789c844fc28f18e0364d0443f))

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.9](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2022-08-16)

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.8](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2022-08-16)

### Bug Fixes

- **plugins:** toString leaking proxy ([aea9a73](https://github.com/ulixee/unblocked/commit/aea9a735ed4b19b884140ab68348683a13b786c6)), closes [#5](https://github.com/ulixee/unblocked/issues/5)

### Features

- modify flags ([e80ebc6](https://github.com/ulixee/unblocked/commit/e80ebc607f75026668803e5f46531d0754aeb65d))

# [2.0.0-alpha.7](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2022-07-26)

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.6](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2022-07-13)

**Note:** Version bump only for package @ulixee/default-browser-emulator

# [2.0.0-alpha.5](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2022-06-28)

### Bug Fixes

- **browser:** disable oopif ([1be7831](https://github.com/ulixee/unblocked/commit/1be7831d4373d433ef5e7d9b282c3306c898e0e5))
- update lint and fix the issues ([da13726](https://github.com/ulixee/unblocked/commit/da13726fa4bd6791e1c9f3a32580dea09bd89572))

### Features

- implement addDomOverrides from spec ([0f76ead](https://github.com/ulixee/unblocked/commit/0f76eadea61c16d40e14ffceeec276a4b65c0071))

# [2.0.0-alpha.4](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2022-06-10)

### Features

- update commons for log filtering ([a1f0b32](https://github.com/ulixee/unblocked/commit/a1f0b3273144250aaa72f6950e76db016a5d074f))

# [2.0.0-alpha.3](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.1...v2.0.0-alpha.3) (2022-06-09)

### Bug Fixes

- wrong header platform in service workers ([2f8a33c](https://github.com/ulixee/unblocked/commit/2f8a33c1e130614429e83cd1fb3c7839a46974b2))

# [2.0.0-alpha.2](https://github.com/ulixee/unblocked/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2022-05-19)

**Note:** Version bump only for package @ulixee/default-browser-emulator
