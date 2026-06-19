# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2026-06-19)

### Bug Fixes

* a number of tweaks to get client extender plugins working ([bc89574](https://github.com/justinearl/hero/commit/bc8957491b4b3180b67796ae9eb2487250a839df))
* allow setting SA_SHOW_REPLAY in a script ([18d63d6](https://github.com/justinearl/hero/commit/18d63d640dc69e83512908bbdec1263aba87d953))
* broken Omit type ([c495544](https://github.com/justinearl/hero/commit/c495544a5c584c4e52f9ca53fd647326b05ed8fc))
* change shared package names ([d6181a7](https://github.com/justinearl/hero/commit/d6181a75a0387797177eb9aa2f71553bb7d31432))
* client printing incorrect properties ([04b67a7](https://github.com/justinearl/hero/commit/04b67a7bc37f6f9e2e76ba897f00dce611fa03a8)), closes [#152](https://github.com/justinearl/hero/issues/152)
* **client:** add key to detached tab ([5c9ed99](https://github.com/justinearl/hero/commit/5c9ed998d370d407bc45d47fb6af3528cf6bba05))
* **client:** adjust return error pattern to throw ([884e87d](https://github.com/justinearl/hero/commit/884e87db16a5706dc50416e3df0defa67f0606e2))
* **client:** allow waiting on resources ([d3414a8](https://github.com/justinearl/hero/commit/d3414a8f82b3c31c012953bf739d493076f0a759))
* **client:** awaitedDom forEach ([105f535](https://github.com/justinearl/hero/commit/105f535cbfb8a0aa1cbfe34218eb638f89d83cfc))
* **client:** before disconnect bug ([fe8ac97](https://github.com/justinearl/hero/commit/fe8ac97ad848e58df4565939de681f0948153c37))
* **client:** client hung on disconnect ([7d5d432](https://github.com/justinearl/hero/commit/7d5d432c9ff01a3b009fb01c489ae44cbc8a709a))
* **client:** convention of options for args ([2e94c4e](https://github.com/justinearl/hero/commit/2e94c4e03e2b4dc1c570ac23f75c78406e00e2cb))
* **client:** correctly catch some canceled promise ([1d5906f](https://github.com/justinearl/hero/commit/1d5906f5bff7e757bd084bb98883b56f3cf22bbe))
* **client:** detach not returning elements ([34a4340](https://github.com/justinearl/hero/commit/34a4340bfc4c8ef55430481caa7e2033e3019e4e))
* **client:** disable tests global config overwrite ([7762be3](https://github.com/justinearl/hero/commit/7762be32766880e4564f7196b8d4a74ecfe5992f))
* **client:** disconnect connection on process exit ([6124344](https://github.com/justinearl/hero/commit/6124344911b4a067f7fff9a71085c531f67f7b6d))
* **client:** disconnect connections on shutdown ([648f8db](https://github.com/justinearl/hero/commit/648f8db3a832833d61978502c75010f6b107addf))
* **client:** don’t shutdown on rejected promises ([86a331b](https://github.com/justinearl/hero/commit/86a331bede88daca8b17c079f23910ff776fb4c4))
* **client:** error handling for session connect ([82e58b8](https://github.com/justinearl/hero/commit/82e58b826908d7e14d21f58673b1eb0044b4b9a2))
* **client:** explicit mjs exports ([d3e4525](https://github.com/justinearl/hero/commit/d3e4525ee8fb0430c4073791efde9741e01d9f9d))
* **client:** export script instance ([62803e5](https://github.com/justinearl/hero/commit/62803e53d5ab153f3e933c26666733c59f2d4af3))
* **client:** fix close handling ([f413ea8](https://github.com/justinearl/hero/commit/f413ea8c66b0e07512a7b6fbd0d9857bebad1d7c))
* **client:** fix domExtender interface ([e74b2b3](https://github.com/justinearl/hero/commit/e74b2b3c7032bdbf0c7458b23caab2ab5c844286))
* **client:** fix HeroReplay replaying a sessionid ([56da409](https://github.com/justinearl/hero/commit/56da409ad42dffd7b45333cd53811d6a8163e550))
* **client:** fix logging dependency error ([22900c4](https://github.com/justinearl/hero/commit/22900c49da47e8ce0d910c255d9b535527ce040d))
* **client:** fix reviving stack traces in typeson ([7a0e38b](https://github.com/justinearl/hero/commit/7a0e38b6e8efd30a2d70c0c3c73d8fc121e316a9))
* **client:** hero connection failing on getter ([7d2faa5](https://github.com/justinearl/hero/commit/7d2faa5530a41152321307b3727425ef31175dc4))
* **client:** if no awaited event target, return ([920f843](https://github.com/justinearl/hero/commit/920f843f8a0a915f2d4ce49fc62440961af9d446))
* **client:** lint issues ([cc90f4f](https://github.com/justinearl/hero/commit/cc90f4fe3ef7fed8d48f5269842214ddff3ead5c))
* **client:** no waitFor in waitForState ([e22ccbe](https://github.com/justinearl/hero/commit/e22ccbe39265e13df51589716745d9ee7fbfd502))
* **client:** properly handle unhandled disconnect ([e3afedd](https://github.com/justinearl/hero/commit/e3afedd90f0c614dab8ed5a02ba40de013e24b1d))
* **client:** reload should return a resource ([72c87a1](https://github.com/justinearl/hero/commit/72c87a1b851d9060af4636987864dfcd65eb4a74))
* **client:** remove ability to specify upload path ([5a6537a](https://github.com/justinearl/hero/commit/5a6537a5603d1715c727b22a3bfc8b59190d33ee))
* **client:** remove page state id from path ([c7ef61e](https://github.com/justinearl/hero/commit/c7ef61efb725003081ad8387e2fc8c3e8122b107))
* **client:** resource timeout + blank new tab ([4fdd378](https://github.com/justinearl/hero/commit/4fdd3789edf9c2a7290b4deb660aa2d7194ec9c8))
* **client:** second tab domState not working ([3daaa9d](https://github.com/justinearl/hero/commit/3daaa9daaaefc7f2b0872b0c5ff74f4c481a93b0))
* **client:** tests broken ([f3c60c7](https://github.com/justinearl/hero/commit/f3c60c73c5eaf7076c3bb51c434040d45538eccb))
* **client:** timetravel fixes for dom state ([4a7221a](https://github.com/justinearl/hero/commit/4a7221ab513910e96c24028c5e36cc9bdee39293))
* **client:** translate errors when session n/a ([6c15793](https://github.com/justinearl/hero/commit/6c15793f67cadfcf7d62e270848fbef895e397af))
* **client:** wait for command flush ([d87535f](https://github.com/justinearl/hero/commit/d87535ffc4a3fdfda9c601a581af4b7fa92dfd83))
* **client:** waitForState not capturing err stack ([338f0aa](https://github.com/justinearl/hero/commit/338f0aaaecd6c38568fac366e3873dc25ccec45e))
* converted arrow functions to allow this inside prototype methods ([6ff62f4](https://github.com/justinearl/hero/commit/6ff62f41a57a5a40b7b29a5d9c10ffc2e40a27a2))
* **core/client:** export usable mjs/cjs ([ca149ef](https://github.com/justinearl/hero/commit/ca149efbfbdf03da0fda7d127348e5de6f2a4f8b))
* **core:** allow customizing waitForVisible ([1982f52](https://github.com/justinearl/hero/commit/1982f52e16bca39b4ab4179e9970a190e4340652))
* **core:** allow retrieving datasets ([582ed16](https://github.com/justinearl/hero/commit/582ed16fd07c09346afbbcd7f9e3d5e9e375aeb8)), closes [#213](https://github.com/justinearl/hero/issues/213)
* **core:** cleanup detached dom jspath tracking ([c427c21](https://github.com/justinearl/hero/commit/c427c210b00df84bf3b00fd43905ce494769d339))
* **core:** convert dates to numbers ([da17efe](https://github.com/justinearl/hero/commit/da17efecaa8301070ed3c98d8d4d423d44d50f74))
* **core:** core should autoclose if not started ([8d46a77](https://github.com/justinearl/hero/commit/8d46a775573733aa53cef1723fb71d60485fae9f)), closes [#41](https://github.com/justinearl/hero/issues/41)
* **core:** default waitForResource from last cmd ([a0b369e](https://github.com/justinearl/hero/commit/a0b369e40f70e542f226157571bb92bc409fd811))
* **core:** dom state event handler timing issue ([79ce797](https://github.com/justinearl/hero/commit/79ce7979998225e656a3234e711256d98e923fa0))
* **core:** don’t record recordOutput as command ([e7145d9](https://github.com/justinearl/hero/commit/e7145d950184466436d368818cf1c4d14c66f857))
* **core:** dont close client on promise rejections ([37f1169](https://github.com/justinearl/hero/commit/37f11690131c4bf08e481c803cdb3fba68c7985f))
* **core:** exports not working <= node 14.12 ([d793601](https://github.com/justinearl/hero/commit/d793601a052c243a541cf0331c79d00bc1332d1e))
* **core:** fix errors on goto bubbling up ([30d4208](https://github.com/justinearl/hero/commit/30d4208c079e171fd6e0640810a4812e0a9a3d59))
* **core:** fix event listener warnings ([df0e824](https://github.com/justinearl/hero/commit/df0e824fcf85b1545162947b8aee697b12e69b67))
* **core:** fix interact with elements in iframes ([c0c7a6e](https://github.com/justinearl/hero/commit/c0c7a6e0b93fddf418edf1298bb2d1419ebd65ed))
* **core:** fix profile restore ([bd86f48](https://github.com/justinearl/hero/commit/bd86f48889448ba42b5331b0502af2f9ad9dc94f))
* **core:** fix unblocked references ([edabadd](https://github.com/justinearl/hero/commit/edabadd08738875234afc9735e0ad81c31bc5c95))
* **core:** flaky tests, fix interact with string ([0d708dd](https://github.com/justinearl/hero/commit/0d708ddfaddd3a03c9043cbc3d952836bc6e3350))
* **core:** flushing outside transactions ([5abd143](https://github.com/justinearl/hero/commit/5abd1439e875880c683f24e9b87fec0e4331b24c))
* **core:** full close down of on premature exit ([aa53e85](https://github.com/justinearl/hero/commit/aa53e85782a57da4d69f8750a5c3719c60683f5b))
* **core:** handle detached when elements not there ([ad11e65](https://github.com/justinearl/hero/commit/ad11e65a143980d8793a52e7f96054a43bb62ed8))
* **core:** interaction command highlights ([b5e541f](https://github.com/justinearl/hero/commit/b5e541fb527f01ddc49f3e9c82c69034bc94d777))
* **core:** lint issues ([5bb2a92](https://github.com/justinearl/hero/commit/5bb2a925e6c3b47ca1d14342c6062642b55f9f01))
* **core:** load fragments from other session ([8145a01](https://github.com/justinearl/hero/commit/8145a0125a826a413ae23f0112534ed49c9b4afc))
* **core:** make collected resources synchronous ([6439c6d](https://github.com/justinearl/hero/commit/6439c6d11e0ee2990de7e2ad48058382a3f30995))
* **core:** only add wal mode if not readonly db ([f74ecc4](https://github.com/justinearl/hero/commit/f74ecc4ffc20d126ed5f379b2d221b9352fdf71b))
* **core:** sinceCommandId validation ([fa61cc0](https://github.com/justinearl/hero/commit/fa61cc0bbea0ea4e26946adf40fc9066aaf7bed1))
* **core:** subdomain cookies not being removed ([fad14db](https://github.com/justinearl/hero/commit/fad14db468a3c7354e7e5f865fa3c62bf699eac0))
* **core:** timeline fixes, nanoid ([59dbd0d](https://github.com/justinearl/hero/commit/59dbd0d1f55065fa60525796ac2f60f19e07706b))
* **core:** update attachedstate to nodepointer ([1bec22a](https://github.com/justinearl/hero/commit/1bec22a329b6da410fb7de0a36bcd6e19b23f902))
* **core:** wait for location change on new tab ([0c70d6e](https://github.com/justinearl/hero/commit/0c70d6e7553025222b9fe4139407be4d69ee20b9))
* **deps:** peg awaited dom version ([3e6ffaf](https://github.com/justinearl/hero/commit/3e6ffaf52cdf2933a5608417ee7178ed36512aa8))
* don’t double call onHero ([3ae1326](https://github.com/justinearl/hero/commit/3ae13260baf6b1af8eb34f7899ae066b2f0f4474))
* ejs modules not being copied to dist ([606102e](https://github.com/justinearl/hero/commit/606102e1a671b9a3dbab16b4411af8499aed3820))
* emitted Hero.on new events were not typed correctly ([b2de709](https://github.com/justinearl/hero/commit/b2de709eed272464a0b96d594e1b292087dd40e3))
* empty null rejection on early hero terminate ([6159a79](https://github.com/justinearl/hero/commit/6159a7904c649c1cdb152004d96cd0baef96ff74))
* emulators were failing some double-agent tests ([5ae4f55](https://github.com/justinearl/hero/commit/5ae4f5507662ed91d19086d9dbab192e50a8f5c5))
* eslint errors, tests hanging ([e413531](https://github.com/justinearl/hero/commit/e4135311adc2a7841bbe1ec7d0cbe7c8f339468a))
* **eslint:** add return types to client code ([c2e31cc](https://github.com/justinearl/hero/commit/c2e31ccba4974f2bda269e77e6df9b82a2695d4f))
* expose connections for test ([59433ea](https://github.com/justinearl/hero/commit/59433eadbb0d0f598cd3274c2b8d8c3fdf804119))
* fixed lint issues + moved Core code back into fullstack/index.ts ([5ba28d9](https://github.com/justinearl/hero/commit/5ba28d9b2109dd302cb9b0e02f63585efa671e84))
* fixed paths ([6a28d80](https://github.com/justinearl/hero/commit/6a28d8069111356e0b63d23003187ecd08a365b8))
* **hero:** cleanup changes to global config ([3e37b93](https://github.com/justinearl/hero/commit/3e37b931ad2117505ec73fc173034e9e4c2e70c2))
* **hero:** close cli prompt on disconnect ([3da1631](https://github.com/justinearl/hero/commit/3da16319e02638a47ef5d4b4f8ea4e75f85f442d))
* implemented Blake's fixes ([64d33fc](https://github.com/justinearl/hero/commit/64d33fc57d1b22067de663ad0261b0de51c225a4))
* improve message when hosts w wrong version ([3f30733](https://github.com/justinearl/hero/commit/3f307339af77647d3192dda0ed7304d8dc8dc418))
* **interaction:** cancel mouse clicks on mousedown ([afd1964](https://github.com/justinearl/hero/commit/afd19649c6d3c913b99cc0fa9a21e1c954f4ffbc))
* lint ([5d98583](https://github.com/justinearl/hero/commit/5d9858327959ba5aae7f292d5a61851ce3be9971))
* lint issue ([5614afb](https://github.com/justinearl/hero/commit/5614afbb0cdc0099d0c053cd19fc2bb091a040fc))
* log devtools events ([e39575b](https://github.com/justinearl/hero/commit/e39575bb85a75469e7934c78720dcc951995595d))
* **logger:** don’t use colors if disalbed in node ([c3af5a0](https://github.com/justinearl/hero/commit/c3af5a07984865bfa6f5278fe442bea80f00166f))
* **mitm:** bubble proxy errors properly to client ([b6a72f5](https://github.com/justinearl/hero/commit/b6a72f59ef8e7739654ab82b170aa0e15d38ebd0)), closes [#98](https://github.com/justinearl/hero/issues/98)
* **mitm:** fix install script, reuse same h2 conn ([ebb0693](https://github.com/justinearl/hero/commit/ebb06933879575c2bbaf311a50ac0e3ecc2ae843))
* **mitm:** fix ipc timeouts ([851be03](https://github.com/justinearl/hero/commit/851be03be65fb0718b8af8230ab76360a7f006ef))
* **mitm:** read failed/cached browser resources ([150db8b](https://github.com/justinearl/hero/commit/150db8b3785705afdc54b915684ae0c828a5ecf8))
* moved awaited-dom to a devDependency in fullstack ([ecdb274](https://github.com/justinearl/hero/commit/ecdb274b81c298f69d50c36a5d15c24c162b43a8))
* **net:** reconnect websockets if disconnected ([922af43](https://github.com/justinearl/hero/commit/922af4345ea64fec45e377f11c8b084a3d5bb218))
* **plugins:** fix order of plugin paths loaded ([320dc60](https://github.com/justinearl/hero/commit/320dc60177d4924c7d46bb53227f4773dea890ec))
* **plugins:** revise plugin extensions ([2bf7ae4](https://github.com/justinearl/hero/commit/2bf7ae47602bfebc67a6a5d1f30c2589953aa91b))
* **puppet:** fix chrome-88 ([f917b52](https://github.com/justinearl/hero/commit/f917b5237fd9010e041b68fa493a77bfd4d8fea0))
* **puppet:** incorrect reuse of executionContextId ([e5d8f8d](https://github.com/justinearl/hero/commit/e5d8f8d1e90c7cebefae51b570ddb743ea8f39fe))
* **puppet:** turn off final screenshot for cast ([0a9f124](https://github.com/justinearl/hero/commit/0a9f12469a6f7261ee46de69c8f6949c6c485e1c))
* removed imports that weren't being used ([f7808f2](https://github.com/justinearl/hero/commit/f7808f236ac7f3bb1f94ada3bdf556c8b6ef5c68))
* **replay:** bug with monorepo replay versions ([05aa786](https://github.com/justinearl/hero/commit/05aa786527d0b65d7097cbba623633294c615627))
* **replay:** cover last tick on playbar ([baf12e7](https://github.com/justinearl/hero/commit/baf12e795fade634e60c64a342ea339ac6e8aa5c))
* **replay:** fix assets in different data location ([082dcff](https://github.com/justinearl/hero/commit/082dcffea00c25ba72a39e9b4f3f405406657db4))
* **replay:** fix rendering doctype + svg ([ac36c79](https://github.com/justinearl/hero/commit/ac36c791c9d3611874900c65e8180b7daa1ed232))
* **replay:** fix replay launch in new setup on win ([add1b97](https://github.com/justinearl/hero/commit/add1b97084d9d83f0cdad77362a238aeef92cf68))
* **replay:** multiple sessions showing incorrectly ([20ba30c](https://github.com/justinearl/hero/commit/20ba30caebcef42de65dee18e6b82d92c7193d9c))
* **replay:** record close date when errors occcur ([2ce94dd](https://github.com/justinearl/hero/commit/2ce94dd694bba172028e8b7b00f0b3e0df0e0163)), closes [#31](https://github.com/justinearl/hero/issues/31)
* reversed the reorg from two days ago ([aa5fddd](https://github.com/justinearl/hero/commit/aa5fddddbb66645bef9f6ab1b2d469bc9501f892))
* **session-state:** Improve page recorder perf ([14f78b9](https://github.com/justinearl/hero/commit/14f78b9ede550ded32594dc0a773cc880bf02783)), closes [#8](https://github.com/justinearl/hero/issues/8)
* singularized ResourceType and KeyboardKey ([cfe39b3](https://github.com/justinearl/hero/commit/cfe39b353cab5bcdbe66eda6ee3b7cc6437e46c4))
* the doneFn in waitForResource should support async ([7159928](https://github.com/justinearl/hero/commit/71599287ac2352d6df2690f696fee3f0c9476a3d))
* the Hero.once method should only emit once ([105253c](https://github.com/justinearl/hero/commit/105253cda8110b8758d5760df512ac4718dddb6f))
* **timetravel:** fix timetravel back ([7435a49](https://github.com/justinearl/hero/commit/7435a4962945a8af6c4db759e9980418a6c3f463))
* **timetravel:** split recording out of timeline ([671e0e9](https://github.com/justinearl/hero/commit/671e0e91089691e483f28eb9141b21a4605f840f))
* **timetravel:** unidentified frames break replay ([708e2dd](https://github.com/justinearl/hero/commit/708e2ddf75588a92366bfeb54cb7e2e6caa4b387))
* update awaited-dom to fix ts issue ([b98a567](https://github.com/justinearl/hero/commit/b98a5676df634947ec93e100556ecc4af6cd7890)), closes [#181](https://github.com/justinearl/hero/issues/181)
* update client hints spec for hero meta ([0455bf9](https://github.com/justinearl/hero/commit/0455bf943e3203a72e12cc43b240874b4e9bd1b8))
* update command for server start ([6a422ec](https://github.com/justinearl/hero/commit/6a422ec1fe6583ac247b417d84aeb27831076942))
* use os tmp directory ([e1f5a2b](https://github.com/justinearl/hero/commit/e1f5a2b7e63470b626ed906170b5c0337f5e0c43))
* **user-profile:** handle empty database ([be78e3a](https://github.com/justinearl/hero/commit/be78e3a665ce86faeb454e092ac59db2b8f5e0d5))
* xpathSelectorAll broken if page changes ([c62d017](https://github.com/justinearl/hero/commit/c62d017509ee3f92bc93996d0bbb2a57123b12db)), closes [#257](https://github.com/justinearl/hero/issues/257)

### chore

* **client:** merge Browser/User into SecretAgent ([364ed8a](https://github.com/justinearl/hero/commit/364ed8ab9c16cdf40c8ad1f151de4b06efcc557d))

### Features

* add ability to manually create a newTab ([c1f0017](https://github.com/justinearl/hero/commit/c1f0017549bbee215c3ca8c416e1ab4844e297b2)), closes [#268](https://github.com/justinearl/hero/issues/268)
* added 'new' event listener to Hero class ([a374bd9](https://github.com/justinearl/hero/commit/a374bd9d9a5df07aef768c06b9ef5f4cf41fa4a8))
* added an extension object ($) to all SuperElements ([98fba8b](https://github.com/justinearl/hero/commit/98fba8b3f9b15e1cd940df47838155a9189941ba))
* added close method to HeroExtractor ([530747b](https://github.com/justinearl/hero/commit/530747b83e4c657e8dc2b13c8e687b1206129c88))
* added createConnectionToCore to Hero class ([517b913](https://github.com/justinearl/hero/commit/517b9137188e8a43e3fe01bb5405771506b7b6f8))
* added DomExtender to non-super classes ([3c9882b](https://github.com/justinearl/hero/commit/3c9882baefb75dda5ee0c6b2c9f2b528399be68b))
* added extractorPromises into Client's CoreSession ([daf783a](https://github.com/justinearl/hero/commit/daf783a81b6ad5965e41b4eee592875815a0e7e7))
* added hero.collect and element. from databox-for-hero ([6c6de12](https://github.com/justinearl/hero/commit/6c6de12562a9f85da05bbab0c81cc5d2769f7f05))
* added OutputTable, removed externalIds and random bugs ([1736ad2](https://github.com/justinearl/hero/commit/1736ad2037e43c55f459864d93c78c8eca7c4074))
* added ResourceTypes enum + IResourceType to hero export ([d8b0bb8](https://github.com/justinearl/hero/commit/d8b0bb81d48943dba638213ba24c38399f63c32a))
* added some more dom extenders ([77cb2de](https://github.com/justinearl/hero/commit/77cb2de0cae07f89034d9e811e5064eab1597157))
* added support for plugins ([0fda55d](https://github.com/justinearl/hero/commit/0fda55d7a57d300d765c462389e76da0e1fe0822))
* added support needed for elem. in databox ([a44c0db](https://github.com/justinearl/hero/commit/a44c0db81a1a280f66f296d6c3bb81977f70b80a))
* allow string for host connection ([cb5abd0](https://github.com/justinearl/hero/commit/cb5abd0a4b174c8be1eb44ed81a4e2d37e937ae5))
* apply the  to SuperNode and SuperHTMLElement ([265cb43](https://github.com/justinearl/hero/commit/265cb43ec57f3394d52c6184b17b001e25cc8311))
* **awaited-dom:** documentation for props ([029a1f5](https://github.com/justinearl/hero/commit/029a1f5b10cc13119d4bb808d35f80cce4aeb3dd))
* **blockedResourceUrls:** expose and document ([2db8b93](https://github.com/justinearl/hero/commit/2db8b936ee00467bad41e1ea4408006e099c5f87))
* centralized data dir ([4b8a122](https://github.com/justinearl/hero/commit/4b8a1221700b7c271fb84b62c939f8ddb97a27e6))
* changes needed for databox and/or to follow databox terminology ([b083668](https://github.com/justinearl/hero/commit/b083668beed1e4d15871b7098d1b6bcf82a08412))
* **client/core:** add client loadStatus props ([21e6a3e](https://github.com/justinearl/hero/commit/21e6a3e0f23ce759515850d1e5d881cf7ac76567))
* **client+core:** input/outputs ([d48a1de](https://github.com/justinearl/hero/commit/d48a1de1ae5f293fdb884ae23c2402cf4e14ee36))
* **client:** $contentDocument AwaitedDOM extender ([d4bacbf](https://github.com/justinearl/hero/commit/d4bacbfa56086e60f72b80a9b5284a0d4bb678c8))
* **client:** ability to run exported page state ([6c33e02](https://github.com/justinearl/hero/commit/6c33e02749d44ae569ca15a76f1949561981f60c))
* **client:** ability to set externalIds ([5cf5a33](https://github.com/justinearl/hero/commit/5cf5a3336d62836e5532ddfce3f91eabf0b7cae2))
* **client:** add ability to get agent metadata ([55df775](https://github.com/justinearl/hero/commit/55df775b3b9e78db99bc726ae54a683cc701a7e2))
* **client:** add background mode ([65ce67d](https://github.com/justinearl/hero/commit/65ce67daaada576e2c6969f868e9239fff0e00cf))
* **client:** add http cache and load failures ([571e64f](https://github.com/justinearl/hero/commit/571e64f108df7a0cbfd32609c37ff76261014dc6))
* **client:** add output to handlers ([1c143b4](https://github.com/justinearl/hero/commit/1c143b4e84145a4eb5e8df0e52c7d69c64efeb7a))
* **client:** add pause commands to api ([90e8303](https://github.com/justinearl/hero/commit/90e83039362e62a3ecf17b75a1c569b3813a4793))
* **client:** add scrollTo shortcut ([a1613f1](https://github.com/justinearl/hero/commit/a1613f15907c6eaea30e597bdabc3238eb7c96c1))
* **client:** add serialized callstack ([7a87445](https://github.com/justinearl/hero/commit/7a87445a5ea772769cd5cf2df5528e9653bd12a8))
* **client:** add sessionid/name to logs + errors ([7d88f35](https://github.com/justinearl/hero/commit/7d88f3555076647307dc1e9e6cea9b102033c756))
* **client:** add single resource search apis ([ecd732c](https://github.com/justinearl/hero/commit/ecd732c611eafd72f8d8a88216eedc5f090ba70b))
* **client:** add stdout/stderr piping on relaunch ([bcf5bb5](https://github.com/justinearl/hero/commit/bcf5bb57feccd506bfd8a5ce71f4994728a361d6))
* **client:** add typing to variable event args ([56f7a01](https://github.com/justinearl/hero/commit/56f7a01c00ae842e4f4d2b39e059e0f57dab5358))
* **client:** allow awaiting xpath ([708dfd9](https://github.com/justinearl/hero/commit/708dfd9ad09fbead841c88bdc54582fd7fe10868)), closes [#239](https://github.com/justinearl/hero/issues/239)
* **client:** allow injectable scriptinstance ([09aa700](https://github.com/justinearl/hero/commit/09aa700c04dc008b34822b9af446339f46f70c20))
* **client:** built-in remote + handlers ([bfaa739](https://github.com/justinearl/hero/commit/bfaa739517a458db9dd1bd6374770840eb95b847))
* **client:** children frames property ([28709e5](https://github.com/justinearl/hero/commit/28709e55d8b74f980dc4785072cfa6f0f57bad1f))
* **client:** coreConnection as configuration ([ac284ca](https://github.com/justinearl/hero/commit/ac284cac3fa867a9623fd841edf96d04906e3072))
* **client:** coreHost & disconnecting errors ([aed9fc3](https://github.com/justinearl/hero/commit/aed9fc3f49996a661ab6b70e5446c9442649802a)), closes [#165](https://github.com/justinearl/hero/issues/165)
* **client:** export required enums and consts ([4cce3a7](https://github.com/justinearl/hero/commit/4cce3a769e41bba49ad8a8bc8c83de53711f091b))
* **client:** expose frames ([44a6b12](https://github.com/justinearl/hero/commit/44a6b129fef6f541cffc24e8913fd76defcf3aef))
* **client:** flow commands ([af23474](https://github.com/justinearl/hero/commit/af23474e3351b6f60e0bac9392cbbaa979a0ab6d))
* **client:** focus and xpath dom extenders ([0888c8b](https://github.com/justinearl/hero/commit/0888c8b50b70193695b9fd4d1243fd55a8cd337f))
* **client:** for flow handler names ([8b1b144](https://github.com/justinearl/hero/commit/8b1b144adc56c712877af147ba95b06c2ff642fe))
* **client:** get/set/delete cookies + domstorage ([2e2de6b](https://github.com/justinearl/hero/commit/2e2de6b9f2debf5eadf54b03b3f8d9db7cace269))
* **client:** getJsValue should return value ([84dcd65](https://github.com/justinearl/hero/commit/84dcd650fb6dc358904374e59965a72e7c3b2aa6))
* **client:** global instanceof checks ([b704669](https://github.com/justinearl/hero/commit/b70466975c83a947803c28c98bbdf642c7b0b052))
* **client:** include script process exec details ([0103151](https://github.com/justinearl/hero/commit/010315147b7c10f9b02884042b1d07dfcb83b340))
* **client:** publish callsite as json ([575f754](https://github.com/justinearl/hero/commit/575f75416589b7ec77c5afa246c0d40cc07cf73d))
* **client:** return resource in waitForLocation ([3ebf319](https://github.com/justinearl/hero/commit/3ebf319de1fc8e56448833a4ab5c703272b7697c))
* **client:** split out ISecretAgentClass ([8765900](https://github.com/justinearl/hero/commit/876590001e62598daaad71d9a236e94600717c72))
* **client:** update awaited dom to 1.1.8 ([a1b9b68](https://github.com/justinearl/hero/commit/a1b9b68e735ee54ceaef3436c43df0d0744c8f47))
* **client:** update awaited-dom ([f9699fb](https://github.com/justinearl/hero/commit/f9699fbadb2c2020e88056edb33eeb5331ed1556))
* **client:** waitForAllDispatchesSettled ([cf3e6b5](https://github.com/justinearl/hero/commit/cf3e6b540fd312e771f72ff27a08bf3ee9f6212a))
* **client:** waitForPageState(states, options) ([dae7f24](https://github.com/justinearl/hero/commit/dae7f2446afd0716a6e2063088cb456f5f301029))
* **client:** xpath support, array index access ([c59ccbc](https://github.com/justinearl/hero/commit/c59ccbc47eda9c61c360f04beb00a6a8e032f31e))
* convert unblocked to ulixee org ([6616ec9](https://github.com/justinearl/hero/commit/6616ec94186da360e70544c827294b95ecb9381f))
* core session now has access to it's hero instance ([62e17bb](https://github.com/justinearl/hero/commit/62e17bbbf83d69b9555f8d6a14eb28e258b183f3))
* **core:** ability to load a frozen tab from db ([12628d2](https://github.com/justinearl/hero/commit/12628d2c3721fd9c504c432e5f4579aa7665bafd))
* **core:** add getComputedStyles to tab ([0e3bccd](https://github.com/justinearl/hero/commit/0e3bccd9c27ac1e6b122238ca7292182c169ebe6))
* **core:** add keepalive message and cli ([44caf22](https://github.com/justinearl/hero/commit/44caf22e3a5200904a6fcc2e8cbf3269dcac5b15))
* **core:** add return value to flow commands ([029e676](https://github.com/justinearl/hero/commit/029e6767442d8ae60d90a44402f1d59e6450e8b0))
* **core:** add returns to waitForLoad/element ([ac7bd94](https://github.com/justinearl/hero/commit/ac7bd948c08e96496ad1887d8a013a760792b8ce))
* **core:** add screenshot capability ([f075f89](https://github.com/justinearl/hero/commit/f075f89636edb81c4626c51929665373069de31a))
* **core:** allow a client to provide sessionIds ([9602aa7](https://github.com/justinearl/hero/commit/9602aa7fe0820448775ef0178862f690c56df52f))
* **core:** allow user to specify auto-shutdown ([18371b1](https://github.com/justinearl/hero/commit/18371b1351a00237ffe852d2fd4ca18845112b4f))
* **core:** api to get all collected names ([c965286](https://github.com/justinearl/hero/commit/c9652869077090321751a220b7a2b8efe9f4b013))
* **core:** browserless session ([0de6846](https://github.com/justinearl/hero/commit/0de684696253181661903993fe53eb4e38c72e31))
* **core:** change new Date to Date.now ([8d9fe4f](https://github.com/justinearl/hero/commit/8d9fe4f4e83efa258d94d164192e95e994c24de3))
* **core:** click verification modes ([bbfffde](https://github.com/justinearl/hero/commit/bbfffde792cfaf7e2a37ceb5acb781fbe4332155))
* **core:** collect and recreate fragments ([69db46e](https://github.com/justinearl/hero/commit/69db46e40cb2a8980337d9714419cc4d045b1dbc))
* **core:** collect fragment html in background ([b6dffb3](https://github.com/justinearl/hero/commit/b6dffb3ae2c3b76d24e707210b9d9670072f9daa))
* **core:** collect resources ([db700e6](https://github.com/justinearl/hero/commit/db700e620f58e1036fa497cbc21cb4dfecdca3f0))
* **core:** collect snippet ([d6e21dd](https://github.com/justinearl/hero/commit/d6e21ddd5a9d1491e66071458818768fcb2a9b7e))
* **core:** collected res timestamp and commandid ([12c3c69](https://github.com/justinearl/hero/commit/12c3c6972b881ffd91133c058b5d646879772eec))
* **core:** command timeline ([ba2ec46](https://github.com/justinearl/hero/commit/ba2ec468128b8ac605c8856d07d6160164aedb0a))
* **core:** convert all connections to server ([a27fafd](https://github.com/justinearl/hero/commit/a27fafd9a04e52f602a557f7304164c2308006c6))
* **core:** convert page state to dom state ([213b6c9](https://github.com/justinearl/hero/commit/213b6c966d887f2a97837ae0c58ab561c3e740f8))
* **core:** convert server to use websockets ([2d1804c](https://github.com/justinearl/hero/commit/2d1804ce7521fe065c01491e3f5e084852369f55))
* **core:** detached tab ([9e32e47](https://github.com/justinearl/hero/commit/9e32e47f2e0c17a138593f554d966a346d2800e5))
* **core:** dialogs should run out of order ([b3db8b4](https://github.com/justinearl/hero/commit/b3db8b44a522073fdb25497dc6f9e1affe82b471))
* **core:** find resources ([3213c91](https://github.com/justinearl/hero/commit/3213c91e5e2e0d2d9ada716cc13e2d0333c87c66))
* **core:** flow handlers ([cd1ced6](https://github.com/justinearl/hero/commit/cd1ced611d78abbd513c023662630f061f4af7f4))
* **core:** isElementVisible - can user see elem ([213c351](https://github.com/justinearl/hero/commit/213c351cbc9bf4c6e8852fe0694bfafcdd602cbe))
* **core:** javascript dialog handling ([e02d84b](https://github.com/justinearl/hero/commit/e02d84b3f1d5c01da5c2b581c6889922584a92d0))
* **core:** keyboard shortcuts ([19fa006](https://github.com/justinearl/hero/commit/19fa006f4ecc3f467a714d107fab25b7930fcc82))
* **core:** magic selectors ([f79170b](https://github.com/justinearl/hero/commit/f79170b47595dbda8765930e5493e04addbc29b1))
* **core:** merge session-state and core ([dcc6002](https://github.com/justinearl/hero/commit/dcc6002c2003d981267e51c8dacf5201fe3b9fda))
* **core:** min valid assertions for batch ([369e9d3](https://github.com/justinearl/hero/commit/369e9d3848218fde2f7f34cee57fcc5be72cf716))
* **core:** optimize string reuse in high traffic ([3c03c3a](https://github.com/justinearl/hero/commit/3c03c3aa1639a74a38160fb9cfd13882774fc70f))
* **core:** pagestate loadFrom @ shortcut; mode ([de3621b](https://github.com/justinearl/hero/commit/de3621bf9266a6a9a4e45c5e5da1ed167537bcab))
* **core:** prefetch jsPaths from prior runs ([4f523bd](https://github.com/justinearl/hero/commit/4f523bdbafe18c19517831edd8d0b325dd023de4))
* **core:** proxy local dns feature ([bd6f7dc](https://github.com/justinearl/hero/commit/bd6f7dc4442277ae0379159ebedafc2355fa386f))
* **core:** push page states, code module ([94ccc56](https://github.com/justinearl/hero/commit/94ccc56258a75633bf3f632f26fff3de78d61504))
* **core:** re-broadcast events during resume ([88b0ca9](https://github.com/justinearl/hero/commit/88b0ca94401e3fc24313f284e3446e9a22efb877))
* **core:** refactor to accomodate ulixee/desktop ([be9ed0e](https://github.com/justinearl/hero/commit/be9ed0eb2ee905ea4683d814b9a5a694b94a3705))
* **core:** return null for non-existent elements ([871c2fa](https://github.com/justinearl/hero/commit/871c2fa22d761e37836b3ecb1d765c6a5fc7cdee))
* **core:** save devtools prefs, close puppet ([7ca62dc](https://github.com/justinearl/hero/commit/7ca62dc74c427bb0d7020ff103b8f5968e2b9fd3))
* **core:** session registry ([fd10317](https://github.com/justinearl/hero/commit/fd10317a1219b1aefffd5b8162021a43c8ca6dc5))
* **core:** store agent options in session table ([aab1025](https://github.com/justinearl/hero/commit/aab1025ccef2f3545743d98ec728161c47b51493))
* **core:** store data files in a single location ([c3299b6](https://github.com/justinearl/hero/commit/c3299b6a0dc2fc42d7a7df3746ab34c2d8b15ea0))
* **core:** timeouts for back/fwd/goto, add reload ([bae2a8e](https://github.com/justinearl/hero/commit/bae2a8eaf20b2a855c98986d5c2c9b5e11b004ec))
* **core:** timestamp/commandId for snippets/elems ([5cb3c92](https://github.com/justinearl/hero/commit/5cb3c92fc8523e1903ae578565915b127f433f61))
* **core:** use local dir for page state ([d884e81](https://github.com/justinearl/hero/commit/d884e81448e7db9d6f8a1613f7cefe8c5449caed))
* **core:** waitForFileChooser ([cf3beb9](https://github.com/justinearl/hero/commit/cf3beb9b3d06dbd3548e5a23746641f5addbfade))
* **core:** waitForHidden elements ([564659d](https://github.com/justinearl/hero/commit/564659d691415bdcdf360afc2062f0f96d34a69e))
* **core:** waitForLocation/Load takes a timeout ([02758c7](https://github.com/justinearl/hero/commit/02758c7fc1e5394db84f91aa8235c3364b6c0692))
* **core:** waitForPaintingStable ([1955b79](https://github.com/justinearl/hero/commit/1955b791ce8a7cf20a679986e63885950efa6813))
* detach now only returns element while addToDetached saves it ([f5641f5](https://github.com/justinearl/hero/commit/f5641f5806ba0281a8f0bdd6a0143cfc9326808b))
* **dist:** improve packaging for double agent ([df195b6](https://github.com/justinearl/hero/commit/df195b630b90aea343e4bd3005d41b34c4d5431a))
* **docs:** add flow documentation ([56c2d98](https://github.com/justinearl/hero/commit/56c2d98f341e558217f603b64cf1ed941669a08a))
* **docs:** Update documentation ([2295725](https://github.com/justinearl/hero/commit/2295725dceed7026bee9a4a291d551c75fe5279f)), closes [#56](https://github.com/justinearl/hero/issues/56)
* dropped $ as an object in favor of ([b8b41ad](https://github.com/justinearl/hero/commit/b8b41ad58dc7487233c08ee589804690133d3f2d))
* export ISuperElement and ISuperNode from hero ([b9ba603](https://github.com/justinearl/hero/commit/b9ba6033f4d488a30dd7b3817e870f4223d34c4a))
* expose IHeroExtractorCreateOptions interface ([60d4851](https://github.com/justinearl/hero/commit/60d4851648ae133e074b6292ea9f5fcbcbf4f03e))
* expose triggerFlowHandler internal data ([#229](https://github.com/justinearl/hero/issues/229)) ([5ceb89c](https://github.com/justinearl/hero/commit/5ceb89ccf94a86a6d7dd8bd5465495f4539e12fb))
* first stab at documenting plugins + simplified plugin architecture ([fcaa3cf](https://github.com/justinearl/hero/commit/fcaa3cfdca98b6f85128c196369d63ae40642df1))
* **handler:** re-q unstarted agents on disconnect ([b0ece5b](https://github.com/justinearl/hero/commit/b0ece5bdaa203352932dd524b1eddc082df6fb31))
* hero should use .ulixee folder as defaults ([017b52f](https://github.com/justinearl/hero/commit/017b52f48b09219f3fe5e6febaf7c2ff089c8a5f))
* **hero:** add connected/session created event ([b638ef7](https://github.com/justinearl/hero/commit/b638ef7ec957f7e67ad66246bdb368214c7eff3c))
* **hero:** automatic server port use ([0199338](https://github.com/justinearl/hero/commit/0199338b9cdad68c7e5acd036597bf8d3252c90c))
* import and shrink puppeteer ([b1816b8](https://github.com/justinearl/hero/commit/b1816b8f7b1a60edd456626e3c818e4ebe3c022f))
* **interfaces:** fix devtools command typing ([00af054](https://github.com/justinearl/hero/commit/00af054cc6c971c59b35c964bbe3ba568aadb151))
* **mitm:** record documentUrl in resources ([295567b](https://github.com/justinearl/hero/commit/295567b8dfc1b8b43795dc1e07e2272b9921ae4b))
* **mitm:** support push streams ([1b2af06](https://github.com/justinearl/hero/commit/1b2af0655445929ac1f4fb8dcac011b9623a75d4))
* **mitm:** update go dependenices ([2bc44fa](https://github.com/justinearl/hero/commit/2bc44fa5e2ffcb6bb61b4505829fd1e4f1e6dbae))
* **mitm:** use shared mitm socket ([f80334b](https://github.com/justinearl/hero/commit/f80334b59f03f59dda63040b28146c51cff1825d))
* moved commons into its own repo ([fdbfa4c](https://github.com/justinearl/hero/commit/fdbfa4cdad7fe977412c1660cda7075417a01e82))
* moved Handler to Runner and Core's http server to Server + no default instance is exported ([41954ff](https://github.com/justinearl/hero/commit/41954ff3a12cadb68bc9a065d54205474aaa8362))
* moved output from Hero to Databox ([95c3f9b](https://github.com/justinearl/hero/commit/95c3f9bfcff59361037ba3a1f4dda6b87d22f23e))
* mv renderingOptions => blockedResourceTypes ([ffa1b74](https://github.com/justinearl/hero/commit/ffa1b74d0b470387ec104027667e8523a51bfa15)), closes [#113](https://github.com/justinearl/hero/issues/113)
* **net:** simplify network stack ([81d2c76](https://github.com/justinearl/hero/commit/81d2c7613a604bb5abd0d0343fa6dc413e7b6c8d))
* **plugins:** add ability to exec js on frame ([0f2cb97](https://github.com/justinearl/hero/commit/0f2cb97c6cc67d13331bcc7baebff838f028077e))
* **plugins:** fix typing and load-order ([01cad91](https://github.com/justinearl/hero/commit/01cad91c3d7857abae8cdb23506407027e082567))
* **plugins:** on browser context ([3e5cead](https://github.com/justinearl/hero/commit/3e5ceadd63790191f966802d185983e11adcf0bf))
* **proxy:** configure proxy via client + socks5 ([880c938](https://github.com/justinearl/hero/commit/880c93803bebc78b835a8f2fb5133d633a315337))
* **puppet:** add puppet interfaces abstraction ([69bae38](https://github.com/justinearl/hero/commit/69bae38a03afaae3455de2a4928abd13031af662))
* register Core plugins through agent.use ([eb08964](https://github.com/justinearl/hero/commit/eb0896454ed1e265459fc174a937f666c975844d))
* remove replay app ([8fc196d](https://github.com/justinearl/hero/commit/8fc196da4a5aa29a78cc1cbfe717622023af0184))
* removed  from hero and added to databox ([370baad](https://github.com/justinearl/hero/commit/370baad788dcece8a595e705c49075be5a768287))
* removed hero.magicSelector/All and replaced with hero.querySelector/All shortcut ([f06d242](https://github.com/justinearl/hero/commit/f06d242dfd6727f0896ba9cbc1bbfb9a012b3d33))
* renamed DetachedDOM to DetachedElement + getDataSnippet to getSnippet ([d58431a](https://github.com/justinearl/hero/commit/d58431a205e354c61c75698e3aefc46cd0ebd7bf))
* renamed HeroExtractor to HeroReplay as well as how $extract/$collect work and are named ([d97fb2d](https://github.com/justinearl/hero/commit/d97fb2dd1ce0b5329f6cf99af96dcd29422b55fb))
* renamed HeroPast to HeroExtractor for clarity ([857d8f1](https://github.com/justinearl/hero/commit/857d8f1ca3e0cc8c8d104a6598989d1f1ad3ba42))
* renamed resource outputs to getters: buffer, text, json ([3b493f2](https://github.com/justinearl/hero/commit/3b493f2c40cadddceaea042849933ef8bb088d4a))
* renamed SecretAgent to Hero ([e5f12a3](https://github.com/justinearl/hero/commit/e5f12a3ff2dd8926f87275a9f248cbeef5c4cfc9))
* replaced CollectedSnippets with hero.getData/setData ([96a731f](https://github.com/justinearl/hero/commit/96a731fd295204b7c61d3eb4fbb81131289dc606))
* **replay:** add mouse/focus/scroll events ([efec55c](https://github.com/justinearl/hero/commit/efec55cf093bd4207164abd304a64f73620c45a9))
* **replay:** add session logs, detect errors ([f1865c0](https://github.com/justinearl/hero/commit/f1865c0aef38f6722bbcdee0244288f0f6040c5a)), closes [#31](https://github.com/justinearl/hero/issues/31)
* **replay:** show frozen tabs ([d2eff14](https://github.com/justinearl/hero/commit/d2eff14ac12b06dfb1325a41f542c5ae9714a471))
* **replay:** single install of replay ([5425bee](https://github.com/justinearl/hero/commit/5425bee76488ac5bff4f46d8b99eb874dd7f5a35))
* **replay:** split session state by tab ([9367f2d](https://github.com/justinearl/hero/commit/9367f2d8796fda709bc8185374a5e07d4b6f78ab))
* **replay:** start api from process ([403716b](https://github.com/justinearl/hero/commit/403716b3ba853c67ef15868fd6fb9fe1f60dbc1f))
* **replay:** stream data and simplify tick tracker ([91c350c](https://github.com/justinearl/hero/commit/91c350cdbf9f99c19754fbb5598afe62a13fb497))
* **replay:** update for mac silicon + deps ([30ffec7](https://github.com/justinearl/hero/commit/30ffec74fc06485b56344f17374a082d2055c1f1))
* simplified naming of some connection to core classes ([1a9d63f](https://github.com/justinearl/hero/commit/1a9d63f87d3361883d9a759815f1482f80ebd446))
* some slight syntax changes and renames to state and flow handlers in client ([9dae5ce](https://github.com/justinearl/hero/commit/9dae5ce184989b3f311d14836a4ac584ad99672d))
* unify plugin structure ([6b9138d](https://github.com/justinearl/hero/commit/6b9138d890b6fb845af057fef4f390522614978f))
* updated to use latest commons version ([f9b145b](https://github.com/justinearl/hero/commit/f9b145b962ee28e2669afd1cefe3da7e1398f3f6))
* uses new @ulixee/commons/lib structure ([7ba3c73](https://github.com/justinearl/hero/commit/7ba3c73e40663f32d0001c51edce344f7ebd1e42))
* wait for tab ([0961e97](https://github.com/justinearl/hero/commit/0961e97ecc4418c21536be92e1f3787aa1692117))

### BREAKING CHANGES

* renames “renderingOptions” to “blockedResourceTypes”. Default is now “None”
* **client:** this change modifies the core interface for interacting with SecretAgent, as createBrowser is removed.

# [2.0.0-alpha.34](https://github.com/ulixee/hero/compare/v2.0.0-alpha.33...v2.0.0-alpha.34) (2025-09-08)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.33](https://github.com/ulixee/hero/compare/v2.0.0-alpha.32...v2.0.0-alpha.33) (2025-05-29)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.32](https://github.com/ulixee/hero/compare/v2.0.0-alpha.31...v2.0.0-alpha.32) (2025-05-28)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.31](https://github.com/ulixee/hero/compare/v2.0.0-alpha.30...v2.0.0-alpha.31) (2024-12-07)

### Bug Fixes

* **client:** before disconnect bug ([fe8ac97](https://github.com/ulixee/hero/commit/fe8ac97ad848e58df4565939de681f0948153c37))

### Features

* **net:** simplify network stack ([81d2c76](https://github.com/ulixee/hero/commit/81d2c7613a604bb5abd0d0343fa6dc413e7b6c8d))

# [2.0.0-alpha.30](https://github.com/ulixee/hero/compare/v2.0.0-alpha.29...v2.0.0-alpha.30) (2024-10-11)

### Bug Fixes

* **net:** reconnect websockets if disconnected ([922af43](https://github.com/ulixee/hero/commit/922af4345ea64fec45e377f11c8b084a3d5bb218))

# [2.0.0-alpha.29](https://github.com/ulixee/platform/compare/v2.0.0-alpha.28...v2.0.0-alpha.29) (2024-07-16)

### Bug Fixes

* xpathSelectorAll broken if page changes ([c62d017](https://github.com/ulixee/platform/commit/c62d017509ee3f92bc93996d0bbb2a57123b12db)), closes [#257](https://github.com/ulixee/platform/issues/257)

### Features

* add ability to manually create a newTab ([c1f0017](https://github.com/ulixee/platform/commit/c1f0017549bbee215c3ca8c416e1ab4844e297b2)), closes [#268](https://github.com/ulixee/platform/issues/268)

# [2.0.0-alpha.28](https://github.com/ulixee/platform/compare/v2.0.0-alpha.27...v2.0.0-alpha.28) (2024-03-11)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.27](https://github.com/ulixee/platform/compare/v2.0.0-alpha.26...v2.0.0-alpha.27) (2024-03-01)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.26](https://github.com/ulixee/platform/compare/v2.0.0-alpha.25...v2.0.0-alpha.26) (2024-02-02)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.25](https://github.com/ulixee/platform/compare/v2.0.0-alpha.24...v2.0.0-alpha.25) (2023-09-28)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.24](https://github.com/ulixee/platform/compare/v2.0.0-alpha.23...v2.0.0-alpha.24) (2023-08-09)

### Bug Fixes

* **client:** detach not returning elements ([34a4340](https://github.com/ulixee/platform/commit/34a4340bfc4c8ef55430481caa7e2033e3019e4e))

# [2.0.0-alpha.23](https://github.com/ulixee/platform/compare/v2.0.0-alpha.22...v2.0.0-alpha.23) (2023-07-07)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.22](https://github.com/ulixee/platform/compare/v2.0.0-alpha.21...v2.0.0-alpha.22) (2023-06-12)

### Bug Fixes

* **client:** disconnect connections on shutdown ([648f8db](https://github.com/ulixee/platform/commit/648f8db3a832833d61978502c75010f6b107addf))
* **client:** lint issues ([cc90f4f](https://github.com/ulixee/platform/commit/cc90f4fe3ef7fed8d48f5269842214ddff3ead5c))
* **core:** only add wal mode if not readonly db ([f74ecc4](https://github.com/ulixee/platform/commit/f74ecc4ffc20d126ed5f379b2d221b9352fdf71b))

### Features

* **core:** session registry ([fd10317](https://github.com/ulixee/platform/commit/fd10317a1219b1aefffd5b8162021a43c8ca6dc5))
* expose triggerFlowHandler internal data ([#229](https://github.com/ulixee/platform/issues/229)) ([5ceb89c](https://github.com/ulixee/platform/commit/5ceb89ccf94a86a6d7dd8bd5465495f4539e12fb))

# [2.0.0-alpha.21](https://github.com/ulixee/platform/compare/v2.0.0-alpha.20...v2.0.0-alpha.21) (2023-04-24)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.20](https://github.com/ulixee/platform/compare/v2.0.0-alpha.19...v2.0.0-alpha.20) (2023-04-19)

### Bug Fixes

* **client:** export script instance ([62803e5](https://github.com/ulixee/platform/commit/62803e53d5ab153f3e933c26666733c59f2d4af3))
* **client:** remove ability to specify upload path ([5a6537a](https://github.com/ulixee/platform/commit/5a6537a5603d1715c727b22a3bfc8b59190d33ee))
* log devtools events ([e39575b](https://github.com/ulixee/platform/commit/e39575bb85a75469e7934c78720dcc951995595d))

### Features

* **client:** allow injectable scriptinstance ([09aa700](https://github.com/ulixee/platform/commit/09aa700c04dc008b34822b9af446339f46f70c20))
* **client:** global instanceof checks ([b704669](https://github.com/ulixee/platform/commit/b70466975c83a947803c28c98bbdf642c7b0b052))

# [2.0.0-alpha.19](https://github.com/ulixee/platform/compare/v2.0.0-alpha.18...v2.0.0-alpha.19) (2023-02-25)

### Bug Fixes

* **client:** waitForState not capturing err stack ([338f0aa](https://github.com/ulixee/platform/commit/338f0aaaecd6c38568fac366e3873dc25ccec45e))

### Features

* **core:** proxy local dns feature ([bd6f7dc](https://github.com/ulixee/platform/commit/bd6f7dc4442277ae0379159ebedafc2355fa386f))
* **core:** refactor to accomodate ulixee/desktop ([be9ed0e](https://github.com/ulixee/platform/commit/be9ed0eb2ee905ea4683d814b9a5a694b94a3705))
* **hero:** add connected/session created event ([b638ef7](https://github.com/ulixee/platform/commit/b638ef7ec957f7e67ad66246bdb368214c7eff3c))

# [2.0.0-alpha.18](https://github.com/ulixee/platform/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2023-01-17)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.17](https://github.com/ulixee/platform/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2022-12-15)

### Bug Fixes

* **client:** if no awaited event target, return ([920f843](https://github.com/ulixee/platform/commit/920f843f8a0a915f2d4ce49fc62440961af9d446))
* improve message when hosts w wrong version ([3f30733](https://github.com/ulixee/platform/commit/3f307339af77647d3192dda0ed7304d8dc8dc418))

# [2.0.0-alpha.16](https://github.com/ulixee/platform/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2022-12-05)

### Bug Fixes

* **core:** subdomain cookies not being removed ([fad14db](https://github.com/ulixee/platform/commit/fad14db468a3c7354e7e5f865fa3c62bf699eac0))

### Features

* **core:** allow user to specify auto-shutdown ([18371b1](https://github.com/ulixee/platform/commit/18371b1351a00237ffe852d2fd4ca18845112b4f))

# [2.0.0-alpha.15](https://github.com/ulixee/platform/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2022-11-17)

### Bug Fixes

* don’t double call onHero ([3ae1326](https://github.com/ulixee/platform/commit/3ae13260baf6b1af8eb34f7899ae066b2f0f4474))
* update awaited-dom to fix ts issue ([b98a567](https://github.com/ulixee/platform/commit/b98a5676df634947ec93e100556ecc4af6cd7890)), closes [#181](https://github.com/ulixee/platform/issues/181)

### Features

* allow string for host connection ([cb5abd0](https://github.com/ulixee/platform/commit/cb5abd0a4b174c8be1eb44ed81a4e2d37e937ae5))
* **blockedResourceUrls:** expose and document ([2db8b93](https://github.com/ulixee/platform/commit/2db8b936ee00467bad41e1ea4408006e099c5f87))

# [2.0.0-alpha.14](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2022-11-02)

### Features

* convert unblocked to ulixee org ([6616ec9](https://github.com/ulixee/ulixee/commit/6616ec94186da360e70544c827294b95ecb9381f))

# [2.0.0-alpha.13](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2022-10-31)

### Bug Fixes

* **client:** fix HeroReplay replaying a sessionid ([56da409](https://github.com/ulixee/ulixee/commit/56da409ad42dffd7b45333cd53811d6a8163e550))
* implemented Blake's fixes ([64d33fc](https://github.com/ulixee/ulixee/commit/64d33fc57d1b22067de663ad0261b0de51c225a4))
* lint ([5d98583](https://github.com/ulixee/ulixee/commit/5d9858327959ba5aae7f292d5a61851ce3be9971))
* lint issue ([5614afb](https://github.com/ulixee/ulixee/commit/5614afbb0cdc0099d0c053cd19fc2bb091a040fc))

### Features

* added close method to HeroExtractor ([530747b](https://github.com/ulixee/ulixee/commit/530747b83e4c657e8dc2b13c8e687b1206129c88))
* added hero.collect and element. from databox-for-hero ([6c6de12](https://github.com/ulixee/ulixee/commit/6c6de12562a9f85da05bbab0c81cc5d2769f7f05))
* detach now only returns element while addToDetached saves it ([f5641f5](https://github.com/ulixee/ulixee/commit/f5641f5806ba0281a8f0bdd6a0143cfc9326808b))
* expose IHeroExtractorCreateOptions interface ([60d4851](https://github.com/ulixee/ulixee/commit/60d4851648ae133e074b6292ea9f5fcbcbf4f03e))
* renamed DetachedDOM to DetachedElement + getDataSnippet to getSnippet ([d58431a](https://github.com/ulixee/ulixee/commit/d58431a205e354c61c75698e3aefc46cd0ebd7bf))
* renamed HeroExtractor to HeroReplay as well as how $extract/$collect work and are named ([d97fb2d](https://github.com/ulixee/ulixee/commit/d97fb2dd1ce0b5329f6cf99af96dcd29422b55fb))
* renamed HeroPast to HeroExtractor for clarity ([857d8f1](https://github.com/ulixee/ulixee/commit/857d8f1ca3e0cc8c8d104a6598989d1f1ad3ba42))
* replaced CollectedSnippets with hero.getData/setData ([96a731f](https://github.com/ulixee/ulixee/commit/96a731fd295204b7c61d3eb4fbb81131289dc606))

# [2.0.0-alpha.12](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2022-10-03)

### Bug Fixes

* client printing incorrect properties ([04b67a7](https://github.com/ulixee/ulixee/commit/04b67a7bc37f6f9e2e76ba897f00dce611fa03a8)), closes [#152](https://github.com/ulixee/ulixee/issues/152)
* update client hints spec for hero meta ([0455bf9](https://github.com/ulixee/ulixee/commit/0455bf943e3203a72e12cc43b240874b4e9bd1b8))

# [2.0.0-alpha.11](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2022-08-31)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.10](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2022-08-16)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.9](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2022-07-26)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.8](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2022-07-13)

### Bug Fixes

* **core:** fix profile restore ([bd86f48](https://github.com/ulixee/ulixee/commit/bd86f48889448ba42b5331b0502af2f9ad9dc94f))
* **client** fix: the doneFn in waitForResource should support async ([715992](https://github.com/ulixee/ulixee/commit/71599287ac2352d6df2690f696fee3f0c9476a3d))

# [2.0.0-alpha.7](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2022-06-28)

### Bug Fixes

* **client:** disable tests global config overwrite ([7762be3](https://github.com/ulixee/ulixee/commit/7762be32766880e4564f7196b8d4a74ecfe5992f))
* **core:** fix unblocked references ([edabadd](https://github.com/ulixee/ulixee/commit/edabadd08738875234afc9735e0ad81c31bc5c95))
* **hero:** cleanup changes to global config ([3e37b93](https://github.com/ulixee/ulixee/commit/3e37b931ad2117505ec73fc173034e9e4c2e70c2))

### Features

* **client:** $contentDocument AwaitedDOM extender ([d4bacbf](https://github.com/ulixee/ulixee/commit/d4bacbfa56086e60f72b80a9b5284a0d4bb678c8))
* **client:** add stdout/stderr piping on relaunch ([bcf5bb5](https://github.com/ulixee/ulixee/commit/bcf5bb57feccd506bfd8a5ce71f4994728a361d6))
* **client:** include script process exec details ([0103151](https://github.com/ulixee/ulixee/commit/010315147b7c10f9b02884042b1d07dfcb83b340))

# [2.0.0-alpha.6](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2022-06-10)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.5](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2022-06-10)

### Bug Fixes

* expose connections for test ([59433ea](https://github.com/ulixee/ulixee/commit/59433eadbb0d0f598cd3274c2b8d8c3fdf804119))

# [2.0.0-alpha.4](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2022-06-09)

### Bug Fixes

* empty null rejection on early hero terminate ([6159a79](https://github.com/ulixee/ulixee/commit/6159a7904c649c1cdb152004d96cd0baef96ff74))
* update command for server start ([6a422ec](https://github.com/ulixee/ulixee/commit/6a422ec1fe6583ac247b417d84aeb27831076942))

# [2.0.0-alpha.3](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2022-05-19)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.2](https://github.com/ulixee/ulixee/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2022-05-17)

**Note:** Version bump only for package @ulixee/hero

# [2.0.0-alpha.1](https://github.com/ulixee/ulixee/compare/v1.5.4...v2.0.0-alpha.1) (2022-05-16)

### Bug Fixes

* broken Omit type ([c495544](https://github.com/ulixee/ulixee/commit/c495544a5c584c4e52f9ca53fd647326b05ed8fc))
* **client:** awaitedDom forEach ([105f535](https://github.com/ulixee/ulixee/commit/105f535cbfb8a0aa1cbfe34218eb638f89d83cfc))
* **client:** client hung on disconnect ([7d5d432](https://github.com/ulixee/ulixee/commit/7d5d432c9ff01a3b009fb01c489ae44cbc8a709a))
* **client:** convention of options for args ([2e94c4e](https://github.com/ulixee/ulixee/commit/2e94c4e03e2b4dc1c570ac23f75c78406e00e2cb))
* **client:** disconnect connection on process exit ([6124344](https://github.com/ulixee/ulixee/commit/6124344911b4a067f7fff9a71085c531f67f7b6d))
* **client:** fix domExtender interface ([e74b2b3](https://github.com/ulixee/ulixee/commit/e74b2b3c7032bdbf0c7458b23caab2ab5c844286))
* **client:** hero connection failing on getter ([7d2faa5](https://github.com/ulixee/ulixee/commit/7d2faa5530a41152321307b3727425ef31175dc4))
* **client:** no waitFor in waitForState ([e22ccbe](https://github.com/ulixee/ulixee/commit/e22ccbe39265e13df51589716745d9ee7fbfd502))
* **client:** reload should return a resource ([72c87a1](https://github.com/ulixee/ulixee/commit/72c87a1b851d9060af4636987864dfcd65eb4a74))
* **client:** remove page state id from path ([c7ef61e](https://github.com/ulixee/ulixee/commit/c7ef61efb725003081ad8387e2fc8c3e8122b107))
* **client:** second tab domState not working ([3daaa9d](https://github.com/ulixee/ulixee/commit/3daaa9daaaefc7f2b0872b0c5ff74f4c481a93b0))
* **client:** tests broken ([f3c60c7](https://github.com/ulixee/ulixee/commit/f3c60c73c5eaf7076c3bb51c434040d45538eccb))
* **client:** timetravel fixes for dom state ([4a7221a](https://github.com/ulixee/ulixee/commit/4a7221ab513910e96c24028c5e36cc9bdee39293))
* **client:** wait for command flush ([d87535f](https://github.com/ulixee/ulixee/commit/d87535ffc4a3fdfda9c601a581af4b7fa92dfd83))
* converted arrow functions to allow this inside prototype methods ([6ff62f4](https://github.com/ulixee/ulixee/commit/6ff62f41a57a5a40b7b29a5d9c10ffc2e40a27a2))
* **core:** allow customizing waitForVisible ([1982f52](https://github.com/ulixee/ulixee/commit/1982f52e16bca39b4ab4179e9970a190e4340652))
* **core:** cleanup detached dom jspath tracking ([c427c21](https://github.com/ulixee/ulixee/commit/c427c210b00df84bf3b00fd43905ce494769d339))
* **core:** default waitForResource from last cmd ([a0b369e](https://github.com/ulixee/ulixee/commit/a0b369e40f70e542f226157571bb92bc409fd811))
* **core:** dom state event handler timing issue ([79ce797](https://github.com/ulixee/ulixee/commit/79ce7979998225e656a3234e711256d98e923fa0))
* **core:** don’t record recordOutput as command ([e7145d9](https://github.com/ulixee/ulixee/commit/e7145d950184466436d368818cf1c4d14c66f857))
* **core:** fix event listener warnings ([df0e824](https://github.com/ulixee/ulixee/commit/df0e824fcf85b1545162947b8aee697b12e69b67))
* **core:** handle detached when elements not there ([ad11e65](https://github.com/ulixee/ulixee/commit/ad11e65a143980d8793a52e7f96054a43bb62ed8))
* **core:** interaction command highlights ([b5e541f](https://github.com/ulixee/ulixee/commit/b5e541fb527f01ddc49f3e9c82c69034bc94d777))
* **core:** lint issues ([5bb2a92](https://github.com/ulixee/ulixee/commit/5bb2a925e6c3b47ca1d14342c6062642b55f9f01))
* **core:** load fragments from other session ([8145a01](https://github.com/ulixee/ulixee/commit/8145a0125a826a413ae23f0112534ed49c9b4afc))
* **core:** make collected resources synchronous ([6439c6d](https://github.com/ulixee/ulixee/commit/6439c6d11e0ee2990de7e2ad48058382a3f30995))
* **core:** sinceCommandId validation ([fa61cc0](https://github.com/ulixee/ulixee/commit/fa61cc0bbea0ea4e26946adf40fc9066aaf7bed1))
* **core:** timeline fixes, nanoid ([59dbd0d](https://github.com/ulixee/ulixee/commit/59dbd0d1f55065fa60525796ac2f60f19e07706b))
* fixed lint issues + moved Core code back into fullstack/index.ts ([5ba28d9](https://github.com/ulixee/ulixee/commit/5ba28d9b2109dd302cb9b0e02f63585efa671e84))
* **hero:** close cli prompt on disconnect ([3da1631](https://github.com/ulixee/ulixee/commit/3da16319e02638a47ef5d4b4f8ea4e75f85f442d))
* **interaction:** cancel mouse clicks on mousedown ([afd1964](https://github.com/ulixee/ulixee/commit/afd19649c6d3c913b99cc0fa9a21e1c954f4ffbc))
* moved awaited-dom to a devDependency in fullstack ([ecdb274](https://github.com/ulixee/ulixee/commit/ecdb274b81c298f69d50c36a5d15c24c162b43a8))
* **plugins:** fix order of plugin paths loaded ([320dc60](https://github.com/ulixee/ulixee/commit/320dc60177d4924c7d46bb53227f4773dea890ec))
* **plugins:** revise plugin extensions ([2bf7ae4](https://github.com/ulixee/ulixee/commit/2bf7ae47602bfebc67a6a5d1f30c2589953aa91b))
* **puppet:** turn off final screenshot for cast ([0a9f124](https://github.com/ulixee/ulixee/commit/0a9f12469a6f7261ee46de69c8f6949c6c485e1c))
* removed imports that weren't being used ([f7808f2](https://github.com/ulixee/ulixee/commit/f7808f236ac7f3bb1f94ada3bdf556c8b6ef5c68))
* singularized ResourceType and KeyboardKey ([cfe39b3](https://github.com/ulixee/ulixee/commit/cfe39b353cab5bcdbe66eda6ee3b7cc6437e46c4))
* **timetravel:** fix timetravel back ([7435a49](https://github.com/ulixee/ulixee/commit/7435a4962945a8af6c4db759e9980418a6c3f463))
* **timetravel:** split recording out of timeline ([671e0e9](https://github.com/ulixee/ulixee/commit/671e0e91089691e483f28eb9141b21a4605f840f))
* **timetravel:** unidentified frames break replay ([708e2dd](https://github.com/ulixee/ulixee/commit/708e2ddf75588a92366bfeb54cb7e2e6caa4b387))
* **user-profile:** handle empty database ([be78e3a](https://github.com/ulixee/ulixee/commit/be78e3a665ce86faeb454e092ac59db2b8f5e0d5))

### Features

* added DomExtender to non-super classes ([3c9882b](https://github.com/ulixee/ulixee/commit/3c9882baefb75dda5ee0c6b2c9f2b528399be68b))
* added extractorPromises into Client's CoreSession ([daf783a](https://github.com/ulixee/ulixee/commit/daf783a81b6ad5965e41b4eee592875815a0e7e7))
* added OutputTable, removed externalIds and random bugs ([1736ad2](https://github.com/ulixee/ulixee/commit/1736ad2037e43c55f459864d93c78c8eca7c4074))
* added ResourceTypes enum + IResourceType to hero export ([d8b0bb8](https://github.com/ulixee/ulixee/commit/d8b0bb81d48943dba638213ba24c38399f63c32a))
* added some more dom extenders ([77cb2de](https://github.com/ulixee/ulixee/commit/77cb2de0cae07f89034d9e811e5064eab1597157))
* added support needed for elem. in databox ([a44c0db](https://github.com/ulixee/ulixee/commit/a44c0db81a1a280f66f296d6c3bb81977f70b80a))
* **client/core:** add client loadStatus props ([21e6a3e](https://github.com/ulixee/ulixee/commit/21e6a3e0f23ce759515850d1e5d881cf7ac76567))
* **client:** ability to run exported page state ([6c33e02](https://github.com/ulixee/ulixee/commit/6c33e02749d44ae569ca15a76f1949561981f60c))
* **client:** add background mode ([65ce67d](https://github.com/ulixee/ulixee/commit/65ce67daaada576e2c6969f868e9239fff0e00cf))
* **client:** add pause commands to api ([90e8303](https://github.com/ulixee/ulixee/commit/90e83039362e62a3ecf17b75a1c569b3813a4793))
* **client:** add serialized callstack ([7a87445](https://github.com/ulixee/ulixee/commit/7a87445a5ea772769cd5cf2df5528e9653bd12a8))
* **client:** add single resource search apis ([ecd732c](https://github.com/ulixee/ulixee/commit/ecd732c611eafd72f8d8a88216eedc5f090ba70b))
* **client:** children frames property ([28709e5](https://github.com/ulixee/ulixee/commit/28709e55d8b74f980dc4785072cfa6f0f57bad1f))
* **client:** flow commands ([af23474](https://github.com/ulixee/ulixee/commit/af23474e3351b6f60e0bac9392cbbaa979a0ab6d))
* **client:** focus and xpath dom extenders ([0888c8b](https://github.com/ulixee/ulixee/commit/0888c8b50b70193695b9fd4d1243fd55a8cd337f))
* **client:** for flow handler names ([8b1b144](https://github.com/ulixee/ulixee/commit/8b1b144adc56c712877af147ba95b06c2ff642fe))
* **client:** publish callsite as json ([575f754](https://github.com/ulixee/ulixee/commit/575f75416589b7ec77c5afa246c0d40cc07cf73d))
* **client:** return resource in waitForLocation ([3ebf319](https://github.com/ulixee/ulixee/commit/3ebf319de1fc8e56448833a4ab5c703272b7697c))
* **client:** waitForPageState(states, options) ([dae7f24](https://github.com/ulixee/ulixee/commit/dae7f2446afd0716a6e2063088cb456f5f301029))
* core session now has access to it's hero instance ([62e17bb](https://github.com/ulixee/ulixee/commit/62e17bbbf83d69b9555f8d6a14eb28e258b183f3))
* **core:** ability to load a frozen tab from db ([12628d2](https://github.com/ulixee/ulixee/commit/12628d2c3721fd9c504c432e5f4579aa7665bafd))
* **core:** add keepalive message and cli ([44caf22](https://github.com/ulixee/ulixee/commit/44caf22e3a5200904a6fcc2e8cbf3269dcac5b15))
* **core:** add return value to flow commands ([029e676](https://github.com/ulixee/ulixee/commit/029e6767442d8ae60d90a44402f1d59e6450e8b0))
* **core:** add returns to waitForLoad/element ([ac7bd94](https://github.com/ulixee/ulixee/commit/ac7bd948c08e96496ad1887d8a013a760792b8ce))
* **core:** api to get all collected names ([c965286](https://github.com/ulixee/ulixee/commit/c9652869077090321751a220b7a2b8efe9f4b013))
* **core:** browserless session ([0de6846](https://github.com/ulixee/ulixee/commit/0de684696253181661903993fe53eb4e38c72e31))
* **core:** click verification modes ([bbfffde](https://github.com/ulixee/ulixee/commit/bbfffde792cfaf7e2a37ceb5acb781fbe4332155))
* **core:** collect and recreate fragments ([69db46e](https://github.com/ulixee/ulixee/commit/69db46e40cb2a8980337d9714419cc4d045b1dbc))
* **core:** collect fragment html in background ([b6dffb3](https://github.com/ulixee/ulixee/commit/b6dffb3ae2c3b76d24e707210b9d9670072f9daa))
* **core:** collect resources ([db700e6](https://github.com/ulixee/ulixee/commit/db700e620f58e1036fa497cbc21cb4dfecdca3f0))
* **core:** collect snippet ([d6e21dd](https://github.com/ulixee/ulixee/commit/d6e21ddd5a9d1491e66071458818768fcb2a9b7e))
* **core:** collected res timestamp and commandid ([12c3c69](https://github.com/ulixee/ulixee/commit/12c3c6972b881ffd91133c058b5d646879772eec))
* **core:** command timeline ([ba2ec46](https://github.com/ulixee/ulixee/commit/ba2ec468128b8ac605c8856d07d6160164aedb0a))
* **core:** convert page state to dom state ([213b6c9](https://github.com/ulixee/ulixee/commit/213b6c966d887f2a97837ae0c58ab561c3e740f8))
* **core:** dialogs should run out of order ([b3db8b4](https://github.com/ulixee/ulixee/commit/b3db8b44a522073fdb25497dc6f9e1affe82b471))
* **core:** find resources ([3213c91](https://github.com/ulixee/ulixee/commit/3213c91e5e2e0d2d9ada716cc13e2d0333c87c66))
* **core:** flow handlers ([cd1ced6](https://github.com/ulixee/ulixee/commit/cd1ced611d78abbd513c023662630f061f4af7f4))
* **core:** keyboard shortcuts ([19fa006](https://github.com/ulixee/ulixee/commit/19fa006f4ecc3f467a714d107fab25b7930fcc82))
* **core:** magic selectors ([f79170b](https://github.com/ulixee/ulixee/commit/f79170b47595dbda8765930e5493e04addbc29b1))
* **core:** min valid assertions for batch ([369e9d3](https://github.com/ulixee/ulixee/commit/369e9d3848218fde2f7f34cee57fcc5be72cf716))
* **core:** pagestate loadFrom @ shortcut; mode ([de3621b](https://github.com/ulixee/ulixee/commit/de3621bf9266a6a9a4e45c5e5da1ed167537bcab))
* **core:** push page states, code module ([94ccc56](https://github.com/ulixee/ulixee/commit/94ccc56258a75633bf3f632f26fff3de78d61504))
* **core:** re-broadcast events during resume ([88b0ca9](https://github.com/ulixee/ulixee/commit/88b0ca94401e3fc24313f284e3446e9a22efb877))
* **core:** timestamp/commandId for snippets/elems ([5cb3c92](https://github.com/ulixee/ulixee/commit/5cb3c92fc8523e1903ae578565915b127f433f61))
* **core:** use local dir for page state ([d884e81](https://github.com/ulixee/ulixee/commit/d884e81448e7db9d6f8a1613f7cefe8c5449caed))
* **core:** waitForHidden elements ([564659d](https://github.com/ulixee/ulixee/commit/564659d691415bdcdf360afc2062f0f96d34a69e))
* **docs:** add flow documentation ([56c2d98](https://github.com/ulixee/ulixee/commit/56c2d98f341e558217f603b64cf1ed941669a08a))
* dropped $ as an object in favor of ([b8b41ad](https://github.com/ulixee/ulixee/commit/b8b41ad58dc7487233c08ee589804690133d3f2d))
* export ISuperElement and ISuperNode from hero ([b9ba603](https://github.com/ulixee/ulixee/commit/b9ba6033f4d488a30dd7b3817e870f4223d34c4a))
* hero should use .ulixee folder as defaults ([017b52f](https://github.com/ulixee/ulixee/commit/017b52f48b09219f3fe5e6febaf7c2ff089c8a5f))
* **hero:** automatic server port use ([0199338](https://github.com/ulixee/ulixee/commit/0199338b9cdad68c7e5acd036597bf8d3252c90c))
* **mitm:** record documentUrl in resources ([295567b](https://github.com/ulixee/ulixee/commit/295567b8dfc1b8b43795dc1e07e2272b9921ae4b))
* **mitm:** update go dependenices ([2bc44fa](https://github.com/ulixee/ulixee/commit/2bc44fa5e2ffcb6bb61b4505829fd1e4f1e6dbae))
* **plugins:** add ability to exec js on frame ([0f2cb97](https://github.com/ulixee/ulixee/commit/0f2cb97c6cc67d13331bcc7baebff838f028077e))
* **plugins:** fix typing and load-order ([01cad91](https://github.com/ulixee/ulixee/commit/01cad91c3d7857abae8cdb23506407027e082567))
* **plugins:** on browser context ([3e5cead](https://github.com/ulixee/ulixee/commit/3e5ceadd63790191f966802d185983e11adcf0bf))
* removed  from hero and added to databox ([370baad](https://github.com/ulixee/ulixee/commit/370baad788dcece8a595e705c49075be5a768287))
* removed hero.magicSelector/All and replaced with hero.querySelector/All shortcut ([f06d242](https://github.com/ulixee/ulixee/commit/f06d242dfd6727f0896ba9cbc1bbfb9a012b3d33))
* renamed resource outputs to getters: buffer, text, json ([3b493f2](https://github.com/ulixee/ulixee/commit/3b493f2c40cadddceaea042849933ef8bb088d4a))
* some slight syntax changes and renames to state and flow handlers in client ([9dae5ce](https://github.com/ulixee/ulixee/commit/9dae5ce184989b3f311d14836a4ac584ad99672d))
* unify plugin structure ([6b9138d](https://github.com/ulixee/ulixee/commit/6b9138d890b6fb845af057fef4f390522614978f))
