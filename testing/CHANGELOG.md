# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2026-06-19)

### Bug Fixes

* change shared package names ([d6181a7](https://github.com/justinearl/hero/commit/d6181a75a0387797177eb9aa2f71553bb7d31432))
* **client:** fix HeroReplay replaying a sessionid ([56da409](https://github.com/justinearl/hero/commit/56da409ad42dffd7b45333cd53811d6a8163e550))
* **core/client:** export usable mjs/cjs ([ca149ef](https://github.com/justinearl/hero/commit/ca149efbfbdf03da0fda7d127348e5de6f2a4f8b))
* **core:** dont close client on promise rejections ([37f1169](https://github.com/justinearl/hero/commit/37f11690131c4bf08e481c803cdb3fba68c7985f))
* **core:** exports not working <= node 14.12 ([d793601](https://github.com/justinearl/hero/commit/d793601a052c243a541cf0331c79d00bc1332d1e))
* **core:** fix unblocked references ([edabadd](https://github.com/justinearl/hero/commit/edabadd08738875234afc9735e0ad81c31bc5c95))
* intercept test ([1c2b459](https://github.com/justinearl/hero/commit/1c2b459c6bf3de633c20df9b0af5120e280236d9))
* lint and puppet test chrome 80 ([0ce09ac](https://github.com/justinearl/hero/commit/0ce09ac71e3f9a9a802ba90f9c7aab9021f07e5c))
* **mitm:** bubble proxy errors properly to client ([b6a72f5](https://github.com/justinearl/hero/commit/b6a72f59ef8e7739654ab82b170aa0e15d38ebd0)), closes [#98](https://github.com/justinearl/hero/issues/98)
* **mitm:** fix ipc timeouts ([851be03](https://github.com/justinearl/hero/commit/851be03be65fb0718b8af8230ab76360a7f006ef))
* **mitm:** http2 header order wrong ([801b3c8](https://github.com/justinearl/hero/commit/801b3c84a18f6eee51464d889edf9e01134fba9a))
* pool socket connections per origin ([0075f18](https://github.com/justinearl/hero/commit/0075f18a64a2761f0979c072e42958002664b2df))
* **puppet:** turn off final screenshot for cast ([0a9f124](https://github.com/justinearl/hero/commit/0a9f12469a6f7261ee46de69c8f6949c6c485e1c))
* removed unused CoreProcess.ts ([976580a](https://github.com/justinearl/hero/commit/976580a27e2048c06dd86d3972055f10757b0930))
* **replay:** cover last tick on playbar ([baf12e7](https://github.com/justinearl/hero/commit/baf12e795fade634e60c64a342ea339ac6e8aa5c))
* update client hints spec for hero meta ([0455bf9](https://github.com/justinearl/hero/commit/0455bf943e3203a72e12cc43b240874b4e9bd1b8))

### Features

* **ci:** windows tests ([fd5e9db](https://github.com/justinearl/hero/commit/fd5e9dbd2bdd1ac4fcba94f46e8cba4eb2ce7319))
* **client:** add serialized callstack ([7a87445](https://github.com/justinearl/hero/commit/7a87445a5ea772769cd5cf2df5528e9653bd12a8))
* **client:** allow injectable scriptinstance ([09aa700](https://github.com/justinearl/hero/commit/09aa700c04dc008b34822b9af446339f46f70c20))
* convert unblocked to ulixee org ([6616ec9](https://github.com/justinearl/hero/commit/6616ec94186da360e70544c827294b95ecb9381f))
* **core:** convert all connections to server ([a27fafd](https://github.com/justinearl/hero/commit/a27fafd9a04e52f602a557f7304164c2308006c6))
* **core:** enable dynamic configuration of plugins ([86bacbf](https://github.com/justinearl/hero/commit/86bacbf07fda0c1ece54d11a3a59020e88e49bd0))
* **core:** refactor to accomodate ulixee/desktop ([be9ed0e](https://github.com/justinearl/hero/commit/be9ed0eb2ee905ea4683d814b9a5a694b94a3705))
* **core:** session registry ([fd10317](https://github.com/justinearl/hero/commit/fd10317a1219b1aefffd5b8162021a43c8ca6dc5))
* **core:** use local dir for page state ([d884e81](https://github.com/justinearl/hero/commit/d884e81448e7db9d6f8a1613f7cefe8c5449caed))
* **core:** waitForFileChooser ([cf3beb9](https://github.com/justinearl/hero/commit/cf3beb9b3d06dbd3548e5a23746641f5addbfade))
* **core:** waitForPaintingStable ([1955b79](https://github.com/justinearl/hero/commit/1955b791ce8a7cf20a679986e63885950efa6813))
* **emulators:** enable multi-engine support ([1e008c9](https://github.com/justinearl/hero/commit/1e008c9fe26c977ebf85c665d0891023342a58b5))
* flatten shared workspaces ([d53da16](https://github.com/justinearl/hero/commit/d53da165d649163dcb724225a2ea43ce88d7eacc))
* **hero:** automatic server port use ([0199338](https://github.com/justinearl/hero/commit/0199338b9cdad68c7e5acd036597bf8d3252c90c))
* **mitm:** determine alpn on proxy connect ([398735d](https://github.com/justinearl/hero/commit/398735d4dd8ab219c520da775e92f42ee9889544))
* **mitm:** support push streams ([1b2af06](https://github.com/justinearl/hero/commit/1b2af0655445929ac1f4fb8dcac011b9623a75d4))
* **mitm:** switch mitm to use authorization ([fade6e8](https://github.com/justinearl/hero/commit/fade6e81d58d947c03a7b54e37a887bbc0bba5a2))
* **mitm:** use shared mitm socket ([f80334b](https://github.com/justinearl/hero/commit/f80334b59f03f59dda63040b28146c51cff1825d))
* moved Handler to Runner and Core's http server to Server + no default instance is exported ([41954ff](https://github.com/justinearl/hero/commit/41954ff3a12cadb68bc9a065d54205474aaa8362))
* moved output from Hero to Databox ([95c3f9b](https://github.com/justinearl/hero/commit/95c3f9bfcff59361037ba3a1f4dda6b87d22f23e))
* **proxy:** configure proxy via client + socks5 ([880c938](https://github.com/justinearl/hero/commit/880c93803bebc78b835a8f2fb5133d633a315337))
* **puppet:** add puppet interfaces abstraction ([69bae38](https://github.com/justinearl/hero/commit/69bae38a03afaae3455de2a4928abd13031af662))
* **puppet:** import playwright tests ([e2b9bf5](https://github.com/justinearl/hero/commit/e2b9bf546af1ed899a01f460977e362b676c02e1))
* **puppet:** switch to chrome ([d064e53](https://github.com/justinearl/hero/commit/d064e53ace2107ac95348cf721c3cc35afe07efc))
* renamed SecretAgent to Hero ([e5f12a3](https://github.com/justinearl/hero/commit/e5f12a3ff2dd8926f87275a9f248cbeef5c4cfc9))
* **replay:** split session state by tab ([9367f2d](https://github.com/justinearl/hero/commit/9367f2d8796fda709bc8185374a5e07d4b6f78ab))
* **timetravel:** version 1 of PageStateGenerator ([cf590ab](https://github.com/justinearl/hero/commit/cf590aba510b4c5035e68b0cfa9972d9d1e2fcad))
* unify plugin structure ([6b9138d](https://github.com/justinearl/hero/commit/6b9138d890b6fb845af057fef4f390522614978f))
* updated to use latest commons version ([f9b145b](https://github.com/justinearl/hero/commit/f9b145b962ee28e2669afd1cefe3da7e1398f3f6))
* uses new @ulixee/commons/lib structure ([7ba3c73](https://github.com/justinearl/hero/commit/7ba3c73e40663f32d0001c51edce344f7ebd1e42))

# [2.0.0-alpha.34](https://github.com/ulixee/hero/compare/v2.0.0-alpha.33...v2.0.0-alpha.34) (2025-09-08)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.33](https://github.com/ulixee/hero/compare/v2.0.0-alpha.32...v2.0.0-alpha.33) (2025-05-29)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.32](https://github.com/ulixee/hero/compare/v2.0.0-alpha.31...v2.0.0-alpha.32) (2025-05-28)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.31](https://github.com/ulixee/hero/compare/v2.0.0-alpha.30...v2.0.0-alpha.31) (2024-12-07)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.30](https://github.com/ulixee/hero/compare/v2.0.0-alpha.29...v2.0.0-alpha.30) (2024-10-11)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.29](https://github.com/ulixee/platform/compare/v2.0.0-alpha.28...v2.0.0-alpha.29) (2024-07-16)

### Features

* **core:** enable dynamic configuration of plugins ([86bacbf](https://github.com/ulixee/platform/commit/86bacbf07fda0c1ece54d11a3a59020e88e49bd0))

# [2.0.0-alpha.28](https://github.com/ulixee/platform/compare/v2.0.0-alpha.27...v2.0.0-alpha.28) (2024-03-11)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.27](https://github.com/ulixee/platform/compare/v2.0.0-alpha.26...v2.0.0-alpha.27) (2024-03-01)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.26](https://github.com/ulixee/platform/compare/v2.0.0-alpha.25...v2.0.0-alpha.26) (2024-02-02)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.25](https://github.com/ulixee/platform/compare/v2.0.0-alpha.24...v2.0.0-alpha.25) (2023-09-28)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.24](https://github.com/ulixee/platform/compare/v2.0.0-alpha.23...v2.0.0-alpha.24) (2023-08-09)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.23](https://github.com/ulixee/platform/compare/v2.0.0-alpha.22...v2.0.0-alpha.23) (2023-07-07)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.22](https://github.com/ulixee/platform/compare/v2.0.0-alpha.21...v2.0.0-alpha.22) (2023-06-12)

### Features

* **core:** session registry ([fd10317](https://github.com/ulixee/platform/commit/fd10317a1219b1aefffd5b8162021a43c8ca6dc5))

# [2.0.0-alpha.21](https://github.com/ulixee/platform/compare/v2.0.0-alpha.20...v2.0.0-alpha.21) (2023-04-24)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.20](https://github.com/ulixee/platform/compare/v2.0.0-alpha.19...v2.0.0-alpha.20) (2023-04-19)

### Features

* **client:** allow injectable scriptinstance ([09aa700](https://github.com/ulixee/platform/commit/09aa700c04dc008b34822b9af446339f46f70c20))

# [2.0.0-alpha.19](https://github.com/ulixee/platform/compare/v2.0.0-alpha.18...v2.0.0-alpha.19) (2023-02-25)

### Features

* **core:** refactor to accomodate ulixee/desktop ([be9ed0e](https://github.com/ulixee/platform/commit/be9ed0eb2ee905ea4683d814b9a5a694b94a3705))

# [2.0.0-alpha.18](https://github.com/ulixee/platform/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2023-01-17)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.17](https://github.com/ulixee/platform/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2022-12-15)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.16](https://github.com/ulixee/platform/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2022-12-05)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.15](https://github.com/ulixee/platform/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2022-11-17)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.14](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2022-11-02)

### Features

* convert unblocked to ulixee org ([6616ec9](https://github.com/ulixee/ulixee/commit/6616ec94186da360e70544c827294b95ecb9381f))

# [2.0.0-alpha.13](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2022-10-31)

### Bug Fixes

* **client:** fix HeroReplay replaying a sessionid ([56da409](https://github.com/ulixee/ulixee/commit/56da409ad42dffd7b45333cd53811d6a8163e550))

# [2.0.0-alpha.12](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2022-10-03)

### Bug Fixes

* update client hints spec for hero meta ([0455bf9](https://github.com/ulixee/ulixee/commit/0455bf943e3203a72e12cc43b240874b4e9bd1b8))

# [2.0.0-alpha.11](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2022-08-31)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.10](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2022-08-16)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.9](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2022-07-26)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.8](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2022-07-13)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.7](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2022-06-28)

### Bug Fixes

* **core:** fix unblocked references ([edabadd](https://github.com/ulixee/ulixee/commit/edabadd08738875234afc9735e0ad81c31bc5c95))

# [2.0.0-alpha.6](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2022-06-10)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.5](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2022-06-10)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.4](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2022-06-09)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.3](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2022-05-19)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.2](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2022-05-17)

**Note:** Version bump only for package @ulixee/hero-testing

# [2.0.0-alpha.1](https://github.com/ulixee/ulixee/compare/v1.5.4...v2.0.0-alpha.1) (2022-05-16)

### Bug Fixes

* **puppet:** turn off final screenshot for cast ([0a9f124](https://github.com/ulixee/ulixee/commit/0a9f12469a6f7261ee46de69c8f6949c6c485e1c))

### Features

* **client:** add serialized callstack ([7a87445](https://github.com/ulixee/ulixee/commit/7a87445a5ea772769cd5cf2df5528e9653bd12a8))
* **core:** use local dir for page state ([d884e81](https://github.com/ulixee/ulixee/commit/d884e81448e7db9d6f8a1613f7cefe8c5449caed))
* **hero:** automatic server port use ([0199338](https://github.com/ulixee/ulixee/commit/0199338b9cdad68c7e5acd036597bf8d3252c90c))
* **timetravel:** version 1 of PageStateGenerator ([cf590ab](https://github.com/ulixee/ulixee/commit/cf590aba510b4c5035e68b0cfa9972d9d1e2fcad))
* unify plugin structure ([6b9138d](https://github.com/ulixee/ulixee/commit/6b9138d890b6fb845af057fef4f390522614978f))
