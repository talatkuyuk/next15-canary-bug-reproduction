# next15-canary-bug-reproduction

It is a bug reproduction for **`next@15.2.0-canary.57`** and still continues in `next@15.2.0-canary.70`.

It throws the error below in only development mode, not in production.

```bash
TypeError: Cannot read properties of undefined (reading 'stack')
    at stringify (<anonymous>)
    at stringify (<anonymous>) {
  digest: '3183793578'
}
```

No problem with the Next.js versions (tested)

- `next@15.1.7`
- `next@15.2.0-canary.0`
- `next@15.2.0-canary.10`
- `next@15.2.0-canary.20`
- `next@15.2.0-canary.30`
- `next@15.2.0-canary.40`
- `next@15.2.0-canary.50`
- `next@15.2.0-canary.56`

### Step to produce the error

`npm run dev`--> open browser and click to article (http://localhost:3000/article-import-component-mjs-mdx), and see the error in development mode.

`npm run build` and `npm run start` --> open browser and click the articles, see there is NO error in production mode.

```bash
npm i -S next@v15.2.0-canary.56
rm -rf .next && npm run dev
```

and see there is NO error in development and production modes.

Then,

```bash
npm i -S next@v15.2.0-canary.57
rm -rf .next && npm run dev
```

and see the TypeError in development mode.

### What is `next-mdx-remote-client`

It is a fork of **[`next-mdx-remote`](https://github.com/ipikuka/next-mdx-remote-client)**, having more features like supporting import statements in MDX.

It works well with all version of `next` for one year almost.

### Log in the console related with the error

I put it in the end because of long:

```bash
[Error] TypeError: Cannot read properties of undefined (reading 'stack')
resolveErrorDev
processFullStringRow
processFullBinaryRow
progress

The above error occurred in the <Unknown> component. It was handled by the <DevOverlayErrorBoundary> error boundary.
	onCaughtError (error-boundary-callbacks.js:53)
	logCaughtError (react-dom-client.development.js:8138)
	runWithFiberInDEV (react-dom-client.development.js:1474)
	(anonim işlev) (react-dom-client.development.js:8185)
	callCallback (react-dom-client.development.js:4841)
	commitCallbacks (react-dom-client.development.js:4861)
	runWithFiberInDEV (react-dom-client.development.js:1474)
	commitClassCallbacks (react-dom-client.development.js:11062)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12182)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12105)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12105)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12105)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12110)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12105)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12105)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12105)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12105)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12291)
	recursivelyTraverseLayoutEffects (react-dom-client.development.js:13296)
	commitLayoutEffectOnFiber (react-dom-client.development.js:12187)
	flushLayoutEffects (react-dom-client.development.js:17269)
	commitRoot (react-dom-client.development.js:17106)
	commitRootWhenReady (react-dom-client.development.js:16183)
	performWorkOnRoot (react-dom-client.development.js:16087)
	performWorkOnRootViaSchedulerTask (react-dom-client.development.js:17995)
	performWorkUntilDeadline (scheduler.development.js:36)
```
