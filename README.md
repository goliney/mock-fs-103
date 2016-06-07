Representation of [mock-fs](https://github.com/tschaub/mock-fs) issue [#103](https://github.com/tschaub/mock-fs/issues/103):

Steps to reproduce:

```sh
git clone https://github.com/goliney/mock-fs-103.git
cd mock-fs-103
npm i
npm run test
```

You will see, that mocked directory can't be read.

Uncommenting of [this line](https://github.com/goliney/mock-fs-103/blob/master/A.spec.js#L2) solves a problem.