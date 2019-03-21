* Look inside the `TestThings.ts` file and see that certain things are named `id`.

* Refactor (rename) using SHIFT + F6 the property name for `id` to (for example) `_key` in the interface `IRenameMyIdProperty` inside `src/some-interfaces/TestData.ts`

* Go back to `TestThings.ts` and see that :

```typescript jsx
chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
   resolve(response);
});
```

Has become 

```
chrome.tabs.sendMessage(tabs[0]._key, message, (response) => {
  resolve(response);
});
```

and 

```typescript jsx
const somethingElse = shouldNotChangeObject[0].id;
```

Has become:

```typescript jsx
const somethingElse = shouldNotChangeObject[0]._key;
```

These are completely unrelated properties to the original interface.