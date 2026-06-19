# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2026-06-19)

### Bug Fixes

* **client:** correctly catch some canceled promise ([1d5906f](https://github.com/justinearl/hero/commit/1d5906f5bff7e757bd084bb98883b56f3cf22bbe))
* **client:** fix close handling ([f413ea8](https://github.com/justinearl/hero/commit/f413ea8c66b0e07512a7b6fbd0d9857bebad1d7c))
* **client:** fix logging dependency error ([22900c4](https://github.com/justinearl/hero/commit/22900c49da47e8ce0d910c255d9b535527ce040d))
* **client:** fix reviving stack traces in typeson ([7a0e38b](https://github.com/justinearl/hero/commit/7a0e38b6e8efd30a2d70c0c3c73d8fc121e316a9))
* **client:** properly handle unhandled disconnect ([e3afedd](https://github.com/justinearl/hero/commit/e3afedd90f0c614dab8ed5a02ba40de013e24b1d))
* **client:** resource timeout + blank new tab ([4fdd378](https://github.com/justinearl/hero/commit/4fdd3789edf9c2a7290b4deb660aa2d7194ec9c8))
* **client:** translate errors when session n/a ([6c15793](https://github.com/justinearl/hero/commit/6c15793f67cadfcf7d62e270848fbef895e397af))
* **commons:** parse argv env files ([b8aed1e](https://github.com/justinearl/hero/commit/b8aed1e6030fae9ab582018020cef6572cc2beb4))
* **core/client:** export usable mjs/cjs ([ca149ef](https://github.com/justinearl/hero/commit/ca149efbfbdf03da0fda7d127348e5de6f2a4f8b))
* **core:** fix errors on goto bubbling up ([30d4208](https://github.com/justinearl/hero/commit/30d4208c079e171fd6e0640810a4812e0a9a3d59))
* **core:** flushing outside transactions ([5abd143](https://github.com/justinearl/hero/commit/5abd1439e875880c683f24e9b87fec0e4331b24c))
* **core:** full close down of on premature exit ([aa53e85](https://github.com/justinearl/hero/commit/aa53e85782a57da4d69f8750a5c3719c60683f5b))
* **core:** improve navigation tracking ([2e75570](https://github.com/justinearl/hero/commit/2e755704d182c960d7844a03be9874360dc11ba4))
* **core:** noscript messing up frozen tabs ([6c55805](https://github.com/justinearl/hero/commit/6c558056985bd8049940ad76543aa535f7790bbb))
* **core:** type serializer, fix null headers issue ([e4d832b](https://github.com/justinearl/hero/commit/e4d832b62278c67c59edb7bb6d0b2097a6b8669b))
* **core:** update attachedstate to nodepointer ([1bec22a](https://github.com/justinearl/hero/commit/1bec22a329b6da410fb7de0a36bcd6e19b23f902))
* **eslint:** add return types to client code ([c2e31cc](https://github.com/justinearl/hero/commit/c2e31ccba4974f2bda269e77e6df9b82a2695d4f))
* lint and puppet test chrome 80 ([0ce09ac](https://github.com/justinearl/hero/commit/0ce09ac71e3f9a9a802ba90f9c7aab9021f07e5c))
* **logger:** don’t use colors if disalbed in node ([c3af5a0](https://github.com/justinearl/hero/commit/c3af5a07984865bfa6f5278fe442bea80f00166f))
* **mitm:** bubble proxy errors properly to client ([b6a72f5](https://github.com/justinearl/hero/commit/b6a72f59ef8e7739654ab82b170aa0e15d38ebd0)), closes [#98](https://github.com/justinearl/hero/issues/98)
* **mitm:** change log level of mitm request errors ([da9f98f](https://github.com/justinearl/hero/commit/da9f98fe3df7feb79585b686ab9fe0474dea9e27))
* **mitm:** handle http2 push canceled errors ([f1fbe4d](https://github.com/justinearl/hero/commit/f1fbe4de5277c603af894b30a917157b39873b90))
* **mitm:** proper errors when mitm binary missing ([382669f](https://github.com/justinearl/hero/commit/382669fb2d86c86e010bf16ed3cdd0391d047f85))
* **mitm:** remove blocking actions ([4a75179](https://github.com/justinearl/hero/commit/4a75179bc0bd1081a489e3a83d1f1dc57e50990e))
* **mitm:** try/catch around mitm throw areas ([e58b7a2](https://github.com/justinearl/hero/commit/e58b7a2ba67ab6c5a435b83fa2b69b3ecc8f3465))
* navigation test hanging ([115418a](https://github.com/justinearl/hero/commit/115418aa7b9d73e9ee74051a26faac4d3bea1a9f))
* pool socket connections per origin ([0075f18](https://github.com/justinearl/hero/commit/0075f18a64a2761f0979c072e42958002664b2df))
* **puppet:** chrome 80 test flakiness ([9f16cd1](https://github.com/justinearl/hero/commit/9f16cd1993e0bd038f748b2b986bd69a311b11f6))
* **puppet:** fix chrome-88 ([f917b52](https://github.com/justinearl/hero/commit/f917b5237fd9010e041b68fa493a77bfd4d8fea0))
* **puppet:** incorrect reuse of executionContextId ([e5d8f8d](https://github.com/justinearl/hero/commit/e5d8f8d1e90c7cebefae51b570ddb743ea8f39fe))
* **puppet:** wait for loader before new tab ([d045701](https://github.com/justinearl/hero/commit/d045701d00f421b529b5aafd32e1e25a1a15da38))
* **replay:** autostart playback, include redirects ([d684884](https://github.com/justinearl/hero/commit/d6848846b56407cd7f32f6429fd9643e58ce6020))
* **replay:** fix assets in different data location ([082dcff](https://github.com/justinearl/hero/commit/082dcffea00c25ba72a39e9b4f3f405406657db4))

### Features

* added support for plugins ([0fda55d](https://github.com/justinearl/hero/commit/0fda55d7a57d300d765c462389e76da0e1fe0822))
* **client+core:** input/outputs ([d48a1de](https://github.com/justinearl/hero/commit/d48a1de1ae5f293fdb884ae23c2402cf4e14ee36))
* **client:** add ability to get agent metadata ([55df775](https://github.com/justinearl/hero/commit/55df775b3b9e78db99bc726ae54a683cc701a7e2))
* **client:** add sessionid/name to logs + errors ([7d88f35](https://github.com/justinearl/hero/commit/7d88f3555076647307dc1e9e6cea9b102033c756))
* **client:** built-in remote + handlers ([bfaa739](https://github.com/justinearl/hero/commit/bfaa739517a458db9dd1bd6374770840eb95b847))
* **client:** coreConnection as configuration ([ac284ca](https://github.com/justinearl/hero/commit/ac284cac3fa867a9623fd841edf96d04906e3072))
* **client:** coreHost & disconnecting errors ([aed9fc3](https://github.com/justinearl/hero/commit/aed9fc3f49996a661ab6b70e5446c9442649802a)), closes [#165](https://github.com/justinearl/hero/issues/165)
* **client:** expose frames ([44a6b12](https://github.com/justinearl/hero/commit/44a6b129fef6f541cffc24e8913fd76defcf3aef))
* **client:** getJsValue should return value ([84dcd65](https://github.com/justinearl/hero/commit/84dcd650fb6dc358904374e59965a72e7c3b2aa6))
* **commons:** extend typeserializer with array types ([6e23a45](https://github.com/justinearl/hero/commit/6e23a45e96468a155c077543c0c7ff9c7972711e))
* **commons:** typeSerializer support URL ([41a1d36](https://github.com/justinearl/hero/commit/41a1d36226479a1b8d28853a11f892527e609128))
* **core:** add getComputedStyles to tab ([0e3bccd](https://github.com/justinearl/hero/commit/0e3bccd9c27ac1e6b122238ca7292182c169ebe6))
* **core:** change new Date to Date.now ([8d9fe4f](https://github.com/justinearl/hero/commit/8d9fe4f4e83efa258d94d164192e95e994c24de3))
* **core:** compress dom changes ([ef7def9](https://github.com/justinearl/hero/commit/ef7def9fcd7c72ef56a6a334e68562348fdbf7a3))
* **core:** convert all connections to server ([a27fafd](https://github.com/justinearl/hero/commit/a27fafd9a04e52f602a557f7304164c2308006c6))
* **core:** events for closing headed ([1205c4e](https://github.com/justinearl/hero/commit/1205c4e6e341dfd964af678f989582aae3cdc845))
* **core:** keepalive and resume a session ([ca3e28a](https://github.com/justinearl/hero/commit/ca3e28a754e78a1be7ff86d74cd72af840e015ce))
* **core:** optimize string reuse in high traffic ([3c03c3a](https://github.com/justinearl/hero/commit/3c03c3aa1639a74a38160fb9cfd13882774fc70f))
* **core:** prefetch jsPaths from prior runs ([4f523bd](https://github.com/justinearl/hero/commit/4f523bdbafe18c19517831edd8d0b325dd023de4))
* **core:** timeouts for back/fwd/goto, add reload ([bae2a8e](https://github.com/justinearl/hero/commit/bae2a8eaf20b2a855c98986d5c2c9b5e11b004ec))
* **core:** tweak logging for not-really-errors ([bd5f9eb](https://github.com/justinearl/hero/commit/bd5f9ebf38eb58adc14542dc4e32737b0ad8ff9e))
* **core:** waitForFileChooser ([cf3beb9](https://github.com/justinearl/hero/commit/cf3beb9b3d06dbd3548e5a23746641f5addbfade))
* **core:** waitForLocation/Load takes a timeout ([02758c7](https://github.com/justinearl/hero/commit/02758c7fc1e5394db84f91aa8235c3364b6c0692))
* **emulators:** drive devtools from emulator ([d71b9cd](https://github.com/justinearl/hero/commit/d71b9cd734c3621e25ddb5bd53544d1b7dcba504))
* flatten shared workspaces ([d53da16](https://github.com/justinearl/hero/commit/d53da165d649163dcb724225a2ea43ce88d7eacc))
* import and shrink puppeteer ([b1816b8](https://github.com/justinearl/hero/commit/b1816b8f7b1a60edd456626e3c818e4ebe3c022f))
* **mitm:** determine alpn on proxy connect ([398735d](https://github.com/justinearl/hero/commit/398735d4dd8ab219c520da775e92f42ee9889544))
* **mitm:** dns over tls lookups ([8797847](https://github.com/justinearl/hero/commit/8797847fd5388ee6e4165c02390d45587799edbf))
* **mitm:** store ca/keys in network.db ([fd69f97](https://github.com/justinearl/hero/commit/fd69f97cee898720d5e5a5b30e0697b728c6e8d4))
* **mitm:** support push streams ([1b2af06](https://github.com/justinearl/hero/commit/1b2af0655445929ac1f4fb8dcac011b9623a75d4))
* **mitm:** use shared mitm socket ([f80334b](https://github.com/justinearl/hero/commit/f80334b59f03f59dda63040b28146c51cff1825d))
* moved commons into its own repo ([fdbfa4c](https://github.com/justinearl/hero/commit/fdbfa4cdad7fe977412c1660cda7075417a01e82))
* **proxy:** configure proxy via client + socks5 ([880c938](https://github.com/justinearl/hero/commit/880c93803bebc78b835a8f2fb5133d633a315337))
* **puppet:** add puppet interfaces abstraction ([69bae38](https://github.com/justinearl/hero/commit/69bae38a03afaae3455de2a4928abd13031af662))
* **puppet:** import playwright tests ([e2b9bf5](https://github.com/justinearl/hero/commit/e2b9bf546af1ed899a01f460977e362b676c02e1))
* **puppet:** switch to chrome ([d064e53](https://github.com/justinearl/hero/commit/d064e53ace2107ac95348cf721c3cc35afe07efc))
* renamed SecretAgent to Hero ([e5f12a3](https://github.com/justinearl/hero/commit/e5f12a3ff2dd8926f87275a9f248cbeef5c4cfc9))
* **replay:** add session logs, detect errors ([f1865c0](https://github.com/justinearl/hero/commit/f1865c0aef38f6722bbcdee0244288f0f6040c5a)), closes [#31](https://github.com/justinearl/hero/issues/31)
* **replay:** add support for iframe and shadows ([0978fd5](https://github.com/justinearl/hero/commit/0978fd55802ebf4285a48ef1ce0d208e2d21aeba))
* **replay:** convert api to use web sockets ([18c8008](https://github.com/justinearl/hero/commit/18c80087d22f3ee95ee2eb5853b422219da6ceb1))
* **replay:** show frozen tabs ([d2eff14](https://github.com/justinearl/hero/commit/d2eff14ac12b06dfb1325a41f542c5ae9714a471))
* **replay:** spawned child tabs ([8ae0d75](https://github.com/justinearl/hero/commit/8ae0d754a8e263a6cae20815338532da84906a7b))
* **replay:** split session state by tab ([9367f2d](https://github.com/justinearl/hero/commit/9367f2d8796fda709bc8185374a5e07d4b6f78ab))
* **replay:** stream data and simplify tick tracker ([91c350c](https://github.com/justinearl/hero/commit/91c350cdbf9f99c19754fbb5598afe62a13fb497))
* **session-state:** record devtools logs ([784da7f](https://github.com/justinearl/hero/commit/784da7f7728671485bce55b877fa350981c88ea2))
* **session-state:** record mitm resource states ([08976df](https://github.com/justinearl/hero/commit/08976dfa95f3b2629aedaca3002cc07b97e5bd2e))
* **session:** track frame dom node ids ([a41d678](https://github.com/justinearl/hero/commit/a41d6786d6fd10a386d9c2739713a26b6063b127))

# [2.0.0-alpha.34](https://github.com/ulixee/hero/compare/v2.0.0-alpha.33...v2.0.0-alpha.34) (2025-09-08)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.33](https://github.com/ulixee/hero/compare/v2.0.0-alpha.32...v2.0.0-alpha.33) (2025-05-29)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.32](https://github.com/ulixee/hero/compare/v2.0.0-alpha.31...v2.0.0-alpha.32) (2025-05-28)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.31](https://github.com/ulixee/hero/compare/v2.0.0-alpha.30...v2.0.0-alpha.31) (2024-12-07)

### Bug Fixes

* **commons:** parse argv env files ([b8aed1e](https://github.com/ulixee/hero/commit/b8aed1e6030fae9ab582018020cef6572cc2beb4))

### Features

* **commons:** extend typeserializer with array types ([6e23a45](https://github.com/ulixee/hero/commit/6e23a45e96468a155c077543c0c7ff9c7972711e))

# [2.0.0-alpha.30](https://github.com/ulixee/hero/compare/v2.0.0-alpha.29...v2.0.0-alpha.30) (2024-10-11)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.29](https://github.com/ulixee/shared/compare/v2.0.0-alpha.28...v2.0.0-alpha.29) (2024-07-16)

### Bug Fixes

* **commons:** fix serializing uint8array ([d5b8c62](https://github.com/ulixee/shared/commit/d5b8c623c8ae7478b77cbc21ba699a937752d9b9))
* **commons:** handle no json file ([28c6243](https://github.com/ulixee/shared/commit/28c6243d844928c65d050612e486382480f8ced2))
* use this prototype ([#22](https://github.com/ulixee/shared/issues/22)) ([ff9a5ce](https://github.com/ulixee/shared/commit/ff9a5ced79e4fae570cbd74d137b8edb44f74130))

# [2.0.0-alpha.28](https://github.com/ulixee/shared/compare/v2.0.0-alpha.27...v2.0.0-alpha.28) (2024-03-11)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.27](https://github.com/ulixee/shared/compare/v2.0.0-alpha.26...v2.0.0-alpha.27) (2024-03-01)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.26](https://github.com/ulixee/shared/compare/v2.0.0-alpha.25...v2.0.0-alpha.26) (2024-02-02)

### Features

* single instance of shared logger ([251701f](https://github.com/ulixee/shared/commit/251701f834dbf63099b061df88209690f6a65f81))

# [2.0.0-alpha.25](https://github.com/ulixee/shared/compare/v2.0.0-alpha.24...v2.0.0-alpha.25) (2023-09-28)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.24](https://github.com/ulixee/shared/compare/v2.0.0-alpha.23...v2.0.0-alpha.24) (2023-08-09)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.23](https://github.com/ulixee/shared/compare/v2.0.0-alpha.22...v2.0.0-alpha.23) (2023-07-07)

### Features

* **commons:** add async iterator last function ([f4dd911](https://github.com/ulixee/shared/commit/f4dd9113341e37ce193455e5a55b30f99436daa9))

# [2.0.0-alpha.22](https://github.com/ulixee/shared/compare/v2.0.0-alpha.21...v2.0.0-alpha.22) (2023-06-12)

### Bug Fixes

* **commons:** change default settings to data dir ([c6d5a34](https://github.com/ulixee/shared/commit/c6d5a3412e6876448e17734013ee76222d4c4e43))
* **commons:** don’t retranslate source maps ([7d7ddf3](https://github.com/ulixee/shared/commit/7d7ddf3584e7d6ca48a66530ad2c94e15b366ab7))
* **commons:** handle relative source map content ([2fa4cbc](https://github.com/ulixee/shared/commit/2fa4cbc6304c7547f98d0d64c68d62c827ddc921))
* **commons:** windows relative urls not working ([d575fce](https://github.com/ulixee/shared/commit/d575fcef6b9cf953f562811d1adc7f7e323c3993))
* souce map tests ([675602b](https://github.com/ulixee/shared/commit/675602b9c24b04a002ecb1939cee08276288799e))

### Features

* **commons:** add priority to queue; lru cache ([f25caad](https://github.com/ulixee/shared/commit/f25caad300260aee6724f6daecc3dec110c28cce))
* **commons:** add shutdown handlers to always run ([a6c6609](https://github.com/ulixee/shared/commit/a6c660964939cdbc65951f2857e13c4405256242))
* **commons:** add timestamps to logging ([a953f70](https://github.com/ulixee/shared/commit/a953f70c8d37e7b41d0d885d65ab93a23d7830e0))
* **commons:** buffer xor, toBigInt ([3d3c18a](https://github.com/ulixee/shared/commit/3d3c18af6cdb0dffa413b15c440a588b768f1ff2))
* **commons:** sql inserts with named keys ([21b1ac8](https://github.com/ulixee/shared/commit/21b1ac86f4e071f00127c7277eb653cc1ec63553))

# [2.0.0-alpha.21](https://github.com/ulixee/shared/compare/v2.0.0-alpha.20...v2.0.0-alpha.21) (2023-04-24)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.20](https://github.com/ulixee/shared/compare/v2.0.0-alpha.19...v2.0.0-alpha.20) (2023-04-19)

### Bug Fixes

* **commons:** always handle emitter errors ([1c5f60f](https://github.com/ulixee/shared/commit/1c5f60f21c4c174c99c10e9e9d2edb07b06c28a0))
* **commons:** global instance bug ([b895c0e](https://github.com/ulixee/shared/commit/b895c0e14602d92f42c559c6130d8a66b9b0770e))
* **commons:** global instance of check ([f51fed1](https://github.com/ulixee/shared/commit/f51fed1f93e4bfb2c603a0bced79e249ff76d003))
* **crypto:** disallow overwriting identity/address ([c14a185](https://github.com/ulixee/shared/commit/c14a1857c80ca800198d231236d5fcb6223026c9))
* tests + lint ([66e49ae](https://github.com/ulixee/shared/commit/66e49ae931b54fd8577711562c56e2494d8149bb))

# [2.0.0-alpha.19](https://github.com/ulixee/shared/compare/v2.0.0-alpha.18...v2.0.0-alpha.19) (2023-02-25)

### Bug Fixes

* **commons:** allow clearing sourcemap paths ([4d14167](https://github.com/ulixee/shared/commit/4d141673bd34e22d556539e6eb7bf8e63d9c9c3e))
* **commons:** no unhandled timeouts ([5428d4a](https://github.com/ulixee/shared/commit/5428d4a2856c7c86dd4737522280a05b8f5d8c8e))
* **commons:** remove memory for once events ([e9b70ac](https://github.com/ulixee/shared/commit/e9b70ac08ab94c46bd00baa43d56a0b1820f78b1))
* **commons:** serialize objects named error too ([a915057](https://github.com/ulixee/shared/commit/a9150577b51572a25d3f3ca8144680ff87bf8b0b))
* **commons:** typo ([38eba49](https://github.com/ulixee/shared/commit/38eba496ada28165dc5e99acc48b0ec81040569c))
* **commons:** wait to register hosts listener ([02fcddb](https://github.com/ulixee/shared/commit/02fcddbf508c7392143c536707721a611c8b0205))
* **commons:** watch not available on linux ([cbd982b](https://github.com/ulixee/shared/commit/cbd982bec27c6f9b9c794ff99d01ee50c553ff59))
* **net:** default to ws transport over actual wire ([cbc0adc](https://github.com/ulixee/shared/commit/cbc0adcf0c899bfdc4d24ca5beccae7daf24869e))

### Features

* **commons:** host file monitoring ([01d1e53](https://github.com/ulixee/shared/commit/01d1e53b5087b2b80f96a0bfc504323172adbb81))
* **commons:** read embedded sourcemap content ([a20db0c](https://github.com/ulixee/shared/commit/a20db0c3c400939ef403a4c7c779f4a49811c92f))
* **net:** emit request, response and event ([9ed0201](https://github.com/ulixee/shared/commit/9ed02013579ee3bc206182cfce85def3c0271034))

# [2.0.0-alpha.18](https://github.com/ulixee/shared/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2023-01-17)

### Bug Fixes

* don’t bindFunction for classes ([cdf1904](https://github.com/ulixee/shared/commit/cdf19040e090c44a6f713457545c65a549879da8))

### Features

* add counter to resolvable for debugging ([8ea0232](https://github.com/ulixee/shared/commit/8ea0232bc46c44d9db68918673c542ef90ec5415))
* catch unhandled rejections for closes ([1dd47a9](https://github.com/ulixee/shared/commit/1dd47a97aeec413475a853b5b4f259bce0e3a3de))
* databox stream and output apis ([1901482](https://github.com/ulixee/shared/commit/1901482b58d8e8d82497841d7a781efa5ee520cb))

# [2.0.0-alpha.17](https://github.com/ulixee/shared/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2022-12-15)

### Features

* micronote apis conversion to hold/settle ([c03c6fd](https://github.com/ulixee/shared/commit/c03c6fd8c7d17c29a8347aaba7413920e859c556))

# [2.0.0-alpha.16](https://github.com/ulixee/shared/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2022-12-05)

### Features

* allow manual shutdown ([41c9ebb](https://github.com/ulixee/shared/commit/41c9ebbd8b4b255502ed957927f0db2c9ca5c366))

# [2.0.0-alpha.15](https://github.com/ulixee/shared/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2022-11-17)

### Features

* gift card api v2 to support redemption key ([b2f11f4](https://github.com/ulixee/shared/commit/b2f11f44a784adf8dd208db9683c99369f33f98c))

# [2.0.0-alpha.14](https://github.com/ulixee/shared/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2022-11-02)

### Features

* change logs to support removal of ubk ([63a9d64](https://github.com/ulixee/shared/commit/63a9d6404ddcd0a042a6bc439ec07de63a2edfde))

# [2.0.0-alpha.13](https://github.com/ulixee/shared/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2022-10-31)

### Bug Fixes

* **commons:** don’t convert env bools if null ([c4b4456](https://github.com/ulixee/shared/commit/c4b4456c550513f7620388f1e08af1f8449f4f8b))
* rename server config to hosts ([70d4e66](https://github.com/ulixee/shared/commit/70d4e661c1c2a964ffe72b79635cfa40bf12b2c6))

### Features

* ability to generate schema interface strings ([b1be5c5](https://github.com/ulixee/shared/commit/b1be5c585c19a2d8c101812d8ae5d7b08be9dc0e))

# [2.0.0-alpha.12](https://github.com/ulixee/shared/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2022-10-03)

### Bug Fixes

* **commons:** add env bool ([3018132](https://github.com/ulixee/shared/commit/301813222d3da2b7429668e972d70e093c0056c0))
* **commons:** typeserializer not deep on map ([1f01a5c](https://github.com/ulixee/shared/commit/1f01a5c04d3c8318f44b0a5ac8509247313c7153))
* only log errors with values; parse env paths ([2e027fe](https://github.com/ulixee/shared/commit/2e027fe9fdb7e193b0ee432543d4216e00149fc8))

# [2.0.0-alpha.11](https://github.com/ulixee/shared/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2022-08-31)

### Features

* **commons:** env utils + timed cache ([8583846](https://github.com/ulixee/shared/commit/8583846f891cc1f93c079c8f6e3b1868ba7fcb5e))

# [2.0.0-alpha.10](https://github.com/ulixee/shared/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2022-08-16)

**Note:** Version bump only for package @ulixee/commons

# [2.0.0-alpha.9](https://github.com/ulixee/shared/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2022-08-16)

### Features

* add port in use fn ([b8c1a10](https://github.com/ulixee/shared/commit/b8c1a10c6da91a303d284e0e4c0723bc9f5dcf17))
* **net:** add remoteId to transports for logs ([1cbc117](https://github.com/ulixee/shared/commit/1cbc117230644fd1e8dc3ba14b7bf01cfdb3142d))
* **net:** don’t throw disconnected if launch ([66176c7](https://github.com/ulixee/shared/commit/66176c7c4050028749d26a9aa63dd46b0d96d3f1))
* specification, crypto projects ([fa61e3d](https://github.com/ulixee/shared/commit/fa61e3d221dacc3c1509309ebbfc7a05cf43923c))

# [2.0.0-alpha.8](https://github.com/ulixee/commons/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2022-07-14)

**Note:** Version bump only for package @ulixee/commons

# 2.0.0-alpha.7 (2022-07-13)

**Note:** Version bump only for package @ulixee/commons
