const testThing = {
  id: `321`,
  great: false,
}

const chrome: any = {};

async function sendToContentScript<O, I extends any = any>(message: I): Promise<O> {
  return new Promise<O>(resolve => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
        resolve(response);
      });
    });
  });
}

function doSomething(shouldNotChangeObject) {
  shouldNotChangeObject.id = "54321";
  const somethingElse = shouldNotChangeObject[0].id;
}
